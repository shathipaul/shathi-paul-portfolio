"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogs";

interface BlogsPageProps {
  posts: BlogPost[];
}

export function BlogsPage({ posts }: BlogsPageProps) {
  return (
    <main className="relative w-full pt-[3vh] pl-[10vw] pr-[10vw] lg:pt-[6vh] lg:pl-[15vw] lg:pr-[8vw] min-h-screen pb-[12vh]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(1px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
          <h1>BLOGS</h1>
        </div>
        <div className="w-full h-px bg-[#888888aa]" />
      </motion.div>

      {/* Post list */}
      <div className="mt-[5vh] flex flex-col">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2 + i * 0.1,
            }}
          >
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-8 py-8 border-b border-[#888888aa] hover:opacity-80 transition-opacity duration-300"
            >
              {/* Thumbnail — top on mobile, left column on desktop */}
              {post.image && (
                <div className="relative w-full lg:w-[28vw] aspect-2/1 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-neutral-900" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-top opacity-75 transition-opacity duration-300 group-hover:opacity-90"
                    sizes="(min-width: 1024px) 28vw, 80vw"
                  />
                </div>
              )}

              {/* Meta — right column on desktop */}
              <div className="flex flex-col flex-1 gap-3 lg:py-1">
                {/* Counter + category */}
                <div className="flex items-center gap-3">
                  <span className="text-[clamp(0.6rem,0.8vw,0.85rem)] font-light tracking-[0.3em] text-neutral-500 shrink-0">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light tracking-[0.25em] uppercase border border-[#888888aa] rounded-full px-3 py-0.5">
                    {post.category}
                  </span>
                </div>

                {/* Title + excerpt */}
                <h2 className="text-[clamp(0.9rem,1.4vw,1.6rem)] font-light leading-snug">
                  {post.title}
                </h2>
                <p className="text-[clamp(0.65rem,0.85vw,0.95rem)] font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {post.excerpt}
                </p>

                {/* Date + Read arrow */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-widest text-neutral-500">
                    {post.date}
                  </span>
                  <span className="text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.2em] uppercase flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    Read
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
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
