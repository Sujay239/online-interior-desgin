import { motion } from "motion/react";
import { Link } from "react-router-dom";
import NumberFlow from "@number-flow/react";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { pricingPlans } from "@/services/pricingData";
import { buttonVariants } from "@/components/ui/button-variants";

interface PricingCardsProps {
  isMonthly: boolean;
}

export function PricingCards({ isMonthly }: PricingCardsProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={
                isDesktop
                  ? {
                      y: plan.isPopular ? -20 : 0,
                      opacity: 1,
                      x: index === 0 ? 30 : index === 2 ? -30 : 0,
                      scale: index === 0 || index === 2 ? 0.94 : 1.0,
                    }
                  : { y: 0, opacity: 1 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.4,
                opacity: { duration: 0.5 },
              }}
              className={cn(
                "bg-background relative rounded-2xl border p-6 text-center lg:flex lg:flex-col lg:justify-center",
                "flex flex-col",
                plan.isPopular
                  ? "border-gold border-2 shadow-lg shadow-gold/10"
                  : "border-border",
                !plan.isPopular && "mt-5 md:mt-0",
                // Congested 3D depth on desktop
                index === 0 || index === 2 ? "z-0" : "z-10",
                index === 0 && "origin-right",
                index === 2 && "origin-left"
              )}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 flex items-center bg-gold text-gold-foreground rounded-tr-xl rounded-bl-xl px-3 py-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 font-sans text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col">
                {/* Plan Name */}
                <p className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-foreground text-5xl font-bold tracking-tight">
                    <NumberFlow
                      value={
                        isMonthly
                          ? Number(plan.price)
                          : Number(plan.yearlyPrice)
                      }
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      transformTiming={{
                        duration: 500,
                        easing: "ease-out",
                      }}
                      willChange
                      className="tabular-nums"
                    />
                  </span>
                  <span className="text-muted-foreground text-sm leading-6 font-semibold tracking-wide">
                    / {plan.period}
                  </span>
                </div>

                {/* Billing info */}
                <p className="text-muted-foreground text-xs leading-5 mt-1">
                  {isMonthly ? "billed monthly" : "billed annually"}
                </p>

                {/* Features */}
                <ul className="mt-6 flex flex-col gap-2.5 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="text-gold mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-left text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <hr className="my-6 w-full border-border" />

                {/* CTA Button */}
                <Link
                  to={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: plan.isPopular ? "gold" : "outline",
                      size: "lg",
                    }),
                    "w-full gap-2 text-base font-semibold tracking-tight transition-all duration-300",
                    !plan.isPopular &&
                      "hover:bg-gold hover:text-gold-foreground hover:border-gold hover:ring-2 hover:ring-gold/30 hover:ring-offset-1"
                  )}
                >
                  {plan.buttonText}
                </Link>

                {/* Description */}
                <p className="text-muted-foreground mt-5 text-xs leading-5">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
