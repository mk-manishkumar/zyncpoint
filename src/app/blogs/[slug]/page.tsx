import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import BlogContent from "./BlogContent";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

const BLOG_CONTENT_DIR = path.join(process.cwd(), "blog-content");

function getAllBlogs() {
  const files = fs.readdirSync(BLOG_CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(BLOG_CONTENT_DIR, file), "utf8");

      const fm = /---([\s\S]*?)---/.exec(raw)?.[1] ?? "";
      const content = raw
        .replace(/---([\s\S]*?)---/, "")
        .replaceAll(/\s+align="(left|right|center)"/g, "")
        .trim();

      const title = /title:\s*"(.*)"/.exec(fm)?.[1] ?? "Untitled";

      return { slug, title, content };
    });
}

export function generateStaticParams() {
  const files = fs.readdirSync(BLOG_CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

const BlogDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const blogs = getAllBlogs();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return <BlogContent title={blog.title} content={blog.content} />;
};

export default BlogDetailPage;
