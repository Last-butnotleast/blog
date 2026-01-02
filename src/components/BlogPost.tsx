import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post } from "@/data/posts";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{post.date}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {post.content.map((block, i) =>
          block.type === "heading" ? (
            <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">
              {block.text}
            </h2>
          ) : (
            <p key={i} className="text-base leading-7 text-foreground/90">
              {block.text}
            </p>
          )
        )}
      </CardContent>
    </Card>
  );
}
