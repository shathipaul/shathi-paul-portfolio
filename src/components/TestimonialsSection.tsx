/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, type PanInfo } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const GAP_PX = 24;
const AUTO_INTERVAL_MS = 4500;
const SWIPE_OFFSET_THRESHOLD = 50;
const SWIPE_VELOCITY_THRESHOLD = 400;

function getSlidesPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

function QuoteMark() {
  return (
    <svg
      className="h-[clamp(1.75rem,2.5vw,3rem)] w-[clamp(1.75rem,2.5vw,3rem)] text-olive"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 14H22V22C22 27 18.5 31 14 32V28C16.5 27.5 18 25 18 22H14V14ZM28 14H36V22C36 27 32.5 31 28 32V28C30.5 27.5 32 25 32 22H28V14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(0);

  const paused = hovered || dragging;

  // Measure viewport width + breakpoint → slidesPerView
  useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return;
      setViewportWidth(viewportRef.current.offsetWidth);
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };
    update();
    const observer = new ResizeObserver(update);
    if (viewportRef.current) observer.observe(viewportRef.current);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - GAP_PX * (slidesPerView - 1)) / slidesPerView
      : 0;
  const stepSize = cardWidth + GAP_PX;
  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  // Clamp index when slidesPerView changes (e.g. window resize)
  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Animate track whenever index / layout changes
  useEffect(() => {
    if (cardWidth === 0) return;
    const target = -(currentIndex * stepSize);
    const controls = animate(x, target, {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [currentIndex, stepSize, cardWidth, x]);

  // Auto-advance — pauses while hovered or dragging
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, maxIndex]);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setDragging(false);
    const { offset, velocity } = info;
    const swipedLeft =
      offset.x < -SWIPE_OFFSET_THRESHOLD ||
      velocity.x < -SWIPE_VELOCITY_THRESHOLD;
    const swipedRight =
      offset.x > SWIPE_OFFSET_THRESHOLD ||
      velocity.x > SWIPE_VELOCITY_THRESHOLD;

    if (swipedLeft) {
      setCurrentIndex((i) => Math.min(i + 1, maxIndex));
    } else if (swipedRight) {
      setCurrentIndex((i) => Math.max(i - 1, 0));
    } else {
      // Snap back to current slide
      animate(x, -(currentIndex * stepSize), {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      });
    }
  };

  // Drag is clamped to ±1 slide from the current position with slight elasticity
  const currentX = -(currentIndex * stepSize);
  const dragConstraints = {
    left: currentX - stepSize,
    right: currentX + stepSize,
  };

  const cardStyle = cardWidth > 0 ? { width: cardWidth } : undefined;
  const cardFallbackClass =
    cardWidth > 0 ? "" : "w-[72vw] sm:w-[44vw] lg:w-[23vw]";

  return (
    <motion.section
      className="relative w-full pt-[5vh] pl-[10vw] flex flex-col lg:pt-[clamp(2rem,5vh,5rem)] lg:pl-[15vw]"
      initial={{ opacity: 0, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: "easeOut" }}
      aria-labelledby="testimonials-heading"
    >
      {/* Heading */}
      <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1">
        <h2 id="testimonials-heading">TESTIMONIALS</h2>
      </div>

      {/* Divider */}
      <div className="w-[80vw] lg:w-[75vw] h-px bg-[#888888aa]" />

      {/* Slider viewport */}
      <div
        ref={viewportRef}
        className="mt-[5vh] w-[80vw] lg:w-[75vw] overflow-hidden select-none touch-pan-y"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.12}
          dragMomentum={false}
          onDragStart={() => setDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ x, gap: `${GAP_PX}px` }}
          className="flex will-change-transform"
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              style={{ ...cardStyle, border: "0.5px solid var(--border-tone)" }}
              className={`shrink-0 flex flex-col gap-5 bg-card p-[clamp(1.5rem,2vw,2rem)] min-h-[clamp(18rem,32vh,26rem)] ${cardFallbackClass}`}
            >
              {/* Index + quote mark */}
              <div className="flex items-start justify-between">
                <span className="text-[clamp(0.55rem,0.7vw,0.75rem)] font-light tracking-[0.3em] text-foreground-secondary pt-[0.5em]">
                  [{t.id}]
                </span>
                <QuoteMark />
              </div>

              {/* Quote */}
              <blockquote className="text-[clamp(0.78rem,1vw,1.1rem)] font-light leading-relaxed text-foreground flex-1 pointer-events-none">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-border" />

              {/* Attribution */}
              <footer className="flex flex-col gap-0.5 pointer-events-none">
                <cite className="not-italic text-[clamp(0.78rem,0.95vw,1rem)] font-normal text-foreground tracking-wide">
                  {t.name}
                </cite>
                <p className="text-[clamp(0.62rem,0.78vw,0.85rem)] font-light tracking-[0.15em] uppercase text-foreground-secondary">
                  {t.role}
                </p>
              </footer>
            </article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
