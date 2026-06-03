import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const comparisonData = [
  {
    feature: "Price",
    decorilla: "$599.00+",
    traditional: "$2,000.00+",
    isText: true,
  },
  {
    feature: "Unlimited Communication",
    decorilla: true,
    traditional: true, // Often traditional designers do communicate, but maybe less conveniently? Screenshot had checks for both usually or check/cross. Let's make traditional Check but maybe different color? Or simple Check. Screenshot usually shows check for both on this one item in some comps, but let's stick to the visual: Decorilla Gold Check, Traditional Gray Check or Red X? 
    // Looking at the screenshot provided in the prompt: "Unlimited Communication" has Gold Check for Decorilla, Gold Check (or similar) for Traditional? 
    // Actually, traditionally you pay hourly, so it's NOT unlimited. But let's assume specific "Unlimited" value prop.
    // Let's safe bet: Decorilla (Check), Traditional (Check) if that's what user implied, OR strict Us vs Them.
    // Screenshot interpretation details from memory of similar sites: Usually Traditional is "Hourly" vs "Flat". "Unlimited" usually implies "No hourly billing".
    // I will use Check for Decorilla, Check for Traditional for this specific row if they are comparable, OR Cross. 
    // Let's look at the screenshot text in the prompt again... it just says "Screenshot".
    // I will stick to the most likely marketing angle: Decorilla (Yes), Traditional (No/Hourly). 
    // But for now, I'll match the "Check" vs "Cross" pattern for most rows.
    // UPDATE: Comparison screenshot usually shows "Price" and then booleans.
    // I will code it as boolean checks.
    traditionalType: "check", // Let's give them a check if they communicate, but maybe standard color. 
  },
  {
    feature: "Realistic 3D Model",
    decorilla: true,
    traditional: false,
  },
  {
    feature: "Concepts From Multiple Designers",
    decorilla: true,
    traditional: false,
  },
  {
    feature: "Interactive Online Platform",
    decorilla: true,
    traditional: false,
  },
  {
    feature: "Trade Discounts on Furniture",
    decorilla: true,
    traditional: false,
  },
  {
    feature: "No Markups or Sale Pressure",
    decorilla: true,
    traditional: false,
  },
];

export function PortfolioComparison() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Decorilla vs Traditional Interior Design
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/60 border-b border-border p-6 md:p-8 items-center text-center">
                <div className="text-xs md:text-sm font-bold tracking-widest text-muted-foreground uppercase text-left pl-4">Features</div>
                <div className="flex justify-center">
                    {/* Logo */}
                    <Logo className="text-xl md:text-2xl" />
                </div>
                <div className="text-xs md:text-sm font-bold tracking-widest text-muted-foreground uppercase">Traditional Design</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border">
                {comparisonData.map((row, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="grid grid-cols-3 p-6 md:p-6 items-center hover:bg-gold/5 transition-colors"
                    >
                        {/* Feature Name */}
                        <div className="text-sm md:text-lg font-medium text-muted-foreground pl-4">
                            {row.feature}
                        </div>

                        {/* Decorilla Value */}
                        <div className="flex justify-center text-center">
                            {row.isText ? (
                                <span className="font-bold text-lg md:text-xl text-foreground">{row.decorilla}</span>
                            ) : (
                                row.decorilla && <div className="bg-gold/10 p-1.5 rounded-full"><Check className="w-6 h-6 text-gold" strokeWidth={3} /></div>
                            )}
                        </div>

                        {/* Traditional Value */}
                        <div className="flex justify-center text-center opacity-70">
                             {row.isText ? (
                                <span className="font-semibold text-lg md:text-xl text-muted-foreground/80">{row.traditional}</span>
                            ) : (
                                row.traditionalType === "check" ? (
                                     <div className="bg-muted p-1.5 rounded-full"><Check className="w-6 h-6 text-muted-foreground/50" strokeWidth={3} /></div>
                                ) : (
                                     <div className="bg-red-50 p-1.5 rounded-full"><X className="w-6 h-6 text-red-400" strokeWidth={3} /></div>
                                )
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
