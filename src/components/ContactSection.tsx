"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { Profile } from "@/data/profile";

interface ContactSectionProps {
  profile: Profile;
}

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection({ profile }: ContactSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    { href: profile.socials.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { href: profile.socials.github, Icon: FaGithub, label: "GitHub" },
    { href: profile.socials.mail, Icon: HiOutlineMail, label: "Email" },
  ];

  return (
    <motion.section
      className="relative w-full pt-[5vh] pl-[10vw] flex flex-col lg:pt-[clamp(2rem,5vh,5rem)] lg:pl-[15vw]"
      initial={{ opacity: 0, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: "easeOut" }}
      aria-labelledby="contact-heading"
    >
      {/* Heading */}
      <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
        <h2 id="contact-heading">CONTACT</h2>
      </div>

      {/* Divider */}
      <div className="w-[80vw] lg:w-[75vw] h-px bg-border" />

      {/* Two-column body */}
      <div className="mt-[5vh] w-[80vw] lg:w-[75vw] flex flex-col gap-12 lg:flex-row lg:gap-[10vw] pb-[12vh]">
        {/* Left — email + socials */}
        <div className="flex flex-col justify-start gap-8 lg:w-[22vw]">
          <div className="flex flex-col gap-2">
            <p className="text-[clamp(0.6rem,0.8vw,0.9rem)] font-light tracking-[0.2em] uppercase text-neutral-400">
              Send Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-[clamp(0.75rem,1vw,1.1rem)] font-light italic opacity-80 hover:opacity-100 transition-opacity break-all"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[clamp(0.6rem,0.8vw,0.9rem)] font-light tracking-[0.2em] text-neutral-400">
              Or
            </p>
            <div className="flex flex-row gap-5">
              {socials.map(({ href, Icon, label }) => {
                const isMailto = href?.startsWith("mailto:");
                return (
                  <a
                    key={label}
                    href={href}
                    {...(!isMailto
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={label}
                    className="text-neutral-500 dark:text-neutral-300 hover:text-foreground dark:hover:text-neutral-500 transition-colors duration-300"
                  >
                    <Icon
                      className="h-[clamp(1.1rem,1.3vw,1.5rem)] w-[clamp(1.1rem,1.3vw,1.5rem)]"
                      aria-hidden
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Let's Talk — Calendly */}
          <div className="flex flex-col gap-4">
            <p className="text-[clamp(0.6rem,0.8vw,0.9rem)] font-light tracking-[0.2em] text-neutral-400">
              Or
            </p>
            <a
              href={profile.socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group self-start inline-flex items-center gap-3 bg-transparent border px-6 py-2.5 text-[clamp(0.65rem,0.8vw,0.9rem)] font-light tracking-[0.2em] uppercase hover:opacity-80 transition-colors duration-300"
              style={{ borderColor: "var(--olive)", color: "var(--olive)" }}
            >
              <span>Let&apos;s Talk</span>
              <svg
                className="h-[0.75em] w-[1.5em] transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 102 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <line
                  x1="0"
                  y1="26"
                  x2="96"
                  y2="26"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <line
                  x1="72"
                  y1="4"
                  x2="96"
                  y2="28"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <line
                  x1="72"
                  y1="48"
                  x2="96"
                  y2="24"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-[80vw] lg:w-[35vw]"
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-300 italic"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              className="w-full bg-transparent border border-border px-4 py-3 text-[clamp(0.75rem,0.9vw,1rem)] font-light placeholder:text-neutral-600 focus:border-olive outline-none transition-colors duration-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-300 italic"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              required
              className="w-full bg-transparent border border-border px-4 py-3 text-[clamp(0.75rem,0.9vw,1rem)] font-light placeholder:text-neutral-600 focus:border-olive outline-none transition-colors duration-300"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-300 italic"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Your message..."
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              required
              className="w-full bg-transparent border border-border px-4 py-3 text-[clamp(0.75rem,0.9vw,1rem)] font-light placeholder:text-neutral-600 focus:border-olive outline-none transition-colors duration-300"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start bg-accent text-[#F7F5EF] border border-transparent px-8 py-2.5 text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.2em] uppercase hover:opacity-90 transition duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-[clamp(0.6rem,0.75vw,0.85rem)] font-light tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </motion.section>
  );
}
