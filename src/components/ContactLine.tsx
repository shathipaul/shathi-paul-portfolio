"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/data/profile";

interface ContactLineProps {
  profile: Profile;
}

export function ContactLine({ profile }: ContactLineProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
      className="mt-16 max-w-lg text-sm text-neutral-600 dark:text-neutral-400 md:text-base"
    >
      For business inquiries, email me at{" "}
      <a
        href={`mailto:${profile.email}`}
        className="text-foreground underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-foreground dark:decoration-neutral-600"
      >
        {profile.email}
      </a>
    </motion.p>
  );
}
