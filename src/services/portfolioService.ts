// ============================================================
// Portfolio Service — Mock data and service methods for portfolio
// categories and projects. Follows the blogService.ts pattern.
// ============================================================

import type { PortfolioCategory, PortfolioProject } from "@/types/portfolio";

// --- MOCK DESIGNERS ---
const DESIGNERS = {
  renata: {
    name: "Renata P.",
    avatar: "https://i.pravatar.cc/150?u=renata-designer",
    role: "Senior Interior Designer",
  },
  meric: {
    name: "Meric S.",
    avatar: "https://i.pravatar.cc/150?u=meric-designer",
    role: "Lead Designer",
  },
  elena: {
    name: "Elena R.",
    avatar: "https://i.pravatar.cc/150?u=elena-designer",
    role: "Design Director",
  },
  james: {
    name: "James K.",
    avatar: "https://i.pravatar.cc/150?u=james-designer",
    role: "Interior Architect",
  },
};

// --- MOCK CATEGORIES WITH PROJECTS ---
const MOCK_CATEGORIES: PortfolioCategory[] = [
  // ==============================
  // LIVING ROOM
  // ==============================
  {
    id: "cat-living",
    slug: "living-room",
    name: "Living Room",
    description:
      "Discover our curated collection of living room transformations — from cozy family spaces to sleek modern lounges.",
    heroImage:
      "/images/unsplash/1600210492486-724fe5c67fb0.webp",
    heroSubtitle:
      "Explore stunning living room makeovers crafted by our expert designers",
    projects: [
      {
        id: "lr-1",
        slug: "sleek-modern-living-room",
        title: "Sleek & Modern Living Room Interior Design",
        description:
          "A complete transformation of a dated living space into a contemporary haven with clean lines and warm textures.",
        designer: DESIGNERS.renata,
        beforeImages: [
          {
            src: "/images/unsplash/1513694203232-719a280e022f.webp",
            alt: "Living Room Before - Empty space",
          },
          {
            src: "/images/unsplash/1532323544230-7191fd51bc1b.webp",
            alt: "Living Room Before - Old furniture",
          },
          {
            src: "/images/unsplash/1540518614846-7eded433c457.webp",
            alt: "Living Room Before - Bare walls",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1600210492486-724fe5c67fb0.webp",
            alt: "Living Room After - Modern design",
          },
          {
            src: "/images/unsplash/1600607687939-ce8a6c25118c.webp",
            alt: "Living Room After - Detail view",
          },
          {
            src: "/images/unsplash/1600566753190-17f0baa2a6c3.webp",
            alt: "Living Room After - Wide angle",
          },
        ],
        testimonial: {
          text: "Thank you for all of the beautiful ideas! I just love my new living room design. It's a perfect blend of contemporary without being too cold.",
          author: "Liz",
        },
        tags: ["Modern", "Contemporary", "Neutral Palette"],
      },
      {
        id: "lr-2",
        slug: "cozy-bohemian-lounge",
        title: "Cozy Bohemian Lounge Makeover",
        description:
          "Layered textures, warm earth tones, and eclectic decor brought this living room to life with bohemian charm.",
        designer: DESIGNERS.elena,
        beforeImages: [
          {
            src: "/images/unsplash/1558618666-fcd25c85f82e.webp",
            alt: "Bohemian Before - Plain room",
          },
          {
            src: "/images/unsplash/1505691938895-1758d7feb511.webp",
            alt: "Bohemian Before - Empty corner",
          },
          {
            src: "/images/unsplash/1523755231516-e43fd2e8dca5.webp",
            alt: "Bohemian Before - Dated decor",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1618219908412-a29a1bb7b86e.webp",
            alt: "Bohemian After - Layered textiles",
          },
          {
            src: "/images/unsplash/1616486338812-3dadae4b4ace.webp",
            alt: "Bohemian After - Seating area",
          },
          {
            src: "/images/unsplash/1615529328331-f8917597711f.webp",
            alt: "Bohemian After - Detail",
          },
        ],
        testimonial: {
          text: "My living room finally feels like me. The mix of plants, textures, and colors is exactly what I dreamed of. I never want to leave!",
          author: "Sarah",
        },
        tags: ["Bohemian", "Eclectic", "Warm Tones"],
      },
      {
        id: "lr-3",
        slug: "minimalist-scandinavian-space",
        title: "Minimalist Scandinavian Living Space",
        description:
          "Clean lines, natural materials, and a restrained color palette create a serene Scandinavian-inspired retreat.",
        designer: DESIGNERS.meric,
        beforeImages: [
          {
            src: "/images/unsplash/1493663284031-b7e3aefcae8e.webp",
            alt: "Scandi Before - Cluttered room",
          },
          {
            src: "/images/unsplash/1507003211169-0a1dd7228f2d.webp",
            alt: "Scandi Before - Old layout",
          },
          {
            src: "/images/unsplash/1512917774080-9991f1c4c750.webp",
            alt: "Scandi Before - Existing furniture",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1586023492125-27b2c045efd7.webp",
            alt: "Scandi After - Clean design",
          },
          {
            src: "/images/unsplash/1583845112239-97ef1341b271.webp",
            alt: "Scandi After - Natural light",
          },
          {
            src: "https://images.unsplash.com/photo-1598928506311-c55ez463fdd8?q=80&w=1200&auto=format&fit=crop",
            alt: "Scandi After - Minimal detail",
          },
        ],
        testimonial: {
          text: "Less really is more. The space feels so much bigger and calmer now. Every piece has a purpose and it's absolutely beautiful.",
          author: "Marcus",
        },
        tags: ["Scandinavian", "Minimalist", "Natural"],
      },
    ],
  },

  // ==============================
  // KITCHEN & DINING
  // ==============================
  {
    id: "cat-kitchen",
    slug: "kitchen",
    name: "Kitchen & Dining",
    description:
      "Explore our kitchen and dining room transformations — from chef-worthy kitchens to elegant entertaining spaces.",
    heroImage:
      "/images/unsplash/1556909114-f6e7ad7d3136.webp",
    heroSubtitle:
      "Functional beauty where culinary art meets interior design",
    projects: [
      {
        id: "kt-1",
        slug: "chefs-dream-kitchen",
        title: "Chef's Dream Kitchen Renovation",
        description:
          "A professional-grade kitchen transformation with marble countertops, custom cabinetry, and a massive island.",
        designer: DESIGNERS.james,
        beforeImages: [
          {
            src: "/images/unsplash/1556909172-54557c7e4fb7.webp",
            alt: "Kitchen Before - Outdated cabinets",
          },
          {
            src: "/images/unsplash/1484154218962-a197022b5858.webp",
            alt: "Kitchen Before - Old appliances",
          },
          {
            src: "/images/unsplash/1574739782594-db4ead022697.webp",
            alt: "Kitchen Before - Limited counter space",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1556909114-f6e7ad7d3136.webp",
            alt: "Kitchen After - Marble island",
          },
          {
            src: "/images/unsplash/1600585154340-be6161a56a0c.webp",
            alt: "Kitchen After - Custom cabinetry",
          },
          {
            src: "/images/unsplash/1570222094114-d054a817e56b.webp",
            alt: "Kitchen After - Pendant lighting",
          },
        ],
        testimonial: {
          text: "This kitchen has completely changed how our family cooks and entertains. The island is a game-changer — it's the heart of our home now.",
          author: "David & Maria",
        },
        tags: ["Luxury", "Professional", "Marble"],
      },
      {
        id: "kt-2",
        slug: "open-plan-kitchen-diner",
        title: "Open-Plan Kitchen & Dining Transformation",
        description:
          "Knocking down walls to create a seamless flow between cooking and dining, perfect for modern family living.",
        designer: DESIGNERS.renata,
        beforeImages: [
          {
            src: "/images/unsplash/1502672260266-1c1ef2d93688.webp",
            alt: "Kitchen-Diner Before - Separate rooms",
          },
          {
            src: "/images/unsplash/1560448204-e02f11c3d0e2.webp",
            alt: "Kitchen-Diner Before - Cramped kitchen",
          },
          {
            src: "/images/unsplash/1560185007-cde436f6a4d0.webp",
            alt: "Kitchen-Diner Before - Small dining area",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1600596542815-ffad4c1539a9.webp",
            alt: "Kitchen-Diner After - Open plan",
          },
          {
            src: "/images/unsplash/1600607687644-c7171b42498f.webp",
            alt: "Kitchen-Diner After - Dining area",
          },
          {
            src: "/images/unsplash/1600566753086-00f18fb6b3ea.webp",
            alt: "Kitchen-Diner After - Island seating",
          },
        ],
        testimonial: {
          text: "We can finally cook and chat with our guests at the same time. The open plan design makes everything feel so spacious and connected.",
          author: "Tom",
        },
        tags: ["Open Plan", "Modern", "Family"],
      },
      {
        id: "kt-3",
        slug: "rustic-farmhouse-kitchen",
        title: "Rustic Farmhouse Kitchen Design",
        description:
          "Reclaimed wood, apron-front sinks, and vintage hardware create a warm and inviting farmhouse-style kitchen.",
        designer: DESIGNERS.elena,
        beforeImages: [
          {
            src: "/images/unsplash/1560185127-6ed189bf02f4.webp",
            alt: "Farmhouse Before - Generic kitchen",
          },
          {
            src: "/images/unsplash/1556909211-36987daf7b4d.webp",
            alt: "Farmhouse Before - White cabinets",
          },
          {
            src: "/images/unsplash/1565538810643-b5bdb714032a.webp",
            alt: "Farmhouse Before - Basic layout",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1600585152220-90363fe7e115.webp",
            alt: "Farmhouse After - Reclaimed wood",
          },
          {
            src: "/images/unsplash/1583845112203-29329902332e.webp",
            alt: "Farmhouse After - Apron sink",
          },
          {
            src: "/images/unsplash/1556909114-44e3e70034e2.webp",
            alt: "Farmhouse After - Vintage hardware",
          },
        ],
        testimonial: {
          text: "It feels like a country estate kitchen but in our suburban home. The reclaimed wood beams and farmhouse sink are absolutely stunning.",
          author: "Patricia",
        },
        tags: ["Farmhouse", "Rustic", "Warm"],
      },
    ],
  },

  // ==============================
  // BEDROOM
  // ==============================
  {
    id: "cat-bedroom",
    slug: "bedroom",
    name: "Bedroom",
    description:
      "Browse our bedroom design portfolio — from serene master suites to chic guest rooms and cozy retreats.",
    heroImage:
      "/images/unsplash/1616594039964-ae9021a400a0.webp",
    heroSubtitle:
      "Serene sleeping spaces designed for rest, renewal, and luxury",
    projects: [
      {
        id: "br-1",
        slug: "serene-master-suite",
        title: "Serene Master Suite Redesign",
        description:
          "Soft neutrals, plush textiles, and ambient lighting create the ultimate relaxation sanctuary.",
        designer: DESIGNERS.elena,
        beforeImages: [
          {
            src: "/images/unsplash/1513694203232-719a280e022f.webp",
            alt: "Master Suite Before - Plain room",
          },
          {
            src: "/images/unsplash/1560185127-6ed189bf02f4.webp",
            alt: "Master Suite Before - Dated decor",
          },
          {
            src: "/images/unsplash/1502672260266-1c1ef2d93688.webp",
            alt: "Master Suite Before - Basic layout",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1616594039964-ae9021a400a0.webp",
            alt: "Master Suite After - Plush bed",
          },
          {
            src: "/images/unsplash/1618773928121-c32242e63f39.webp",
            alt: "Master Suite After - Ambient lighting",
          },
          {
            src: "/images/unsplash/1615874959474-d609969a20ed.webp",
            alt: "Master Suite After - Reading nook",
          },
        ],
        testimonial: {
          text: "I finally have the bedroom sanctuary I've always wanted. The layered lighting and soft textures make it impossible to have a bad night's sleep.",
          author: "Amanda",
        },
        tags: ["Serene", "Luxury", "Neutral"],
      },
      {
        id: "br-2",
        slug: "modern-guest-bedroom",
        title: "Modern Guest Bedroom Refresh",
        description:
          "A welcoming guest bedroom with boutique-hotel vibes — thoughtful amenities and sophisticated styling.",
        designer: DESIGNERS.meric,
        beforeImages: [
          {
            src: "/images/unsplash/1558618666-fcd25c85f82e.webp",
            alt: "Guest Room Before - Storage room",
          },
          {
            src: "/images/unsplash/1523755231516-e43fd2e8dca5.webp",
            alt: "Guest Room Before - Dual purpose",
          },
          {
            src: "/images/unsplash/1505691938895-1758d7feb511.webp",
            alt: "Guest Room Before - Basic setup",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1522771739844-6a9f6d5f14af.webp",
            alt: "Guest Room After - Boutique style",
          },
          {
            src: "/images/unsplash/1560448205-4d9b3e6bb6db.webp",
            alt: "Guest Room After - Cozy details",
          },
          {
            src: "/images/unsplash/1617325247661-675ab4b64ae2.webp",
            alt: "Guest Room After - Welcome touches",
          },
        ],
        testimonial: {
          text: "Our guests always say they feel like they're staying in a boutique hotel. The attention to detail is incredible — fresh flowers, good lighting, plush linens.",
          author: "Jennifer",
        },
        tags: ["Modern", "Boutique", "Welcoming"],
      },
      {
        id: "br-3",
        slug: "luxe-primary-retreat",
        title: "Luxe Primary Retreat with Walk-in Closet",
        description:
          "A full primary bedroom suite with custom walk-in closet, seating area, and spa-inspired ensuite.",
        designer: DESIGNERS.james,
        beforeImages: [
          {
            src: "/images/unsplash/1493663284031-b7e3aefcae8e.webp",
            alt: "Primary Suite Before - Large but plain",
          },
          {
            src: "/images/unsplash/1512917774080-9991f1c4c750.webp",
            alt: "Primary Suite Before - Unused space",
          },
          {
            src: "/images/unsplash/1507003211169-0a1dd7228f2d.webp",
            alt: "Primary Suite Before - Basic closet",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1600607687939-ce8a6c25118c.webp",
            alt: "Primary Suite After - Luxe bedroom",
          },
          {
            src: "/images/unsplash/1600566753190-17f0baa2a6c3.webp",
            alt: "Primary Suite After - Walk-in closet",
          },
          {
            src: "/images/unsplash/1586023492125-27b2c045efd7.webp",
            alt: "Primary Suite After - Seating area",
          },
        ],
        testimonial: {
          text: "The walk-in closet alone was worth it, but the entire suite feels like a five-star hotel now. We're living in luxury every single day.",
          author: "Robert & Claire",
        },
        tags: ["Luxury", "Walk-in Closet", "Spa"],
      },
    ],
  },

  // ==============================
  // HOME OFFICE
  // ==============================
  {
    id: "cat-office",
    slug: "office",
    name: "Home Office",
    description:
      "See our home office designs — productive workspaces that balance function, comfort, and personal style.",
    heroImage:
      "/images/unsplash/1618221195710-dd6b41faaea6.webp",
    heroSubtitle:
      "Workspaces designed for productivity, creativity, and comfort",
    projects: [
      {
        id: "of-1",
        slug: "executive-home-office",
        title: "Executive Home Office Design",
        description:
          "A sophisticated workspace with dark wood, leather accents, and professional video-call-ready backdrop.",
        designer: DESIGNERS.james,
        beforeImages: [
          {
            src: "/images/unsplash/1560185127-6ed189bf02f4.webp",
            alt: "Office Before - Spare bedroom",
          },
          {
            src: "/images/unsplash/1558618666-fcd25c85f82e.webp",
            alt: "Office Before - Folding table",
          },
          {
            src: "/images/unsplash/1505691938895-1758d7feb511.webp",
            alt: "Office Before - No storage",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1618221195710-dd6b41faaea6.webp",
            alt: "Office After - Executive desk",
          },
          {
            src: "/images/unsplash/1497366216548-37526070297c.webp",
            alt: "Office After - Built-in shelving",
          },
          {
            src: "/images/unsplash/1524758631624-e2822e304c36.webp",
            alt: "Office After - Meeting area",
          },
        ],
        testimonial: {
          text: "My colleagues on Zoom always compliment my background now. More importantly, I'm more productive than ever in this beautiful space.",
          author: "Michael",
        },
        tags: ["Executive", "Professional", "Dark Wood"],
      },
      {
        id: "of-2",
        slug: "creative-studio-workspace",
        title: "Creative Studio Workspace",
        description:
          "An inspiring creative workspace with ample natural light, pin boards, and flexible work zones.",
        designer: DESIGNERS.renata,
        beforeImages: [
          {
            src: "/images/unsplash/1523755231516-e43fd2e8dca5.webp",
            alt: "Studio Before - Empty room",
          },
          {
            src: "/images/unsplash/1502672260266-1c1ef2d93688.webp",
            alt: "Studio Before - No character",
          },
          {
            src: "/images/unsplash/1560448204-e02f11c3d0e2.webp",
            alt: "Studio Before - Poor lighting",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1593062096033-9a26b09da705.webp",
            alt: "Studio After - Art-filled space",
          },
          {
            src: "/images/unsplash/1556761175-4b46a572b786.webp",
            alt: "Studio After - Pin boards",
          },
          {
            src: "/images/unsplash/1497215728101-856f4ea42174.webp",
            alt: "Studio After - Flexible zones",
          },
        ],
        testimonial: {
          text: "As a graphic designer, I needed a space that sparks creativity. This studio has everything — great light, inspiring walls, and room to spread out.",
          author: "Nina",
        },
        tags: ["Creative", "Bright", "Flexible"],
      },
      {
        id: "of-3",
        slug: "compact-workspace-design",
        title: "Compact Workspace Under the Stairs",
        description:
          "Maximizing an underused nook into a fully functional home office with clever storage solutions.",
        designer: DESIGNERS.meric,
        beforeImages: [
          {
            src: "/images/unsplash/1493663284031-b7e3aefcae8e.webp",
            alt: "Nook Before - Wasted space",
          },
          {
            src: "/images/unsplash/1512917774080-9991f1c4c750.webp",
            alt: "Nook Before - Under stairs",
          },
          {
            src: "/images/unsplash/1507003211169-0a1dd7228f2d.webp",
            alt: "Nook Before - Storage mess",
          },
        ],
        afterImages: [
          {
            src: "/images/unsplash/1518455027359-f3f8164ba6bd.webp",
            alt: "Nook After - Built-in desk",
          },
          {
            src: "/images/unsplash/1542546068979-b6affb46ea8f.webp",
            alt: "Nook After - Clever shelving",
          },
          {
            src: "/images/unsplash/1497366754035-f200968a6e72.webp",
            alt: "Nook After - Complete setup",
          },
        ],
        testimonial: {
          text: "I never thought the space under our stairs could become a real office. Now it's my favorite spot in the house — compact but incredibly functional.",
          author: "Alex",
        },
        tags: ["Compact", "Clever Storage", "Nook"],
      },
    ],
  },
];

// --- SERVICE METHODS ---
export const portfolioService = {
  /**
   * Get all portfolio categories (without full project data for listing).
   */
  getCategories: async (): Promise<PortfolioCategory[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_CATEGORIES);
      }, 400);
    });
  },

  /**
   * Get a single category by its URL slug, including all projects.
   */
  getCategoryBySlug: async (
    slug: string
  ): Promise<PortfolioCategory | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const category = MOCK_CATEGORIES.find((c) => c.slug === slug);
        resolve(category || null);
      }, 500);
    });
  },

  /**
   * Get a single project by its slug (across all categories).
   */
  getProjectBySlug: async (
    slug: string
  ): Promise<PortfolioProject | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        for (const category of MOCK_CATEGORIES) {
          const project = category.projects.find((p) => p.slug === slug);
          if (project) {
            resolve(project);
            return;
          }
        }
        resolve(null);
      }, 400);
    });
  },
};
