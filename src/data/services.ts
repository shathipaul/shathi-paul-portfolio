export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: "01",
    title: "Landing Pages",
    description:
      "A single, focused page engineered to convert, whether you're running ads, launching a service, or capturing leads. Built for speed, optimized for search, and designed to make a strong first impression.",
    deliverables: [
      "Core Web Vitals optimized (90+ Lighthouse score)",
      "Conversion-focused layout & copywriting structure",
      "Lead capture / CTA form with email integration",
      "Schema markup & meta SEO setup",
    ],
  },
  {
    id: "02",
    title: "Business Websites",
    description:
      "A complete web presence built for professional credibility. Lawyers, consultants, and coaches trust this to communicate authority, rank on Google, and turn visitors into booked calls.",
    deliverables: [
      "Up to 6 custom pages (Home, About, Services, Contact + more)",
      "On-page SEO, sitemap & structured data",
      "Booking or contact form with CRM-ready integration",
      "Smooth animations, polished typography, mobile-first",
    ],
  },
  {
    id: "03",
    title: "Custom Web Apps",
    description:
      "For professionals who need more than a website. A client portal, booking system, or internal tool built specifically around how your business operates. Designed cleanly, engineered to scale.",
    deliverables: [
      "User authentication & role-based access",
      "Custom dashboard or client-facing portal",
      "REST API design with Node.js & Express",
      "PostgreSQL or MongoDB with Prisma ORM",
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "page",
    name: "Page",
    price: "$499",
    priceNote: "one-time",
    description:
      "A fast, high-quality landing page for professionals who need a focused web presence. Built to perform from day one.",
    features: [
      "Single-page landing page",
      "Mobile-first, responsive layout",
      "Lead capture form with email integration",
      "Core Web Vitals optimized",
      "On-page SEO + meta setup",
      "Delivered in 3–5 business days",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "site",
    name: "Site",
    price: "$1,200",
    priceNote: "starting at",
    description:
      "A complete, polished website for established professionals. Everything you need to build trust, rank on Google, and convert visitors into clients.",
    features: [
      "Up to 6 fully custom pages",
      "On-page SEO, sitemap & schema markup",
      "Contact or booking form integration",
      "Smooth page transitions & animations",
      "Google Analytics + Search Console setup",
      "Delivered in 7–14 business days",
    ],
    highlighted: true,
    cta: "Let's Talk",
  },
  {
    id: "editorial",
    name: "Editorial",
    price: "$2,000",
    priceNote: "starting at",
    description:
      "For professionals who publish — a content-driven site with a headless CMS, built to scale with your thinking and rank for every piece you write.",
    features: [
      "Full business website included",
      "User authentication & role-based access",
      "Custom dashboard or client portal",
      "REST API with Node.js & Express",
      "PostgreSQL or MongoDB database design",
      "Redis caching for performance at scale",
      "Full technical documentation",
      "Unlimited revisions & priority delivery",
    ],
    highlighted: false,
    cta: "Let's Talk",
  },
];

export const faqs: Faq[] = [
  {
    id: "01",
    question: "What does the process look like?",
    answer:
      "It starts with a short discovery call to understand your goals, audience, and any existing assets like a brand kit or Figma file. From there I send a proposal, we align on scope, and work begins once the deposit is confirmed. You'll see a working build before final delivery.",
  },
  {
    id: "02",
    question: "How long does a project take?",
    answer:
      "Landing pages are typically delivered in 5–7 business days. Full websites take 10–14 days. Editorial or custom builds depend on scope — I'll give you a clear timeline before we start, and I stick to it. Delays on my end don't push your launch date without notice.",
  },
  {
    id: "03",
    question: "Can you redesign an existing website?",
    answer:
      "Yes, and it's often where the most meaningful work happens. I audit your current site for performance, accessibility, and SEO gaps before writing a line of code, so the redesign is grounded in what's actually underperforming, not just what looks dated.",
  },
  {
    id: "04",
    question: "Can you build custom features beyond a standard website?",
    answer:
      "Yes. When a project needs it, I build the backend too — user authentication, client portals, booking systems, database design, and secure APIs. Everything is built as one coherent system, so you're not coordinating between a frontend and backend developer.",
  },
  {
    id: "05",
    question: "Can you handle deployment and hosting?",
    answer:
      "Yes, deployment is included in every project. I configure hosting on Vercel or Netlify, connect your custom domain, set up environment variables, and run post-launch checks before handoff. You get a production-ready site, not just finished code.",
  },
  {
    id: "06",
    question: "How do payments work?",
    answer:
      "Projects are split into a 50% deposit to start and 50% on delivery. For retainers and larger builds we can move to monthly or milestone-based billing. I accept bank transfer, Wise, and most major international payment methods.",
  },
  {
    id: "07",
    question: "Do you offer maintenance after the project ends?",
    answer:
      "Yes. Most of my clients stay on a monthly retainer after launch for ongoing updates, performance monitoring, and new feature work. If your needs are lighter, a flexible hourly arrangement works too. We'll figure out what makes sense for your situation.",
  },
];
