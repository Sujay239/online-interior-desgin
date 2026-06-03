import { cn } from "@/lib/utils";

interface SectionLoaderProps {
  height?: string;
  className?: string;
}

export function SectionLoader({ height = "h-96", className }: SectionLoaderProps) {
  return (
    <div 
      className={cn(`w-full ${height} bg-muted/10 animate-pulse`, className)} 
      role="presentation" 
    />
  );
}
