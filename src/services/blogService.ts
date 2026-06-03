import type { BlogPost, BlogTag, PaginatedBlogResponse } from "@/types/blog";

// --- MOCK DATA ---
const MOCK_AUTHOR = {
  id: "a1",
  name: "Elena Rodriguez",
  avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  role: "Senior Lead Designer"
};

const CATEGORY_BEFORE_AFTER = { id: "c-ba", name: "Before & After", slug: "before-and-after" };
const CATEGORY_TIPS_GUIDES = { id: "c-tg", name: "Tips & Guides", slug: "tips-and-guides" };
const CATEGORY_DECOR_TRENDS = { id: "c-dt", name: "Decor Trends", slug: "decor-trends" };
const CATEGORY_SEASONAL = { id: "c-se", name: "Seasonal", slug: "seasonal" };
const CATEGORY_BUSINESS_OFFICE = { id: "c-bo", name: "Business Office", slug: "business-office" };
const CATEGORY_STYLES_GUIDES = { id: "c-sg", name: "Styles & Guides", slug: "styles-and-guides" };

const TAGS = {
  FULL_HOME: { id: "t-fh", name: "Full Home", slug: "full-home", icon: "Home" } as BlogTag,
  OFFICES: { id: "t-of", name: "Offices", slug: "offices", icon: "Briefcase" } as BlogTag,
  LIVING_DINING: { id: "t-ld", name: "Living & Dining", slug: "living-and-dining", icon: "Sofa" } as BlogTag,
  BEDROOMS: { id: "t-bd", name: "Bedrooms", slug: "bedrooms", icon: "Bed" } as BlogTag,
  KITCHEN_BATH: { id: "t-kb", name: "Kitchen & Bath", slug: "kitchen-and-bath", icon: "Bath" } as BlogTag,
};

const MOCK_POSTS: BlogPost[] = [
  // Full Home
  {
    id: "fh-1", slug: "historic-victorian-revival", title: "Historic Victorian Revival: A Full Home Transformation",
    description: "See how we brought modern luxury to a 19th-century Victorian home while preserving its historic charm.",
    featuredImage: "/images/unsplash/1600596542815-ffad4c1539a9.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-20T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.FULL_HOME], readingTime: 8,
  },
  {
    id: "fh-2", slug: "mid-century-modern-update", title: "Mid-Century Modern Masterpiece Revived",
    description: "A complete overhaul of a classic mid-century home, blending original architecture with contemporary comforts.",
    featuredImage: "/images/unsplash/1600607687920-4e2a09cf159d.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-18T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.FULL_HOME], readingTime: 7,
  },
  {
    id: "fh-3", slug: "coastal-retreat-makeover", title: "From Drab to Fab: Coastal Retreat Makeover",
    description: "Transforming a tired beach house into a light-filled, luxurious coastal haven for the whole family.",
    featuredImage: "/images/unsplash/1600585154340-be6161a56a0c.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-15T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.FULL_HOME], readingTime: 6,
  },
  {
    id: "fh-4", slug: "urban-industrial-loft", title: "Urban Industrial Loft: A Complete Reimagining",
    description: "How we turned an empty warehouse space into a stunning, multi-level industrial loft.",
    featuredImage: "/images/unsplash/1600566753190-17f0baa2a6c3.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-10T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.FULL_HOME], readingTime: 9,
  },
  {
    id: "fh-5", slug: "suburban-family-home", title: "Elevating the Everyday: Suburban Family Home Redesign",
    description: "Creating a cohesive, stylish, and highly functional home for a busy family of five.",
    featuredImage: "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=1200&auto=format&fit=crop",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-05T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.FULL_HOME], readingTime: 7,
  },
  
  // Offices
  {
    id: "of-1", slug: "modern-tech-startup-office", title: "Energizing a Tech Startup's Headquarters",
    description: "A dynamic and collaborative office space designed to inspire creativity and boost productivity.",
    featuredImage: "/images/unsplash/1497366216548-37526070297c.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-28T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.OFFICES], readingTime: 5,
  },
  {
    id: "of-2", slug: "executive-suite-refresh", title: "Executive Suite Elegance: A Corporate Refresh",
    description: "Bringing warmth and modern sophistication to a traditional law firm's executive suites.",
    featuredImage: "/images/unsplash/1497366811353-6870744d04b2.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-20T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.OFFICES], readingTime: 6,
  },
  {
    id: "of-3", slug: "home-office-conversion", title: "The Ultimate Work-From-Home Sanctuary",
    description: "Transforming an underutilized guest room into a state-of-the-art, inspiring home office.",
    featuredImage: "/images/unsplash/1524758631624-e2822e304c36.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-15T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.OFFICES], readingTime: 4,
  },
  {
    id: "of-4", slug: "creative-agency-studio", title: "Bold and Bright: A Creative Agency's New Studio",
    description: "Designing a vibrant, open-concept office that reflects the agency's innovative brand identity.",
    featuredImage: "https://images.unsplash.com/photo-1582653291997-079a1c04e5d1?q=80&w=1200&auto=format&fit=crop",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-10T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.OFFICES], readingTime: 5,
  },
  {
    id: "of-5", slug: "wellness-focused-coworking", title: "A Wellness-Focused Co-Working Space",
    description: "Integrating biophilic design and ergonomic layouts for a healthier, more productive shared workspace.",
    featuredImage: "/images/unsplash/1497215842964-222b430dc094.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-05T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.OFFICES], readingTime: 7,
  },

  // Living & Dining
  {
    id: "ld-1", slug: "open-concept-living-dining", title: "Breaking Down Walls: An Open-Concept Reveal",
    description: "Removing barriers to create a seamless, light-filled living and dining area perfect for entertaining.",
    featuredImage: "/images/unsplash/1586023492125-27b2c045efd7.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-12-20T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.LIVING_DINING], readingTime: 6,
  },
  {
    id: "ld-2", slug: "formal-dining-room-update", title: "Modernizing a Formal Dining Room",
    description: "Updating a dated formal dining room with statement lighting, custom joinery, and rich textures.",
    featuredImage: "/images/unsplash/1617806118233-18e1de247200.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-12-15T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.LIVING_DINING], readingTime: 5,
  },
  {
    id: "ld-3", slug: "cozy-family-room-makeover", title: "Creating the Ultimate Cozy Family Room",
    description: "Transforming a stark living space into a warm, inviting hub for family movie nights.",
    featuredImage: "/images/unsplash/1583847268964-b28ce8f30d22.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-12-10T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.LIVING_DINING], readingTime: 4,
  },
  {
    id: "ld-4", slug: "luxury-penthouse-living", title: "Luxury Penthouse Living Area Redesign",
    description: "Maximizing city views and introducing bespoke furniture pieces for a high-end penthouse upgrade.",
    featuredImage: "/images/unsplash/1600607686527-6fb886090705.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-12-05T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.LIVING_DINING], readingTime: 7,
  },
  {
    id: "ld-5", slug: "indoor-outdoor-flow", title: "Blurring the Lines: Indoor-Outdoor Living",
    description: "Redesigning a living room to seamlessly connect with an outdoor entertaining patio.",
    featuredImage: "/images/unsplash/1600585154340-be6161a56a0c.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-11-28T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.LIVING_DINING], readingTime: 6,
  },

  // Bedrooms
  {
    id: "bd-1", slug: "serene-master-suite", title: "A Serene Master Suite Sanctuary",
    description: "Turning a chaotic bedroom into a calming, spa-like retreat focused on rest and relaxation.",
    featuredImage: "/images/unsplash/1616594039964-ae9021a400a0.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-11-20T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.BEDROOMS], readingTime: 6,
  },
  {
    id: "bd-2", slug: "boutique-hotel-guest-room", title: "Boutique Hotel Vibes for a Guest Room",
    description: "Elevating a basic guest bedroom with luxurious linens, custom lighting, and chic decor.",
    featuredImage: "/images/unsplash/1595526114035-0d45ed16cfbf.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-11-15T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.BEDROOMS], readingTime: 4,
  },
  {
    id: "bd-3", slug: "kids-room-with-custom-bunks", title: "Playful Yet Practical: Kids' Room Makeover",
    description: "Featuring custom built-in bunk beds and clever storage solutions for a growing family.",
    featuredImage: "https://images.unsplash.com/photo-1505693314120-0d443867ff91?q=80&w=1200&auto=format&fit=crop",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-11-10T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.BEDROOMS], readingTime: 5,
  },
  {
    id: "bd-4", slug: "moody-primary-bedroom", title: "Embracing the Dark: A Moody Primary Bedroom",
    description: "Using deep color palettes and rich textures to create an intimate, sophisticated sleep space.",
    featuredImage: "/images/unsplash/1540518614846-7eded433c457.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-11-05T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.BEDROOMS], readingTime: 6,
  },
  {
    id: "bd-5", slug: "attic-bedroom-conversion", title: "Maximizing the Attic: A Sloped Ceiling Success",
    description: "Transforming a dusty attic space into a charming, light-filled primary suite with custom storage.",
    featuredImage: "/images/unsplash/1522708323590-d24dbb6b0267.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-10-28T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.BEDROOMS], readingTime: 7,
  },

  // Kitchen & Bath
  {
    id: "kb-1", slug: "chef-inspired-kitchen", title: "From Cramped to Chef-Inspired Kitchen",
    description: "A complete kitchen gut job featuring a massive island, pro-grade appliances, and custom cabinetry.",
    featuredImage: "/images/unsplash/1556910103-1c02745aae4d.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-10-20T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.KITCHEN_BATH], readingTime: 8,
  },
  {
    id: "kb-2", slug: "spa-like-master-bath", title: "Creating a Spa-Like Master Bathroom Retreat",
    description: "Replacing a dated 90s tub with a massive wet room, double vanity, and luxurious natural stone.",
    featuredImage: "/images/unsplash/1584622650111-993a426fbf0a.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-10-15T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.KITCHEN_BATH], readingTime: 6,
  },
  {
    id: "kb-3", slug: "modern-farmhouse-kitchen", title: "A Bright Modern Farmhouse Kitchen Update",
    description: "Refreshing a dark, dated kitchen with white shaker cabinets, warm wood tones, and open shelving.",
    featuredImage: "/images/unsplash/1556911220-e15b29be8c8f.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-10-10T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.KITCHEN_BATH], readingTime: 7,
  },
  {
    id: "kb-4", slug: "bold-powder-room", title: "Tiny but Mighty: A Bold Powder Room Redesign",
    description: "Using dramatic wallpaper and statement lighting to make a huge impact in a small half-bath.",
    featuredImage: "/images/unsplash/1620626011761-996317b8d101.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-10-05T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.KITCHEN_BATH], readingTime: 4,
  },
  {
    id: "kb-5", slug: "scandinavian-minimalist-kitchen", title: "Scandinavian Minimalist Kitchen Renovation",
    description: "Sleek, handleless cabinetry and integrated appliances define this ultra-clean, modern kitchen.",
    featuredImage: "/images/unsplash/1600566752355-35792bedcfea.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-09-28T09:00:00Z",
    category: CATEGORY_BEFORE_AFTER, tags: [TAGS.KITCHEN_BATH], readingTime: 6,
  },

  // Tips & Guides
  {
    id: "tg-1", slug: "how-to-choose-the-right-white-paint", title: "How to Choose the Perfect White Paint",
    description: "A comprehensive guide to understanding undertones, LRV, and natural lighting when selecting white paint.",
    featuredImage: "/images/unsplash/1542385151-efd9000785a0.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-23T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.FULL_HOME], readingTime: 8,
  },
  {
    id: "tg-2", slug: "budgeting-for-a-remodel", title: "The Ultimate Guide to Kitchen Remodel Budgets",
    description: "Where to splurge and where to save during a full kitchen renovation project.",
    featuredImage: "/images/unsplash/1556910103-1c02745aae4d.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-19T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.KITCHEN_BATH], readingTime: 10,
  },
  {
    id: "tg-3", slug: "mixing-metal-finishes", title: "Mastering the Art of Mixing Metal Finishes",
    description: "Rules of thumb for combining brass, nickel, matte black, and chrome across your home fixtures.",
    featuredImage: "/images/unsplash/1620626011761-996317b8d101.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-12T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.KITCHEN_BATH], readingTime: 5,
  },
  {
    id: "tg-4", slug: "maximizing-small-spaces", title: "10 Clever Ways to Maximize Small Bedrooms",
    description: "From vertical storage to multi-purpose furniture, how to make the most of limited square footage.",
    featuredImage: "/images/unsplash/1522708323590-d24dbb6b0267.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-08T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.BEDROOMS], readingTime: 7,
  },
  {
    id: "tg-5", slug: "home-office-ergonomics", title: "A Guide to Home Office Ergonomics and Lighting",
    description: "Set up your remote workspace for maximum productivity and physical well-being.",
    featuredImage: "/images/unsplash/1524758631624-e2822e304c36.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-02-01T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.OFFICES], readingTime: 6,
  },
  {
    id: "tg-6", slug: "investing-in-living-room-furniture", title: "When to Invest in Designer Furniture",
    description: "Understanding the difference between \"fast furniture\" and investment pieces that will last generations.",
    featuredImage: "/images/unsplash/1583847268964-b28ce8f30d22.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-25T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.LIVING_DINING], readingTime: 9,
  },
  {
    id: "tg-7", slug: "styling-bookshelves", title: "Pro Tips for Styling Bookshelves like a Designer",
    description: "Learn the secrets of visual balance, grouping, and layering for beautiful built-in styling.",
    featuredImage: "/images/unsplash/1617806118233-18e1de247200.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-18T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.LIVING_DINING], readingTime: 4,
  },
  {
    id: "tg-8", slug: "sustainable-materials-guide", title: "The Ultimate Guide to Sustainable Materials",
    description: "How to source eco-friendly flooring, low-VOC paints, and responsibly harvested woods.",
    featuredImage: "/images/unsplash/1600210492486-724fe5c67fb0.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-12T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.FULL_HOME], readingTime: 11,
  },
  {
    id: "tg-9", slug: "lighting-layering-101", title: "Lighting 101: The Importance of Layering",
    description: "A room is never complete with just overhead lighting. Learn the interplay of ambient, task, and accent lighting.",
    featuredImage: "/images/unsplash/1540518614846-7eded433c457.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2026-01-05T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.BEDROOMS], readingTime: 6,
  },
  {
    id: "tg-10", slug: "preparing-for-your-first-consultation", title: "How to Prepare for Your First Design Consultation",
    description: "What to bring, questions to ask, and how to communicate your vision effectively to an interior designer.",
    featuredImage: "/images/unsplash/1497366216548-37526070297c.webp",
    content: "<p>Full content will go here...</p>", author: MOCK_AUTHOR, publishDate: "2025-12-28T09:00:00Z",
    category: CATEGORY_TIPS_GUIDES, tags: [TAGS.OFFICES], readingTime: 5,
  }
];

// Dynamically generate 10 posts for the requested categories to flush out the mock data
const generatedCategories = [
  CATEGORY_BEFORE_AFTER, CATEGORY_TIPS_GUIDES, CATEGORY_DECOR_TRENDS,
  CATEGORY_SEASONAL, CATEGORY_BUSINESS_OFFICE, CATEGORY_STYLES_GUIDES
];

const mockImages = [
  "/images/unsplash/1600596542815-ffad4c1539a9.webp",
  "/images/unsplash/1618221195710-dd6b41faaea6.webp",
  "/images/unsplash/1600210492486-724fe5c67fb0.webp",
  "/images/unsplash/1593642532400-2682810df593.webp",
  "/images/unsplash/1556911220-e15b29be8c8f.webp",
  "/images/unsplash/1560067174-c5a3a8f37060.webp",
  "/images/unsplash/1513694203232-719a280e022f.webp"
];

generatedCategories.forEach((cat, catIndex) => {
  for (let i = 1; i <= 10; i++) {
    const defaultTag = cat.id === 'c-bo' ? TAGS.OFFICES :
                       cat.id === 'c-se' ? TAGS.BEDROOMS :
                       cat.id === 'c-kb' ? TAGS.KITCHEN_BATH : TAGS.FULL_HOME;
                       
    MOCK_POSTS.push({
      id: `gen-${cat.id}-${i}`,
      slug: `${cat.slug}-post-${i}`,
      title: `${cat.name} Inspiration & Tips ${i}`,
      description: `Explore the latest design trends and comprehensive guides focusing on ${cat.name.toLowerCase()} to elevate your space.`,
      featuredImage: mockImages[(catIndex + i) % mockImages.length],
      content: "<p>Detailed interior design masterclass content will go here. Featuring comprehensive layouts and before/after comparisons.</p>",
      author: MOCK_AUTHOR,
      publishDate: new Date(Date.now() - (i * 86400000) - (catIndex * 1000000)).toISOString(),
      category: cat,
      tags: [defaultTag],
      readingTime: 4 + (i % 6)
    });
  }
});

// --- SERVICE METHODS ---
export const blogService = {
  
  // Fetch all posts (Simulating pagination)
  getPosts: async (page = 1, limit = 10): Promise<PaginatedBlogResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: MOCK_POSTS,
          total: MOCK_POSTS.length,
          page,
          limit,
          totalPages: 1,
        });
      }, 600); // Simulate network latency
    });
  },

  // Fetch a single post by its slug
  getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = MOCK_POSTS.find((p) => p.slug === slug);
        resolve(post || null);
      }, 400);
    });
  }
};