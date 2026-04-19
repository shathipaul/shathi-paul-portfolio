"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  { href: "/works", label: "WORKS" },
  { href: "/gallery", label: "GALLERY" },
];

export function BottomCTAs() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-end gap-4 py-24 md:py-32"
      aria-label="Section links"
    >
      {items.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground"
        >
          <span className="border-b border-transparent pb-0.5 transition-all duration-300 ease-out group-hover:border-foreground group-hover:translate-x-0">
            {label}
          </span>
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      ))}
    </motion.nav>
  );
}
