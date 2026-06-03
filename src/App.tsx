import { RouterProvider } from "react-router-dom";
import { appRouter } from "@/app/routes";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("framer-motion").then((res) => res.domAnimation);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LazyMotion features={loadFeatures}>
        <RouterProvider router={appRouter} />
      </LazyMotion>
    </ThemeProvider>
  );
}