"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();

  // Disable browser scroll-restoration once — Lenis owns scroll state
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  // Create a FRESH Lenis instance on every route change.
  // Sharing one instance across routes causes a stale `limit`
  // (scrollHeight - clientHeight) bug: the ResizeObserver that recalculates
  // it fires asynchronously after the DOM swap, so any scroll before it fires
  // uses the previous page's limit and clamps the scroll mid-page.
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      autoResize: true,
      touchMultiplier: 0,
    });

    // `active` flag stops ALL future ticks the moment cleanup runs —
    // safer than cancelling a single rafId which leaves queued frames running
    let active = true;
    function raf(time: number) {
      if (!active) return;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      active = false;
      lenis.destroy();
    };
  }, [pathname]); // re-run = fresh instance with correct limit for new page

  return null;
}
