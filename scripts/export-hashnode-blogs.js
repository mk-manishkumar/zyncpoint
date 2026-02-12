import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const HASHNODE_API = "https://gql.hashnode.com";
const PUBLICATION_HOST = "manishmk.hashnode.dev";
const OUTPUT_DIR = path.join(process.cwd(), "blog-content");

// Configuration
const UPDATE_EXISTING = process.env.UPDATE_BLOGS === "true";
const POSTS_PER_PAGE = 50;

const query = `
query GetPublicationPosts($host: String!, $first: Int!, $after: String) {
  publication(host: $host) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          slug
          brief
          publishedAt
          content {
            markdown
          }
          coverImage {
            url
          }
        }
      }
    }
  }
}
`;

async function fetchBlogs() {
  let allPosts = [];
  let hasNextPage = true;
  let cursor = null;

  while (hasNextPage) {
    const res = await fetch(HASHNODE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: {
          host: PUBLICATION_HOST,
          first: POSTS_PER_PAGE,
          after: cursor,
        },
      }),
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const json = await res.json();

    if (json.errors) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);

    if (!json.data?.publication) throw new Error("Failed to fetch publication from Hashnode");

    const postsData = json.data.publication.posts;
    const posts = postsData.edges.map((edge) => edge.node);
    allPosts = allPosts.concat(posts);

    hasNextPage = postsData.pageInfo.hasNextPage;
    cursor = postsData.pageInfo.endCursor;

    if (process.env.NODE_ENV === "development") console.log(`Fetched ${posts.length} posts (Total: ${allPosts.length})`);
  }

  return allPosts;
}

function escapeForYAML(value = "") {
  if (!value) return "";
  // Escape quotes and newlines for YAML frontmatter
  return value
    .replaceAll("\\", String.raw`\\`)
    .replaceAll('"', String.raw`\"`)
    .replaceAll("\n", String.raw`\n`)
    .replaceAll("\r", String.raw`\r`);
}

function toMarkdownFile(post) {
  return `---
title: "${escapeForYAML(post.title)}"
slug: "${post.slug}"
excerpt: "${escapeForYAML(post.brief)}"
date: "${post.publishedAt}"
coverImage: "${post.coverImage?.url || ""}"
---

${post.content?.markdown?.trim() || ""}
`;
}

function getContentHash(content) {
  return crypto.createHash("md5").update(content).digest("hex");
}

async function exportBlogs() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const posts = await fetchBlogs();
  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  // Track current slugs for deletion detection
  const currentSlugs = new Set(posts.map((p) => p.slug));
  const existingFiles = fs
    .readdirSync(OUTPUT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.basename(f, ".md"));

  // Process each post
  posts.forEach((post) => {
    const filePath = path.join(OUTPUT_DIR, `${post.slug}.md`);
    const newContent = toMarkdownFile(post);
    const exists = fs.existsSync(filePath);

    if (exists) {
      if (UPDATE_EXISTING) {
        // Check if content actually changed
        const existingContent = fs.readFileSync(filePath, "utf8");
        const existingHash = getContentHash(existingContent);
        const newHash = getContentHash(newContent);

        if (existingHash === newHash) {
          skippedCount++;
        } else {
          fs.writeFileSync(filePath, newContent, "utf8");
          updatedCount++;
          if (process.env.NODE_ENV === "development") {
            console.log(`✏️  Updated: ${post.slug}.md`);
          }
        }
      } else {
        skippedCount++;
      }
    } else {
      // New file
      fs.writeFileSync(filePath, newContent, "utf8");
      createdCount++;
      if (process.env.NODE_ENV === "development") {
        console.log(`✅ Created: ${post.slug}.md`);
      }
    }
  });

  // Detect deleted posts (optional - only if UPDATE_EXISTING is true)
  let deletedCount = 0;
  if (UPDATE_EXISTING) {
    existingFiles.forEach((slug) => {
      if (currentSlugs.has(slug)) {
        return; // Post still exists, skip
      }
      const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
      fs.unlinkSync(filePath);
      deletedCount++;
      if (process.env.NODE_ENV === "development") {
        console.log(`🗑️  Deleted: ${slug}.md`);
      }
    });
  }

  // Summary
  console.log("\n📊 Export Summary:");
  console.log(`   Total posts fetched: ${posts.length}`);
  console.log(`   ✅ Created: ${createdCount}`);
  if (UPDATE_EXISTING) {
    console.log(`   ✏️  Updated: ${updatedCount}`);
    console.log(`   🗑️  Deleted: ${deletedCount}`);
  }
  console.log(`   ⏭️  Skipped (unchanged): ${skippedCount}`);
  console.log(`\n💡 Tip: Set UPDATE_BLOGS=true to update existing posts\n`);
}

try {
  await exportBlogs();
} catch (err) {
  console.error("❌ Export failed:", err.message);
  if (process.env.NODE_ENV === "development") {
    console.error(err);
  }
  process.exit(1);
}
