import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";

// Mock Data
const projectData = {
  title: "Sleek & Modern Living Room Interior Design",
  before: [
    {
      src: "/images/unsplash/1513694203232-719a280e022f.webp",
      alt: "Living Room Before 1"
    },
    {
      src: "/images/unsplash/1532323544230-7191fd51bc1b.webp",
      alt: "Living Room Before 2"
    },
    {
      src: "/images/unsplash/1540518614846-7eded433c457.webp",
      alt: "Living Room Before 3"
    }
  ],
  after: [
    {
      src: "/images/unsplash/1600210492486-724fe5c67fb0.webp",
      alt: "Living Room After 1 (Modern)"
    },
    {
      src: "/images/unsplash/1600607687939-ce8a6c25118c.webp",
      alt: "Living Room After 2 (Detail)"
    },
    {
      src: "/images/unsplash/1600566753190-17f0baa2a6c3.webp",
      alt: "Living Room After 3 (Angle)"
    }
  ],
  testimonial: {
    text: "Thank you for all of the beautiful ideas! I just love my new living room design. I love that this is a perfect blend of contemporary without being too cold. Thank you so much for achieving this for us.",
    author: "Liz"
  }
};

export function HowItWorksTabs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light mb-8">
            {projectData.title}
          </h2>
        </div>

        {/* Outer Tabs: Before vs After */}
        <Tabs defaultValue="after" className="w-full max-w-5xl mx-auto flex flex-col items-center">
            
          {/* Outer Triggers */}
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 bg-transparent gap-4 mb-8">
            <TabsTrigger 
              value="before"
              className="data-[state=active]:bg-gold data-[state=active]:text-white bg-muted text-muted-foreground border border-transparent rounded-none uppercase font-bold tracking-widest py-3 hover:bg-muted/80 transition-colors"
            >
              Before
            </TabsTrigger>
            <TabsTrigger 
              value="after"
              className="data-[state=active]:bg-gold data-[state=active]:text-white bg-muted text-muted-foreground border border-transparent rounded-none uppercase font-bold tracking-widest py-3 hover:bg-muted/80 transition-colors"
            >
              After
            </TabsTrigger>
          </TabsList>

          {/* Before Content */}
          <TabsContent value="before" className="w-full mt-0 focus-visible:ring-0">
            <ImageGallery images={projectData.before} />
          </TabsContent>

          {/* After Content */}
          <TabsContent value="after" className="w-full mt-0 focus-visible:ring-0">
            <ImageGallery images={projectData.after} />
          </TabsContent>

        </Tabs>

        {/* Testimonial */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 text-center space-y-4"
        >
            <Quote className="w-8 h-8 mx-auto text-gold mb-4 opacity-50" />
            <p className="font-serif text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                "{projectData.testimonial.text}"
            </p>
            <p className="font-bold text-sm tracking-widest uppercase text-gold">
                - {projectData.testimonial.author}
            </p>
        </motion.div>

      </div>
    </section>
  );
}

// Inner Component for Image Gallery (Nested Tabs Logic)
function ImageGallery({ images }: { images: { src: string, alt: string }[] }) {
    // We can use another Tabs component simply for the thumbnail selection logic
    // Tab Value = index of the image
    return (
        <Tabs defaultValue="0" className="w-full flex flex-col gap-6">
            
            {/* Main Image Display (Tab Content) */}
            <div className="w-full aspect-video md:aspect-16/8 relative rounded-lg overflow-hidden shadow-2xl">
                 {images.map((img, index) => (
                     <TabsContent key={index} value={index.toString()} className="w-full h-full mt-0 absolute inset-0">
                         <motion.img 
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
            <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent h-auto p-0">
                {images.map((img, index) => (
                    <TabsTrigger
                        key={index}
                        value={index.toString()}
                        className="p-0 border-2 border-transparent data-[state=active]:border-gold rounded overflow-hidden w-24 h-16 md:w-32 md:h-20 transition-all opacity-70 data-[state=active]:opacity-100 hover:opacity-100"
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
    )
}
