import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

/* ---------------------------------------------
   Markdown Renderers
---------------------------------------------- */

// Paragraph (FIX for spacing)
const MarkdownParagraph = (props: React.ComponentProps<"p">) => {
  const { children } = props;

  return (
    <p className="my-6 leading-relaxed text-text">
      {children}
    </p>
  );
};

// Image
const MarkdownImage = (props: React.ComponentProps<"img">) => {
  const { src, alt } = props;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={typeof src === "string" ? src : undefined} alt={alt} className="rounded-xl my-10 mx-auto max-w-full" />;
};

// Link
const MarkdownLink = (props: React.ComponentProps<"a">) => {
  const { href, children } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary-light transition-colors">
      {children}
    </a>
  );
};

// Blockquote
const MarkdownBlockquote = (props: React.ComponentProps<"blockquote">) => {
  const { children } = props;

  return <blockquote className="border-l-4 border-primary/50 pl-6 italic text-text-secondary my-8">{children}</blockquote>;
};

// Headings (proper spacing before & after)
const MarkdownH1 = (props: React.ComponentProps<"h1">) => <h1 className="mt-16 mb-8 text-3xl font-semibold text-text">{props.children}</h1>;

const MarkdownH2 = (props: React.ComponentProps<"h2">) => <h2 className="mt-14 mb-7 text-2xl font-semibold text-text">{props.children}</h2>;

const MarkdownH3 = (props: React.ComponentProps<"h3">) => <h3 className="mt-12 mb-6 text-xl font-semibold text-text">{props.children}</h3>;

const MarkdownH4 = (props: React.ComponentProps<"h4">) => <h4 className="mt-10 mb-5 text-lg font-semibold text-text">{props.children}</h4>;

// Ordered List
const MarkdownOl = (props: React.ComponentProps<"ol">) => {
  const { children } = props;

  return <ol className="list-decimal pl-6 my-8 space-y-4 text-text">{children}</ol>;
};

// List Item
const MarkdownLi = (props: React.ComponentProps<"li">) => {
  const { children } = props;

  return <li className="leading-relaxed">{children}</li>;
};

// Code (inline + block)
const MarkdownCode = (props: React.ComponentProps<"code">) => {
  const { className, children } = props;
  const isBlock = className?.includes("language-");

  // Inline code
  if (!isBlock) {
    return <code className="px-1.5 py-0.5 rounded bg-dark-secondary text-primary">{children}</code>;
  }

  // Block code (spacing before & after FIXED)
  return (
    <pre className="bg-dark-secondary rounded-xl p-6 overflow-x-auto my-10">
      <code className="text-sm leading-relaxed">{children}</code>
    </pre>
  );
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
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-14 leading-tight">{title}</h1>

        {/* Markdown Content */}
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
