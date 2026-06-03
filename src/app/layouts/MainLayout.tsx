import { Outlet } from "react-router-dom";
import { lazy } from "react";
import { Navbar } from "@/app/components/Navbar/Navbar";
// Lazy load footer since it's below the fold
const Footer = lazy(() => import("@/app/components/Footer/Footer").then(m => ({ default: m.Footer })));
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { ClientOnly } from "@/components/shared/ClientOnly";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Navbar stays fixed or sticky at the top */}
      <Navbar />
      
      {/* Main Content Area - Grows to fill space */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Global Footer */}
      <ClientOnly fallback={<div className="h-40 bg-muted/20 animate-pulse w-full"></div>}>
        <Footer />
      </ClientOnly>
    </div>
  );
}