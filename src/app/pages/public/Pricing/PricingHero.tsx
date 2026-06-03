import { useRef } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import confetti from "canvas-confetti";

interface PricingHeroProps {
  isMonthly: boolean;
  setIsMonthly: (value: boolean) => void;
}

export function PricingHero({ isMonthly, setIsMonthly }: PricingHeroProps) {
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);

    // Fire confetti when switching to yearly (the savings option)
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#d4af37", "#997f26", "#f5e6a3", "#b8941f", "#e8c84a"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 space-y-4 text-center">
          <h1 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the plan that works for you.
            <br className="hidden sm:block" />
            All plans include access to our platform, expert designers, and
            dedicated support.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3">
          <Label
            htmlFor="billing-toggle"
            className="cursor-pointer flex items-center gap-3"
          >
            <Switch
              id="billing-toggle"
              ref={switchRef as React.Ref<HTMLButtonElement>}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
            />
            <span className="text-sm font-semibold text-foreground">
              Annual billing{" "}
              <span className="text-gold font-bold">(Save 20%)</span>
            </span>
          </Label>
        </div>
      </div>
    </section>
  );
}
