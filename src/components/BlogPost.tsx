import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post } from "@/data/posts";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import rust from "react-syntax-highlighter/dist/esm/languages/prism/rust";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("rust", rust);

export default function BlogPost({ post }: { post: Post }) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{post.date}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {post.content.map((block, i) => {
          if (block.type === "heading") {
            return (
              <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">
                {block.text}
              </h2>
            );
          } else if (block.type === "code") {
            return (
              <SyntaxHighlighter
                key={i}
                language="rust"
                className="rounded-lg"
                style={prism}
              >
                {block.text}
              </SyntaxHighlighter>
            );
          } else {
            return (
              <p key={i} className="text-base leading-7 text-foreground/90">
                {block.text}
              </p>
            );
          }
        })}
      </CardContent>
    </Card>
  );
}
