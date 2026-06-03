import { Camera, PencilRuler, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Share Your Requirements",
    description:
      "Share photos, room dimensions, and your design preferences so we can understand your vision and requirements.",
  },
  {
    icon: PencilRuler,
    title: "Design & Estimation",
    description:
      "We create personalized interior designs along with detailed layouts, material suggestions, and project cost estimations.",
  },
  {
    icon: ShoppingBag,
    title: "Execution & Handover",
    description:
      "Our experts handle the end-to-end execution, ensuring quality work, timely completion, and a beautifully finished space.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
            Our streamlined process makes professional design accessible, affordable, and fun.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-px bg-border z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-card border border-border flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:border-gold group-hover:shadow-lg group-hover:scale-105">
                <step.icon className="w-8 h-8 text-muted-foreground group-hover:text-gold-dark transition-colors duration-500" strokeWidth={1.5} />
              </div>

              {/* Step Label */}
              <span className="text-gold-dark text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                Step 0{index + 1}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl mb-4 text-foreground">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-xs text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}