import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SectionLoader } from "@/components/shared/SectionLoader";

const CTASection = lazy(() =>
  import("@/components/shared/CTASection").then((m) => ({
    default: m.CTASection,
  }))
);

/**
 * PortfolioLayout — Sub-layout for all /portfolio/* routes.
 * Renders child route content via <Outlet /> and appends a shared CTA section.
 * Modeled after BlogLayout.tsx.
 */
export function PortfolioLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      {/* Child route content (Portfolio index or PortfolioCategoryPage) */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Shared CTA section at the bottom of every portfolio page */}
      <Suspense fallback={<SectionLoader height="h-[300px]" />}>
        <CTASection />
      </Suspense>
    </div>
  );
}
