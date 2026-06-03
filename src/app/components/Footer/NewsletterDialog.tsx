import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";
import { CircleCheck, CheckIcon } from "lucide-react";

interface NewsletterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
}

export function NewsletterDialog({ isOpen, onOpenChange, email }: NewsletterDialogProps) {
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Wrapper to handle closing and resetting state
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      // Small delay to allow fade out animation if needed, or immediate reset
      setTimeout(() => {
        setPhone("");
        setAgreed(false);
        setIsSubmitted(false);
      }, 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitted:", { email, phone, agreed });
    setIsSubmitted(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background text-foreground border-none shadow-2xl">
        <div className="p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">

          {isSubmitted ? (
            /* Thank You State */
            <div className="flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-[#8DA37D] rounded-full flex items-center justify-center mb-2 shadow-sm">
                <CheckIcon className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <div className="space-y-3">
                <DialogTitle className="font-serif text-4xl md:text-5xl text-foreground tracking-tight">
                  Thank You for Signing Up
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-lg font-light tracking-wide">
                  Expect deals and offers coming your way soon!
                </DialogDescription>
              </div>
            </div>
          ) : (
            /* Form State */
            <div className="flex flex-col items-center text-center space-y-6">

              {/* Success Message (Initial "You're In" banner) */}
              <div className="flex items-center gap-2 text-green-700 font-medium">
                <CircleCheck className="w-5 h-5 fill-green-100 text-green-600" />
                <span>You're In! Thanks For Your Email Sign Up!</span>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Main Content */}
              <div className="space-y-2">
                <DialogTitle className="font-serif text-3xl md:text-4xl text-foreground">
                  Want VIP Access to More Perks?
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-base">
                  Sign up for SMS alerts to receive exclusive offers and special updates in real time!
                </DialogDescription>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 mt-4">
                <div className="flex justify-center">
                  <PhoneInput
                    placeholder="Enter your mobile number"
                    value={phone}
                    onChange={setPhone}
                    className="w-full"
                    defaultCountry="US"
                  />
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Checkbox
                    id="sms-agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1 border-input data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                  />
                  <label
                    htmlFor="sms-agree"
                    className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Yes, send me exclusive offers and updates. I agree to the <a href="/terms" className="underline hover:text-foreground">Terms</a>, <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>, and understand I can unsubscribe anytime. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.
                  </label>
                </div>

                <div className="space-y-4 pt-2">
                  <Button
                    type="submit"
                    variant="gold"
                    className="w-full py-6 text-base font-bold tracking-widest uppercase shadow-none rounded-sm disabled:bg-neutral-200 disabled:text-neutral-400 disabled:opacity-100"
                    disabled={!agreed || !phone}
                  >
                    Receive SMS
                  </Button>

                  <button
                    type="button"
                    onClick={() => handleOpenChange(false)}
                    className="text-sm text-muted-foreground underline hover:text-foreground"
                  >
                    No, I don't want exclusive deals
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
