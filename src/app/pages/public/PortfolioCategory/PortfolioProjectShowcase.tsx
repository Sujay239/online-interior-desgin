import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";
import type { PortfolioProject } from "@/types/portfolio";

interface PortfolioProjectShowcaseProps {
  project: PortfolioProject;
  reversed?: boolean;
  index: number;
}

/**
 * Reusable Before/After showcase for a single portfolio project.
 * Adapted from HowItWorksTabs.tsx — each project gets Before/After tabs
 * with an image gallery (thumbnails + main view) and a testimonial.
 */
export function PortfolioProjectShowcase({
  project,
  index,
}: PortfolioProjectShowcaseProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            {project.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            {project.description}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <img
              src={project.designer.avatar}
              alt={project.designer.name}
              className="w-8 h-8 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-sm text-muted-foreground">
              Designed by{" "}
              <span className="text-gold font-semibold">
                {project.designer.name}
              </span>
              {" · "}
              {project.designer.role}
            </span>
          </div>
        </div>

        {/* Before / After Tabs */}
        <Tabs
          defaultValue="after"
          className="w-full max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Tab Triggers */}
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
            <ImageGallery images={project.beforeImages} />
          </TabsContent>

          {/* After Content */}
          <TabsContent value="after" className="w-full mt-0 focus-visible:ring-0">
            <ImageGallery images={project.afterImages} />
          </TabsContent>
        </Tabs>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 md:mt-16 text-center space-y-4"
        >
          <Quote className="w-8 h-8 mx-auto text-gold mb-4 opacity-50" />
          <p className="font-serif text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            "{project.testimonial.text}"
          </p>
          <p className="font-bold text-sm tracking-widest uppercase text-gold">
            — {project.testimonial.author}
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider between projects */}
      <div className="container mx-auto px-4 mt-16">
        <hr className="border-border/50" />
      </div>
    </motion.section>
  );
}

// ============================================================
// Image Gallery — Nested tabs for main image + thumbnail strip
// Reused from HowItWorksTabs pattern
// ============================================================

function ImageGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <Tabs defaultValue="0" className="w-full flex flex-col gap-6">
      {/* Main Image Display */}
      <div className="w-full aspect-video md:aspect-16/8 relative rounded-lg overflow-hidden shadow-2xl">
        {images.map((img, idx) => (
          <TabsContent
            key={idx}
            value={idx.toString()}
            className="w-full h-full mt-0 absolute inset-0"
          >
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

      {/* Thumbnails */}
      <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent h-auto p-0">
        {images.map((img, idx) => (
          <TabsTrigger
            key={idx}
            value={idx.toString()}
            className="p-0 border-2 border-transparent data-[state=active]:border-gold rounded overflow-hidden w-24 h-16 md:w-32 md:h-20 transition-all opacity-70 data-[state=active]:opacity-100 hover:opacity-100"
          >
            <img
              src={img.src}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
