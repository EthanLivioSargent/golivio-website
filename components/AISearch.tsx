"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Entry = {
  q: string;
  aliases?: string[];
  a: string;
  product?: "Grid" | "Hub" | "Smart Shell" | "Review" | "LAIF" | "Livio";
  url?: string;
};

const ENTRIES: Entry[] = [
  { q: "What is Livio?", aliases: ["who is livio","livio company","livio building systems","laif"], a: "Livio is the AI Factory. We deliver AI data centers 75% faster — land to operational compute — by combining first-principles engineering (Livio Grid), buy-side procurement (Livio Hub), and a pre-assembled panelized building system (Livio Smart Shell) under a single EPC (LAIF).", product: "Livio", url: "https://golivio.com" },
  { q: "What is Livio Grid?", aliases: ["grid","engineering","underwriting","design tool","physics","30 minutes","30 min","site intelligence","pue","wet bulb","adiabatic"], a: "Livio Grid is AI DC engineering & underwriting from first principles of physics in 30 minutes. It sizes clusters, transformers, CDUs, and racks against a parcel's real power/water/climate inputs and outputs a CapEx envelope, a critical-path schedule, and a vendor shortlist. Perpetually free.", product: "Grid", url: "https://grid.golivio.com" },
  { q: "What is Livio Hub?", aliases: ["hub","procurement","buy side","rfq","rfp","vendors","bids","24 hours","24h","lead time","long-lead equipment"], a: "Livio Hub is a buy-side procurement engine for AI data center developers. Drop in an RFP (PDF, Excel, or 30-second form) and Hub extracts every spec into a structured RFQ, fires it to 80+ verified vendors, and returns first bids in under 24 hours with hero-swap recommendations. Perpetually free.", product: "Hub", url: "https://hub.golivio.com" },
  { q: "What is Livio Smart Shell?", aliases: ["smart shell","shell","smart-shell","panelized","pre-assembled","modular construction","lego","75% faster construction","panels","building system"], a: "Livio Smart Shell is a pre-assembled, panelized building system that delivers 75% faster AI data center construction. Walls and roof modules ship with structural, electrical, and plumbing integrated — assembled on-site like LEGO, with predictable schedule, cost, and quality across sites.", product: "Smart Shell" },
  { q: "What is Livio AI Factory (LAIF)?", aliases: ["laif","ai factory","epc","end to end","full stack","land to compute","99 days","full epc"], a: "LAIF (Livio AI Factory) is end-to-end EPC for AI data centers — 75% faster land to compute. We run Grid → Hub → Smart Shell as one playbook, taking a qualified parcel to first compute online in roughly a fiscal quarter.", product: "LAIF", url: "https://golivio.com" },
  { q: "What is Livio Review?", aliases: ["review","proposal review","offtaker","buyer","due diligence","qa","first principles","5 minutes","physics review"], a: "Livio Review is an AI DC proposal review for offtakers and buyers. Drop in a vendor proposal and Review evaluates the design from first principles of physics in 5 minutes — flagging optimistic PUE claims, undersized cooling, and vendor swap opportunities. Perpetually free.", product: "Review" },
  { q: "How is Livio different from a traditional GC?", aliases: ["gc","general contractor","design build","stick built","traditional","competitors"], a: "We treat the data center as a product, not a project. Pre-engineered panels with integrated MEP replace stick-built construction. The same module set scales from 20 MW regional inference to 1+ GW training campuses — so labor needs, cost, and quality stop varying with local trades.", product: "Smart Shell" },
  { q: "What sizes of data center does Livio build?", aliases: ["scale","mw","megawatt","gw","gigawatt","capacity","size","small dc","hyperscale"], a: "Modules scale from 20 MW to 1+ GW per site. Same panel system, MEP topology, and procurement workflow apply across that range — smaller inference deployments use the same playbook as gigawatt training campuses.", product: "LAIF" },
  { q: "How fast is land to compute?", aliases: ["speed","timeline","how long","days","weeks","duration","schedule","99d"], a: "Roughly a fiscal quarter — about 99 days from breaking ground to first compute online. The shell is delivered in roughly 45 days using panelized modules; MEP and rack installation run in parallel as long-lead equipment lands through Hub.", product: "LAIF" },
  { q: "How does Hub get first bids in 24 hours?", aliases: ["how does hub work","24 hour bids","fast procurement","ai rfq","spec extraction"], a: "Hub maintains a network of 80+ verified vendors with real-time lead-time data. Livio's AI extracts each spec into a structured RFQ and fires it to matched vendors automatically. Anonymous routing keeps the buyer's identity private until they engage.", product: "Hub" },
  { q: "What inputs does Grid read?", aliases: ["grid inputs","power water climate","what data","physics inputs","first principles inputs"], a: "Power (grid/co-gen/hydro/nuclear proximity → transformer config and risk), water (free-cooling eligibility + flow rates → CDU count and cooling plant sizing), and climate (ambient wet-bulb → adiabatic / air-side / hybrid viability and realistic PUE).", product: "Grid", url: "https://grid.golivio.com" },
  { q: "What does Grid output?", aliases: ["grid output","design output","what does grid produce","deliverables"], a: "Cluster sizing & rack counts, transformer and switchgear topology, CDU count and cooling plant choice, critical-path schedule from Day 0, parametric CapEx budget, and a vendor shortlist matched to Hub.", product: "Grid", url: "https://grid.golivio.com" },
  { q: "Is Livio Grid free?", aliases: ["free grid","pricing grid","perpetually free","cost grid"], a: "Yes — Livio Grid is perpetually free. Engineer and underwrite as many sites as you want, 30 minutes each, no usage caps.", product: "Grid", url: "https://grid.golivio.com" },
  { q: "Is Livio Hub free?", aliases: ["free hub","pricing hub","perpetually free","cost hub"], a: "Yes — Livio Hub is perpetually free for AI DC developers running RFQs. Vendors pay; buyers don't.", product: "Hub", url: "https://hub.golivio.com" },
  { q: "Is Livio Review free?", aliases: ["free review","pricing review","perpetually free","cost review"], a: "Yes — Livio Review is perpetually free. Drop in a proposal, get a physics-first review back in 5 minutes.", product: "Review" },
  { q: "Where is Livio based?", aliases: ["location","hq","headquarters","los altos","california"], a: "Livio is headquartered in Los Altos, California. The original company, Livio Building Systems, pioneered technology-driven construction; LAIF is the AI-data-center product line built on top of that foundation.", product: "Livio" },
  { q: "How do I get started?", aliases: ["start","sign in","console","onboard","get started","kick off"], a: "Open the tool that fits where you are — Grid for sizing, Hub for procurement, Review for vetting a proposal — or sign in at console.golivio.com to kick off the full LAIF playbook with the team.", product: "Livio", url: "https://console.golivio.com" },
];

const STOP = new Set(["a","an","the","is","are","was","were","be","been","being","of","to","and","or","but","for","with","on","in","at","by","from","as","that","this","it","its","i","my","me","we","our","you","your","they","them","their","what","how","does","do","did","can","should","would","could","will","just","about","tell","explain"]);

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

const PRESETS = [
  "What is Livio?",
  "Difference between Grid and Hub?",
  "How fast is land to compute?",
  "Is Livio Review free?",
];

export default function AISearch() {
  const [q, setQ] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement | null>(null);
  const input = useRef<HTMLInputElement | null>(null);

  const results = useMemo(() => (submitted ? rank(submitted) : []), [submitted]);

  function ask(text: string) {
    setQ(text); setSubmitted(text); setOpen(true);
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
          <span className="hidden text-[13px] font-bold uppercase tracking-[0.12em] text-text-low sm:inline">Ask Livio</span>
        </div>
        <input
          ref={input} type="text" value={q}
          onFocus={() => setOpen(true)}
          onChange={(e) => setQ(e.target.value)}
          placeholder="What is Livio Grid? How does Hub work? …"
          aria-label="Ask anything about Livio"
          className="w-full rounded-full border border-line2 bg-white py-4 pl-12 pr-32 text-[16px] text-text-hi shadow-card transition-all placeholder:text-text-low focus:border-gold-500 focus:outline-none focus:shadow-ring sm:pl-[142px]"
        />
        <div className="absolute right-2 flex items-center gap-2">
          <kbd className="hidden rounded border border-line2 bg-white/70 px-2 py-0.5 font-mono text-[12px] font-bold text-text-low md:inline">⌘K</kbd>
          <button type="submit" className="btn-gold py-2 text-[14px]" aria-label="Ask">
            Ask <span aria-hidden>→</span>
          </button>
        </div>
      </form>

      <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[13px]">
        <span className="font-bold uppercase tracking-[0.12em] text-text-low">Try:</span>
        {PRESETS.map((p) => (
          <button key={p} onClick={() => ask(p)} className="rounded-full border border-line2 bg-white/70 px-3.5 py-1.5 font-medium text-text-mid transition-all hover:border-gold-500 hover:text-text-hi">
            {p}
          </button>
        ))}
      </div>

      {open && submitted && (
        <div role="region" aria-label="Search results" className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-40 max-h-[60vh] overflow-y-auto rounded-2xl border border-line2 bg-white p-4 shadow-elev">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-text-low">
              {results.length > 0 ? `${results.length} answer${results.length === 1 ? "" : "s"} · physics-first, citation-linked` : "No match"}
            </p>
            <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full p-1.5 text-text-low transition-colors hover:bg-text-hi/[0.06] hover:text-text-hi">✕</button>
          </div>

          {results.length === 0 ? (
            <div className="p-3 text-[15px] text-text-mid">
              No exact match. Try one of the suggested questions, or jump into{" "}
              <a href="https://grid.golivio.com" className="font-semibold text-gold-700 underline-offset-4 hover:underline">Livio Grid</a>{" "}
              and{" "}
              <a href="https://hub.golivio.com" className="font-semibold text-gold-700 underline-offset-4 hover:underline">Livio Hub</a>.
            </div>
          ) : (
            <ul className="space-y-3">
              {results.map((r, i) => (
                <li key={r.q} className="rounded-xl border border-line bg-cream-50 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {r.product && (
                      <span className="rounded-full border border-gold/40 bg-gold/15 px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.12em] text-gold-700">{r.product}</span>
                    )}
                    <span className="text-[14px] font-semibold text-text-hi">{r.q}</span>
                    {i === 0 && (
                      <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700">Best match</span>
                    )}
                  </div>
                  <p className="mt-2 text-[15px] leading-[1.6] text-text-mid">{r.a}</p>
                  {r.url && (
                    <a href={r.url} target={r.url.startsWith("http") ? "_blank" : undefined} rel={r.url.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-2 inline-flex items-center gap-1 text-[14px] font-semibold text-gold-700 hover:text-gold-600">
                      Open {r.product || "tool"} <span aria-hidden>→</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
