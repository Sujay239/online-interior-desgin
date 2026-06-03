import { Outlet } from "react-router-dom";

import { Navbar } from "@/app/components/Navbar/Navbar";
import { Footer } from "@/app/components/Footer/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

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
      <Footer />
    </div>
  );
}