"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

/* ---------------------------------------------
   Markdown Renderers
---------------------------------------------- */

const MarkdownParagraph = (props: React.ComponentProps<"p">) => <p className="my-6 leading-relaxed text-text">{props.children}</p>;

const MarkdownImage = (props: React.ComponentProps<"img">) => {
  const { src, alt } = props;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={typeof src === "string" ? src : undefined} alt={alt} className="rounded-xl my-10 mx-auto max-w-full" />;
};

const MarkdownLink = (props: React.ComponentProps<"a">) => {
  const { href, children } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-light transition-colors">
      {children}
    </a>
  );
};

const MarkdownBlockquote = (props: React.ComponentProps<"blockquote">) => <blockquote className="border-l-4 border-primary/50 pl-6 italic text-text-secondary my-8">{props.children}</blockquote>;

const MarkdownH1 = (props: React.ComponentProps<"h1">) => <h1 className="mt-16 mb-8 text-3xl font-semibold text-text">{props.children}</h1>;

const MarkdownH2 = (props: React.ComponentProps<"h2">) => <h2 className="mt-14 mb-7 text-2xl font-semibold text-text">{props.children}</h2>;

const MarkdownH3 = (props: React.ComponentProps<"h3">) => <h3 className="mt-12 mb-6 text-xl font-semibold text-text">{props.children}</h3>;

const MarkdownH4 = (props: React.ComponentProps<"h4">) => <h4 className="mt-10 mb-5 text-lg font-semibold text-text">{props.children}</h4>;

const MarkdownOl = (props: React.ComponentProps<"ol">) => <ol className="list-decimal pl-6 my-8 space-y-4 text-text">{props.children}</ol>;

const MarkdownLi = (props: React.ComponentProps<"li">) => <li className="leading-relaxed">{props.children}</li>;

/* ---------------------------------------------
   Code Block with Copy Button
---------------------------------------------- */

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // intentionally silent
    }
  };

  return (
    <div className="relative my-10">
      <button onClick={handleCopy} className="absolute right-4 top-4 cursor-pointer rounded-md border border-primary/30 bg-dark px-3 py-1 text-xs font-medium text-text hover:bg-primary/10 transition-colors">
        {copied ? "Copied" : "Copy"}
      </button>

      <pre className="bg-dark-secondary rounded-xl p-6 overflow-x-auto">
        <code className="text-sm leading-relaxed">{code}</code>
      </pre>
    </div>
  );
};

/* ---------------------------------------------
   Code Renderer
---------------------------------------------- */

const MarkdownCode = (props: React.ComponentProps<"code">) => {
  const { className, children } = props;
  const isBlock = className?.includes("language-");

  // Inline code
  if (!isBlock) {
    return <code className="px-1.5 py-0.5 rounded bg-dark-secondary text-primary">{children}</code>;
  }

  const code = typeof children === "string" ? children.trim() : "";

  return <CodeBlock code={code} />;
};

/* ---------------------------------------------
   Main Component
---------------------------------------------- */

type Props = {
  title: string;
  content: string;
};

const BlogContent = ({ title, content }: Props) => {
  return (
    <article className="px-6 py-20">
      <div className="max-w-175 mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-14 leading-tight">{title}</h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              p: MarkdownParagraph,
              img: MarkdownImage,
              a: MarkdownLink,
              blockquote: MarkdownBlockquote,
              code: MarkdownCode,
              h1: MarkdownH1,
              h2: MarkdownH2,
              h3: MarkdownH3,
              h4: MarkdownH4,
              ol: MarkdownOl,
              li: MarkdownLi,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogContent;
