import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import BlogContent from "./BlogContent";

/**
 * Page props type for dynamic blog routes.
 * `params` is async because App Router may resolve it lazily.
 */
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * Disable dynamic fallback routes.
 * Only slugs returned from generateStaticParams are allowed.
 */
export const dynamicParams = false;

/**
 * Absolute path to the directory where markdown blogs are stored.
 */
const BLOG_CONTENT_DIR = path.join(process.cwd(), "blog-content");

/**
 * Reads all markdown files and extracts:
 * - slug (from filename)
 * - title (from frontmatter)
 * - content (markdown body)
 */
function getAllBlogs() {
  const files = fs.readdirSync(BLOG_CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(BLOG_CONTENT_DIR, file), "utf8");

      // Extract frontmatter block
      const fm = /---([\s\S]*?)---/.exec(raw)?.[1] ?? "";

      // Remove frontmatter and unsupported align attributes
      const content = raw
        .replace(/---([\s\S]*?)---/, "")
        .replaceAll(/\s+align="(left|right|center)"/g, "")
        .trim();

      // Extract title from frontmatter
      const title = /title:\s*"(.*)"/.exec(fm)?.[1] ?? "Untitled";

      return { slug, title, content };
    });
}

/**
 * Generates all valid blog slugs at build time
 * so Next.js can statically generate each page.
 */
export function generateStaticParams() {
  const files = fs.readdirSync(BLOG_CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

/**
 * Dynamically sets the page title for each blog page.
 * This runs separately from the page render.
 */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blogs = getAllBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  return {
    title: blog ? `${blog.title} | ZyncPoint` : "Blog | ZyncPoint",
  };
}

/**
 * Blog detail page renderer.
 * Finds the matching blog by slug and renders markdown content.
 */
const BlogDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const blogs = getAllBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return <BlogContent title={blog.title} content={blog.content} />;
};

export default BlogDetailPage;
