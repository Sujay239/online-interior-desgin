import { useEffect, useState } from "react";
import { blogService } from "@/services/blogService";
import type { BlogPost } from "@/types/blog";
import { BlogCard } from "@/components/shared/BlogCard";

export function RecentStories() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await blogService.getPosts(1, 100);
        // Sort posts descending by publishDate
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
        // Take top 6
        setPosts(sortedPosts.slice(0, 6));
      } catch (error) {
        console.error("Failed to load blog posts", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="container mx-auto px-4 mb-24">
      <div className="mb-10 text-center md:text-left">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium">Recent Stories</h2>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-muted/40 h-[400px] rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
