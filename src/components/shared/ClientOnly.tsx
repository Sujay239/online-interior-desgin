import { Suspense } from "react";
import type { ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Lightweight Suspense wrapper for lazy-loaded components.
 * Since this app is pure CSR (no SSR), we don't need to delay rendering
 * until after mount. A simple Suspense boundary is sufficient and avoids
 * the extra render frame that was causing massive CLS (0.414) on the footer.
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
