import { lazy, Suspense } from "react";
import { HowItWorksHero } from "./HowItWorks/HowItWorksHero";
import { SectionLoader } from "@/components/shared/SectionLoader";

// Lazy load below-the-fold sections
const HowItWorksTabs = lazy(() => import("./HowItWorks/HowItWorksTabs").then(module => ({ default: module.HowItWorksTabs })));
const HowItWorksProjectDetails = lazy(() => import("./HowItWorks/HowItWorksProjectDetails").then(module => ({ default: module.HowItWorksProjectDetails })));
const HowItWorksGallery = lazy(() => import("./HowItWorks/HowItWorksGallery").then(module => ({ default: module.HowItWorksGallery })));
const Portfolio = () => {
  return (
    <>
      <title>Portfolio | Online Interior Design Projects</title>
      <meta name="description" content="Explore our portfolio of stunning interior design transformations. See real client projects designed online by our expert team." />
      
      <div className="flex flex-col w-full">
        {/* Hero is Eager Loaded to preserve LCP */}
        <HowItWorksHero />

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
          <HowItWorksTabs />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
          <HowItWorksProjectDetails 
            title="Black and White Living Room Design"
            designer="Renata P."
            imageSrc="/images/unsplash/1540518614846-7eded433c457.webp"
          />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
          <HowItWorksGallery />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
          <HowItWorksProjectDetails 
            title="Modern Living Room Dining Room Combo"
            designer="Meric S."
            imageSrc="/images/unsplash/1600210492486-724fe5c67fb0.webp"
            reversed={true}
          />
        </Suspense>

        {/* CTA is provided by parent PortfolioLayout */}
      </div>
    </>
  );
}

export default Portfolio;