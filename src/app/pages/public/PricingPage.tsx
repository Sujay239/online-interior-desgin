import { lazy, Suspense, useState } from "react";
import { SectionLoader } from "@/components/shared/SectionLoader";
import { PricingHero } from "./Pricing/PricingHero";

const PricingCards = lazy(() =>
  import("./Pricing/PricingCards").then((m) => ({ default: m.PricingCards }))
);
const FeaturedSection = lazy(() =>
  import("@/components/shared/FeaturedSection").then((m) => ({
    default: m.FeaturedSection,
  }))
);

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <title>Pricing | Interior Design Packages & Plans</title>
      <meta
        name="description"
        content="Explore our transparent interior design pricing. Choose from Essentials, Professional, or Full Home packages — all with dedicated designers and personalized plans."
      />

      <div className="flex flex-col w-full">
        <PricingHero isMonthly={isMonthly} setIsMonthly={setIsMonthly} />

        <Suspense fallback={<SectionLoader height="h-[700px]" />}>
          <PricingCards isMonthly={isMonthly} />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[300px]" />}>
          <FeaturedSection />
        </Suspense>
      </div>
    </>
  );
}
