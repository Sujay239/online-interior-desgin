import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/shared/Logo";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, PinIcon } from "lucide-react";
import { footerLinks } from "@/app/routes/navigation";
import { NewsletterDialog } from "./NewsletterDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
  const [email, setEmail] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email) {
      e.preventDefault(); // Prevent default behavior (form submission, focus jump)
      if (email.includes("@")) {
        setShowDialog(true);
      }
    }
  };

  return (
    <footer className="bg-background text-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">

        {/* Top Section: Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Dynamic Sections from Navigation */}
          {/* Dynamic Sections from Navigation */}

          {/* MOBILE: Accordion View */}
          <div className="md:hidden col-span-1">
            <Accordion type="single" collapsible className="w-full">
              {Object.values(footerLinks).map((section) => (
                <AccordionItem key={section.title} value={section.title} className="border-b-0">
                  <AccordionTrigger className="font-bold text-sm tracking-wider text-foreground uppercase hover:no-underline py-4">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <Link to={link.href || "#"} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* DESKTOP: Grid View */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="hidden md:block">
              <h3 className="font-bold text-sm tracking-wider mb-6 text-foreground uppercase">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link to={link.href || "#"} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 4. Newsletter & Socials */}
          <div className="lg:pl-8">
            <h3 className="font-bold text-sm tracking-wider mb-4 text-foreground uppercase">GET EXCLUSIVE TIPS & OFFERS</h3>
            <div className="flex gap-2 mb-10">
              <Input
                placeholder="Enter email address"
                className="bg-muted border-input text-foreground placeholder:text-muted-foreground rounded-md h-12 focus-visible:ring-gold focus-visible:border-gold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <h3 className="font-bold text-sm tracking-wider mb-4 text-foreground uppercase">JOIN OUR COMMUNITY</h3>
            <div className="flex gap-6">
              <a href="#" aria-label="Follow us on Instagram" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Follow us on Facebook" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="Follow us on Pinterest" className="text-muted-foreground hover:text-foreground transition-colors"><PinIcon className="w-5 h-5" /></a>
              <a href="#" aria-label="Follow us on Twitter" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" aria-label="Subscribe to our YouTube channel" className="text-muted-foreground hover:text-foreground transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border w-full mb-10" />

        {/* Bottom Section: Logo & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo (Forced White/Light for Footer) */}
          <div className="mb-4">
            <Logo />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <Link to="/terms" className="hover:text-foreground transition-colors">Our Terms & Conditions</Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span className="text-neutral-700">|</span>
            <span>Copyright © 2026</span>
          </div>
        </div>

      </div>

      <NewsletterDialog
        isOpen={showDialog}
        onOpenChange={setShowDialog}
        email={email}
      />
    </footer>
  );
}