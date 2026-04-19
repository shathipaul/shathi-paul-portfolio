"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Service, PricingTier, Faq } from "@/data/services";
import { profile } from "@/data/profile";

interface ServicesPageProps {
  services: Service[];
  pricingTiers: PricingTier[];
  faqs: Faq[];
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 mt-[0.15em]"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 7L5.5 10.5L12 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

export function ServicesPage({
  services,
  pricingTiers,
  faqs,
}: ServicesPageProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <main className="relative w-full pt-[3vh] pl-[10vw] pr-[10vw] lg:pt-[6vh] lg:pl-[15vw] lg:pr-[8vw] min-h-screen pb-[12vh]">
      {/* ── Page heading ── */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(1px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-row items-end justify-between h-[15vh]">
          <h1 className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-widest uppercase">
            Services
          </h1>
          <a
            href={profile.socials.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[clamp(0.7rem,0.9vw,1rem)] font-light mb-1 text-foreground-secondary hover:text-foreground transition-colors duration-300"
          >
            /book a call
          </a>
        </div>
        <div className="w-full h-px bg-border" />
      </motion.div>

      {/* ── Services grid ── */}
      <section aria-label="Services" className="mt-[6vh]">
        <motion.p
          className="text-[clamp(0.65rem,0.85vw,0.95rem)] font-light tracking-[0.25em] uppercase text-foreground-secondary mb-[3vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What I Build
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="bg-card border border-border p-[clamp(1.5rem,2.5vw,2.5rem)] flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: 0.25 + i * 0.08,
              }}
            >
              <span className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light tracking-[0.35em] text-foreground-secondary">
                [{service.id}]
              </span>

              <h2 className="text-[clamp(1.1rem,1.8vw,2.2rem)] font-thin leading-tight tracking-[0.02em] text-foreground">
                {service.title}
              </h2>

              <p className="text-[clamp(0.7rem,0.9vw,1rem)] font-light leading-relaxed text-foreground-secondary flex-1">
                {service.description}
              </p>

              <ul className="flex flex-col gap-2 pt-2 border-t border-border">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[clamp(0.62rem,0.78vw,0.88rem)] font-light text-foreground-secondary"
                  >
                    <span className="text-olive mt-[0.1em]">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section aria-label="Pricing" className="mt-[10vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[clamp(0.65rem,0.85vw,0.95rem)] font-light tracking-[0.25em] uppercase text-foreground-secondary mb-1">
            Pricing
          </p>
          <div className="w-full h-px bg-border mb-[4vh]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              className={`relative flex flex-col gap-5 p-[clamp(1.5rem,2.5vw,2.5rem)] rounded-sm border transition-shadow duration-300 hover:shadow-sm ${
                tier.highlighted
                  ? "bg-olive-deep border-olive-deep text-[#F7F5EF]"
                  : "bg-card border-border text-foreground"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              {/* Tier name */}
              <div className="flex items-start justify-between gap-4">
                <h3
                  className={`text-[clamp(0.7rem,0.9vw,1rem)] font-light tracking-[0.25em] uppercase ${
                    tier.highlighted
                      ? "opacity-80"
                      : "text-foreground-secondary"
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.highlighted && (
                  <span className="text-[clamp(0.5rem,0.65vw,0.7rem)] font-light tracking-[0.2em] uppercase border border-[#F7F5EF]/40 rounded-full px-2.5 py-0.5 opacity-80 whitespace-nowrap">
                    Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-[clamp(2rem,3.5vw,4rem)] font-thin leading-none tracking-tight">
                  {tier.price}
                </span>
                <span
                  className={`text-[clamp(0.6rem,0.75vw,0.85rem)] font-light ${
                    tier.highlighted
                      ? "opacity-60"
                      : "text-foreground-secondary"
                  }`}
                >
                  {tier.priceNote}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-[clamp(0.68rem,0.85vw,0.95rem)] font-light leading-relaxed ${
                  tier.highlighted ? "opacity-75" : "text-foreground-secondary"
                }`}
              >
                {tier.description}
              </p>

              {/* Divider */}
              <div
                className={`w-full h-px ${tier.highlighted ? "bg-[#F7F5EF]/20" : "bg-border"}`}
              />

              {/* Feature list */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-[clamp(0.64rem,0.8vw,0.9rem)] font-light ${
                      tier.highlighted
                        ? "opacity-85"
                        : "text-foreground-secondary"
                    }`}
                  >
                    <span
                      className={`shrink-0 mt-[0.1em] ${
                        tier.highlighted ? "text-[#F7F5EF]/80" : "text-olive"
                      }`}
                    >
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`${tier.name} Package Inquiry`)}`}
                className={`group mt-2 inline-flex items-center gap-2.5 text-[clamp(0.62rem,0.8vw,0.9rem)] font-light tracking-[0.2em] uppercase transition-opacity duration-300 ${
                  tier.highlighted
                    ? "text-[#F7F5EF] hover:opacity-80"
                    : "text-foreground hover:opacity-60"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowIcon />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom note ── */}
      <motion.p
        className="mt-[6vh] text-[clamp(0.62rem,0.78vw,0.88rem)] font-light text-foreground-secondary text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Prices are starting points — every project is different.{" "}
        <a
          href={profile.socials.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors duration-300"
        >
          Book a free strategy call
        </a>{" "}
        to get an accurate quote.
      </motion.p>

      {/* ── FAQ ── */}
      <section aria-label="Frequently Asked Questions" className="mt-[12vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[clamp(0.65rem,0.85vw,0.95rem)] font-light tracking-[0.25em] uppercase text-foreground-secondary mb-1">
            FAQ
          </p>
          <div className="w-full h-px bg-border mb-[1vh]" />
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === faq.id;
            return (
              <motion.div
                key={faq.id}
                className="border-b border-border"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full flex items-start justify-between gap-6 py-[clamp(1rem,2vw,1.75rem)] text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${faq.id}`}
                >
                  <div className="flex items-start gap-4 lg:gap-6 flex-1">
                    <span className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light tracking-[0.3em] text-foreground-secondary pt-[0.35em] shrink-0">
                      [{faq.id}]
                    </span>
                    <h3 className="text-[clamp(0.9rem,1.3vw,1.4rem)] font-light leading-snug text-foreground group-hover:text-olive transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`relative w-4 h-4 shrink-0 mt-[0.5em] transition-transform duration-400 ease-out ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden
                  >
                    <span className="absolute top-1/2 left-0 w-full h-px bg-foreground -translate-y-1/2" />
                    <span className="absolute left-1/2 top-0 h-full w-px bg-foreground -translate-x-1/2" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${faq.id}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-[clamp(1rem,2vw,1.75rem)] pl-[clamp(2rem,3.5vw,4rem)] pr-[clamp(1rem,3vw,4rem)]">
                        <p className="text-[clamp(0.7rem,0.9vw,1rem)] font-light leading-relaxed text-foreground-secondary max-w-[65ch]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mt-[5vh] text-[clamp(0.62rem,0.78vw,0.88rem)] font-light text-foreground-secondary text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Still have a question?{" "}
          <a
            href={`mailto:${profile.email}`}
            className="underline underline-offset-4 hover:text-foreground transition-colors duration-300"
          >
            Email me directly
          </a>{" "}
          and I&apos;ll get back to you within a day.
        </motion.p>
      </section>
    </main>
  );
}
