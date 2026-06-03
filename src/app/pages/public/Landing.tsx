import { lazy } from "react";
import { HeroSection } from "./Landing/HeroSection";
import { SectionLoader } from "@/components/shared/SectionLoader";
import { ClientOnly } from "@/components/shared/ClientOnly";

// Lazy load below-the-fold sections
const ProcessSection = lazy(() =>
  import("./Landing/ProcessSection").then((module) => ({
    default: module.ProcessSection,
  })),
);
const TestimonialsSection = lazy(() =>
  import("./Landing/TestimonialsSection").then((module) => ({
    default: module.TestimonialsSection,
  })),
);
const ProjectShowcaseSection = lazy(() =>
  import("./Landing/ProjectShowcaseSection").then((module) => ({
    default: module.ProjectShowcaseSection,
  })),
);
const VendorSavingsSection = lazy(() =>
  import("./Landing/VendorSavingsSection").then((module) => ({
    default: module.VendorSavingsSection,
  })),
);
const RealSpacesSection = lazy(() =>
  import("./Landing/RealSpacesSection").then((module) => ({
    default: module.RealSpacesSection,
  })),
);
const BenefitsSection = lazy(() =>
  import("@/components/shared/BenefitsSection").then((module) => ({
    default: module.BenefitsSection,
  })),
);
const ConsultationCTA = lazy(() =>
  import("./Landing/ConsultationCTA").then((module) => ({
    default: module.ConsultationCTA,
  })),
);
const FeaturedSection = lazy(() =>
  import("@/components/shared/FeaturedSection").then((module) => ({
    default: module.FeaturedSection,
  })),
);

export default function Landing() {
  return (
    <>
      <title>Online Interior Design Services | Expert Interior Designers</title>
      <meta
        name="description"
        content="Transform your space with professional online interior design services. Get personalized designs from top experts starting at affordable prices. #1 Rated on Forbes."
      />
      <meta name="theme-color" content="#FFFFFF" />

      <div className="flex flex-col w-full">
        {/* Hero is Eager Loaded to preserve LCP */}
        <HeroSection />

        <ClientOnly fallback={<SectionLoader height="h-[600px]" />}>
          <ProcessSection />
        </ClientOnly>

        <ClientOnly fallback={<SectionLoader height="h-[800px]" />}>
          <TestimonialsSection />
        </ClientOnly>

        <ClientOnly fallback={<SectionLoader height="h-[800px]" />}>
          <ProjectShowcaseSection />
        </ClientOnly>

        <ClientOnly fallback={<SectionLoader height="h-[400px]" />}>
          <VendorSavingsSection />
        </ClientOnly>

        <ClientOnly fallback={<SectionLoader height="h-[800px]" />}>
          <RealSpacesSection />
        </ClientOnly>

        <ClientOnly fallback={<SectionLoader height="h-[600px]" />}>
          <BenefitsSection />
        </ClientOnly>

        <ClientOnly fallback={<SectionLoader height="h-[400px]" />}>
          <ConsultationCTA />
        </ClientOnly>

        <ClientOnly fallback={<SectionLoader height="h-[300px]" />}>
          <FeaturedSection />
        </ClientOnly>
      </div>
    </>
  );
}
