"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { IBlogs } from "@/lib/apiConfig";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

interface BlogPostPageProps {
  post: IBlogs;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <main className="relative w-full pt-[15vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[20vw] min-h-screen pb-[12vh]">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.2em] uppercase text-neutral-500 hover:text-foreground dark:hover:text-white transition-colors duration-300 mb-[5vh]"
        >
          <svg
            className="h-[0.6em] w-[1.2em] rotate-180"
            viewBox="0 0 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <line x1="0" y1="15" x2="56" y2="15" stroke="currentColor" strokeWidth="2.5" />
            <line x1="40" y1="3" x2="56" y2="16" stroke="currentColor" strokeWidth="2.5" />
            <line x1="40" y1="27" x2="56" y2="14" stroke="currentColor" strokeWidth="2.5" />
          </svg>
          <span>All Posts</span>
        </Link>
      </motion.div>

      {/* Hero image */}
      {post.thumbnail && (
        <motion.div
          className="relative w-full aspect-2/1 overflow-hidden mb-[5vh]"
          initial={{ opacity: 0, filter: "blur(2px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
        >
          <div className="absolute inset-0 bg-neutral-900" />
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover object-top opacity-75"
            sizes="(min-width: 1024px) 65vw, 80vw"
            priority
          />
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        className="flex flex-col gap-3 mb-[5vh]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <span className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light tracking-[0.25em] uppercase border border-[#888888aa] rounded-full px-3 py-0.5 self-start">
          {post.tag}
        </span>
        <h1 className="text-[clamp(1.4rem,2.5vw,3rem)] font-light leading-tight">
          {post.title}
        </h1>
        <p className="text-[clamp(0.65rem,0.85vw,1rem)] font-light text-neutral-500 tracking-widest">
          {formatDate(post.createdAt)}
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-[#888888aa] mb-[5vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      />

      {/* HTML content from CMS */}
      <motion.div
        className="blog-content text-[clamp(0.75rem,1vw,1.1rem)] font-light text-neutral-700 dark:text-neutral-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </main>
  );
}
