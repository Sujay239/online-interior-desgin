import { lazy, Suspense } from "react";
import { SectionLoader } from "@/components/shared/SectionLoader";

const BlogHero = lazy(() => import("./Blog/BlogHero").then(module => ({ default: module.BlogHero })));
const RecentStories = lazy(() => import("./Blog/RecentStories").then(module => ({ default: module.RecentStories })));
const CategoryTabsSection = lazy(() => import("./Blog/CategoryTabsSection").then(module => ({ default: module.CategoryTabsSection })));
const TipsAndGuidesSection = lazy(() => import("./Blog/TipsAndGuidesSection").then(module => ({ default: module.TipsAndGuidesSection })));

export default function BlogIndex() {
  return (
    <>
      <title>Our Journal | Interior Design Insights</title>
      <meta name="description" content="Discover the latest trends, expert advice, and inspiration from our world-class interior designers to elevate your living spaces." />
      
      <div className="flex flex-col w-full bg-background text-foreground">
        {/* Hero is Eager Loaded to preserve LCP */}
        <BlogHero />

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
          <RecentStories />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
          <CategoryTabsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
          <TipsAndGuidesSection />
        </Suspense>
      </div>
    </>
  );
}