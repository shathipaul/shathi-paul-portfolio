"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

function ArrowIcon() {
  return (
    <svg
      className="h-[clamp(1rem,1.5vw,2rem)] w-[clamp(1rem,1.5vw,2rem)]"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="0.2" y1="50.2" x2="100.2" y2="50.2" stroke="currentColor" strokeWidth="4" />
      <line x1="65.4" y1="15.2" x2="100.8" y2="50.6" stroke="currentColor" strokeWidth="4" />
      <line x1="65.4" y1="85.2" x2="100.8" y2="49.9" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/works", label: "WORKS" },
  { href: "/services", label: "SERVICES" },
  { href: "/blogs", label: "BLOGS" },
];

export default function NavigationSection() {
  return (
    <footer className="relative mt-[15vh] pb-[6vh]">
      {/* Right-aligned navigation links */}
      <div className="ml-auto flex flex-col items-end gap-4 pr-[5vw]">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light transition-opacity hover:opacity-60"
          >
            <span>{label}</span>
            <ArrowIcon />
          </Link>
        ))}
      </div>

      {/* Bottom copyright */}
      <p className="absolute bottom-2 left-[3vw] hidden text-[clamp(0.5rem,0.8vw,1rem)] font-light text-neutral-500 lg:block">
        © 2026 {profile.copyrightName}. All rights reserved.
      </p>
    </footer>
  );
}
