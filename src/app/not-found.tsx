import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center pl-[10vw] pr-[10vw] lg:pl-[15vw] lg:pr-[15vw]">
      {/* Large 404 */}
      <span className="text-[clamp(6rem,20vw,18rem)] font-thin leading-none tracking-[0.04em] text-neutral-200 dark:text-neutral-800 select-none">
        404
      </span>

      {/* Divider */}
      <div className="w-full max-w-[40ch] h-px bg-[#888888aa] my-5" />

      {/* Message */}
      <p className="text-[clamp(0.75rem,1vw,1.1rem)] font-light tracking-[0.15em] uppercase text-neutral-500 dark:text-neutral-400 mb-2">
        Page not found
      </p>
      <p className="text-[clamp(0.65rem,0.85vw,0.95rem)] font-light leading-relaxed text-neutral-500 dark:text-neutral-500 max-w-[48ch] mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Back home link */}
      <Link
        href="/"
        className="group inline-flex items-center gap-3 text-[clamp(0.6rem,0.8vw,0.9rem)] font-light tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400 hover:text-foreground dark:hover:text-white transition-colors duration-300"
      >
        <svg
          className="h-[0.6em] w-[1.2em] rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
          viewBox="0 0 60 30"
          fill="none"
          aria-hidden
        >
          <line
            x1="0"
            y1="15"
            x2="56"
            y2="15"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <line
            x1="40"
            y1="3"
            x2="56"
            y2="16"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <line
            x1="40"
            y1="27"
            x2="56"
            y2="14"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
        <span>Back to home</span>
      </Link>
    </main>
  );
}
