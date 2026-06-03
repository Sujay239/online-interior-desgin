import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./routes.public";
import { authRoutes } from "./routes.auth";
import NotFound from "@/app/pages/public/NotFound";

export const appRouter = createBrowserRouter([
  ...publicRoutes,
  ...authRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);