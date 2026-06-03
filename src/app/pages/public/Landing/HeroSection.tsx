import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* 1. BACKGROUND IMAGE 
        - optimization and LCP critical adjustment retained
      */}
      <div className="absolute inset-0 z-0">
        <img
          // 1. Serve optimized WebP format (&fm=webp)
          // 2. Serve right size for right device (800w for mobile, 2000w for desktop)
          srcSet="
            /images/unsplash/1618221195710-dd6b41faaea6.webp 800w,
            /images/unsplash/1618221195710-dd6b41faaea6.webp 1200w,
            /images/unsplash/1618221195710-dd6b41faaea6.webp 2000w
          "
          src="/images/unsplash/1618221195710-dd6b41faaea6.webp"
          sizes="100vw"
          alt="Luxury Living Room Interior"
          width="2000"
          height="1333"
          className="w-full h-full object-cover brightness-[0.85]"
          fetchPriority="high" // Helper for LCP
          loading="eager"      // Helper for LCP
        />
        {/* Subtle overlay for text readability if needed, though brightness handles most */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 2. CONTENT OVERLAY */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <div className="max-w-4xl space-y-8 animate-fade-in-up flex flex-col items-center">

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-lg">
            <span className="block">Luxury Interior Design </span>
            {/*<span className="block mt-2">by Top Experts</span>*/}
            <span className="block mt-2">Executed with Perfection</span>
          </h1>

          <div className="pt-8">
              <Button
                className="bg-gold hover:bg-gold/90 text-gold-foreground text-sm md:text-lg font-medium tracking-[0.15em] uppercase px-6 py-6 md:px-10 md:py-7 rounded-sm shadow-lg transition-all duration-300 hover:scale-105 w-full md:w-auto max-w-xs md:max-w-none"
              >
                Start My Transformation
              </Button>
          </div>

        </div>
      </div>

      {/* 3. FORBES BADGE (Bottom Left) */}
      {/*<div className="absolute bottom-0 left-8 md:left-12 z-20 hidden md:block">
        <div className="bg-white text-black p-4 pb-2 shadow-2xl flex flex-col items-center justify-center min-w-[100px] relative after:content-[''] after:absolute after:top-full after:left-0 after:border-l-50 after:border-l-transparent after:border-r-50 after:border-r-transparent after:border-t-15 after:border-t-white">
          {/* Badge Content */}
          {/*<div className="flex flex-col items-center -mt-1">
            <span className="font-serif text-4xl font-bold leading-none">#1</span>
            <span className="text-[0.6rem] font-bold tracking-widest uppercase my-1">by</span>
            <span className="font-serif text-xl font-bold leading-none mb-1">Forbes</span>
          </div>
          {/* Black strip */}
          {/*<div className="bg-black text-white text-[0.55rem] font-bold tracking-[0.2em] uppercase py-1 w-[120%] text-center -mx-4 mt-1 mb-0 relative top-1">
            Top Rated
          </div>
        </div>
      </div>

      {/* Mobile Badge (Simplified or Scaled) */}
      {/*<div className="absolute bottom-4 left-4 z-20 md:hidden">
        <div className="bg-white/95 backdrop-blur text-black px-3 py-2 text-xs font-bold shadow-lg border-l-4 border-gold">
          #1 by Forbes
        </div>
      </div>*/}

    </section>
  );
}