
const vendors = [
  "ANTHROPOLOGIE",
  "PERIGOLD",
  "THE SHADE STORE",
  "GRAHAM & BROWN",
  "FABRICUT",
  "wayfair",
  "MCGEE & CO.",
  "ARTICLE.",
  "DESIGN WITHIN REACH",
  "KATHY KUO HOME"
];

export function VendorSavingsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">

        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6">
            Modern Interior Brings You Better Value
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
            Get access to premium materials and trusted vendor partnerships
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center opacity-80">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="font-serif text-xl md:text-2xl text-muted-foreground uppercase tracking-widest hover:text-gold-dark transition-colors cursor-default"
                aria-label={vendor}
              >
                {/* 
                  Using text as placeholders for logos. 
                  Styling to match the clean, high-end aesthetic.
                */}
                {vendor}
              </div>
            ))}
          </div>


        </div>

      </div>
    </section>
  );
}
