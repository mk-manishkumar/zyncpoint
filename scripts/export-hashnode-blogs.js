import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const HASHNODE_API = "https://gql.hashnode.com";
const PUBLICATION_HOST = "manishmk.hashnode.dev";
const OUTPUT_DIR = path.join(process.cwd(), "blog-content");
const POSTS_PER_PAGE = 50;

// Comprehensive GraphQL query to fetch all blog details
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
          id
          title
          slug
          brief
          content {
            markdown
            html
          }
          publishedAt
          updatedAt
          url
          coverImage {
            url
            attribution
          }
          author {
            name
            username
            profilePicture
          }
          tags {
            id
            name
            slug
          }
          readTimeInMinutes
          reactionCount
          responseCount
          views
          seo {
            title
            description
          }
          ogMetaData {
            image
          }
          series {
            name
            slug
          }
          canonicalUrl
          subtitle
        }
      }
    }
  }
}
`;

/**
 * Fetch all blogs from Hashnode with pagination
 */
async function fetchBlogs() {
  let allPosts = [];
  let hasNextPage = true;
  let cursor = null;
  let pageCount = 0;

  console.log("🚀 Starting to fetch blogs from Hashnode...\n");

  while (hasNextPage) {
    pageCount++;
    console.log(`📄 Fetching page ${pageCount}...`);

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

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();

    if (json.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
    }

    if (!json.data?.publication) {
      throw new Error("Failed to fetch publication from Hashnode");
    }

    const postsData = json.data.publication.posts;
    const posts = postsData.edges.map((edge) => edge.node);

    console.log(`   ✓ Fetched ${posts.length} posts`);
    allPosts = allPosts.concat(posts);

    hasNextPage = postsData.pageInfo.hasNextPage;
    cursor = postsData.pageInfo.endCursor;
  }

  console.log(`\n✅ Total blogs fetched: ${allPosts.length}\n`);
  return allPosts;
}

/**
 * Escape special characters for YAML frontmatter
 */
function escapeForYAML(value = "") {
  if (!value) return "";
  return value
    .replaceAll("\\", String.raw`\\`)
    .replaceAll('"', String.raw`\"`)
    .replaceAll("\n", String.raw`\n`)
    .replaceAll("\r", String.raw`\r`);
}

/**
 * Convert blog post to markdown file with comprehensive frontmatter
 */
function toMarkdownFile(post) {
  const date = post.updatedAt || post.publishedAt;
  const tags = post.tags?.map((tag) => tag.name).join(", ") || "";
  const tagSlugs = post.tags?.map((tag) => tag.slug).join(", ") || "";

  // Build frontmatter with all available fields
  let frontmatter = `---
title: "${escapeForYAML(post.title)}"
slug: "${post.slug}"
excerpt: "${escapeForYAML(post.brief)}"
tags: "${tags}"
tagSlugs: "${tagSlugs}"
date: "${date}"
publishedAt: "${post.publishedAt}"
updatedAt: "${post.updatedAt || post.publishedAt}"
coverImage: "${post.coverImage?.url || ""}"`;

  // Add optional fields if available
  if (post.subtitle) {
    frontmatter += `\nsubtitle: "${escapeForYAML(post.subtitle)}"`;
  }

  if (post.url) {
    frontmatter += `\nurl: "${post.url}"`;
  }

  if (post.canonicalUrl) {
    frontmatter += `\ncanonicalUrl: "${post.canonicalUrl}"`;
  }

  if (post.author) {
    frontmatter += `\nauthor: "${post.author.name}"`;
    frontmatter += `\nauthorUsername: "${post.author.username}"`;
    if (post.author.profilePicture) {
      frontmatter += `\nauthorProfilePicture: "${post.author.profilePicture}"`;
    }
  }

  if (post.readTimeInMinutes) {
    frontmatter += `\nreadTimeInMinutes: ${post.readTimeInMinutes}`;
  }

  if (post.reactionCount !== undefined) {
    frontmatter += `\nreactionCount: ${post.reactionCount}`;
  }

  if (post.responseCount !== undefined) {
    frontmatter += `\nresponseCount: ${post.responseCount}`;
  }

  if (post.views !== undefined) {
    frontmatter += `\nviews: ${post.views}`;
  }

  if (post.series) {
    frontmatter += `\nseriesName: "${escapeForYAML(post.series.name)}"`;
    frontmatter += `\nseriesSlug: "${post.series.slug}"`;
  }

  if (post.seo?.title) {
    frontmatter += `\nseoTitle: "${escapeForYAML(post.seo.title)}"`;
  }

  if (post.seo?.description) {
    frontmatter += `\nseoDescription: "${escapeForYAML(post.seo.description)}"`;
  }

  if (post.ogMetaData?.image) {
    frontmatter += `\nogImage: "${post.ogMetaData.image}"`;
  }

  if (post.coverImage?.attribution) {
    frontmatter += `\ncoverImageAttribution: "${escapeForYAML(post.coverImage.attribution)}"`;
  }

  frontmatter += `\nhashnodeId: "${post.id}"`;
  frontmatter += `\n---\n\n`;

  // Add the markdown content
  const content = post.content?.markdown?.trim() || "";

  return frontmatter + content + "\n";
}

/**
 * Generate MD5 hash of content for comparison
 */
function getContentHash(content) {
  return crypto.createHash("md5").update(content).digest("hex");
}

/**
 * Main export function
 */
async function exportBlogs() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
      console.log(`📁 Created directory: ${OUTPUT_DIR}\n`);
    }

    // Fetch all blogs from Hashnode
    const posts = await fetchBlogs();

    if (posts.length === 0) {
      console.log("⚠️  No posts found!");
      return;
    }

    let createdCount = 0;
    let updatedCount = 0;
    let unchangedCount = 0;

    console.log("💾 Writing blog files...\n");

    // Process each post
    for (const post of posts) {
      const filePath = path.join(OUTPUT_DIR, `${post.slug}.md`);
      const newContent = toMarkdownFile(post);
      const exists = fs.existsSync(filePath);

      if (exists) {
        // Check if content has changed
        const existingContent = fs.readFileSync(filePath, "utf8");
        const existingHash = getContentHash(existingContent);
        const newHash = getContentHash(newContent);

        if (existingHash !== newHash) {
          fs.writeFileSync(filePath, newContent, "utf8");
          updatedCount++;
          console.log(`✏️  Updated: ${post.slug}.md`);
        } else {
          unchangedCount++;
        }
      } else {
        // Create new file
        fs.writeFileSync(filePath, newContent, "utf8");
        createdCount++;
        console.log(`✅ Created: ${post.slug}.md`);
      }
    }

    // Summary
    console.log("\n" + "=".repeat(50));
    console.log("📊 Export Summary:");
    console.log("=".repeat(50));
    console.log(`   Total posts fetched: ${posts.length}`);
    console.log(`   ✅ Created: ${createdCount}`);
    console.log(`   ✏️  Updated: ${updatedCount}`);
    console.log(`   ⏭️  Unchanged: ${unchangedCount}`);
    console.log("=".repeat(50) + "\n");

    console.log("✨ Blog export completed successfully!\n");
  } catch (err) {
    console.error("\n❌ Export failed:", err.message);
    if (process.env.NODE_ENV === "development") {
      console.error(err);
    }
    process.exit(1);
  }
}

// Run the export
try {
  await exportBlogs();
} catch (err) {
  console.error("❌ Export failed:", err.message);
  if (process.env.NODE_ENV === "development") {
    console.error(err);
  }
  process.exit(1);
}
