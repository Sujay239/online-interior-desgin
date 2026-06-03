// ============================================================
// Pricing Data — Static configuration for the 3-tier pricing page.
// Plans are tailored for an interior design studio service.
// ============================================================

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "ESSENTIALS",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "1 room design concept",
      "2 initial design revisions",
      "Curated shopping list",
      "3D room visualization",
      "Color palette guide",
    ],
    description:
      "Perfect for refreshing a single room with professional guidance",
    buttonText: "Start Free Consultation",
    href: "/quiz",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Up to 3 room designs",
      "Unlimited design revisions",
      "Dedicated interior designer",
      "Detailed floor plans",
      "3D photorealistic renderings",
      "Furniture & decor sourcing",
      "Priority support",
    ],
    description: "Ideal for homeowners looking to transform multiple spaces",
    buttonText: "Get Started",
    href: "/quiz",
    isPopular: true,
  },
  {
    name: "FULL HOME",
    price: "599",
    yearlyPrice: "479",
    period: "per month",
    features: [
      "Whole-home design package",
      "Senior designer dedicated to you",
      "Unlimited rooms & revisions",
      "Custom furniture design",
      "Contractor coordination",
      "In-person site consultation",
      "Vendor discount program",
      "White-glove project management",
    ],
    description:
      "For complete home transformations with a dedicated design team",
    buttonText: "Contact Our Team",
    href: "/contact",
    isPopular: false,
  },
];
