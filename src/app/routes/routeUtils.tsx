import { PageLoader } from "@/components/shared/PageLoader";
import { ClientOnly } from "@/components/shared/ClientOnly";

// Helper to wrap lazy components in Suspense
export const SuspenseWrapper = (Component: React.ComponentType) => (
  <ClientOnly fallback={<PageLoader />}>
    <Component />
  </ClientOnly>
);
