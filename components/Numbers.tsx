"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { target: number; suffix: string; prefix?: string; label: string; duration?: number };

const stats: Stat[] = [
  { target: 75, suffix: "%",   label: "Faster than the industry norm" },
  { target: 99, suffix: " days", label: "Land to live compute" },
  { target: 80, suffix: "+",   label: "Verified vendors in Hub" },
  { target: 1,  suffix: "+ GW", label: "Capacity per site" },
];

function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4); }

function CountUp({ target, suffix, prefix, duration = 1400, start }: Stat & { start: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setV(target); return; }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setV(target * easeOutQuart(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  const display = target >= 10 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "");
  return (
    <span className="tabular-nums">
      {prefix}{display}<span className="text-[1.4rem] md:text-[1.8rem]">{suffix}</span>
    </span>
  );
}

export default function Numbers() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) { setStart(true); return; }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { setStart(true); obs.disconnect(); }
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-black relative isolate overflow-hidden border-b border-lineDark py-16 md:py-20" aria-labelledby="numbers-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-dark-fine opacity-50" aria-hidden />
      <div className="container-page relative">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
          <h2 id="numbers-h" className="text-[14px] font-bold uppercase tracking-[0.16em] text-gold-400">
            Livio, by the numbers
          </h2>
        </div>
        <div ref={ref} className="grid gap-px overflow-hidden rounded-2xl border border-lineDark2 bg-lineDark2 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink p-8 md:p-10">
              <div className="font-mono text-[2.8rem] font-black leading-none tracking-tight text-gold-400 md:text-[3.4rem]">
                <CountUp {...s} start={start} />
              </div>
              <div className="mt-3.5 text-[16px] font-semibold leading-[1.4] text-invert-mid">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
