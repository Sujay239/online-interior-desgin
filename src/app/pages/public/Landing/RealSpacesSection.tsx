import * as React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { BlurImage } from "@/components/shared/BlurImage";

const categories = [
  "LIVING ROOM",
  "DINING ROOM",
  "COMBINED LIVING/DINING",
  "BEDROOM",
  "BATHROOM",
  "OFFICE",
  "KITCHEN"
];

// Expanded Data with 5+ items per category
const categoryImages = {
  "LIVING ROOM": [
    "/images/unsplash/1618221195710-dd6b41faaea6.webp",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1616137466211-f939a420be84.webp",
    "https://images.unsplash.com/photo-1616047006789-b7af5afb4c2e?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1567016432779-094069958ea5.webp"
  ],
  "DINING ROOM": [
    "/images/unsplash/1617806118233-18e1de247200.webp",
    "/images/unsplash/1615529182904-14819c35db37.webp",
    "/images/unsplash/1595515106969-1ce29566ff1c.webp",
    "/images/unsplash/1565538810643-b5bdb714032a.webp",
    "https://images.unsplash.com/photo-1576158189578-18e3881ca768?auto=format&fit=crop&q=80&w=1200"
  ],
  "COMBINED LIVING/DINING": [
    "/images/unsplash/1600210492486-724fe5c67fb0.webp",
    "/images/unsplash/1560448204-e02f11c3d0e2.webp",
    "/images/unsplash/1583847268964-b28dc8f51f92.webp",
    "https://images.unsplash.com/photo-1560185127-6a6a6d63c411?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1564078516393-cf04bd966897.webp"
  ],
  "BEDROOM": [
    "https://images.unsplash.com/photo-1616594039964-40891a90969d?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1617325247661-675ab4b64ae2.webp",
    "/images/unsplash/1595526114035-0d45ed16cfbf.webp",
    "/images/unsplash/1560662105-57f8ad6ae2d1.webp",
    "https://images.unsplash.com/photo-1522771753035-4848230d3f63?auto=format&fit=crop&q=80&w=1200"
  ],
  "BATHROOM": [
    "/images/unsplash/1552321554-5fefe8c9ef14.webp",
    "/images/unsplash/1584622650111-993a426fbf0a.webp",
    "https://images.unsplash.com/photo-1564540580234-a129df627fa7?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1620626011761-996317b8d101.webp",
    "https://images.unsplash.com/photo-1507652313519-d47f18056943?auto=format&fit=crop&q=80&w=1200"
  ],
  "OFFICE": [
    "/images/unsplash/1593642532400-2682810df593.webp",
    "/images/unsplash/1518455027359-f3f8164ba6bd.webp",
    "/images/unsplash/1524758631624-e2822e304c36.webp",
    "/images/unsplash/1497215728101-856f4ea42174.webp",
    "/images/unsplash/1497366216548-37526070297c.webp"
  ],
  "KITCHEN": [
    "/images/unsplash/1556911220-e15b29be8c8f.webp",
    "/images/unsplash/1556909212-d5b604d0c90d.webp",
    "https://images.unsplash.com/photo-1565183928294-7063f23ce83c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1588854337473-b96038194f43?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1556185781-a47769abb7af?auto=format&fit=crop&q=80&w=1200"
  ],
  "HALLWAY": [
    "/images/unsplash/1513161455079-7dc1de15ef3e.webp",
    "https://images.unsplash.com/photo-1484154218962-a1c19b755a53?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1505691938895-1758d7feb511.webp",
    "https://images.unsplash.com/photo-1595514020148-520c15147596?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1549400262-e64e56994119?auto=format&fit=crop&q=80&w=1200"
  ],
  "KIDS": [
    "https://images.unsplash.com/photo-1596464716127-f9a8659bcecd?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1513694203232-719a280e022f.webp",
    "https://images.unsplash.com/photo-1519326978909-51000b21a719?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1592676720230-6752763321db?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1597371501726-103328ce78ae?auto=format&fit=crop&q=80&w=1200"
  ],
  "OUTDOOR": [
    "/images/unsplash/1560067174-c5a3a8f37060.webp",
    "/images/unsplash/1562663474-6cbb3eaa4d14.webp",
    "https://images.unsplash.com/photo-1592737526976-13a693b22cfd?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1583608205776-bfd35f0d9f83.webp",
    "/images/unsplash/1592194996308-7b43878e84a6.webp"
  ],
  "BUSINESS": [
    "/images/unsplash/1497366811353-6870744d04b2.webp",
    "/images/unsplash/1504917595217-d4dc5ebe6122.webp",
    "/images/unsplash/1577412647305-991150c7d163.webp",
    "https://images.unsplash.com/photo-1497215842964-222b4bef9726?auto=format&fit=crop&q=80&w=1200",
    "/images/unsplash/1519642918688-7e43b19245d8.webp"
  ],
  "OTHER": [
    "/images/unsplash/1513519245088-0e12902e5a38.webp",
    "/images/unsplash/1585128719715-46776b56a0d1.webp",
    "https://images.unsplash.com/photo-1599696841755-6677f502c38d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1479839672679-a461b3c056c8?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1549400262-b9ae88566276?auto=format&fit=crop&q=80&w=1200"
  ]
};

const slugify = (text: string) => text.toLowerCase().replace(/[\s/]+/g, '-');

export function RealSpacesSection() {
  // We need distinct state/apis for each tabs content if we want to preserve state, 
  // but simpler is to rely on Shadcn Tabs to unmount/mount content or just have one API that updates.
  // However, mapping unique content requires re-initialization.
  // We will simply let the Carousel component re-mount or re-init when props change.

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Update dots when carousel API is available
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-24 bg-background overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scrollbar due to full width */}
      <div className="container mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-12 animate-fade-in-up">
          Explore Real Spaces We've Transformed
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
            const images = categoryImages[category as keyof typeof categoryImages] || categoryImages["LIVING ROOM"];

            return (
              <TabsContent key={category} value={slugify(category)} className="mt-0 w-full">
                {/* Full Width Carousel Container */}
                <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw]">
                  <Carousel
                    setApi={setApi}
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                    className="w-full relative group"
                  >
                    <CarouselContent className="-ml-4">
                      {images.map((src, index) => (
                        <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                          <div className="group-hover:cursor-pointer">
                            <BlurImage
                              src={src}
                              alt={`${category} Project ${index + 1}`}
                              ratio={1 / 1}
                              className="hover:scale-105"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Navigation Arrows - customized positioning */}
                    <CarouselPrevious aria-label="Previous image" className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground border-none w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto flex" />
                    <CarouselNext aria-label="Next image" className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground border-none w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto flex" />

                  </Carousel>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className="w-12 h-12 flex items-center justify-center group"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          current === index ? "bg-foreground scale-125" : "bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                        )}
                      />
                    </button>
                  ))}
                </div>

              </TabsContent>
            );
          })}
        </Tabs>

        {/* View Portfolio Button */}
        <div className="mt-12">
          <Link to="/portfolio">
            <Button variant="gold" size="lg" className="px-12 py-6 text-sm">
              View Portfolio
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
