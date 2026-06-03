import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { BlurImage } from "@/components/shared/BlurImage";

const deliverables = [
  {
    title: "Concepts From Multiple Designers",
    image: "/images/unsplash/1618220179428-22790b461013.webp",
    alt: "Multiple design concepts on a screen",
    delay: 0.1,
  },
  {
    title: "Constant Communication With Your Chosen Designer",
    image: "/images/unsplash/1573496359142-b8d87734a5a2.webp", 
    alt: "Designer communication",
    delay: 0.2,
  },
  {
    title: "Final Photorealistic 3D Designs",
    image: "/images/unsplash/1600210492486-724fe5c67fb0.webp", // Reverting to high-quality render
    alt: "Photorealistic 3D render of a living room",
    delay: 0.3,
  },
  {
    title: "Floor Plan And Color Palette",
    image: "/images/unsplash/1502005229762-cf1b2da7c5d6.webp", // Blueprint/Plan
    alt: "Architectural floor plan and color swatches",
    delay: 0.4,
  },
  {
    title: "Shopping List And White Glove Concierge Service",
    image: "/images/unsplash/1556228453-efd6c1ff04f6.webp", // Furniture/Decor Context
    alt: "Curated shopping list items",
    delay: 0.5,
  },
];

export function PortfolioDeliverables() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">You'll Receive</h2>
        </motion.div>

        {/* Deliverables Carousel */}
        <div className="relative px-8 md:px-12 lg:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {deliverables.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                    className="group w-full flex flex-col items-center text-center space-y-6 h-full"
                  >
                    {/* Image Container */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                       <BlurImage 
                          src={item.image}
                          alt={item.alt}
                          ratio={1}
                          className="w-full h-full object-cover"
                       />
                    </div>

                    {/* Text */}
                    <h3 className="font-serif text-xl leading-tight text-foreground/90 max-w-[200px] mx-auto">
                      {item.title}
                    </h3>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows - Hidden on Desktop since all items fit */}
            <CarouselPrevious className="flex lg:hidden -left-10 md:-left-14" />
            <CarouselNext className="flex lg:hidden -right-10 md:-right-14" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}
