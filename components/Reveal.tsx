"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal. Adds `.in-view` to children when they enter viewport.
 * Pure CSS does the actual transition — see globals.css `.reveal`.
 * Client-side only; SSR markup ships with the reveal class so layout is stable.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: 1 | 2 | 3 | 4;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      el.classList.add("in-view");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay ? `reveal-${delay}` : "";
  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Comp>
  );
}
