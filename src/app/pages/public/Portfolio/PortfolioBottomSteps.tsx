import { m } from "framer-motion";
import { BlurImage } from "@/components/shared/BlurImage";

export function PortfolioBottomSteps() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 space-y-32">
        
        {/* --- STEP 4: ORDER AND TRACK --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image (Left) - Laptop Mockup */}
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
             <div className="relative p-4">
                {/* Simple Laptop Frame CSS or just a clean screenshot of a laptop */}
                {/* Using a high quality mockup style image */}
                <BlurImage
                    src="/images/unsplash/1460925895917-afdab827c52f.webp"
                    alt="Online shopping for furniture on a laptop"
                    ratio={4/3}
                    containerClassName="rounded-2xl shadow-2xl"
                 />
             </div>
          </m.div>
          
          {/* Content (Right) */}
          <m.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-lg shrink-0">4</span>
              <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-wide">Order and Track Your Items</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You'll have the flexibility to buy the items on your own timeline as needed. Our white-glove shopping concierge service never expires and ensures that you'll get the best price possible with our exclusive discounts saving you $1000s.
            </p>
          </m.div>
        </div>

        {/* --- STEP 5: DREAM ROOM (Centered) --- */}
        <div className="space-y-12">
          {/* Header */}
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-6"
          >
             <div className="flex items-center justify-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-lg shrink-0">5</span>
              <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-wide">Enjoy Your Dream Room Design!</h3>
            </div>
          </m.div>

          {/* Large Hero Image */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <BlurImage 
                src="/images/unsplash/1600585154340-be6161a56a0c.webp"
                alt="Completed dream living room design with high ceilings"
                ratio={16/9}
                containerClassName="rounded-3xl shadow-2xl"
            />
          </m.div>
        </div>

      </div>
    </section>
  );
}
