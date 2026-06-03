import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { AuthLayout } from "@/app/layouts/AuthLayout";
import { SuspenseWrapper } from "./routeUtils";

const LoginPage = lazy(() => import("@/app/pages/auth/Login"));

export const authRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: SuspenseWrapper(LoginPage),
      },
    ],
  },
];