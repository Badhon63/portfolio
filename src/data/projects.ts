export interface Project {
  slug: string;
  name: string;
  image: string;
  category: string;
  tags: string[];
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
}

// Replace image URLs with your real project screenshots later
// (e.g. /images/projects/project-1.png placed in the public folder).
export const PROJECTS: Project[] = [
  {
    slug: "mr-punctuation",
    name: "Mr. Punctuation – AI Grammar & Punctuation Corrector",
    image: "/images/mr.punctuation.png",
    category: "Full Stack",
    tags: ["Next.js", "AI", "PWA", "Authentication"],
    description:
      "An AI-powered writing assistant that fixes grammar, punctuation and sentence structure instantly. Users write or paste text in a clean editor, get corrected output in seconds, and can download the result as a PDF or TXT file. Every correction is saved to a personal history, and a dashboard lets logged-in users review their past work. The app is built as a PWA, so the core experience keeps working even when the user is offline.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI API",
      "Authentication",
      "PWA / Service Worker",
      "Vercel",
    ],
    liveLink: "https://mr-punctuation-meoc.vercel.app/",
    githubLink: "https://github.com/Badhon63/Mr.punctuation",
    challenges:
      "The biggest challenge was making the tool reliable offline while still depending on an AI service for corrections. I solved this by adding a service worker with caching so the app shell and editor load without a connection, showing a clear offline notice, and handling failed requests gracefully. Generating clean PDF and TXT downloads from the corrected text on the client side was another challenge I worked through.",
    improvements:
      "Planning to add side-by-side highlighting of what changed in each correction, support for tone and style suggestions, multi-language correction, and usage analytics on the dashboard, along with further performance and UI polish.",
  },
  {
    slug: "petpulse",
    name: "PetPulse – Premium Pet Marketplace",
    image: "/images/petpulse.png",
    category: "Full Stack",
    tags: ["Next.js", "Tailwind CSS", "Authentication", "Marketplace"],
    description:
      "A premium pet marketplace where users can discover healthy pets for adoption and shop for quality pet food and accessories in one trusted place. Visitors can browse listings by category (dogs, cats, pet food, accessories) on the Explore page, register or log in to their account, and read about the platform's verification process. Every pet listing is backed by vet-checked health records, with secure buyer and breeder screening, safe pet delivery, and local payment options like bKash, Nagad, cards and Cash on Delivery.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Authentication",
      "Vercel",
    ],
    liveLink: "https://petpulse-flame.vercel.app/",
    githubLink: "https://github.com/Badhon63/petpulse",
    challenges:
      "The biggest challenge was designing a marketplace that feels trustworthy, since buying a pet involves real concern about scams and animal health. I focused on a clear browsing flow with category-based exploration, dedicated login and register pages, and trust-building sections like vet-checked profiles, verified breeders and a health guarantee. Keeping the layout fully responsive across the home, explore and about pages was another challenge I worked through.",
    improvements:
      "Planning to add search and filters by breed, age and price, a favorites list, online checkout with bKash and Nagad integration, a breeder dashboard for managing listings, and a real-time chat between buyers and breeders.",
  },
  {
    slug: "usedbay",
    name: "UsedBay – Second-Hand Marketplace",
    image: "/images/usedbay.png",
    category: "Full Stack",
    tags: ["Next.js", "Tailwind CSS", "Marketplace", "Authentication"],
    description:
      "A second-hand marketplace where people can buy and sell pre-owned products safely and efficiently. Users can browse all products, explore listings by popular categories like Electronics, Furniture, Vehicles, Fashion and Mobile Phones, and view verified seller profiles with ratings and review counts. The platform builds trust through verified sellers, buyer and seller success stories, and live marketplace statistics, while a sustainability section highlights the environmental impact of choosing used over new.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Authentication",
      "Vercel",
    ],
    liveLink: "https://used-bay.vercel.app/",
    githubLink: "https://github.com/Badhon63/UsedBay",
    challenges:
      "The biggest challenge was building trust in a marketplace where buyers and sellers don't know each other. I addressed this with verified seller badges, ratings and review counts, and clear product category browsing. Structuring a large amount of homepage content (featured products, categories, testimonials, stats and seller profiles) into a clean, responsive layout without hurting load performance was another challenge I worked through.",
    improvements:
      "Planning to add advanced search and filters by price, condition and location, a wishlist, in-app chat between buyers and sellers, online payment integration, and a seller dashboard for managing listings and orders.",
  },
];
