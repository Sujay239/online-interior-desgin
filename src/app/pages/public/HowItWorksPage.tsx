import { lazy, Suspense } from "react";
import { PortfolioHero } from "./Portfolio/PortfolioHero";
import { SectionLoader } from "@/components/shared/SectionLoader";

// Lazy load below-the-fold sections
const PortfolioSteps = lazy(() => import("./Portfolio/PortfolioSteps").then(module => ({ default: module.PortfolioSteps })));
const PortfolioDeliverables = lazy(() => import("./Portfolio/PortfolioDeliverables").then(module => ({ default: module.PortfolioDeliverables })));
const PortfolioBottomSteps = lazy(() => import("./Portfolio/PortfolioBottomSteps").then(module => ({ default: module.PortfolioBottomSteps })));
const PortfolioCTA = lazy(() => import("@/components/shared/CTASection").then(module => ({ default: module.CTASection })));
const PortfolioComparison = lazy(() => import("./Portfolio/PortfolioComparison").then(module => ({ default: module.PortfolioComparison })));
const BenefitsSection = lazy(() => import("@/components/shared/BenefitsSection").then(module => ({ default: module.BenefitsSection })));
const PortfolioFAQ = lazy(() => import("./Portfolio/PortfolioFAQ").then(module => ({ default: module.PortfolioFAQ })));
const FeaturedSection = lazy(() => import("@/components/shared/FeaturedSection").then(module => ({ default: module.FeaturedSection })));

const HowItWorksPage = () => {
  return (
    <>
      <title>How It Works | Online Interior Design Process</title>
      <meta name="description" content="Learn how our online interior design process works. From initial concept to final design, we make transforming your space easy and affordable." />
      
      <div className="flex flex-col w-full">
        {/* Hero is Eager Loaded to preserve LCP */}
        <PortfolioHero />

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
            <PortfolioSteps />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
            <PortfolioDeliverables />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
            <PortfolioBottomSteps />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[300px]" />}>
            <PortfolioCTA />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
            <PortfolioComparison />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[500px]" />}>
            <BenefitsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
            <PortfolioFAQ />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[300px]" />}>
            <FeaturedSection />
        </Suspense>

        {/* Future sections like Gallery/Testimonials will go here */}
      </div>
    </>
  );
}

export default HowItWorksPage;