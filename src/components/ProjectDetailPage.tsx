"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface SetupStep {
  title: string;
  note?: string;
  commands?: string[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  sub: string;
  image: string;
  liveUrl?: string;
  overview: string;
  motto: string;
  features: string[];
  techStack: Record<string, string[]>;
  architecture: string;
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-[#0d0d0d] dark:bg-black border border-[#2a2a2a] p-5 overflow-x-auto text-[clamp(0.55rem,0.72vw,0.78rem)] font-mono leading-loose text-neutral-400 whitespace-pre">
      {code}
    </pre>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light tracking-[0.35em] text-neutral-500 dark:text-neutral-400 uppercase mb-4">
      {children}
    </p>
  );
}

function Divider({ faint = false }: { faint?: boolean }) {
  return (
    <div
      className={`w-full h-px bg-[#888888aa] mb-5 ${faint ? "opacity-30" : ""}`}
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-[0.6em] w-[1.3em] transition-transform duration-300 group-hover:translate-x-1"
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
  );
}

interface ProjectDetailPageProps {
  project: ProjectDetail;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main className="relative w-full pt-[15vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[15vw] min-h-screen pb-[15vh]">
      {/* ── Back link ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.2em] uppercase text-neutral-500 hover:text-foreground dark:hover:text-white transition-colors duration-300 mb-[5vh]"
        >
          <svg
            className="h-[0.6em] w-[1.2em] rotate-180"
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
          <span>All Works</span>
        </Link>
      </motion.div>

      {/* ── Project header ── */}
      <motion.div
        className="flex flex-col gap-3 mb-[4vh]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <span className="text-[clamp(0.6rem,0.8vw,0.85rem)] font-light tracking-[0.3em] text-neutral-500">
          [{project.id.padStart(2, "0")}]
        </span>
        <h1 className="text-[clamp(2rem,4vw,5rem)] font-thin leading-none tracking-[0.03em]">
          {project.title}
        </h1>
        <p className="text-[clamp(0.75rem,1vw,1.1rem)] font-light text-neutral-500">
          {project.sub}
        </p>

        {/* External links */}
        <div className="flex flex-wrap gap-3 mt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[clamp(0.55rem,0.72vw,0.8rem)] font-light tracking-[0.2em] uppercase border border-[#888888aa] px-4 py-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span>Live</span>
              <ArrowIcon />
            </a>
          )}
        </div>
      </motion.div>

      {/* ── Hero image ── */}
      <motion.div
        className="relative w-full aspect-2/1 overflow-hidden mb-[6vh]"
        initial={{ opacity: 0, filter: "blur(2px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
      >
        <div className="absolute inset-0 bg-neutral-900" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top opacity-80"
          sizes="(min-width: 1024px) 70vw, 80vw"
          priority
        />
      </motion.div>

      {/* ── Content sections ── */}
      <motion.div
        className="flex flex-col gap-[5vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        {/* Overview */}
        <section>
          <Divider faint />
          <SectionLabel>Overview</SectionLabel>
          <p className="text-[clamp(0.75rem,1vw,1.1rem)] font-light leading-[1.9] text-neutral-700 dark:text-neutral-300 max-w-[72ch]">
            {project.overview}
          </p>
        </section>

        {/* Motto */}
        <section>
          <Divider faint />
          <SectionLabel>Motto</SectionLabel>
          <blockquote className="border-l border-[#888888aa] pl-5 text-[clamp(0.85rem,1.1vw,1.25rem)] font-light italic text-neutral-400 leading-relaxed max-w-[60ch]">
            &ldquo;{project.motto}&rdquo;
          </blockquote>
        </section>

        {/* Key Features */}
        <section>
          <Divider faint />
          <SectionLabel>Key Features</SectionLabel>
          <ul className="flex flex-col gap-2.5">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex gap-3 text-[clamp(0.7rem,0.95vw,1.05rem)] font-light leading-relaxed text-neutral-600 dark:text-neutral-400"
              >
                <span className="text-neutral-600 dark:text-neutral-500 shrink-0 mt-[0.4em] text-[0.5rem]">
                  ◆
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <Divider faint />
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="flex flex-col gap-5">
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div
                key={category}
                className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-8"
              >
                {/* <span className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light tracking-[0.25em] uppercase text-neutral-600 dark:text-neutral-400 lg:w-[7vw] shrink-0 pt-0.5">
                  {category}
                </span> */}
                <div className="flex gap-2 flex-wrap">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light border border-[#888888aa] rounded-full px-3 py-0.5 text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section>
          <Divider faint />
          <SectionLabel>Architecture</SectionLabel>
          <p className="text-[clamp(0.7rem,0.95vw,1.05rem)] font-light leading-[1.9] text-neutral-600 dark:text-neutral-400 max-w-[72ch]">
            {project.architecture}
          </p>
        </section>
      </motion.div>
    </main>
  );
}
