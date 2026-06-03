import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4">
      <h1 className="font-serif text-9xl font-bold text-neutral-200">404</h1>
      <h2 className="mt-4 font-serif text-3xl font-bold text-foreground">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="mt-8 flex gap-4">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <MoveLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Link to="/portfolio">
          <Button variant="gold">
            View Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}