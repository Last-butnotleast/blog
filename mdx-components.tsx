import type { MDXComponents } from "mdx/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4 text-foreground"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight mt-10 mb-4 text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4 text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3 text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="leading-7 not-first:mt-6 text-foreground" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mt-6 border-l-4 border-border pl-6 italic text-muted-foreground *:text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const isInline = !match;

    if (isInline) {
      return (
        <code
          className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <SyntaxHighlighter
        style={oneLight} // Change to oneLight for light theme or use a theme switcher
        language={match[1]}
        PreTag="div"
        className="rounded-lg text-sm"
        customStyle={{
          margin: 0,
          padding: "1rem",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  },
  pre: ({ children, ...props }: any) => (
    <div className="mb-4 mt-6 overflow-x-auto rounded-lg" {...props}>
      {children}
    </div>
  ),
  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
  table: ({ children, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-border px-4 py-2 text-left font-bold bg-muted [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="border border-border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    >
      {children}
    </td>
  ),
  tr: ({ children, ...props }) => (
    <tr className="even:bg-muted/50" {...props}>
      {children}
    </tr>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
