import * as React from "react";
import { blogService } from "@/services/blogService";
import type { BlogPost } from "@/types/blog";
import { BlogCard } from "@/components/shared/BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  "Full Home",
  "Offices",
  "Living & Dining",
  "Bedrooms",
  "Kitchen & Bath"
];

const slugify = (text: string) => text.toLowerCase().replace(/[\s/&]+/g, '-');

export function CategoryTabsSection() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        // Fetch all categorized mock posts
        const response = await blogService.getPosts(1, 100);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to load blog posts for tabs", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPosts();
  }, []);



  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4 max-w-2xl mx-auto mb-16">
            <div className="h-10 bg-muted/40 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="flex justify-center gap-8 mb-12">
             <div className="h-6 bg-muted/40 rounded w-24"></div>
             <div className="h-6 bg-muted/40 rounded w-24"></div>
             <div className="h-6 bg-muted/40 rounded w-24"></div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-muted/40 h-[450px] w-full max-w-[350px] rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If no posts are available at all, don't render the section
  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-background overflow-x-hidden"> 
      <div className="container mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-12 animate-fade-in-up">
          Real Before & After Stories
        </h2>

        {/* Categories / Tabs */}
        <Tabs defaultValue={slugify(categories[0])} className="w-full mb-12">
          <TabsList variant="line" className="bg-transparent flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-x-8 mb-12 border-b-0 w-screen relative left-1/2 right-1/2 -ml-[50vw] h-auto no-scrollbar scroll-smooth px-4 md:px-12">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={slugify(category)}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-gold-dark data-[state=active]:bg-transparent! data-[state=active]:shadow-none! text-muted-foreground/70 font-bold tracking-[0.15em] text-xs uppercase bg-transparent shadow-none hover:text-gold-dark transition-all px-1 pb-1 shrink-0"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content for each tab */}
          {categories.map((category) => {
            // Filter posts that include this specific category in their tags.
            // Notice we match against the `BlogTag.name` which aligns with the categories array string values.
            const filteredPosts = posts.filter(post => 
              post.tags.some(tag => tag.name === category)
            );

            // Hide the tab content if no posts match this category to prevent an empty carousel
            if (filteredPosts.length === 0) return null;

            return (
              <TabsContent key={category} value={slugify(category)} className="mt-0 w-full">
                {/* Full Width Carousel Container */}
                <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] text-left">
                  <Carousel
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                    className="w-full relative"
                  >
                    <CarouselContent className="-ml-6">
                      {filteredPosts.map((post) => (
                        <CarouselItem key={post.id} className="pl-6 basis-[85%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pt-4 pb-8">
                           <div className="h-full group-hover:cursor-pointer transition-transform duration-300">
                               <BlogCard post={post} />
                           </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Navigation Arrows - customized positioning similar to RealSpacesSection */}
                    <CarouselPrevious aria-label="Previous image" className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground border-none w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg transition-opacity duration-300 pointer-events-auto flex" />
                    <CarouselNext aria-label="Next image" className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground border-none w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg transition-opacity duration-300 pointer-events-auto flex" />

                  </Carousel>
                </div>


                
              </TabsContent>
            );
          })}
        </Tabs>

      </div>
    </section>
  );
}
