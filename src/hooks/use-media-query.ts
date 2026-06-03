import { useCallback, useSyncExternalStore } from "react";

/**
 * A hook that listens for a CSS media query and returns whether it matches.
 * Uses useSyncExternalStore to avoid cascading renders from setState-in-effect.
 * @param query - CSS media query string, e.g. "(min-width: 768px)"
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = () => window.matchMedia(query).matches;

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
