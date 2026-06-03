import { m } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data
const projectData = {
  title: "Luxury Living Room & Dining Room Combined",
  images: [
    {
      src: "/images/unsplash/1600210492486-724fe5c67fb0.webp",
      alt: "Luxury Living Room Main View"
    },
    {
      src: "/images/unsplash/1600607687939-ce8a6c25118c.webp",
      alt: "Luxury Dining Area"
    },
    {
      src: "/images/unsplash/1600566753190-17f0baa2a6c3.webp",
      alt: "Living Room Seating"
    },
    {
      src: "/images/unsplash/1600585154340-be6161a56a0c.webp",
      alt: "Open Concept View"
    }
  ],
  testimonial: {
    text: "I was truly lucky to find Decorilla, I got the interior design of my dreams and their process was very friendly! I couldn't be happier!",
    author: "Michelle"
  }
};

export function HowItWorksGallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light mb-8">
            {projectData.title}
          </h2>
        </div>

        {/* Gallery Logic (Reusing Tabs for Thumbnail Selection) */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            
          <Tabs defaultValue="0" className="w-full flex flex-col gap-6">
              
              {/* Main Image Display (Tab Content) */}
              <div className="w-full aspect-video md:aspect-16/8 relative rounded-lg overflow-hidden shadow-2xl bg-muted">
                   {projectData.images.map((img, index) => (
                       <TabsContent key={index} value={index.toString()} className="w-full h-full mt-0 absolute inset-0">
                           <m.img 
                              initial={{ opacity: 0, scale: 1.05 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              src={img.src} 
                              alt={img.alt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                           />
                       </TabsContent>
                   ))}
              </div>

              {/* Thumbnails (Tab List) */}
              <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent h-auto p-0 mt-4">
                  {projectData.images.map((img, index) => (
                      <TabsTrigger
                          key={index}
                          value={index.toString()}
                          className="p-0 border-2 border-transparent data-[state=active]:border-gold rounded overflow-hidden w-24 h-16 md:w-32 md:h-20 transition-all opacity-70 data-[state=active]:opacity-100 hover:opacity-100 ring-offset-background disabled:pointer-events-none disabled:opacity-50"
                      >
                          <img 
                              src={img.src} 
                              alt={`Thumbnail ${index + 1}`} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                          />
                      </TabsTrigger>
                  ))}
              </TabsList>
          </Tabs>

        </div>

        {/* Testimonial */}
        <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 text-center space-y-4"
        >
            <p className="font-serif text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                "{projectData.testimonial.text}"
            </p>
            <p className="font-bold text-sm tracking-widest uppercase text-gold">
                - {projectData.testimonial.author}
            </p>
        </m.div>

      </div>
    </section>
  );
}
