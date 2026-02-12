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
          updatedAt
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
  // Use updatedAt if available, otherwise fall back to publishedAt
  const date = post.updatedAt || post.publishedAt;

  return `---
title: "${escapeForYAML(post.title)}"
slug: "${post.slug}"
excerpt: "${escapeForYAML(post.brief)}"
date: "${date}"
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

  // Create backup if updating existing files
  if (UPDATE_EXISTING) {
    const backupDir = path.join(OUTPUT_DIR, ".backup");
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

    const existingFiles = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".md"));
    if (existingFiles.length > 0) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const backupFolder = path.join(backupDir, timestamp);
      fs.mkdirSync(backupFolder, { recursive: true });

      existingFiles.forEach((file) => {
        fs.copyFileSync(path.join(OUTPUT_DIR, file), path.join(backupFolder, file));
      });
      console.log(`\n💾 Backup created: ${backupFolder}`);
    }
  }

  const posts = await fetchBlogs();

  console.log(`\n🔍 Fetch Info:`);
  console.log(`   Total posts from API: ${posts.length}`);
  if (posts.length > 0) {
    // Sort by date to show latest
    const sortedByDate = [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    console.log(`   Latest post: "${sortedByDate[0].title}"`);
    console.log(`   Published: ${sortedByDate[0].publishedAt}`);
  }

  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  // Track current slugs
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
        // ALWAYS overwrite to ensure fresh content
        const existingContent = fs.readFileSync(filePath, "utf8");
        const existingHash = getContentHash(existingContent);
        const newHash = getContentHash(newContent);

        fs.writeFileSync(filePath, newContent, "utf8");

        if (existingHash === newHash) {
          skippedCount++;
        } else {
          updatedCount++;
          console.log(`✏️  Updated: ${post.slug}.md`);
        }
      } else {
        skippedCount++;
      }
    } else {
      // New file
      fs.writeFileSync(filePath, newContent, "utf8");
      createdCount++;
      console.log(`✅ Created: ${post.slug}.md`);
    }
  });

  // Check for orphaned files (don't auto-delete)
  const orphanedFiles = existingFiles.filter((slug) => !currentSlugs.has(slug));
  if (orphanedFiles.length > 0 && UPDATE_EXISTING) {
    console.log(`\n⚠️  Warning: ${orphanedFiles.length} local file(s) not found in API:`);
    orphanedFiles.forEach((slug) => {
      console.log(`   - ${slug}.md (kept locally, not deleted)`);
    });
  }

  // Summary
  console.log("\n📊 Export Summary:");
  console.log(`   Total posts fetched: ${posts.length}`);
  console.log(`   ✅ Created: ${createdCount}`);
  if (UPDATE_EXISTING) {
    console.log(`   ✏️  Updated: ${updatedCount}`);
    console.log(`   ⏭️  Refreshed (unchanged): ${skippedCount}`);
  } else {
    console.log(`   ⏭️  Skipped (existing): ${skippedCount}`);
  }

  if (!UPDATE_EXISTING) {
    console.log(`\n💡 Tip: Set UPDATE_BLOGS=true to update existing posts`);
  }
  console.log();
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
