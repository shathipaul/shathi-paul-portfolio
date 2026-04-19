"use client";
import { motion } from "framer-motion";
import { SkillPill } from "@/components/SkillPill";
import { skills } from "@/data/skills";

const columns = [
  { key: "frontend" as const, label: "FRONTEND", width: "lg:w-[25vw]" },
  { key: "backend" as const, label: "BACKEND", width: "lg:w-[20vw]" },
  { key: "tools" as const, label: "TOOLS", width: "lg:w-[20vw]" },
];

export function SkillsSection() {
  return (
    <motion.section
      className="relative w-full pt-[5vh] pl-[10vw] flex flex-col lg:pt-[clamp(2rem,5vh,5rem)] lg:pl-[15vw]"
      initial={{ opacity: 0, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      aria-labelledby="skills-heading"
    >
      {/* Heading */}
      <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
        <h2 id="skills-heading">SKILLS</h2>
      </div>

      {/* Wide divider — spans all 3 columns */}
      <div className="w-[80vw] lg:w-[75vw] h-px bg-[#888888aa]" />

      {/* Skills columns */}
      <div className="mt-[5vh] w-[80vw] lg:w-[75vw] flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:justify-between">
        {columns.map(({ key, label, width }) => (
          <div
            key={key}
            className={`flex flex-col w-[80vw] ${width} gap-3 font-light`}
          >
            <div className="text-[clamp(1rem,1.5vw,2rem)] h-auto tracking-wide">
              <h3>{label}</h3>
            </div>
            <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap">
              {skills[key].map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
