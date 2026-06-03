import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HowItWorksHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* 1. BACKGROUND IMAGE 
        - High-performance responsive image loading
        - LCP Optimized with fetchPriority="high" and loading="eager"
      */}
      <div className="absolute inset-0 z-0">
        <img
          srcSet="
            /images/unsplash/1618221195710-dd6b41faaea6.webp 800w,
            /images/unsplash/1618221195710-dd6b41faaea6.webp 1200w,
            /images/unsplash/1618221195710-dd6b41faaea6.webp 2000w
          "
          src="/images/unsplash/1618221195710-dd6b41faaea6.webp"
          sizes="100vw"
          alt="Modern Interior Design Process"
          width="2000"
          height="1333"
          className="w-full h-full object-cover brightness-[0.65]" // Slightly darker for better text contrast
          fetchPriority="high"
          loading="eager"
        />
        {/* Helper overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 2. CONTENT OVERLAY */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <div className="max-w-4xl space-y-8 animate-fade-in-up flex flex-col items-center">

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-xl">
            <span className="block">Interior Design</span>
            <span className="block mt-2 font-light text-gold-light">Made Simple</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl md:max-w-2xl leading-relaxed drop-shadow-md font-light text-gray-100/90">
            Experience a seamless online design process tailored to your style and budget. Transform your space in just a few easy steps.
          </p>

          {/* CTAs */}
          <div className="pt-8 flex flex-col md:flex-row gap-5 w-full md:w-auto justify-center items-center">
            {/* CTA 1: Gold Primary */}
            <Link to="/start-project" className="w-full md:w-auto">
              <Button
                className="bg-gold hover:bg-gold-dark text-white text-sm md:text-base font-bold tracking-[0.15em] uppercase px-10 py-7 w-full md:w-auto shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/20"
              >
                Start Your Project
              </Button>
            </Link>

            {/* CTA 2: White Outline */}
            <Link to="/how-it-works" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-sm md:text-base font-bold tracking-[0.15em] uppercase px-10 py-7 w-full md:w-auto shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
