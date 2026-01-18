import fs from "node:fs";
import path from "node:path";
import BlogsClient from "./BlogsClient";
import type { BlogMeta } from "./types";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "blog-content");

const getBlogMeta = (): BlogMeta[] => {
  const files = fs.readdirSync(BLOG_CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const content = fs.readFileSync(path.join(BLOG_CONTENT_DIR, file), "utf8");

      const fm = /---([\s\S]*?)---/.exec(content)?.[1] ?? "";

      const title = /title:\s*"(.*)"/.exec(fm)?.[1] ?? "Untitled";

      const coverImage = /coverImage:\s*"(.*)"/.exec(fm)?.[1];

      const date = /date:\s*"(.*)"/.exec(fm)?.[1] ?? "";

      const tagsMatch = /tags:\s*\[(.*)\]/.exec(fm)?.[1];

      const tags = tagsMatch ? tagsMatch.split(",").map((t) => t.trim().replace(/^"(.*)"$/, "$1")) : [];

      return { slug, title, coverImage, date, tags };
    });
};

const BlogPage = () => {
  const blogs = getBlogMeta();
  return <BlogsClient blogs={blogs} />;
};

export default BlogPage;
