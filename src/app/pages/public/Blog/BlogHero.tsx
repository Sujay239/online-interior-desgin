import { Badge } from "@/components/ui/badge";

export function BlogHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden mb-12">
      {/* BACKGROUND IMAGE  */}
      <div className="absolute inset-0 z-0">
        <img
          srcSet="
            /images/unsplash/1600210492486-724fe5c67fb0.webp 800w,
            /images/unsplash/1600210492486-724fe5c67fb0.webp 1200w,
            /images/unsplash/1600210492486-724fe5c67fb0.webp 2000w
          "
          src="/images/unsplash/1600210492486-724fe5c67fb0.webp"
          sizes="100vw"
          alt="Interior Design Journal"
          width="2000"
          height="1333"
          className="w-full h-full object-cover brightness-[0.5]" // Slightly darker for better text contrast
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
        {/* Helper overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <div className="max-w-4xl space-y-6 animate-fade-in-up flex flex-col items-center">
          <Badge variant="outline" className="mb-2 text-gold border-gold/50 uppercase tracking-widest px-4 py-1.5 bg-black/20 backdrop-blur-sm">
            Our Journal
          </Badge>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight drop-shadow-xl text-white">
            Interior Design <span className="font-light text-gold-light italic">Insights</span>
          </h1>
          <p className="text-lg md:text-xl md:max-w-2xl leading-relaxed drop-shadow-md font-light text-gray-100/90 max-w-2xl mx-auto">
            Discover the latest trends, expert advice, and inspiration from our world-class interior designers to elevate your living spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
