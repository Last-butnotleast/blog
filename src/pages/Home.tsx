import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/data/posts";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Learning Bevy & Rust - A blog about game development and programming"
      />
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <Card className="hover:bg-accent transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
