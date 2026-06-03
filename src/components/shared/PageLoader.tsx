import { Loader2 } from "lucide-react";

export function PageLoader() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-gold" />
        <p className="font-serif text-sm text-muted-foreground animate-pulse">
          Loading masterpiece...
        </p>
      </div>
    </div>
  );
}