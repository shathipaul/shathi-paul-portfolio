"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden border border-border bg-card shadow-none transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-black/40"
    >
      <Link
        href={project.liveUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-16/10 w-full overflow-hidden bg-card"
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h2 className="text-lg font-medium tracking-tight text-foreground">
            {project.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
            {project.description}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-0.5 text-xs text-foreground-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2 text-xs uppercase tracking-[0.15em]">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive transition-colors hover:text-foreground"
            >
              Live
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
