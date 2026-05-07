import Reveal from "./Reveal";

type Product = {
  name: string;
  sub: string;
  href: string;
  domain: string;
  headline: string;
  body: string;
  bullets: string[];
  accent: string;
  badge: string;
  monoDomain?: boolean;
};

const products: Product[] = [
  {
    name: "Livio Land",
    sub: "Engineered parcels",
    href: "https://land.golivio.com",
    domain: "land.golivio.com",
    headline: "Sites pre-screened for power, fiber, water, and zoning.",
    body:
      "Skip the multi-month site search. Livio Land surfaces parcels filtered by utility capacity, fiber tier, water availability, and entitlement risk — with the same spec dictionary the rest of the stack speaks.",
    bullets: [
      "Utility capacity and queue position",
      "Tier-1 fiber proximity",
      "Water rights & climate fit",
      "Zoning + entitlement signals",
    ],
    accent: "from-gold/30 via-gold/5",
    badge: "LAND",
  },
  {
    name: "Livio Grid",
    sub: "Site intelligence",
    href: "https://grid.golivio.com",
    domain: "grid.golivio.com",
    headline: "Reads exact power, water, and climate. Adapts the design in hours.",
    body:
      "Grid is the design platform behind every live Livio project. Same rack models, same valve specs, same cost framework — sized against the parcel's real conditions, not a generic template.",
    bullets: [
      "Sizes clusters, transformers, CDUs, racks",
      "Adiabatic / air-side / hybrid PUE modeling",
      "Critical-path schedule from Day 0",
      "CapEx budgeting, parametric",
    ],
    accent: "from-gold/55 via-gold/10",
    badge: "GRID",
  },
  {
    name: "Livio Hub",
    sub: "Buy-side procurement",
    href: "https://hub.golivio.com",
    domain: "hub.golivio.com",
    headline: "80+ verified vendors. First bids in under 24 hours.",
    body:
      "Drop in your RFP — PDF, Excel, or a 30-second form. Hub extracts every spec into a structured RFQ, fires it to matched vendors, surfaces value-engineering swaps, and compares bids side-by-side as they land.",
    bullets: [
      "AI-extracted RFQs from any document",
      "Hero swap recommendations (e.g. 1×2.5 MW → 3×1 MW)",
      "Live lead-time data across categories",
      "Anonymous routing until you engage",
    ],
    accent: "from-gold/80 via-gold/15",
    badge: "HUB",
  },
  {
    name: "Slart Shell",
    sub: "The unified command line",
    href: "#hero-h",
    domain: "slart>",
    headline: "One prompt drives the entire stack.",
    body:
      "Slart is Livio's agentic shell: a single command line where the work flows across Land, Grid, and Hub. Plan a site. Size the design. Send RFQs. Track the schedule. All from the same prompt — same way every time.",
    bullets: [
      "Land → Grid → Hub in one pipe",
      "Reproducible, scriptable, auditable",
      "Same spec dictionary across tools",
      "Designed for AI agents and humans",
    ],
    accent: "from-gold/100 via-gold/20",
    badge: "SLART",
    monoDomain: true,
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-line bg-bg-panel py-20 md:py-28"
      aria-labelledby="stack-h"
    >
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">The Stack</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="stack-h" className="section-title mt-3 text-balance">
              Four products. One factory. One prompt.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose">
              Each piece of the Livio stack is useful on its own. Together they collapse the
              traditional 18-month buildout into a 99-day playbook — with structured data flowing
              from parcel to procurement to schedule.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <a
                href={p.href}
                {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group surface lift relative block h-full overflow-hidden p-6 md:p-8"
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br ${p.accent} to-transparent opacity-50 blur-3xl transition-opacity group-hover:opacity-80`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="rounded border border-gold/30 bg-gold/10 px-2 py-[3px] font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      {p.badge}
                    </span>
                    <span
                      className={
                        p.monoDomain
                          ? "font-mono text-[0.8rem] text-ink-low"
                          : "text-[0.8rem] text-ink-low"
                      }
                    >
                      {p.domain}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[1.4rem] font-bold tracking-[-0.02em] text-ink-hi">
                    {p.name}
                    <span className="ml-2 text-[0.92rem] font-semibold text-ink-dim">— {p.sub}</span>
                  </h3>
                  <p className="mt-3 text-[1.02rem] font-semibold leading-snug text-gold">
                    {p.headline}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink-low">{p.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[0.88rem] text-ink-mid">
                        <span aria-hidden className="mt-[7px] inline-block h-1 w-1 rounded-full bg-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-gold transition-transform group-hover:translate-x-[2px]">
                    {p.href.startsWith("http") ? "Open" : "See it in action"}{" "}
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
