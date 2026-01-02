import { useParams, Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { posts } from "@/data/posts";
import SEO from "@/components/SEO";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <div className="text-center">Post not found</div>;

  return (
    <>
      <SEO title={post.title} description={post.excerpt} type="article" />
      <div className="space-y-6">
        <Link to="/" className="text-primary hover:underline">
          ← Back to all posts
        </Link>
        <BlogPost post={post} />
      </div>
    </>
  );
}
