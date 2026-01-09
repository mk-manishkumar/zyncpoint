import fs from "node:fs";
import path from "node:path";

const HASHNODE_API = "https://gql.hashnode.com";

const PUBLICATION_HOST = "manishmk.hashnode.dev";

const OUTPUT_DIR = path.join(process.cwd(), "blog-content");

const query = `
query GetPublicationPosts($host: String!) {
  publication(host: $host) {
    posts(first: 50) {
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
  const res = await fetch(HASHNODE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { host: PUBLICATION_HOST },
    }),
  });

  const json = await res.json();

  if (!json.data?.publication) {
    throw new Error("Failed to fetch publication from Hashnode");
  }

  return json.data.publication.posts.edges.map((edge) => edge.node);
}

function escapeQuotes(value = "") {
  return value.replace(/"/g, '\\"');
}

function toMarkdownFile(post) {
  return `---
title: "${escapeQuotes(post.title)}"
slug: "${post.slug}"
excerpt: "${escapeQuotes(post.brief)}"
date: "${post.publishedAt}"
coverImage: "${post.coverImage?.url || ""}"
---

${post.content.markdown.trim()}
`;
}

async function exportBlogs() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const posts = await fetchBlogs();

  posts.forEach((post) => {
    const filePath = path.join(OUTPUT_DIR, `${post.slug}.md`);
    const content = toMarkdownFile(post);

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✔ Exported: ${post.slug}.md`);
  });

  console.log(`\n✅ Exported ${posts.length} blogs to /blog-content`);
}

try {
  await exportBlogs();
} catch (err) {
  console.error("❌ Export failed:", err.message);
}
