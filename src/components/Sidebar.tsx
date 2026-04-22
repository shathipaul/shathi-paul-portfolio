"use client";

import { Menu, X } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Profile } from "@/data/profile";

interface NavLinkProps {
  href: string;
  label: string;
  displayLabel?: string;
  onNavigate?: () => void;
}

function NavLink({ href, label, displayLabel, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname === href;

  return (
    <Link
      style={{ color: "#e5e5e5" }}
      href={href}
      onClick={onNavigate}
      className={`group relative block w-[clamp(3.5rem,7vw,10rem)] py-1 text-[clamp(0.4rem,2vw,1.5rem)] md:text-[clamp(0.8rem,1vw,1.5rem)] font-light uppercase tracking-widest transition-colors duration-500 ${
        active
          ? "text-white"
          : "text-neutral-500 hover:text-foreground dark:text-[#ffffff77] dark:hover:text-white"
      }`}
    >
      {displayLabel ?? label}
      <span
        className={`absolute bottom-0 left-0 h-[0.5px] bg-foreground transition-all duration-500 ease-out dark:bg-white ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

interface SidebarProps {
  profile: Profile;
}

export function Sidebar({ profile }: SidebarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const socialIcons = [
    { href: profile.socials.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { href: profile.socials.instagram, Icon: FaInstagram, label: "Instagram" },
    { href: profile.socials.github, Icon: FaGithub, label: "GitHub" },
    { href: profile.socials.mail, Icon: HiOutlineMail, label: "Email" },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between px-4 backdrop-blur lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-foreground"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <ThemeToggle />
      </header>

      <aside className="fixed left-0 top-0 z-40 hidden flex-col lg:flex lg:top-[12vh] lg:left-[3vw]">
        <nav className="flex flex-col items-start gap-2 w-[10vw]">
          <NavLink href="/" label="Home" displayLabel="HOME" />
          <NavLink href="/works" label="Works" displayLabel="WORKS" />
          <NavLink href="/services" label="Services" displayLabel="SERVICES" />
          <NavLink href="/blogs" label="Blogs" displayLabel="BLOGS" />
        </nav>
        <div className="flex flex-col items-start gap-4 pt-8">
          {socialIcons.map(({ href, Icon, label }) => {
            const external = !href.startsWith("mailto:");
            return (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-foreground-secondary transition-colors hover:text-foreground"
                aria-label={label}
              >
                <Icon
                  className="h-[clamp(1.7rem,1.5vw,1.5rem)] w-[clamp(1.7rem,1.5vw,1.5rem)]"
                  aria-hidden
                />
              </a>
            );
          })}
        </div>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-60 bg-neutral-950/95 backdrop-blur-sm lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                  Navigate
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-10 w-10 items-center justify-center text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 px-8 py-12">
                <NavLink
                  href="/"
                  label="Home"
                  displayLabel="HOME"
                  onNavigate={close}
                />
                <NavLink
                  href="/works"
                  label="Works"
                  displayLabel="WORKS"
                  onNavigate={close}
                />
                <NavLink
                  href="/services"
                  label="Services"
                  displayLabel="SERVICES"
                  onNavigate={close}
                />
                <NavLink
                  href="/blogs"
                  label="Blogs"
                  displayLabel="BLOGS"
                  onNavigate={close}
                />
              </nav>
              <div className="mt-auto flex justify-center gap-8 border-t border-neutral-800 py-8">
                {socialIcons.map(({ href, Icon, label }) => {
                  const external = !href.startsWith("mailto:");
                  return (
                    <a
                      key={label}
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-foreground-secondary transition-colors hover:text-foreground"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
