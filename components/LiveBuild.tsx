"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";

type State = "staged" | "lifting" | "installed" | "qcd";

const COLS = 6;
const ROWS = 3;
const COUNT = COLS * ROWS;

// Livio palette — gold for active work, sky for installed, emerald for verified
const STATE_FILL: Record<State, string> = {
  staged: "#1e293b", lifting: "#FFC107", installed: "#3B82F6", qcd: "#22C55E",
};
const STATE_LABEL: Record<State, string> = {
  staged: "Staged", lifting: "Lifting", installed: "Installed", qcd: "QC verified",
};
const ORDER: State[] = ["staged", "lifting", "installed", "qcd"];

export default function LiveBuild() {
  const initial = useMemo<State[]>(() => {
    const a: State[] = Array(COUNT).fill("staged");
    a[0] = "qcd"; a[1] = "qcd";
    a[6] = "installed"; a[12] = "installed";
    a[7] = "lifting";
    return a;
  }, []);

  const [panels, setPanels] = useState<State[]>(initial);
  const [running, setRunning] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) { setRunning(true); return; }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) { if (e.isIntersecting) setRunning(true); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setPanels((prev) => {
        const next = prev.slice();
        const liftingIdx = next.indexOf("lifting");
        if (liftingIdx >= 0) next[liftingIdx] = "installed";
        const ready = next.findIndex((s) => s === "installed");
        if (ready >= 0) next[ready] = "qcd";
        const staged = next.map((s, i) => (s === "staged" ? i : -1)).filter((i) => i >= 0);
        if (staged.length) { next[staged[0]] = "lifting"; }
        else if (next.every((s) => s === "qcd")) { return initial.slice(); }
        return next;
      });
    }, 1400);
    return () => window.clearInterval(id);
  }, [running, initial]);

  const counts = useMemo(() => {
    const c: Record<State, number> = { staged: 0, lifting: 0, installed: 0, qcd: 0 };
    for (const s of panels) c[s]++;
    return c;
  }, [panels]);

  const installedPct = Math.round(((counts.installed + counts.qcd) / COUNT) * 100);

  return (
    <section id="live-build" ref={sectionRef} className="section-black relative isolate overflow-hidden border-b border-lineDark py-20 md:py-28" aria-labelledby="live-build-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-dark opacity-40" aria-hidden />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow-light">Live build state · Smart Shell</span></Reveal>
          <Reveal delay={1}><h2 id="live-build-h" className="section-title mt-4 text-balance text-invert-hi">Every panel, every state, in real time.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-invert-mid">
              The operations app for every Livio project runs the same state machine: panels start <strong className="font-semibold text-invert-hi">staged</strong> on pallets, go <strong className="font-semibold text-invert-hi">lifting</strong> when the crane picks one up, snap <strong className="font-semibold text-invert-hi">installed</strong> when it bolts in, and turn <strong className="font-semibold text-invert-hi">QC verified</strong> after the inspector signs off. PMs see this exact wall, in 3D, on the live site view.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <ul className="mt-8 space-y-3.5 text-[15px]">
              {ORDER.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="inline-block h-4 w-4 flex-shrink-0 rounded-sm" style={{ background: STATE_FILL[s] }} aria-hidden />
                  <span className="font-semibold text-invert-base">{STATE_LABEL[s]}</span>
                  <span className="ml-auto font-mono text-[14px] text-invert-low tabular-nums">{counts[s]} / {COUNT}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-lineDark2 bg-navy-900 px-5 py-4">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-gold-400">Wall progress</span>
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-emerald-400 transition-[width] duration-700 ease-out" style={{ width: `${installedPct}%` }} aria-hidden />
              </div>
              <span className="font-mono text-[14px] font-bold text-invert-hi tabular-nums">{installedPct}%</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={2}>
            <figure className="card-glass relative overflow-hidden p-7 md:p-9">
              <div className="relative">
                <div className="absolute -inset-2 rounded-md border border-dashed border-lineDark2" aria-hidden />
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }} role="img" aria-label={`Live wall — ${counts.qcd} QC verified, ${counts.installed} installed, ${counts.lifting} lifting, ${counts.staged} staged of ${COUNT} total panels.`}>
                  {panels.map((s, i) => (
                    <div key={i} data-state={s} className="relative aspect-[3/4] rounded-md transition-[background,box-shadow,transform] duration-700 ease-out"
                      style={{
                        background: STATE_FILL[s],
                        boxShadow:
                          s === "lifting" ? "0 0 0 1px rgba(255,193,7,0.65), 0 0 28px rgba(255,193,7,0.55)" :
                          s === "qcd" ? "0 0 0 1px rgba(34,197,94,0.45)" :
                          s === "installed" ? "0 0 0 1px rgba(59,130,246,0.45)" :
                          "0 0 0 1px rgba(148,163,184,0.18)",
                        transform: s === "lifting" ? "translateY(-4px)" : "none",
                      }}>
                      <span className="pointer-events-none absolute inset-0 rounded-md" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)" }} aria-hidden />
                      {s === "lifting" && (
                        <span className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-gold-400" aria-hidden>lifting</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <figcaption className="mt-6 flex items-center justify-between text-[14px] text-invert-low">
                <span><span className="font-mono font-bold text-gold-400">live</span> · synthetic demo of the operations-app state machine</span>
                <span className="font-mono tabular-nums">{COLS}×{ROWS} · {COUNT} panels</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
