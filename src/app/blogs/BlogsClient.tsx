"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { BlogMeta } from "./types";

type Props = {
  blogs: BlogMeta[];
};

const BlogsClient = ({ blogs }: Props) => {
  return (
    <section className="px-6 py-20 relative overflow-hidden">
      <div className="max-w-350 mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            Blogs
          </motion.h1>

          <motion.p className="mt-4 text-text-secondary text-base md:text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}>
            Insights, deep-dives, and engineering lessons from ZyncPoint.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => {
            const primaryTag = blog.tags?.[0];

            return (
              <motion.div key={blog.slug} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.08 }}>
                <Link href={`/blogs/${blog.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-[rgba(50,184,198,0.15)] bg-dark-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Cover */}
                  <div className="relative aspect-video bg-dark overflow-hidden">{blog.coverImage ? <Image src={blog.coverImage} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center text-text-secondary text-sm">No cover image</div>}</div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Tag */}
                    {primaryTag && <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">{primaryTag}</span>}

                    {/* Title */}
                    <h2 className="mb-1 text-lg font-semibold leading-snug text-text transition-colors duration-300 group-hover:text-primary [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">{blog.title}</h2>

                    {/* Date */}
                    <time dateTime={blog.date} className="text-xs text-text-secondary">
                      {new Date(blog.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                    </time>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogsClient;
