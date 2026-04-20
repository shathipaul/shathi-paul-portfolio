"use client";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) {
    return (
      <div
        className="h-7 w-16 shrink-0 rounded-full border border-neutral-300 bg-neutral-200/80 dark:border-neutral-700 dark:bg-neutral-800/80"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-5 w-12 shrink-0 rounded-full border-2 border-neutral-200 bg-neutral-200/90 transition-colors duration-300 dark:border-neutral-400 dark:bg-neutral-800/90"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`absolute top-1/2 left-1 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform duration-300 ease-out dark:bg-neutral-400 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
