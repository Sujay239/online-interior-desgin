import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link 
      to="/" 
      className={cn(
        "font-serif text-2xl font-bold tracking-tight transition-opacity hover:opacity-80",
        variant === "light" ? "text-white" : "text-foreground",
        className
      )}
    >
      Modern Interior Decor
    </Link>
  );
}