import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BlurImage } from "@/components/shared/BlurImage";

const projects = [
  {
    id: 1,
    title: "Modern Coastal Living Room and Bedroom Makeover",
    beforeImage: "/images/unsplash/1586023492125-27b2c045efd7.webp",
    afterImage: "/images/unsplash/1618221195710-dd6b41faaea6.webp",
    challenge: "We would like a more minimal look with Feng Shui and natural elements that highlight our beautiful green view.",
    result: "We got the relaxing dream home we always wanted. Wanda was fun to work with and paid attention to every single detail.",
    author: "Kris",
    link: "/portfolio/project-1"
  },
  {
    id: 2,
    title: "Urban Industrial Loft Transformation",
    beforeImage: "/images/unsplash/1513694203232-719a280e022f.webp",
    afterImage: "/images/unsplash/1600210492486-724fe5c67fb0.webp",
    challenge: "Our loft felt cold and empty. We wanted to add warmth and define separate zones without losing the open concept.",
    result: "The design team perfectly balanced industrial elements with cozy textures. It feels like a completely new home.",
    author: "Sarah",
    link: "/portfolio/project-2"
  }
];

export function ProjectShowcaseSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div>
                  {/* Header (Left Aligned as per screenshot) */}
                  <div className="mb-12 animate-fade-in-up">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                      {project.title}
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Tabs for Before/After */}
                    <div className="w-full">
                      <Tabs defaultValue="after" className="w-full">


                        <div className="rounded-xl overflow-hidden border border-border bg-muted touch-pan-y aspect-4/3 relative">
                          {/* Overlay Tabs */}
                          <TabsList className="absolute top-2 left-2 z-20 flex bg-background/95 backdrop-blur-sm rounded-md p-1 border border-border/20 shadow-sm">
                            <TabsTrigger
                              value="before"
                              className="rounded-sm px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground bg-transparent w-auto h-auto border-none"
                            >
                              Before
                            </TabsTrigger>
                            <TabsTrigger
                              value="after"
                              className="rounded-sm px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase transition-all data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground bg-transparent w-auto h-auto border-none"
                            >
                              After
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="before" className="mt-0 w-full h-full">
                            <BlurImage
                              src={project.beforeImage}
                              alt={`Before - ${project.title}`}
                              ratio={4 / 3}
                              className="brightness-90"
                            />
                          </TabsContent>
                          <TabsContent value="after" className="mt-0 ">
                            <BlurImage
                              src={project.afterImage}
                              alt={`After - ${project.title}`}
                              ratio={4 / 3}
                            />
                          </TabsContent>
                        </div>
                      </Tabs>
                    </div>

                    {/* Right Column: Project Details */}
                    <div className="flex flex-col justify-center space-y-8 lg:pt-8 text-left">

                      {/* Challenge */}
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-3">
                          Client's Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-light">
                          {project.challenge}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-3">
                          Result
                        </h3>
                        <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                          "{project.result}"
                        </blockquote>
                        <p className="text-sm font-medium text-muted-foreground mb-4">
                          - {project.author}
                        </p>

                        {/* Rating */}
                        <div className="flex gap-1 text-gold-dark">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Link
                          to={project.link}
                          className="inline-flex items-center text-gold-dark hover:text-gold-dark/80 font-bold text-sm tracking-[0.15em] uppercase border-b-2 border-gold pb-1 transition-colors"
                        >
                          View More Details
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <div className="hidden md:block">
            <CarouselPrevious aria-label="Previous project" className="-left-12 border-border hover:border-gold hover:text-gold transition-colors" />
            <CarouselNext aria-label="Next project" className="-right-12 border-border hover:border-gold hover:text-gold transition-colors" />
          </div>

          {/* Mobile Navigation (Centered below) */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <CarouselPrevious aria-label="Previous project" className="static translate-y-0 border-border hover:border-gold hover:text-gold transition-colors" />
            <CarouselNext aria-label="Next project" className="static translate-y-0 border-border hover:border-gold hover:text-gold transition-colors" />
          </div>

        </Carousel>

      </div>
    </section>
  );
}
