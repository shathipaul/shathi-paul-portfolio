export interface Project {
  id: string; // "1", "2", "3" … used in counter display
  title: string; // Uppercase, e.g. "TRAVEL BUDDY"
  sub: string; // e.g. "Travel Management / Full Stack"
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

// Static fallback — sorted by rank
export const projects: Project[] = [
  {
    id: "1",
    title: "TRAVEL BUDDY",
    sub: "Travel Management / Full Stack",
    description:
      "A travel management platform for planning trips, managing destinations, and organizing activities — featuring interactive maps, multi-step booking flows, and multi-role support.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Mongoose",
      "Express",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
    ],
    image: "https://i.ibb.co.com/HTwq5KXj/p1.webp",
    liveUrl: "https://travel-buddy-demo.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/travel-buddy",
  },
  {
    id: "2",
    title: "EVENTIDE MOMENTO",
    sub: "Event Management / Full Stack",
    description:
      "A full-stack event management platform for creating, managing, and attending events — with invitations, location-based filtering, ticketing, refunds, and role-based access control.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Redux",
      "Redis",
    ],
    image: "https://i.ibb.co/mFTQ0Tn2/p8.webp",
    liveUrl: "https://eventide-momento.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/Eventide-Momento",
  },
  {
    id: "3",
    title: "TECH MART",
    sub: "E-commerce / Full Stack",
    description:
      "A full-stack e-commerce platform for technology products with cart management, order handling, and a custom PC build system designed for scalability and smooth UX across devices.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Mongoose",
      "Express",
      "Tailwind CSS",
      "Redux",
      "Redis",
    ],
    image: "https://i.ibb.co.com/ZpNtGY8G/p2.webp",
    liveUrl: "https://tech-mart-co.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/tech-mart",
  },
  {
    id: "4",
    title: "BETTER PLATE",
    sub: "Meal Subscription / Full Stack",
    description:
      "A meal subscription system that lets users browse meal plans, subscribe to packages, and manage recurring orders with secure Stripe payment integration.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Mongoose",
      "Express",
      "Tailwind CSS",
      "Redux",
      "Redis",
    ],
    image: "https://i.ibb.co/XrTPmnqR/p2.webp",
    liveUrl: "https://better-plate.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/Better-Plate",
  },
  {
    id: "5",
    title: "GEORGIA",
    sub: "Photography Portfolio / Frontend",
    description:
      "A wedding and event photography portfolio featuring curated galleries, elegant image presentation, and smooth transitions built with a performance-first approach.",
    techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    image: "https://i.ibb.co/1ff7Hb7Q/p4.webp",
    liveUrl: "https://wedding-photograpy-website.vercel.app",
    // githubUrl: "https://github.com/shathipaul/photograpy-website",
  },
  {
    id: "6",
    title: "GRAND DUCHY",
    sub: "E-book Platform / Full Stack",
    description:
      "A digital e-book reading platform with a curated library, reader progress tracking, bookmarking, and a clean distraction-free reading interface.",
    techStack: ["Next.js", "TypeScript", "Node.js", "Material UI"],
    image: "https://i.ibb.co/Rpy3S7pw/p5.webp",
    liveUrl: "https://grand-duchy-demo.vercel.app",
    // githubUrl: "https://github.com/MdNaimRipto/grand-duchy-demo",
  },
  {
    id: "7",
    title: "JESSICA PRISTON",
    sub: "Journalist Portfolio / Frontend",
    description:
      "A clean editorial journalist portfolio showcasing published articles, features, and professional bylines with strong typographic hierarchy and minimal distractions.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://i.ibb.co/RTVhTSWz/p6.webp",
    liveUrl: "https://journalist-portfolio-website.vercel.app",
    // githubUrl: "https://github.com/shathipaul/journalist-portfolio-website",
  },
];
