import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { MainLayout } from "@/app/layouts/MainLayout";
import { SuspenseWrapper } from "./routeUtils";
import { BlogLayout } from "@/app/layouts/BlogLayout";
import { PortfolioLayout } from "@/app/layouts/PortfolioLayout";

// Eagerly load Landing — it's the entry point, always needed, and only ~5 KiB.
// Lazy-loading it caused a route-level Suspense boundary that triggered a 0.414 CLS
// (PageLoader at 50vh → full page content at ~5000px = massive footer jump).
import Landing from "@/app/pages/public/Landing";

// Lazy Load Secondary Pages
const PortfolioPage = lazy(() => import("@/app/pages/public/Portfolio"));
const PortfolioCategoryPage = lazy(() => import("@/app/pages/public/PortfolioCategoryPage"));
const HowItWorksPage = lazy(() => import("@/app/pages/public/HowItWorksPage"));
const BlogIndex = lazy(() => import("@/app/pages/public/BlogIndex"));
const BlogPost = lazy(() => import("@/app/pages/public/BlogPost"));
const StyleQuizPage = lazy(() => import("@/app/pages/public/StyleQuizPage"));
const StyleQuizStart = lazy(() => import("@/app/pages/public/StyleQuizStart"));
const PricingPage = lazy(() => import("@/app/pages/public/PricingPage"));



export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "portfolio",
        element: <PortfolioLayout />,
        children: [
          {
            index: true,
            element: SuspenseWrapper(PortfolioPage),
          },
          {
            path: ":categorySlug",
            element: SuspenseWrapper(PortfolioCategoryPage),
          },
        ]
      },
      {
        path: "how-it-works",
        element: SuspenseWrapper(HowItWorksPage),
      },
      {
        path: "quiz",
        element: SuspenseWrapper(StyleQuizPage),
      },
      {
        path: "style-quiz-start",
        element: SuspenseWrapper(StyleQuizStart),
      },
      {
        path: "pricing",
        element: SuspenseWrapper(PricingPage),
      },
      {
        path: "blog",
        element: <BlogLayout />, // Inner Shell
        children: [
          {
            index: true, // Maps to /blog
            element: SuspenseWrapper(BlogIndex),
          },
          {
            path: "category/:categorySlug", // Maps to /blog/category/trends
            element: SuspenseWrapper(BlogIndex), 
          },
          {
            path: ":slug", // Maps to /blog/my-post-title
            element: SuspenseWrapper(BlogPost),
          }
        ]
      }
    ],
  },
];