<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# Portfolio Site — Agent Rules

## Project Overview

This is a **single-page portfolio website** cloned from [kentokawazoe.com](https://kentokawazoe.com). It is a dark, minimal, editorial-style developer portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. The site has three routes: Home (`/`), Works (`/works`), and Gallery (`/gallery`).

---

## Tech Stack

| Layer      | Tech                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework  | Next.js 14+ (App Router, `app/` directory)                                                                                                                         |
| Styling    | Tailwind CSS v3+                                                                                                                                                   |
| Animations | Framer Motion (`motion`)                                                                                                                                           |
| Font       | Google Fonts — use a thin, wide, geometric sans-serif (e.g. `Josefin Sans`, `Syncopate`, or `Major Mono Display` for the hero name; `Inter` or `DM Sans` for body) |
| Icons      | `lucide-react` or `react-icons` for social icons                                                                                                                   |
| Deployment | Vercel                                                                                                                                                             |

---

## Design System & Visual Language

### Theme

- **Default theme: Dark.** Background `#0a0a0a`, text `#e5e5e5` / `#a3a3a3`.
- **Light mode toggle** in the top-right corner. Light mode: background `#f5f5f5`, text `#1a1a1a`.
- Use `next-themes` for dark/light switching. Store preference in `localStorage`.

### Typography

- **Hero name**: All-caps, ultra-wide letter-spacing (`tracking-[0.3em]`+), thin weight (100–300), very large (`text-6xl md:text-8xl`). The name should feel architectural — massive, spaced-out, and clean.
- **Section headings** (ABOUT ME, MOTIVATION, SKILLS): Uppercase, medium weight, with a thin 1px horizontal rule (`border-b border-neutral-700`) directly below.
- **Body text**: `text-sm` or `text-base`, neutral-400 on dark / neutral-600 on light, relaxed line-height (`leading-relaxed`).
- **Subtitle**: Below the name — "Web Developer / Designer" — smaller, lighter weight.

### Layout Principles

- **Left sidebar navigation** — fixed/sticky on desktop. Contains page links (HOME underlined when active, WORKS, GALLERY) and social icons (LinkedIn, Instagram, GitHub, Mail) stacked vertically below.
- **Content area**: Offset to the right of the sidebar. Uses a wide two-column split layout for sections (text on one side, image or whitespace on the other).
- **Generous vertical spacing**: Sections are separated by `py-24` to `py-32`. The page should breathe.
- **Asymmetric grid**: The page is NOT a centered single column. Content deliberately sits left-heavy or right-heavy per section, creating visual rhythm.

### Sections (Home Page — top to bottom)

1. **Hero** — Name in giant caps + subtitle underneath. Left-aligned in the content area.
2. **About Me** — Right-aligned block. Heading with underline. 3–4 lines of bio text.
3. **Contact line** — Left side, below hero area. "For business inquiries, email me at [email]".
4. **Motivation** — Two-column: left = heading + paragraph text, right = a large grayscale/muted landscape photo.
5. **Skills** — Three-column grid: FRONTEND, BACKEND, TOOLS. Each skill is a pill/chip (`border border-neutral-600 rounded-full px-4 py-1 text-sm`). Skills wrap naturally.
6. **Bottom CTAs** — Right-aligned links: "WORKS →" and "GALLERY →" stacked.
7. **Footer** — Bottom-left: "© [Name]".

### Components to Build

```
app/
├── layout.tsx          # Root layout with ThemeProvider, font imports, sidebar
├── page.tsx            # Home page (all sections)
├── works/
│   └── page.tsx        # Works/projects page
├── gallery/
│   └── page.tsx        # Gallery page
components/
├── Sidebar.tsx         # Fixed left nav + social icons
├── ThemeToggle.tsx     # Dark/light toggle switch (top-right)
├── HeroSection.tsx     # Giant name + subtitle
├── AboutSection.tsx    # About me block
├── MotivationSection.tsx # Motivation text + image
├── SkillsSection.tsx   # Three-column skill pills
├── Footer.tsx          # Copyright footer
├── SkillPill.tsx       # Individual skill chip/tag
```

### Animation Guidelines

- **Page load**: Staggered fade-in from bottom for each section. Use Framer Motion `motion.div` with `initial={{ opacity: 0, y: 30 }}`, `animate={{ opacity: 1, y: 0 }}`, and increasing `transition.delay` per section.
- **Scroll-triggered reveals**: Use `whileInView` for sections below the fold.
- **Hover states**: Skill pills — subtle border color brighten. Nav links — underline slide-in. CTA arrows — slight translateX on hover.
- **Theme toggle**: Smooth transition on `background-color` and `color` (use Tailwind `transition-colors duration-300`).
- **Keep it restrained**. This is a minimal site. No bouncing, no spring physics, no parallax. Clean easing (`ease-out`, 0.4–0.6s duration).

### Image Handling

- Use `next/image` for all images. Store portfolio images in `public/images/`.
- The motivation section image should be a cinematic, grayscale or desaturated landscape photo. Use `object-cover` and a fixed aspect ratio container.
- Works page: project cards with screenshot thumbnails.

### Responsiveness

- **Desktop (≥1024px)**: Sidebar visible, two-column layouts active.
- **Tablet (768–1023px)**: Sidebar collapses to a hamburger menu or top nav. Sections stack vertically but keep some asymmetry.
- **Mobile (<768px)**: Fully stacked. Hero text scales down (`text-4xl`). Skills grid becomes 1–2 columns. Sidebar becomes a top bar or drawer.

---

## Code Style Rules

- Use TypeScript (`.tsx`) for all components.
- Use `"use client"` only where needed (theme toggle, animations, interactive components).
- Keep Server Components as default. Data-fetching happens in server components or `page.tsx`.
- Tailwind only — no CSS modules, no styled-components, no inline `style` props unless absolutely necessary.
- No `any` types. Define proper interfaces for props and data.
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`.
- Images must have `alt` text.
- All links must be accessible (`<a>` or Next.js `<Link>`).

---

## File Naming Conventions

- Components: `PascalCase.tsx`
- Pages: `page.tsx` (Next.js App Router convention)
- Utilities: `camelCase.ts`
- Constants/data: `camelCase.ts` in a `lib/` or `data/` folder (e.g., `data/skills.ts`, `data/projects.ts`)

---

## Data Files

Create a `data/` directory for content so it's easy to customize:

```ts
// data/profile.ts
export const profile = {
  name: "YOUR NAME",
  title: "Web Developer / Designer",
  email: "your@email.com",
  bio: "Your bio text here...",
  motivation: "Your motivation text here...",
  socials: {
    linkedin: "https://linkedin.com/in/...",
    instagram: "https://instagram.com/...",
    github: "https://github.com/...",
  },
};

// data/skills.ts
export const skills = {
  frontend: [
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Motion",
    "React Three Fiber",
    "Zustand",
  ],
  backend: ["TypeScript", "Node.js", "Python", "Java", "FastAPI", "SQL"],
  tools: ["Windows", "VSCode", "Cursor", "Git", "Figma", "Blender"],
};
```

---

## Do NOT

- Do not use a CSS framework other than Tailwind.
- Do not add a CMS or database — this is a static portfolio.
- Do not use `pages/` router. Use `app/` router only.
- Do not over-animate. This is editorial, not playful.
- Do not use stock illustration or blob SVGs. Keep it photographic and typographic.
- Do not use generic component libraries (Material UI, Chakra, etc.).
