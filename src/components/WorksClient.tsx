"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";
import { profile } from "@/data/profile";
import Link from "next/link";

interface WorksClientProps {
  projects: Project[];
}

interface ThumbnailProps {
  project: Project;
  onEnter: () => void;
  containerClass: string;
}

function ProjectThumbnail({
  project,
  onEnter,
  containerClass,
}: ThumbnailProps) {
  return (
    <motion.div
      className={containerClass}
      onViewportEnter={onEnter}
      viewport={{ margin: "-40% 0px -40% 0px" }}
      data-cursor="view"
    >
      <Link
        href={`/works/${project.id}`}
        className="relative block w-full aspect-2/1 overflow-hidden"
      >
        <div className="absolute inset-0 bg-neutral-900" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top opacity-80"
          sizes="35vw"
        />
      </Link>
    </motion.div>
  );
}

export function WorksClient({ projects }: WorksClientProps) {
  const [active, setActive] = useState<Project>(projects[0]);
  const total = projects.length.toString().padStart(2, "0");

  return (
    <>
      {/* ════════════════════════════════════════════════
          PORTRAIT / MOBILE layout  (hidden in landscape)
          Vertical scroll — each project is a self-contained card.
      ════════════════════════════════════════════════ */}
      <div className="landscape:hidden flex flex-col px-[10vw] pt-[15vh] pb-[15vh]">
        {/* Heading row */}
        <div className="flex flex-row items-end justify-between mb-1">
          <h1 className="text-base font-light tracking-widest">WORKS</h1>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-light opacity-60 hover:opacity-100 transition-opacity"
          >
            /{profile.socials.github.split("/").pop()}
          </a>
        </div>
        <div className="w-full h-px bg-[#888888aa] mb-10" />

        {/* Vertical project cards */}
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="flex flex-col gap-3 mb-[15vw] last:mb-0"
            initial={{ opacity: 0, filter: "blur(1px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
          >
            {/* Image — links to detail page */}
            <Link
              href={`/works/${project.id}`}
              className="relative block w-full aspect-2/1 overflow-hidden"
              data-cursor="view"
            >
              <div className="absolute inset-0 bg-neutral-900" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top opacity-80"
                sizes="80vw"
              />
            </Link>

            {/* Project info */}
            <div className="flex flex-col gap-1 pt-1">
              <span className="text-[0.6rem] font-light tracking-[0.3em] text-neutral-500">
                [{project.id.padStart(2, "0")}]
              </span>
              <h2 className="text-xl font-light leading-tight">
                {project.title}
              </h2>
              <p className="text-sm font-light text-neutral-400">
                {project.sub}
              </p>
              <p className="text-xs font-light leading-relaxed text-neutral-400 mt-1">
                {project.description}
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.6rem] font-light border border-[#888888aa] rounded-full px-2.5 py-0.5 text-neutral-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-4 mt-3 text-xs font-light">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                    >
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ════════════════════════════════════════════════
          LANDSCAPE / DESKTOP layout  (hidden in portrait)
          Left: vertical scroll column
          Right: fixed info panel
      ════════════════════════════════════════════════ */}
      <main className="hidden landscape:flex relative w-full landscape:overflow-x-hidden landscape:justify-start landscape:items-start landscape:pt-[30vh] landscape:pb-[30vh] landscape:pl-[15vw] landscape:pr-0 min-h-screen">
        {/* Vertical scroll column */}
        <div className="flex flex-col w-[40vw] h-auto gap-[40vh]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, filter: "blur(1px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <ProjectThumbnail
                project={project}
                onEnter={() => setActive(project)}
                containerClass="w-[40vw]"
              />
            </motion.div>
          ))}
        </div>

        {/* Fixed info panel (landscape only — hidden via parent display:none on portrait) */}
        <motion.div
          className="fixed landscape:top-[15vh] landscape:left-[60vw] landscape:w-[35vw] flex flex-col z-10"
          initial={{ opacity: 0, filter: "blur(1px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Heading row */}
          <div className="w-full h-[5vh] flex flex-row items-end justify-between">
            <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
              WORKS
            </h1>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end text-[clamp(0.8rem,1vw,1.5rem)] font-light mb-1 opacity-60 hover:opacity-100 transition-opacity"
            >
              /{profile.socials.github.split("/").pop()}
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#888888aa]" />

          {/* Counter + project info */}
          <div className="mt-[5vh] landscape:mt-[14vh]">
            {/* Counter [01 / 04] */}
            <div className="overflow-hidden flex flex-row items-center text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light tracking-widest mb-4">
              <span className="w-3 lg:w-5">[</span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={active.id}
                  className="flex flex-row w-[clamp(1.5rem,2vw,2.5rem)] lg:w-[clamp(2rem,2.5vw,3rem)] overflow-hidden"
                >
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.225, ease: "easeOut" }}
                  >
                    0
                  </motion.span>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      duration: 0.225,
                      ease: "easeOut",
                      delay: 0.05,
                    }}
                  >
                    {active.id}
                  </motion.span>
                </motion.span>
              </AnimatePresence>

              <span>/</span>
              <span className="w-[clamp(1.5rem,2vw,2.5rem)] lg:w-[clamp(2rem,2.5vw,3rem)] flex justify-end">
                {total}
              </span>
              <span className="w-3 lg:w-5 flex justify-end">]</span>
            </div>

            {/* Animated project details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="flex flex-col whitespace-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h2 className="text-[clamp(1rem,1.5vw,2rem)] lg:text-[clamp(1.2rem,2vw,2rem)] font-light">
                  {active.title}
                </h2>
                <h3 className="text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light text-neutral-500">
                  {active.sub}
                </h3>
                <p className="text-[clamp(0.7rem,1vw,1.2rem)] lg:text-[clamp(1rem,1.2vw,1.5rem)] font-light mt-5 leading-relaxed">
                  {active.description}
                </p>
                <div className="flex gap-3 mt-4 flex-wrap">
                  {active.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[clamp(0.6rem,0.8vw,0.9rem)] font-light border border-[#888888aa] rounded-full px-3 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(active.liveUrl || active.githubUrl) && (
                  <div className="flex gap-4 mt-4 text-[clamp(0.7rem,1vw,1.2rem)] font-light">
                    {active.liveUrl && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                      >
                        <span>View Live →</span>
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </main>
    </>
  );
}
