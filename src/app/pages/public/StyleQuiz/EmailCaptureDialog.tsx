import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

interface EmailCaptureDialogProps {
  isOpen: boolean;
  onSubmit: (email: string) => void;
  onSocialLogin: (provider: "google" | "facebook") => void;
  onSkip: () => void;
}

export function EmailCaptureDialog({
  isOpen,
  onSubmit,
  onSocialLogin,
  onSkip,
}: EmailCaptureDialogProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      onSubmit(email);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[520px] p-0 overflow-hidden bg-background text-foreground border-none shadow-2xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
            <Mail className="w-7 h-7 text-gold" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
              Enter Your Email To Get Your Style!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              We'll send your personalized style results straight to your inbox.
            </DialogDescription>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-center text-base bg-muted border-input focus-visible:ring-gold focus-visible:border-gold"
            />
            <Button
              type="submit"
              variant="gold"
              disabled={!email || !email.includes("@")}
              className="w-full py-6 text-sm font-bold tracking-[0.15em] uppercase shadow-none rounded-sm disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100"
            >
              Save & Continue
            </Button>
          </form>

          {/* Divider */}
          <div className="w-full flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              or continue with
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Login Buttons */}
          <div className="w-full space-y-3">
            {/* Google */}
            <Button
              type="button"
              variant="outline"
              onClick={() => onSocialLogin("google")}
              className="w-full py-5 text-sm font-bold tracking-wider uppercase gap-3 border-border hover:border-foreground/30"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Facebook */}
            <Button
              type="button"
              onClick={() => onSocialLogin("facebook")}
              className="w-full py-5 text-sm font-bold tracking-wider uppercase gap-3 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white border-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </Button>
          </div>

          {/* Privacy Footer */}
          <p className="text-[11px] text-muted-foreground leading-relaxed max-w-sm">
            By continuing, you agree to our{" "}
            <a href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </a>
            .
          </p>

          {/* Skip link */}
          <button
            type="button"
            onClick={onSkip}
            className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            No thanks, skip
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
