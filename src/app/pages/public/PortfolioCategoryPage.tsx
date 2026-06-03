import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioService } from "@/services/portfolioService";
import type { PortfolioCategory } from "@/types/portfolio";
import { PortfolioCategoryHero } from "./PortfolioCategory/PortfolioCategoryHero";
const PortfolioProjectShowcase = lazy(() => import("./PortfolioCategory/PortfolioProjectShowcase").then(m => ({ default: m.PortfolioProjectShowcase })));
import { SectionLoader } from "@/components/shared/SectionLoader";

/**
 * PortfolioCategoryPage — Reads :categorySlug from the URL,
 * fetches the matching category data, and renders:
 *   1. Dynamic hero section
 *   2. Multiple Before/After project showcases
 *   (CTA is handled by parent PortfolioLayout)
 */
export default function PortfolioCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  const [currentSlug, setCurrentSlug] = useState<string | undefined>(categorySlug);
  const [category, setCategory] = useState<PortfolioCategory | null>(null);

  // Derived state pattern: if slug changes in URL, clear data to trigger loading state synchronously
  if (categorySlug !== currentSlug) {
    setCurrentSlug(categorySlug);
    setCategory(null);
  }

  useEffect(() => {
    if (!categorySlug) return;

    portfolioService
      .getCategoryBySlug(categorySlug)
      .then((data) => {
        if (!data) {
          // Category not found — redirect to main portfolio
          navigate("/portfolio", { replace: true });
          return;
        }
        setCategory(data);
      });
  }, [categorySlug, navigate]);

  // If category is null, we are either loading initially or fetching a new category
  if (!category) {
    return <SectionLoader height="h-screen" />;
  }

  return (
    <>
      <title>{category.name} Interior Design Portfolio | Decorilla</title>
      <meta
        name="description"
        content={`Explore our ${category.name.toLowerCase()} interior design portfolio. See real before & after transformations by our expert designers.`}
      />

      <div className="flex flex-col w-full">
        {/* Hero — eager loaded for LCP */}
        <PortfolioCategoryHero
          name={category.name}
          heroImage={category.heroImage}
          heroSubtitle={category.heroSubtitle}
        />

        {/* Project Showcases */}
        {category.projects.map((project, index) => (
          <Suspense key={project.id} fallback={<SectionLoader height="h-[600px]" />}>
            <PortfolioProjectShowcase
              project={project}
              index={index}
              reversed={index % 2 !== 0}
            />
          </Suspense>
        ))}
      </div>
    </>
  );
}
