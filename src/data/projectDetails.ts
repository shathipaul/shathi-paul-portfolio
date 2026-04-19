import type { ProjectDetail } from "@/components/ProjectDetailPage";

export const projectDetails: ProjectDetail[] = [
  // ── 01 TRAVEL BUDDY ────────────────────────────────────────────────────────
  {
    id: "1",
    title: "TRAVEL BUDDY",
    sub: "Travel Management / Full Stack",
    image: "https://i.ibb.co.com/HTwq5KXj/p1.webp",
    liveUrl: "https://travel-buddy-demo.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/travel-buddy",

    overview:
      "Travel Buddy is a full-stack travel management platform built to simplify how people discover, plan, and book trips. Users can browse curated destinations, build multi-leg itineraries, collaborate with travel companions, manage bookings end-to-end, and track trip status in real time — all from a single, responsive interface.",

    motto: "Plan your journey, not just your destination.",

    features: [
      "Interactive destination discovery with filtering by region, budget, and travel type",
      "Multi-step trip builder supporting complex, multi-destination itineraries",
      "Role-based access — separate dashboards for travelers, guides, and admins",
      "Integrated booking flow with real-time availability checking and confirmation",
      "Trip history dashboard with booking status tracking",
      "Fully responsive UI across desktop, tablet, and mobile",
    ],

    techStack: {
      Frontend: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux Toolkit",
      ],
      Backend: ["Node.js", "Express.js", "Mongoose"],
      Database: ["MongoDB"],
      Tools: ["Vercel", "Git", "Postman"],
    },

    architecture:
      "The frontend is a Next.js SSR/SSG app consuming a REST API built with Node.js and Express. Mongoose models structure trip, user, and booking data in MongoDB. Redux Toolkit handles client-side auth state and the multi-step booking flow. Framer Motion drives page transitions and scroll-triggered section reveals.",
  },

  // ── 02 EVENTIDE MOMENTO ────────────────────────────────────────────────────
  {
    id: "2",
    title: "EVENTIDE MOMENTO",
    sub: "Event Management / Full Stack",
    image: "https://i.ibb.co/mFTQ0Tn2/p8.webp",
    liveUrl: "https://eventide-momento.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/Eventide-Momento",

    overview:
      "Eventide Momento is a full-stack event management platform for creating, managing, and attending events. It supports invitations, location-based filtering, integrated ticketing, Stripe-powered refunds, and role-based access control for organizers, attendees, and admins.",

    motto: "Every event, effortlessly organized.",

    features: [
      "Event creation and management with rich detail pages and media support",
      "Location-based filtering to discover nearby events",
      "Invitation system with RSVP tracking and attendee management",
      "Integrated ticketing with Stripe-powered purchase and refund flows",
      "Role-based access control for organizers, attendees, and admins",
      "Real-time seat availability and capacity management",
    ],

    techStack: {
      Frontend: ["Next.js", "TypeScript", "Redux Toolkit"],
      Backend: ["Node.js", "Prisma"],
      Database: ["PostgreSQL", "Redis"],
      Integrations: ["Stripe"],
      Tools: ["Vercel", "Git"],
    },

    architecture:
      "The Next.js frontend communicates with a Node.js API layer that uses Prisma as an ORM over PostgreSQL for structured relational data. Redis handles session caching and event seat lock TTLs to prevent double-booking. Stripe webhooks drive the payment confirmation and refund lifecycle asynchronously.",
  },

  // ── 03 TECH MART ───────────────────────────────────────────────────────────
  {
    id: "3",
    title: "TECH MART",
    sub: "E-commerce / Full Stack",
    image: "https://i.ibb.co.com/ZpNtGY8G/p2.webp",
    liveUrl: "https://tech-mart-co.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/tech-mart",

    overview:
      "Tech Mart is a full-stack e-commerce platform for technology products featuring cart management, order handling, and a custom PC build system. It is designed for scalability and smooth UX across all devices.",

    motto: "Build your setup, your way.",

    features: [
      "Product catalog with filtering by category, brand, price, and specifications",
      "Custom PC builder — configure compatible components and add the full build to cart",
      "Shopping cart with persistent state and quantity management",
      "Order management with status tracking from placement to delivery",
      "Redis-powered caching for fast catalog and session performance",
      "Fully responsive experience optimized for browsing and purchasing",
    ],

    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      Backend: ["Node.js", "Express.js", "Mongoose"],
      Database: ["MongoDB", "Redis"],
      Tools: ["Vercel", "Git"],
    },

    architecture:
      "A Next.js frontend connects to a Node.js/Express REST API backed by MongoDB via Mongoose. Redis caches product catalog pages and user sessions for fast repeat visits. Redux Toolkit manages cart state client-side with optimistic updates synced to the backend on checkout.",
  },

  // ── 04 BETTER PLATE ────────────────────────────────────────────────────────
  {
    id: "4",
    title: "BETTER PLATE",
    sub: "Meal Subscription / Full Stack",
    image: "https://i.ibb.co/XrTPmnqR/p2.webp",
    liveUrl: "https://better-plate.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/Better-Plate",

    overview:
      "Better Plate is a meal subscription system that lets users browse meal plans, subscribe to packages, and manage recurring orders with secure Stripe payment integration.",

    motto: "Better food, delivered on your terms.",

    features: [
      "Curated meal plan catalog with nutritional details and dietary filters",
      "Flexible subscription builder — choose frequency, portion size, and duration",
      "Stripe-powered recurring payments with plan upgrade and cancellation flows",
      "Order dashboard with upcoming delivery tracking and order history",
      "Redis-powered session and caching layer for snappy UX",
      "Fully responsive across mobile, tablet, and desktop",
    ],

    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      Backend: ["Node.js", "Express.js", "Mongoose"],
      Database: ["MongoDB", "Redis"],
      Integrations: ["Stripe"],
      Tools: ["Vercel", "Git"],
    },

    architecture:
      "Next.js renders the subscription catalog server-side for SEO. Node.js/Express handles subscription logic, recurring order generation, and Stripe webhook events for the payment lifecycle. MongoDB stores user, plan, and order data. Redis manages session state and rate-limits checkout requests.",
  },

  // ── 05 GEORGIA ─────────────────────────────────────────────────────────────
  {
    id: "5",
    title: "GEORGIA",
    sub: "Photography Portfolio / Frontend",
    image: "https://i.ibb.co/1ff7Hb7Q/p4.webp",
    liveUrl: "https://wedding-photograpy-website.vercel.app",
    // githubUrl: "https://github.com/shathipaul/photograpy-website",

    overview:
      "Georgia is a wedding and event photography portfolio featuring curated galleries, elegant full-bleed image presentation, and smooth transitions — built with a performance-first approach using Next.js image optimization.",

    motto: "Every frame tells a story worth keeping.",

    features: [
      "Curated wedding and event photography galleries organized by shoot",
      "Elegant full-bleed image presentation with smooth page transitions",
      "Contact and inquiry form for booking consultations",
      "Responsive layout optimized for high-resolution photo display",
      "Performance-first image loading with Next.js Image optimization",
    ],

    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      Tools: ["Vercel", "Git"],
    },

    architecture:
      "A fully static Next.js site using SSG for all gallery and page routes. Images are optimized through next/image for fast loading across all screen sizes. Framer Motion handles gallery transitions and scroll-based entrance animations. No backend — hosted entirely on Vercel's edge network.",
  },

  // ── 06 GRAND DUCHY ─────────────────────────────────────────────────────────
  {
    id: "6",
    title: "GRAND DUCHY",
    sub: "E-book Platform / Full Stack",
    image: "https://i.ibb.co/Rpy3S7pw/p5.webp",
    liveUrl: "https://grand-duchy-demo.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/grand-duchy-demo",

    overview:
      "Grand Duchy is a digital e-book reading platform with a curated library, in-browser reader, progress tracking, bookmarking, and a clean distraction-free reading interface.",

    motto: "Read without distractions. Remember what matters.",

    features: [
      "Curated digital library organized by genre and author",
      "In-browser reading interface with a clean, distraction-free layout",
      "Reader progress tracking — pick up where you left off",
      "Bookmarking for saving chapters and key passages",
      "Material UI design system focused on readability and accessibility",
    ],

    techStack: {
      Frontend: ["Next.js", "TypeScript", "Material UI"],
      Backend: ["Node.js"],
      Tools: ["Vercel", "Git"],
    },

    architecture:
      "A Next.js app with static generation for the library catalog. Material UI provides the design system. A lightweight Node.js layer handles user progress persistence. Reading state is managed via local storage with a server sync on session resume.",
  },

  // ── 07 JESSICA PRISTON ─────────────────────────────────────────────────────
  {
    id: "7",
    title: "JESSICA PRISTON",
    sub: "Journalist Portfolio / Frontend",
    image: "https://i.ibb.co/RTVhTSWz/p6.webp",
    liveUrl: "https://journalist-portfolio-website.vercel.app",
    // githubUrl: "https://github.com/shathipaul/journalist-portfolio-website",

    overview:
      "Jessica Priston is a clean editorial journalist portfolio showcasing published articles, features, and professional bylines — with strong typographic hierarchy and a minimal, distraction-free design that puts the writing first.",

    motto: "Words that stand on their own.",

    features: [
      "Editorial portfolio showcasing published articles and feature stories",
      "Filterable bylines organized by publication and topic",
      "Strong typographic hierarchy that centers the writing over decoration",
      "Fast, SEO-optimized static pages for maximum discoverability",
      "Minimal, distraction-free design that puts content first",
    ],

    techStack: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      Tools: ["Vercel", "Git"],
    },

    architecture:
      "A fully static Next.js site — every article and portfolio page is pre-rendered at build time with SSG. Tailwind CSS drives the typographic layout. No backend dependencies — content lives in static data files, making deployment instant and maintenance-free.",
  },
];

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.id === id);
}
