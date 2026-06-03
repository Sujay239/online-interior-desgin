import { useEffect, useState } from "react";
import { blogService } from "@/services/blogService";
import type { BlogPost } from "@/types/blog";
import { BlogCard } from "@/components/shared/BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TipsAndGuidesSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTipsAndGuides = async () => {
      try {
        const response = await blogService.getPosts(1, 100);
        // Filter specifically for "Tips & Guides" category
        const tipsPosts = response.data.filter(
          (post) => post.category.slug === "tips-and-guides"
        );
        // Sort descending by publish date
        const sortedTips = tipsPosts.sort(
          (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
        setPosts(sortedTips);
      } catch (error) {
        console.error("Failed to load Tips & Guides", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTipsAndGuides();
  }, []);

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4 max-w-2xl mx-auto mb-16">
            <div className="h-10 bg-muted/40 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-muted/40 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-muted/40 rounded w-2/3 mx-auto"></div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-muted/40 h-[350px] w-full max-w-[350px] rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-normal mb-6">
            Tips & Guides
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Embark on a journey of inspirations with our comprehensive interior design tips and guides.
            Gain invaluable insight and expert advice, helping you transform your home into a true design masterpiece.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {posts.map((post) => (
                <CarouselItem key={post.id} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 pt-4 pb-8">
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-background border border-border shadow-sm hover:border-gold hover:text-gold transition-all" />
            <CarouselNext className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-background border border-border shadow-sm hover:border-gold hover:text-gold transition-all" />
          
          </Carousel>
        </div>
      </div>
    </section>
  );
}
