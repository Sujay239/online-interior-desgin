import { Suspense } from "react";
import { PageLoader } from "@/components/shared/PageLoader";

// Helper to wrap lazy components in Suspense
export const SuspenseWrapper = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);
