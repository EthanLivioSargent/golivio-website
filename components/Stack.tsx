import Reveal from "./Reveal";

type Product = {
  name: string; sub: string; href: string; domain: string; headline: string; body: string;
  bullets: string[]; badge: string; free?: boolean; monoDomain?: boolean; accent: string;
};

const products: Product[] = [
  {
    name: "Livio Grid",
    sub: "Engineering & underwriting",
    href: "https://grid.golivio.com",
    domain: "grid.golivio.com",
    headline: "AI DC engineering & underwriting from first principles of physics, in 30 minutes.",
    body: "Grid is the design platform behind every live Livio project. Same rack models, same valve specs, same cost framework — sized against the parcel's real conditions, not a generic template.",
    bullets: ["Sizes clusters, transformers, CDUs, racks","Adiabatic / air-side / hybrid PUE modeling","Critical-path schedule from Day 0","CapEx budgeting, parametric"],
    badge: "GRID", free: true, accent: "from-sky-200 via-sky-100",
  },
  {
    name: "Livio Hub",
    sub: "Buy-side procurement",
    href: "https://hub.golivio.com",
    domain: "hub.golivio.com",
    headline: "Buy-side procurement engine for AI DC developers — first bids in under 24 hours.",
    body: "Drop in your RFP (PDF, Excel, or a 30-second form). Hub extracts every spec into a structured RFQ, fires it to matched vendors, surfaces value-engineering swaps, and compares bids side-by-side as they land.",
    bullets: ["AI-extracted RFQs from any document","Hero swap recommendations (e.g. 1×2.5 MW → 3×1 MW)","Live lead-time data across categories","Anonymous routing until you engage"],
    badge: "HUB", free: true, accent: "from-sky-200 via-cream-100",
  },
  {
    name: "Livio Smart Shell",
    sub: "Pre-assembled building system",
    href: "#factory",
    domain: "smart>",
    headline: "Pre-assembled, panelized building system for 75% faster construction.",
    body: "Walls and roof modules ship from the factory with structural, electrical, and plumbing integrated. Assembled on-site like LEGO. Predictable schedule, cost, and quality across every site.",
    bullets: ["Multi-trade panels (struct + electrical + plumbing)","20 MW → 1+ GW with the same module set","AI-ready: liquid-cooled densities, MV switchgear","Same crews, same playbook, every site"],
    badge: "SMART SHELL", monoDomain: true, accent: "from-cream-100 via-sky-100",
  },
  {
    name: "Livio AI Factory (LAIF)",
    sub: "Full-stack EPC",
    href: "/#methodology",
    domain: "golivio.com / LAIF",
    headline: "75% faster Land to Compute EPC — Grid, Hub, Smart Shell, and Review under one roof.",
    body: "End-to-end EPC for AI data centers. We run Grid → Hub → Smart Shell as one playbook, taking a qualified parcel to first compute online in roughly a fiscal quarter.",
    bullets: ["Land → Grid → Hub → Smart Shell, one pipeline","20 MW to 1+ GW per site","Same spec dictionary across tools","Day-one operational, hand-off to ops"],
    badge: "LAIF", accent: "from-sky-100 via-sky-50",
  },
  {
    name: "Livio Review",
    sub: "Proposal review for offtakers / buyers",
    href: "#",
    domain: "review.golivio.com",
    headline: "AI DC proposal review for offtakers and buyers, from first principles of physics, in 5 minutes.",
    body: "Drop in a vendor proposal. Livio Review evaluates the design from first principles — flagging optimistic PUE claims, undersized cooling, and vendor swaps that save real money.",
    bullets: ["Physics-first design audit","PUE / wet-bulb / topology sanity checks","CapEx delta vs. Livio model","Vendor swap recommendations"],
    badge: "REVIEW", free: true, accent: "from-cream-100 via-sky-50",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section-sky relative isolate scroll-mt-24 overflow-hidden border-b border-line py-20 md:py-28" aria-labelledby="stack-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-50" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-gold">The Stack</span></Reveal>
          <Reveal delay={1}><h2 id="stack-h" className="section-title mt-4 text-balance">Five products. One factory. One prompt.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Each piece of the Livio stack is useful on its own — and three of them are perpetually free. Together they collapse the traditional 18-month buildout into a 99-day playbook, with structured data flowing from parcel to procurement to schedule.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <a href={p.href} {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group card-light lift relative block h-full overflow-hidden p-7 md:p-8">
                <div className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br ${p.accent} to-transparent opacity-70 blur-3xl transition-opacity group-hover:opacity-90`} aria-hidden />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-gold/40 bg-gold/15 px-2.5 py-[3px] text-[12px] font-bold uppercase tracking-[0.12em] text-gold-700">{p.badge}</span>
                    <span className={p.monoDomain ? "font-mono text-[14px] text-text-low" : "text-[14px] text-text-low"}>{p.domain}</span>
                    {p.free && <span className="badge-free ml-auto">● Perpetually free</span>}
                  </div>
                  <h3 className="mt-4 text-[28px] font-bold tracking-[-0.02em] text-text-hi">
                    {p.name}<span className="ml-2 text-[16px] font-medium text-text-low">— {p.sub}</span>
                  </h3>
                  <p className="mt-3 text-[18px] font-semibold leading-snug text-gold-700">{p.headline}</p>
                  <p className="mt-3 text-[16px] leading-[1.65] text-text-mid">{p.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[15px] text-text-mid">
                        <span aria-hidden className="mt-[8px] inline-block h-1.5 w-1.5 rounded-full bg-gold-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-gold-700 transition-transform group-hover:translate-x-[2px]">
                    {p.href.startsWith("http") ? "Open" : "See it in action"} <span aria-hidden>→</span>
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
