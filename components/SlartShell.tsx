"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated Slart shell — the live "command-line for the Livio stack".
 * Plays a short demo sequence on first viewport entry, then loops with a long pause.
 *
 * Lines mention each subdomain so visitors immediately understand what each tool does
 * via the unified shell prompt.
 */

type Line =
  | { kind: "input"; text: string; tools?: string[] }
  | { kind: "output"; text: string; tone?: "ok" | "warn" | "info" }
  | { kind: "pause"; ms: number };

const SCRIPT: Line[] = [
  { kind: "input", text: "land find --power=200MW --fiber=tier1 --state=AZ", tools: ["land.golivio.com"] },
  { kind: "output", text: "✓ 14 parcels match · 3 with utility LOI · best: Maricopa-217A (260MW available)", tone: "ok" },
  { kind: "pause", ms: 380 },
  { kind: "input", text: "grid design --site=Maricopa-217A --target=200MW --topology=2N", tools: ["grid.golivio.com"] },
  { kind: "output", text: "✓ Sized: 4 × 50 MW blocks · 18 CDUs · wet-bulb 22°C → adiabatic viable · PUE 1.18", tone: "ok" },
  { kind: "pause", ms: 380 },
  { kind: "input", text: "hub rfq --from=design.json --vendors=matched --window=24h", tools: ["hub.golivio.com"] },
  { kind: "output", text: "✓ RFQs sent to 31 verified vendors · first bids expected within 24h · swap rec saves $2.4M", tone: "ok" },
  { kind: "pause", ms: 380 },
  { kind: "input", text: "factory schedule --shell=panelized --target=99d", tools: ["LAIF"] },
  { kind: "output", text: "✓ Day 0 break ground · Day 30 shell complete · Day 60 MEP energized · Day 99 first compute online", tone: "ok" },
  { kind: "pause", ms: 1400 },
];

const TYPING_SPEED = 22; // ms per char
const OUTPUT_DELAY = 280;

export default function SlartShell() {
  const [rendered, setRendered] = useState<{ kind: "input" | "output"; text: string; tone?: string }[]>([]);
  const [typing, setTyping] = useState<string>("");
  const [running, setRunning] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || startedRef.current) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setRunning(true);
      startedRef.current = true;
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            setRunning(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    let cancelled = false;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    async function play() {
      for (const line of SCRIPT) {
        if (cancelled) return;
        if (line.kind === "pause") {
          await wait(reduced ? 80 : line.ms);
          continue;
        }
        if (line.kind === "input") {
          if (reduced) {
            setRendered((prev) => [...prev, { kind: "input", text: line.text }]);
          } else {
            for (let i = 0; i <= line.text.length; i++) {
              if (cancelled) return;
              setTyping(line.text.slice(0, i));
              await wait(TYPING_SPEED);
            }
            setTyping("");
            setRendered((prev) => [...prev, { kind: "input", text: line.text }]);
          }
          await wait(OUTPUT_DELAY);
        } else {
          setRendered((prev) => [...prev, { kind: "output", text: line.text, tone: line.tone }]);
        }
      }
    }

    void play();
    return () => {
      cancelled = true;
    };
  }, [running]);

  return (
    <div
      ref={containerRef}
      className="term relative w-full overflow-hidden p-4 md:p-5"
      role="img"
      aria-label="Slart shell demo: a unified command line for the Livio AI Factory stack — land, grid, hub, factory."
    >
      {/* Livio-native chrome — gold live pulse, not Mac dots */}
      <div className="mb-4 flex items-center gap-2.5 border-b border-white/10 pb-3">
        <span className="flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse"
            style={{ boxShadow: "0 0 10px rgba(255,193,7,0.65)" }}
            aria-hidden
          />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold-400/75">live</span>
        </span>
        <span className="mx-1 h-3 w-px bg-white/15" aria-hidden />
        <span className="select-none font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-dim">
          slart — the livio shell
        </span>
        <span className="ml-auto rounded border border-gold/30 bg-gold/10 px-2 py-[2px] font-mono text-[11px] font-bold text-gold-400">
          v1.0
        </span>
      </div>

      <div className="min-h-[210px] space-y-1">
        {rendered.map((l, i) =>
          l.kind === "input" ? (
            <div key={i} className="flex flex-wrap items-baseline gap-x-1">
              <span className="font-bold text-gold">slart&gt;</span>
              <span className="text-ink-base">{l.text}</span>
            </div>
          ) : (
            <div
              key={i}
              className={`pl-3 ${
                l.tone === "ok"
                  ? "text-emerald-300"
                  : l.tone === "warn"
                  ? "text-amber-300"
                  : "text-ink-mid"
              }`}
            >
              {l.text}
            </div>
          )
        )}
        {typing.length > 0 && (
          <div className="flex flex-wrap items-baseline gap-x-1">
            <span className="font-bold text-gold">slart&gt;</span>
            <span className="text-ink-base">{typing}</span>
            <span className="ml-[1px] inline-block h-[1.05em] w-[7px] -translate-y-[1px] bg-gold align-middle animate-cursor" />
          </div>
        )}
        {!typing && rendered.length > 0 && rendered[rendered.length - 1].kind === "output" && (
          <div className="flex items-baseline gap-x-1 pt-1">
            <span className="font-bold text-gold">slart&gt;</span>
            <span className="ml-[1px] inline-block h-[1.05em] w-[7px] -translate-y-[1px] bg-gold align-middle animate-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
