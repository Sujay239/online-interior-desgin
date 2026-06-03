import { useState, useEffect, Suspense } from "react";
import type { ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * ClientOnly safely renders lazy-loaded components on the client-side only.
 * This prevents SSR hydration mismatches (React Error #419) by rendering
 * the fallback placeholder on the server, and the actual component (wrapped in Suspense)
 * once the client mounts.
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}
