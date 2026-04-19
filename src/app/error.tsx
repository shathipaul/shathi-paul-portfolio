"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center pl-[10vw] pr-[10vw] lg:pl-[15vw] lg:pr-[15vw]">
      {/* Large ERROR */}
      <span className="text-[clamp(3.5rem,12vw,12rem)] font-thin leading-none tracking-[0.06em] text-neutral-200 dark:text-neutral-800 select-none">
        ERROR
      </span>

      {/* Divider */}
      <div className="w-full max-w-[40ch] h-px bg-[#888888aa] my-5" />

      {/* Message */}
      <p className="text-[clamp(0.75rem,1vw,1.1rem)] font-light tracking-[0.15em] uppercase text-neutral-500 dark:text-neutral-400 mb-2">
        Something went wrong
      </p>
      <p className="text-[clamp(0.65rem,0.85vw,0.95rem)] font-light leading-relaxed text-neutral-500 dark:text-neutral-500 max-w-[48ch] mb-10">
        An unexpected error occurred. You can try again or return to the home
        page.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-6 items-center">
        <button
          onClick={reset}
          className="group inline-flex items-center gap-3 text-[clamp(0.6rem,0.8vw,0.9rem)] font-light tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400 hover:text-foreground dark:hover:text-white transition-colors duration-300"
        >
          <span>Try again</span>
          <svg
            className="h-[0.6em] w-[1.2em] transition-transform duration-300 group-hover:translate-x-1"
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
        </button>

        <span className="text-neutral-700 dark:text-neutral-600 text-[0.7rem]">
          —
        </span>

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
      </div>
    </main>
  );
}
