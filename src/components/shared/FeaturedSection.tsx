export function FeaturedSection() {
  const logos = [
    { name: "Architectural Digest", src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Architectural_Digest_logo.svg" },
    { name: "The New York Times", src: "https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png" },
    { name: "Dwell", src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Dwell_logo.svg" },
    { name: "New York Magazine", src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/New_York_Magazine_logo.svg" },
    { name: "HGTV", src: "https://upload.wikimedia.org/wikipedia/commons/1/15/HGTV_2010_Logo.svg" },
    { name: "The Wall Street Journal", src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/The_Wall_Street_Journal_Logo.svg" }
  ];

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-muted-foreground mb-16">
          Featured & Trusted By
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-full h-20 flex items-center justify-center p-4">
               <img 
                 src={logo.src} 
                 alt={`${logo.name} logo`}
                 className="max-h-8 md:max-h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 dark:invert transition-all duration-300"
                 loading="lazy"
                 width="150" 
                 height="40"
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
