import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* 1. BACKGROUND IMAGE 
        - optimization and LCP critical adjustment similar to Landing Hero
      */}
      <div className="absolute inset-0 z-0">
        <img
          // 1. Serve optimized WebP format (&fm=webp)
          // 2. Serve right size for right device (800w for mobile, 2000w for desktop)
          // Using a different Unsplash image suitable for Portfolio (Modern Living Room)
          srcSet="
            /images/unsplash/1600210492486-724fe5c67fb0.webp 800w,
            /images/unsplash/1600210492486-724fe5c67fb0.webp 1200w,
            /images/unsplash/1600210492486-724fe5c67fb0.webp 2000w
          "
          src="/images/unsplash/1600210492486-724fe5c67fb0.webp"
          sizes="100vw"
          alt="Modern Living Room Interior Design"
          width="2000"
          height="1333"
          className="w-full h-full object-cover brightness-[0.75]" // Slightly darker overlay for text readability
          fetchPriority="high" // Helper for LCP
          loading="eager"      // Helper for LCP
        />
        {/* Helper overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 2. CONTENT OVERLAY */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <div className="max-w-5xl space-y-8 animate-fade-in-up flex flex-col items-center">

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-lg">
            <span className="block">Design, Collaborate, Transform:</span>
            <span className="block mt-2 font-light">Our Easy Online Process</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl md:max-w-3xl leading-relaxed drop-shadow-md font-light text-gray-100">
            Work with our award-winning interior designers to make your dream space come true! Interior design has never been so convenient, simple and fun!
          </p>

          {/* CTAs */}
          <div className="pt-8 flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
            {/* CTA 1: Gold Primary */}
            <Link to="/start-project">
              <Button
                className="bg-gold hover:bg-gold/90 text-gold-foreground text-sm md:text-base font-bold tracking-[0.15em] uppercase px-8 py-6 w-full md:w-auto shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Now
              </Button>
            </Link>

            {/* CTA 2: White Outline with Icon */}
            <Link to="/portfolio">
              <Button
                variant="outline"
                className="bg-white hover:bg-white/90 text-foreground border-none text-sm md:text-base font-bold tracking-[0.15em] uppercase px-8 py-6 w-full md:w-auto shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                View Portfolio
                <PlayCircle className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
