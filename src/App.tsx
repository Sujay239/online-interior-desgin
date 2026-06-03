import { RouterProvider } from "react-router-dom";
import { appRouter } from "@/app/routes";
import { ThemeProvider } from "@/components/shared/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}