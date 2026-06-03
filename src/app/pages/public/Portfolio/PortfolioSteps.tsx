import { m } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { BlurImage } from "@/components/shared/BlurImage";

export function PortfolioSteps() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 space-y-32">
        
        {/* --- STEP 1: QUESTIONNAIRE --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image */}
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
             <BlurImage
                src="/images/unsplash/1531538606174-0f90ff5dce83.webp"
                alt="Client filling out design questionnaire"
                ratio={4/3}
                containerClassName="rounded-2xl shadow-2xl"
             />
          </m.div>
          {/* Content */}
          <m.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-lg shrink-0">1</span>
              <h3 className="font-serif text-3xl md:text-4xl">Start Your Project</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To start your design project you'll complete a quick and easy questionnaire, let us know your preferences, attach photos of your room, and choose the inspiration you love.
            </p>
          </m.div>
        </div>

        {/* --- STEP 2: PROPOSALS (Centerpiece) --- */}
        <div className="space-y-12">
          {/* Header */}
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
             <div className="flex items-center justify-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-lg shrink-0">2</span>
              <h3 className="font-serif text-3xl md:text-4xl text-left md:text-center">Receive Custom Proposals From Multiple Designers</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get multiple design concepts based on your assessment and budget. Choose your favorite professional designer to help translate your vision.
            </p>
          </m.div>

          {/* Visual Composition */}
          <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex justify-center items-center mt-12 pb-12">
            
            {/* Background Container */}
            <div className="absolute top-0 w-full flex justify-between px-2 md:px-0 items-start opacity-50 md:opacity-100">
               {/* Designer 2 (Left Back) */}
               <m.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="w-[40%] bg-white p-2 md:p-3 shadow-lg rounded-xl border border-gray-100"
               >
                  <div className="relative mb-2 bg-gray-50 rounded overflow-hidden">
                     <BlurImage 
                        src="/images/unsplash/1618221195710-dd6b41faaea6.webp"
                        alt="Kitchen Design Board"
                        ratio={4/3}
                     />
                  </div>
                  <div className="flex items-center gap-2 px-1">
                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                       <img src="/images/unsplash/1438761681033-6461ffad8d80.webp" className="w-full h-full object-cover" alt="D2"/>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">Designer #2</span>
                  </div>
               </m.div>

               {/* Designer 3 (Right Back - Context) */}
               <m.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3, duration: 0.8 }}
                 className="w-[40%] bg-white p-2 md:p-3 shadow-lg rounded-xl border border-gray-100"
               >
                   <div className="relative bg-gray-50 rounded overflow-hidden">
                      <BlurImage 
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800&auto=format&fit=crop"
                        alt="Living Area Plan"
                        ratio={4/3}
                      />
                  </div>
               </m.div>
            </div>

            {/* Foreground Card (Designer 1 - Winner) */}
            <m.div 
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-[75%] md:w-[60%] bg-gold rounded-t-xl rounded-b-lg shadow-2xl z-20 mt-16 md:mt-24"
            >
              {/* Board Border Effect */}
              <div className="p-2 md:p-3 pb-0 md:pb-0">
                  <div className="relative w-full shadow-inner rounded overflow-hidden">
                     {/* Responsive Aspect Ratio handled via className since BlurImage ratio prop is fixed */}
                     <BlurImage 
                        src="/images/unsplash/1615529182904-14819c35db37.webp"
                        alt="Winning Design Concept Board"
                        containerClassName="aspect-4/3 md:aspect-16/11"
                     />
                  </div>
              </div>

              {/* Gold Footer Bar */}
              <div className="bg-gold w-full h-12 md:h-14 rounded-b-lg flex items-center justify-between px-4 shadow-md">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white overflow-hidden bg-white/20">
                      <img src="/images/unsplash/1494790108377-be9c29b29330.webp" alt="Designer" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white font-bold text-sm md:text-base tracking-wide">Designer #1</span>
                 </div>
                 <div className="text-white/90 text-sm font-medium flex items-center gap-1.5 opacity-90">
                   <MessageSquare className="w-4 h-4" />
                   <span>(5)</span>
                 </div>
              </div>
            </m.div>

          </div>
        </div>

        {/* --- STEP 3: WORK CLOSELY --- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          {/* Visual (Right) */}
          <m.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2"
          >
             <BlurImage 
                src="/images/unsplash/1600607686527-6fb886090705.webp"
                alt="Realistic 3D Render of finished Living Room"
                ratio={4/3}
                containerClassName="rounded-2xl shadow-2xl"
             />
          </m.div>
          
          {/* Content (Left) */}
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
             <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-lg shrink-0">3</span>
              <h3 className="font-serif text-3xl md:text-4xl">Work Closely With Your Chosen Designer</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your designer will work with you to bring your design to life, using the perfect combination of new and existing pieces. With the help of AI interior design tools, they'll review and refine your custom-made 3D model, floor plan, color palette, and shopping list with you every step of the way.
            </p>
          </m.div>
        </div>

      </div>
    </section>
  );
}
