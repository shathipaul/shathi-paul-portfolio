"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Profile } from "@/data/profile";

interface HeroSectionProps {
  profile: Profile;
}

const letterVariants = {
  initial: { y: "2rem", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.2, 1, 0.4, 1] as [number, number, number, number],
    },
  },
};

function ArrowIcon() {
  return (
    <svg
      className="h-[0.6em] w-[1.2em] transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
  );
}

export function HeroSection({ profile }: HeroSectionProps) {
  const firstNameLetters = profile.firstName.toUpperCase().split("");
  const lastNameLetters = profile.lastName.toUpperCase().split("");

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center pl-[10vw] pr-[6vw] pt-[14vh] pb-[8vh] lg:pl-[15vw] lg:pr-[10vw] lg:pt-[12vh] lg:pb-[8vh]"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-start gap-[clamp(1.5rem,3vw,2.75rem)]">
        {/* Animated letter-by-letter h1 */}
        <div
          id="hero-heading"
          className="text-[clamp(2.25rem,7.5vw,7.5rem)] font-thin uppercase tracking-widest leading-[0.88] text-foreground"
        >
          {/* First name */}
          <div className="overflow-hidden">
            <motion.h1
              className="flex gap-[clamp(0.05rem,0.1vw,0.2rem)]"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.08, delayChildren: 0.45 }}
            >
              {firstNameLetters.map((letter, i) => (
                <motion.span key={`fn-${i}`} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Last name */}
          <div className="overflow-hidden">
            <motion.h1
              className="flex gap-[clamp(0.05rem,0.1vw,0.2rem)]"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.08, delayChildren: 0.9 }}
            >
              {lastNameLetters.map((letter, i) => (
                <motion.span key={`ln-${i}`} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1.2 }}
          className="w-[80vw] lg:w-[60vw] h-px bg-[#888888aa] origin-left"
        />

        {/* Title line + description */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.35 }}
          className="flex flex-col gap-3 max-w-176"
        >
          <p className="text-[clamp(0.65rem,0.85vw,0.95rem)] font-light tracking-[0.3em] uppercase text-foreground-secondary">
            {profile.title}
          </p>
          <p className="text-[clamp(0.85rem,1.05vw,1.15rem)] font-light leading-relaxed text-foreground-secondary">
            I help businesses grow with fast, responsive, SEO-friendly websites.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.55 }}
          className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
        >
          <a
            href={profile.socials.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent text-[#F7F5EF] border border-transparent px-[clamp(1.5rem,2vw,2.25rem)] py-[clamp(0.7rem,0.9vw,1rem)] text-[clamp(0.65rem,0.8vw,0.9rem)] font-light tracking-[0.2em] uppercase hover:opacity-90 transition duration-300"
          >
            <span className="text-[#F7F5EF]">Start a Project</span>
            {/* <ArrowIcon /> */}
          </a>

          <Link
            href="/works"
            className="group inline-flex items-center gap-3 bg-card border border-olive text-olive px-[clamp(1.5rem,2vw,2.25rem)] py-[clamp(0.7rem,0.9vw,1rem)] text-[clamp(0.65rem,0.8vw,0.9rem)] font-light tracking-[0.2em] uppercase hover:bg-olive/10 hover:text-foreground transition-colors duration-300"
          >
            <span>View Works</span>
            <ArrowIcon />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
