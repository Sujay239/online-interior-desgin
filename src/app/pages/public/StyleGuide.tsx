import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/shared/Logo";
import { PageLoader } from "@/components/shared/PageLoader";

export default function StyleGuide() {
  return (
    <div className="container mx-auto py-10 space-y-12">
      <div className="border-b pb-4">
        <h1 className="font-serif text-4xl font-bold">Design System v1.0</h1>
        <p className="text-muted-foreground">Reference sheet for "Decorilla" Luxury Aesthetic</p>
      </div>

      {/* 1. Brand Assets */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">1. Brand Identity</h2>
        <div className="flex items-center gap-8 p-6 bg-neutral-100 rounded-lg">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Dark Logo</p>
            <Logo />
          </div>
          <div className="bg-black p-4 rounded">
            <p className="text-xs text-neutral-400 mb-2">Light Logo</p>
            <Logo variant="light" />
          </div>
        </div>
      </section>

      {/* 2. Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">2. Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 w-full bg-gold rounded shadow-md" />
            <p className="font-medium">Gold (Primary Accent)</p>
            <code className="text-xs">bg-gold / #D4AF37</code>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full bg-neutral-900 rounded shadow-md" />
            <p className="font-medium">Neutral 900 (Text)</p>
            <code className="text-xs">text-neutral-900</code>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full bg-neutral-100 rounded shadow-md" />
            <p className="font-medium">Neutral 100 (Backgrounds)</p>
            <code className="text-xs">bg-neutral-100</code>
          </div>
        </div>
      </section>

      {/* 3. Typography */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">3. Typography</h2>
        <div className="border p-6 rounded-lg space-y-6">
          <div>
            <h1 className="font-serif text-6xl">Display Serif H1</h1>
            <p className="text-xs text-muted-foreground">Playfair Display / 6xl</p>
          </div>
          <div>
            <h2 className="font-serif text-4xl">Heading Serif H2</h2>
            <p className="text-xs text-muted-foreground">Playfair Display / 4xl</p>
          </div>
          <div>
            <p className="font-sans text-base leading-relaxed max-w-2xl">
              Body Text (Lato). Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-xs text-muted-foreground mt-1">Lato / Base</p>
          </div>
        </div>
      </section>

      {/* 4. Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">4. Interactive Elements</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="gold" size="lg">Gold CTA</Button>
          <Button variant="default">Default Dark</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost Link</Button>
        </div>
      </section>

      {/* 5. Inputs */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-xl font-bold">5. Form Elements</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input placeholder="name@example.com" />
          </div>
          <Button variant="gold" className="w-full">Subscribe</Button>
        </div>
      </section>

       {/* 6. Loader */}
       <section className="space-y-4">
        <h2 className="text-xl font-bold">6. Loading State</h2>
        <div className="border p-10 rounded-lg">
            <PageLoader />
        </div>
      </section>
    </div>
  );
}