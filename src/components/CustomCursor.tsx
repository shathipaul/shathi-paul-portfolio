"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

type CursorState = "default" | "hover" | "view";

// Split `border` shorthand into individual properties — Framer Motion
// interpolates colour/width separately without any "not animatable" warning
const cursorVariants = {
  default: {
    scale: 1,
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: "1px",
    borderColor: "#888888aa",
    opacity: 1,
  },
  hover: {
    scale: 2,
    backgroundColor: "#888888aa",
    borderWidth: "1px",
    borderColor: "rgba(0,0,0,0)",
    opacity: 1,
  },
  view: {
    scale: 3.5,
    backgroundColor: "#ffffff",
    borderWidth: "1px",
    borderColor: "rgba(0,0,0,0)",
    opacity: 1,
  },
  hidden: {
    scale: 0,
    opacity: 0,
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: "1px",
    borderColor: "rgba(0,0,0,0)",
  },
};

// Iterative DOM walk — avoids call-stack issues on deep/SVG trees
function getCursorState(target: Element | null): CursorState {
  let el = target;
  while (el && el.tagName !== "BODY" && el.tagName !== "HTML") {
    if (el.getAttribute("data-cursor") === "view") return "view";
    const tag = el.tagName;
    if (tag === "A" || tag === "BUTTON" || el.getAttribute("role") === "button")
      return "hover";
    el = el.parentElement;
  }
  return "default";
}

export function CustomCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const [visible, setVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");

  // Ref mirrors visible so handlers never read stale closure state
  const visibleRef = useRef(false);

  // Position + visibility — stable, registers once
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };
    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y]);

  // Cursor state — mouseover alone is sufficient
  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      setCursorState(getCursorState(e.target as Element));
    };
    document.addEventListener("mouseover", onOver);
    return () => document.removeEventListener("mouseover", onOver);
  }, []);

  const animateState = !visible ? "hidden" : cursorState;

  return (
    <motion.div
      // mix-blend-mode applied as a CSS class, NOT in style prop
      // so Framer Motion never tries to animate it
      className={`fixed rounded-full border-solid pointer-events-none select-none z-100 flex items-center justify-center ${
        cursorState === "view" ? "mix-blend-difference" : "mix-blend-normal"
      }`}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: "clamp(1.5rem,2vw,2rem)",
        height: "clamp(1.5rem,2vw,2rem)",
      }}
      variants={cursorVariants}
      animate={animateState}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {cursorState === "view" && (
        <span className="text-[5px] font-semibold tracking-widest whitespace-nowrap select-none text-black">
          VIEW
        </span>
      )}
    </motion.div>
  );
}
