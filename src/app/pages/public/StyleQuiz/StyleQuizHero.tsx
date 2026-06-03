import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function StyleQuizHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* 1. BACKGROUND IMAGE
        - LCP Optimized with fetchPriority="high" and loading="eager"
        - Responsive srcSet for device-appropriate sizes
      */}
      <div className="absolute inset-0 z-0">
        <img
          srcSet="
            /images/unsplash/1600607687939-ce8a6c25118c.webp 800w,
            /images/unsplash/1600607687939-ce8a6c25118c.webp 1200w,
            /images/unsplash/1600607687939-ce8a6c25118c.webp 2000w
          "
          src="/images/unsplash/1600607687939-ce8a6c25118c.webp"
          sizes="100vw"
          alt="Bold mid-century modern interior with statement furniture"
          width="2000"
          height="1333"
          className="w-full h-full object-cover brightness-[0.7]"
          fetchPriority="high"
          loading="eager"
        />
        {/* Subtle center-focused overlay for text readability */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* 2. CONTENT OVERLAY */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <div className="max-w-4xl space-y-8 flex flex-col items-center">

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-xl">
            <span className="block">What Is My</span>
            <span className="block mt-2">Interior Design Style?</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl md:max-w-2xl leading-relaxed drop-shadow-md font-light text-gray-100/90">
            Take our free interior design quiz to determine{" "}
            <br className="hidden md:block" />
            your unique decorating style
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Link to="/style-quiz-start">
              <Button
                className="bg-gold hover:bg-gold/90 text-gold-foreground text-sm md:text-base font-bold tracking-[0.15em] uppercase px-10 py-7 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start My Style Quiz
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
