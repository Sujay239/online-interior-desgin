import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PortfolioCategoryHeroProps {
  name: string;
  heroImage: string;
  heroSubtitle: string;
}

/**
 * Dynamic hero section for portfolio category pages.
 * Receives category data as props and renders a fullbleed hero.
 */
export function PortfolioCategoryHero({
  name,
  heroImage,
  heroSubtitle,
}: PortfolioCategoryHeroProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={`${name} Interior Design Portfolio`}
          className="w-full h-full object-cover brightness-[0.55]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <div className="max-w-4xl space-y-6 animate-fade-in-up flex flex-col items-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/portfolio" className="hover:text-gold transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-white">{name}</span>
          </nav>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-xl">
            {name}
            <span className="block mt-2 font-light text-gold text-3xl md:text-4xl lg:text-5xl">
              Design Portfolio
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md font-light text-gray-100/90">
            {heroSubtitle}
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Link to="/quiz">
              <Button className="bg-gold hover:bg-gold-dark text-white text-sm md:text-base font-bold tracking-[0.15em] uppercase px-10 py-7 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/20 flex items-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
