import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlurImage } from "@/components/shared/BlurImage";

export function BlogLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">

      {/* Main Content Area (BlogIndex or BlogPost will render here) */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Blog-Specific CTA */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden flex items-center min-h-[500px] md:min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <BlurImage
            src="/images/unsplash/1556911220-bff31c812dba.webp"
            alt="Beautiful contemporary kitchen"
            className="w-full h-full object-cover opacity-60 md:opacity-80 brightness-[0.65]"
            containerClassName="w-full h-full rounded-none border-0"
            loading="lazy"
          />
        </div>

        {/* Overlay gradient to ensure text readability on the left */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent z-0 pointer-events-none" />

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
          <div className="max-w-2xl text-left text-white">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1] font-normal mb-6 pb-2">
              Kickstart Your<br />
              Design Journey
            </h2>
            <p className="text-lg md:text-xl md:leading-relaxed mb-10 text-white/90 max-w-lg font-medium tracking-wide">
              Take our interior design style quiz<br className="hidden md:block" />
              to ignite your inspiration today!
            </p>
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-sm md:text-base tracking-widest font-bold uppercase rounded shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              FIND YOUR STYLE
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}