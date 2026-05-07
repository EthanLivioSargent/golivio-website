"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";

/**
 * Live build — a stylized 6×3 wall of panels animating through the same
 * state machine the operations app uses on a real Livio jobsite:
 *
 *   staged (grey) → lifting (orange) → installed (blue) → qcd (green)
 *
 * Every ~1.4s a panel advances one step. The animation loops forever so
 * the section feels alive even on a marketing page. The state machine
 * matches Livio Mobile's Eagle Eye view exactly — same colors, same
 * transitions — so the marketing claim and the real product line up.
 */

type State = "staged" | "lifting" | "installed" | "qcd";

const COLS = 6;
const ROWS = 3;
const COUNT = COLS * ROWS;

const STATE_FILL: Record<State, string> = {
  staged: "#374151",     // grey-700
  lifting: "#F97316",    // orange-500
  installed: "#3B82F6",  // blue-500
  qcd: "#22C55E",        // green-500
};

const STATE_LABEL: Record<State, string> = {
  staged: "Staged",
  lifting: "Lifting",
  installed: "Installed",
  qcd: "QC verified",
};

const ORDER: State[] = ["staged", "lifting", "installed", "qcd"];

function nextState(s: State): State {
  const i = ORDER.indexOf(s);
  return ORDER[Math.min(i + 1, ORDER.length - 1)];
}

export default function LiveBuild() {
  // Initial state — most panels staged, a couple installed already, one mid-flight.
  const initial = useMemo<State[]>(() => {
    const a: State[] = Array(COUNT).fill("staged");
    a[0] = "qcd";
    a[1] = "qcd";
    a[6] = "installed";
    a[12] = "installed";
    a[7] = "lifting";
    return a;
  }, []);

  const [panels, setPanels] = useState<State[]>(initial);
  const [running, setRunning] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Only animate once visible — saves cycles for above-fold-only visitors.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setRunning(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setRunning(true);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setPanels((prev) => {
        const next = prev.slice();
        // Find the panel currently lifting and advance it to installed.
        const liftingIdx = next.indexOf("lifting");
        if (liftingIdx >= 0) next[liftingIdx] = "installed";

        // Promote one installed panel to qcd, prefer the leftmost on top row.
        const ready = next.findIndex((s) => s === "installed");
        if (ready >= 0) next[ready] = "qcd";

        // Pick a new staged panel and put it in the air.
        const staged = next
          .map((s, i) => (s === "staged" ? i : -1))
          .filter((i) => i >= 0);
        if (staged.length) {
          // Pick the lowest-index staged panel (build wall L→R, bottom-up).
          next[staged[0]] = "lifting";
        } else if (next.every((s) => s === "qcd")) {
          // Restart loop: reset to initial state.
          return initial.slice();
        }
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
    <section
      id="live-build"
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b border-line bg-bg-panel py-20 md:py-28"
      aria-labelledby="live-build-h"
    >
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-30" aria-hidden />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">Live build state</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="live-build-h" className="section-title mt-3 text-balance">
              Every panel, every state, in real time.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose">
              The operations app for every Livio project pipes through the same state machine:
              panels start <strong className="font-semibold text-ink-hi">staged</strong> on pallets,
              go <strong className="font-semibold text-ink-hi">lifting</strong> when the crane picks
              one up, snap <strong className="font-semibold text-ink-hi">installed</strong> when it
              bolts in, and turn <strong className="font-semibold text-ink-hi">QC verified</strong>{" "}
              after the inspector signs off. PMs see this exact wall, in 3D, on the live site view.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <ul className="mt-8 space-y-3 text-[0.92rem]">
              {ORDER.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span
                    className="inline-block h-3.5 w-3.5 flex-shrink-0 rounded-sm"
                    style={{ background: STATE_FILL[s] }}
                    aria-hidden
                  />
                  <span className="font-medium text-ink-base">{STATE_LABEL[s]}</span>
                  <span className="ml-auto font-mono text-[0.85rem] text-ink-low tabular-nums">
                    {counts[s]} / {COUNT}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-line bg-bg-deep px-4 py-3">
              <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
                Wall progress
              </span>
              <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-line2">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-emerald-400 transition-[width] duration-700 ease-out"
                  style={{ width: `${installedPct}%` }}
                  aria-hidden
                />
              </div>
              <span className="font-mono text-[0.85rem] font-bold text-ink-hi tabular-nums">
                {installedPct}%
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={2}>
            <figure className="surface relative overflow-hidden p-6 md:p-8">
              {/* Faux wall outline so the panels read as a building section. */}
              <div className="relative">
                <div className="absolute -inset-2 rounded-md border border-dashed border-line2" aria-hidden />
                <div
                  className="grid gap-2"
                  style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
                  role="img"
                  aria-label={`Live wall — ${counts.qcd} QC verified, ${counts.installed} installed, ${counts.lifting} lifting, ${counts.staged} staged of ${COUNT} total panels.`}
                >
                  {panels.map((s, i) => (
                    <div
                      key={i}
                      data-state={s}
                      className="relative aspect-[3/4] rounded-md transition-[background,box-shadow,transform] duration-700 ease-out"
                      style={{
                        background: STATE_FILL[s],
                        boxShadow:
                          s === "lifting"
                            ? "0 0 0 1px rgba(249,115,22,0.6), 0 0 24px rgba(249,115,22,0.45)"
                            : s === "qcd"
                            ? "0 0 0 1px rgba(34,197,94,0.45)"
                            : s === "installed"
                            ? "0 0 0 1px rgba(59,130,246,0.45)"
                            : "0 0 0 1px rgba(148,163,184,0.16)",
                        transform: s === "lifting" ? "translateY(-4px)" : "none",
                      }}
                    >
                      {/* Edge highlight to mimic panel reveal lines. */}
                      <span
                        className="pointer-events-none absolute inset-0 rounded-md"
                        style={{
                          background:
                            "linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)",
                        }}
                        aria-hidden
                      />
                      {s === "lifting" && (
                        <span
                          className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-orange-300"
                          aria-hidden
                        >
                          • lifting
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <figcaption className="mt-6 flex items-center justify-between text-[12px] text-ink-low">
                <span>
                  <span className="font-mono font-bold text-gold">live</span> · synthetic demo of
                  the operations-app state machine
                </span>
                <span className="font-mono tabular-nums">
                  {COLS}×{ROWS} · {COUNT} panels
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
