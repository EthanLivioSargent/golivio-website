"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal.
 *
 * - `immediate`: render with `.in-view` already applied (no opacity-0 flash).
 *   Pass this for above-the-fold content. The hero uses it on every Reveal.
 * - Otherwise: starts at opacity-0 / translateY-24 and fades in when the
 *   element enters viewport via IntersectionObserver.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: 1 | 2 | 3 | 4;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (immediate) return; // already visible
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
  }, [immediate]);

  const delayClass = delay ? `reveal-${delay}` : "";
  const initialView = immediate ? "in-view" : "";
  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={`reveal ${initialView} ${delayClass} ${className}`.trim()}>
      {children}
    </Comp>
  );
}
