"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ---- corpus (also feeds the keyword fallback) ---- */

type Entry = {
  q: string;
  aliases?: string[];
  a: string;
  product?: "Grid" | "Hub" | "Smart Shell" | "Review" | "Mobile" | "LAIF" | "Livio";
  url?: string;
};

const ENTRIES: Entry[] = [
  { q: "What is Livio?",
    aliases: ["who is livio","livio company","livio building systems","laif"],
    a: "Livio is the AI factory for data centers. We deliver land to live compute in 99 days — engineering (Grid), procurement (Hub), and a panelized building system (Smart Shell).",
    product: "Livio", url: "https://golivio.com" },
  { q: "What is Livio Grid?",
    aliases: ["grid","engineering","underwriting","design tool","physics","30 minutes","30 min","site intelligence","pue","wet bulb","adiabatic"],
    a: "Livio Grid engineers a full AI data center in 30 minutes from first principles of physics. It sizes clusters, transformers, CDUs, and cooling against real power/water/climate inputs and outputs a CapEx envelope plus a vendor shortlist. Perpetually free.",
    product: "Grid", url: "https://grid.golivio.com" },
  { q: "What is Livio Hub?",
    aliases: ["hub","procurement","buy side","rfq","rfp","vendors","bids","24 hours","24h","lead time","long-lead equipment"],
    a: "Livio Hub is buy-side procurement. Drop in an RFP and Hub extracts every spec into a structured RFQ, fires it to 80+ verified vendors, and returns first bids in under 24 hours. Anonymous routing. Perpetually free.",
    product: "Hub", url: "https://hub.golivio.com" },
  { q: "What is Livio Smart Shell?",
    aliases: ["smart shell","shell","panelized","pre-assembled","modular construction","lego","75% faster","panels","building system"],
    a: "Livio Smart Shell is a pre-assembled, panelized building system that goes up 75% faster than stick-built. Walls and roof modules ship with structural, electrical, and plumbing inside — assembled on-site like LEGO. 20 MW to 1+ GW with the same kit.",
    product: "Smart Shell" },
  { q: "What is LAIF?",
    aliases: ["laif","ai factory","epc","end to end","full stack","land to compute","99 days","full epc"],
    a: "LAIF (Livio AI Factory) is end-to-end EPC. We run Grid → Hub → Smart Shell as one playbook, taking a qualified parcel to first compute online in about 99 days.",
    product: "LAIF", url: "https://golivio.com" },
  { q: "What is Livio Review?",
    aliases: ["review","proposal review","offtaker","buyer","due diligence","qa","first principles","5 minutes","physics review"],
    a: "Livio Review audits any vendor proposal from first principles of physics in 5 minutes. It flags optimistic PUE claims, undersized cooling, and vendor swap opportunities, plus a CapEx delta vs. Livio's model. Perpetually free.",
    product: "Review" },
  { q: "What is Livio Mobile?",
    aliases: ["mobile","field app","operations","jobsite","eagle eye","state machine"],
    a: "Livio Mobile is the field operations app. Eagle Eye view of every panel on the wall, in real time — staged → lifting → installed → QC verified. PMs and crews work off the same data the office sees.",
    product: "Mobile" },
  { q: "How is Livio different from a traditional GC?",
    aliases: ["gc","general contractor","design build","stick built","traditional","competitors"],
    a: "We treat the data center as a product, not a project. Same panels, same crews, same playbook on every site — so cost, schedule, and quality stop varying with local trades.",
    product: "Smart Shell" },
  { q: "What sizes of data center can Livio build?",
    aliases: ["scale","mw","megawatt","gw","gigawatt","capacity","size","small dc","hyperscale"],
    a: "20 MW to 1+ GW per site. Same panel system, MEP topology, and procurement workflow across that whole range.",
    product: "LAIF" },
  { q: "How fast is land to compute?",
    aliases: ["speed","timeline","how long","days","weeks","duration","schedule","99d"],
    a: "About 99 days from break ground to first compute online. Shell is up in ~45 days; MEP and racks run in parallel with procurement through Hub.",
    product: "LAIF" },
  { q: "How does Hub get first bids in 24 hours?",
    aliases: ["how does hub work","24 hour bids","fast procurement","ai rfq","spec extraction"],
    a: "Hub maintains 80+ verified vendors with live lead-time data. Our AI turns your RFP into a structured RFQ and fires it to matched vendors in parallel. Anonymous routing until you choose to engage.",
    product: "Hub" },
  { q: "What inputs does Grid read?",
    aliases: ["grid inputs","power water climate","what data","physics inputs","first principles inputs"],
    a: "Power (utility queue, co-gen, hydro, nuclear), water (real flow rates → cooling plant size), and climate (wet-bulb → adiabatic / air-side / hybrid viability, realistic PUE).",
    product: "Grid", url: "https://grid.golivio.com" },
  { q: "What does Grid output?",
    aliases: ["grid output","design output","what does grid produce","deliverables"],
    a: "Cluster + rack counts, transformer and switchgear topology, CDU count, cooling plant choice, critical-path schedule, parametric CapEx, and a vendor shortlist matched to Hub.",
    product: "Grid", url: "https://grid.golivio.com" },
  { q: "Which tools are free?",
    aliases: ["free","pricing","perpetually free","cost"],
    a: "Three of the six tools are perpetually free: Grid (engineering), Hub (procurement), and Review (proposal QA). Smart Shell and the full LAIF EPC are commercial engagements.",
    product: "Livio" },
  { q: "Where is Livio based?",
    aliases: ["location","hq","headquarters","los altos","california"],
    a: "Los Altos, California. Built on top of Livio Building Systems.",
    product: "Livio" },
  { q: "How do I get started?",
    aliases: ["start","sign in","console","onboard","get started","kick off"],
    a: "Open the free tool that fits — Grid for sizing, Hub for procurement, Review for a proposal audit. For the full LAIF playbook, explore the solutions on this page.",
    product: "Livio", url: "#stack" },
];

/* ---- client keyword ranker (fallback) ---- */

const STOP = new Set([
  "a","an","the","is","are","was","were","be","been","being","of","to","and","or","but",
  "for","with","on","in","at","by","from","as","that","this","it","its","i","my","me",
  "we","our","you","your","they","them","their","what","how","does","do","did","can",
  "should","would","could","will","just","about","tell","explain",
]);
function tokens(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9+\-\s]/g, " ").split(/\s+/).map((t) => t.trim()).filter((t) => t && !STOP.has(t));
}
function score(query: string[], entry: Entry): number {
  const hay = [entry.q, ...(entry.aliases || []), entry.a, entry.product || ""].join(" ").toLowerCase();
  let s = 0;
  for (const t of query) {
    if (!t) continue;
    if (entry.q.toLowerCase().split(/\W+/).includes(t)) s += 4;
    if ((entry.aliases || []).some((a) => a.toLowerCase().split(/\W+/).includes(t))) s += 3;
    if (hay.includes(t)) s += 1;
  }
  return s;
}
function rank(query: string): Entry[] {
  const q = tokens(query);
  if (!q.length) return [];
  return ENTRIES.map((e) => ({ e, s: score(q, e) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 3).map((x) => x.e);
}

/* ---- UI ---- */

const PRESETS = [
  "What is Livio?",
  "Grid vs. Hub?",
  "How fast?",
  "Which tools are free?",
];

type AnswerState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ai"; answer: string; product?: string | null; url?: string | null }
  | { kind: "fallback"; results: Entry[] };

export default function AISearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<AnswerState>({ kind: "idle" });
  const wrap = useRef<HTMLDivElement | null>(null);
  const input = useRef<HTMLInputElement | null>(null);
  const reqCount = useRef(0);

  async function ask(text: string) {
    const query = text.trim();
    if (!query) return;
    setQ(query);
    setOpen(true);
    setState({ kind: "loading" });
    const id = ++reqCount.current;
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (id !== reqCount.current) return; // stale
      if (r.ok) {
        const j = await r.json();
        setState({ kind: "ai", answer: j.answer, product: j.product, url: j.url });
        return;
      }
    } catch { /* network fail — fall through */ }
    if (id !== reqCount.current) return;
    setState({ kind: "fallback", results: rank(query) });
  }

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrap.current) return;
      if (!wrap.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        input.current?.focus();
        setOpen(true);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrap} className="relative w-full">
      <form
        onSubmit={(e) => { e.preventDefault(); if (q.trim()) ask(q.trim()); }}
        className="group relative flex items-center"
      >
        <div className="pointer-events-none absolute left-4 flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden className="text-text-low">
            <path fill="currentColor" d="M11.74 10.34a5.5 5.5 0 1 0-1.4 1.4l3.0 3.0a1 1 0 0 0 1.42-1.42l-3.02-3zM3 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
          </svg>
          <span className="hidden text-[13px] font-bold uppercase tracking-[0.1em] text-text-low sm:inline">Livio AI</span>
        </div>
        <input
          ref={input} type="text" value={q}
          onFocus={() => setOpen(true)}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask anything about Livio…"
          aria-label="Ask anything about Livio"
          className="w-full rounded-full border border-line2 bg-white py-4 pl-12 pr-28 text-[16px] text-text-hi shadow-card transition-all placeholder:text-text-low focus:border-gold-500 focus:outline-none focus:shadow-ring sm:pl-[142px] sm:pr-32"
        />
        <div className="absolute right-2 flex items-center gap-2">
          <kbd className="hidden rounded border border-line2 bg-white/70 px-2 py-0.5 font-mono text-[12px] font-bold text-text-low md:inline">⌘K</kbd>
          <button type="submit" className="btn-gold py-2 text-[14px]" aria-label="Ask">
            Ask <span aria-hidden>→</span>
          </button>
        </div>
      </form>

      <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[13px]">
        <span className="font-bold uppercase tracking-[0.1em] text-text-low">Try:</span>
        {PRESETS.map((p) => (
          <button key={p} onClick={() => ask(p)} className="rounded-full border border-line2 bg-white/70 px-3.5 py-1.5 font-medium text-text-mid transition-all hover:border-gold-500 hover:text-text-hi">
            {p}
          </button>
        ))}
      </div>

      {open && state.kind !== "idle" && (
        <div role="region" aria-label="Search results" className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-40 max-h-[60vh] overflow-y-auto rounded-2xl border border-line2 bg-white p-4 shadow-elev">
          <Header state={state} onClose={() => setOpen(false)} />
          <Body state={state} />
        </div>
      )}
    </div>
  );
}

function Header({ state, onClose }: { state: AnswerState; onClose: () => void }) {
  const label =
    state.kind === "loading" ? "Thinking…" :
    state.kind === "ai" ? "AI · powered by Claude" :
    state.kind === "fallback" ? `${state.results.length} match${state.results.length === 1 ? "" : "es"} · keyword search` :
    "";
  return (
    <div className="mb-2 flex items-center justify-between">
      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-text-low">{label}</p>
      <button onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-text-low transition-colors hover:bg-text-hi/[0.06] hover:text-text-hi">✕</button>
    </div>
  );
}

function Body({ state }: { state: AnswerState }) {
  if (state.kind === "loading") {
    return (
      <div className="flex items-center gap-3 p-4 text-[15px] text-text-mid">
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-gold-500" aria-hidden />
        Asking Livio…
      </div>
    );
  }
  if (state.kind === "ai") {
    return (
      <div className="rounded-xl border border-line bg-cream-50 p-4">
        <div className="flex flex-wrap items-center gap-2">
          {state.product && (
            <span className="rounded-full border border-gold/40 bg-gold/15 px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.1em] text-gold-700">
              {state.product}
            </span>
          )}
          <span className="rounded-full bg-emerald-50 px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-700">AI answer</span>
        </div>
        <p className="mt-3 text-[16px] leading-[1.65] text-text-hi">{state.answer}</p>
        {state.url && (
          <a href={state.url} target={state.url.startsWith("http") ? "_blank" : undefined} rel={state.url.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-3 inline-flex items-center gap-1 text-[14px] font-bold text-gold-700 hover:text-gold-600">
            Open {state.product || "tool"} <span aria-hidden>→</span>
          </a>
        )}
      </div>
    );
  }
  if (state.kind === "fallback") {
    if (state.results.length === 0) {
      return (
        <div className="p-3 text-[15px] text-text-mid">
          No exact match. Try a different phrasing, or open{" "}
          <a href="https://grid.golivio.com" className="font-bold text-gold-700 underline-offset-4 hover:underline">Grid</a> /{" "}
          <a href="https://hub.golivio.com" className="font-bold text-gold-700 underline-offset-4 hover:underline">Hub</a>.
        </div>
      );
    }
    return (
      <ul className="space-y-3">
        {state.results.map((r, i) => (
          <li key={r.q} className="rounded-xl border border-line bg-cream-50 p-4">
            <div className="flex flex-wrap items-center gap-2">
              {r.product && (
                <span className="rounded-full border border-gold/40 bg-gold/15 px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.1em] text-gold-700">{r.product}</span>
              )}
              <span className="text-[14px] font-bold text-text-hi">{r.q}</span>
              {i === 0 && (
                <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-700">Best match</span>
              )}
            </div>
            <p className="mt-2 text-[15px] leading-[1.6] text-text-mid">{r.a}</p>
            {r.url && (
              <a href={r.url} target={r.url.startsWith("http") ? "_blank" : undefined} rel={r.url.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-2 inline-flex items-center gap-1 text-[14px] font-bold text-gold-700 hover:text-gold-600">
                Open {r.product || "tool"} <span aria-hidden>→</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  }
  return null;
}
