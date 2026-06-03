import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/shared/Logo";
import { navbarLinks } from "@/app/routes/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/shared/mode-toggle";

export function Navbar() {

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">

        {/* 1. Logo */}
        <Logo />

        {/* --- DESKTOP NAVIGATION (NavigationMenu) --- */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navbarLinks.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <Link to={item.href || "#"} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent hover:text-gold focus:bg-transparent focus:text-gold pr-0")}>
                        <span className="font-serif text-base font-medium transition-colors">
                          {item.title}
                        </span>
                      </Link>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent hover:text-gold data-[state=open]:text-gold px-2 pl-1">
                          <span className="sr-only">Toggle {item.title}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href || "#"}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link to={item.href || "#"} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent hover:text-gold focus:bg-transparent focus:text-gold")}>
                      <span className="font-serif text-base font-medium transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 3. Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2 items-center">
            <ModeToggle />
            <Link to="/auth/login">
              <Button className="text-gold bg-muted/50 hover:bg-muted/80">Log In</Button>
            </Link>
            {/*<Button variant="gold">Start Project</Button>*/}
          </div>

          {/* 4. Mobile Menu (Sheet) */}
          {/* --- MOBILE MENU (Updated for Submenus) --- */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto px-6 w-[300px]">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Navigation links</SheetDescription>

              <div className="flex flex-col gap-6 mt-10">
                <Logo />
                <div className="flex flex-col gap-2">
                  <Accordion type="single" collapsible className="w-full">
                    {navbarLinks.map((item) => (
                      <div key={item.title} className="flex flex-col">
                        {item.items ? (
                          // Mobile "Accordion" style
                          <AccordionItem value={item.title} className="border-b-0">
                            <div className="flex items-center justify-between py-2 border-b">
                                <Link 
                                    to={item.href || "#"} 
                                    className="flex-1 py-1 text-lg font-serif font-medium hover:text-gold"
                                >
                                    {item.title}
                                </Link>
                                <AccordionTrigger className="w-12 py-1 hover:no-underline justify-end">
                                    <span className="sr-only">Toggle</span>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent className="flex flex-col gap-3 pl-4 border-l-2 border-neutral-100 dark:border-neutral-800 pb-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href || "#"}
                                  className="text-sm font-medium text-muted-foreground hover:text-gold py-1"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          // Standard Mobile Link
                          <Link
                            to={item.href || "#"}
                            className="py-3 text-lg font-serif font-medium hover:text-gold border-b-0"
                          >
                            {item.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </Accordion>

                  <hr className="my-2 border-border" />
                  <Link to="/auth/login" className="py-2 text-lg font-medium hover:text-gold">
                    Log In
                  </Link>
                  <Button variant="gold" className="w-full mt-2">Start Project</Button>
                  <div className="mt-4 flex justify-center">
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}


// --- HELPER COMPONENT FOR DROPDOWN ITEMS ---
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-gold focus:bg-accent focus:text-gold",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-serif">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";