import Reveal from "./Reveal";

type Product = {
  name: string;
  sub: string;
  href: string;
  domain: string;
  headline: string;
  bullets: string[];
  badge: string;
  free?: boolean;
  monoDomain?: boolean;
  accent: string;
};

const products: Product[] = [
  {
    name: "Livio Grid",
    sub: "Engineering",
    href: "https://grid.golivio.com",
    domain: "grid.golivio.com",
    headline: "Engineer a full AI data center in 30 minutes — from physics.",
    bullets: [
      "Power, water, climate → real design",
      "Sizes racks, transformers, cooling",
      "CapEx + critical path in one pass",
      "Vendor shortlist into Hub",
    ],
    badge: "GRID", free: true, accent: "from-sky-200 via-sky-100",
  },
  {
    name: "Livio Hub",
    sub: "Procurement",
    href: "https://hub.golivio.com",
    domain: "hub.golivio.com",
    headline: "Drop in an RFP. Get first vendor bids in under 24 hours.",
    bullets: [
      "AI reads any RFP (PDF, Excel, or form)",
      "80+ verified vendors quote in parallel",
      "Value-engineering swap suggestions",
      "Anonymous until you engage",
    ],
    badge: "HUB", free: true, accent: "from-sky-200 via-cream-100",
  },
  {
    name: "Livio Smart Shell",
    sub: "Building system",
    href: "#factory",
    domain: "smart>",
    headline: "Pre-assembled buildings that go up 75% faster.",
    bullets: [
      "Walls + roof with MEP inside",
      "LEGO-style assembly, smaller crews",
      "20 MW → 1+ GW, same kit",
      "AI-ready densities, day one",
    ],
    badge: "SMART SHELL", monoDomain: true, accent: "from-cream-100 via-sky-100",
  },
  {
    name: "Livio Review",
    sub: "Proposal QA",
    href: "#",
    domain: "review.golivio.com",
    headline: "Vet any vendor proposal in 5 minutes, from first principles.",
    bullets: [
      "Physics-first design audit",
      "PUE / cooling / topology checks",
      "CapEx delta vs. Livio's model",
      "Vendor swaps that save money",
    ],
    badge: "REVIEW", free: true, accent: "from-cream-100 via-sky-50",
  },
  {
    name: "Livio Mobile",
    sub: "Field operations",
    href: "#live-build",
    domain: "Field app",
    headline: "Eagle Eye view of every panel, every state, in real time.",
    bullets: [
      "Live state machine for the jobsite",
      "Staged → lifting → installed → QC",
      "PMs and crews on the same wall",
      "Ties straight back to Grid + Hub",
    ],
    badge: "MOBILE", accent: "from-sky-100 via-sky-50",
  },
  {
    name: "Livio AI Factory",
    sub: "Full EPC (LAIF)",
    href: "/#methodology",
    domain: "golivio.com / LAIF",
    headline: "Run the whole stack as one playbook. Land to compute in 99 days.",
    bullets: [
      "Grid → Hub → Smart Shell, end-to-end",
      "One spec dictionary across tools",
      "20 MW to 1+ GW per site",
      "Day-one operational, hand-off to ops",
    ],
    badge: "LAIF", accent: "from-sky-200 via-cream-100",
  },
];

const flow = [
  { step: "01", phase: "Design",  tool: "Livio Grid",   proof: "30 min" },
  { step: "02", phase: "Source",  tool: "Livio Hub",    proof: "24 hr" },
  { step: "03", phase: "Build",   tool: "Smart Shell",  proof: "75% faster" },
  { step: "04", phase: "Operate", tool: "Livio Mobile", proof: "Live floor" },
];

export default function Stack() {
  return (
    <section id="stack" className="section-sky relative isolate scroll-mt-24 overflow-hidden border-b border-line/40 py-20 md:py-28" aria-labelledby="stack-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-50" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-gold">The Stack</span></Reveal>
          <Reveal delay={1}><h2 id="stack-h" className="section-title mt-4 text-balance">Six tools. One playbook.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              <strong className="font-bold text-text-hi">Grid</strong> designs the site.{" "}
              <strong className="font-bold text-text-hi">Hub</strong> sources it.{" "}
              <strong className="font-bold text-text-hi">Smart Shell</strong> builds it.{" "}
              <strong className="font-bold text-text-hi">Mobile</strong> runs the floor.{" "}
              <strong className="font-bold text-text-hi">Review</strong> audits any stage.{" "}
              <strong className="font-bold text-text-hi">LAIF</strong> runs all five end-to-end. <span className="text-gold-700">Three are perpetually free.</span>
            </p>
          </Reveal>
        </div>

        {/* Flow diagram — how the tools tie together */}
        <Reveal delay={3}>
          <div className="mt-14">
            {/* Review — sits above and audits any stage */}
            <div className="mb-4 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-gold-700 shadow-card">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-600 animate-pulse" aria-hidden />
                Livio Review
              </span>
              <span className="text-[13px] text-text-mid">Audits any vendor proposal — drop in, get a physics-first report in 5 minutes.</span>
            </div>

            {/* The four-step workflow */}
            <div className="relative grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
              {flow.map((s, i) => (
                <div
                  key={s.step}
                  className="relative flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card md:rounded-none md:border-r-0 md:p-6 md:first:rounded-l-2xl md:last:rounded-r-2xl md:last:border-r"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[12px] font-bold text-gold-700">{s.step}</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-text-low">{s.phase}</span>
                  </div>
                  <div className="mt-3 text-[17px] font-bold tracking-[-0.01em] text-text-hi">{s.tool}</div>
                  <div className="mt-1 font-mono text-[13px] font-bold text-gold-700">{s.proof}</div>
                  {i < flow.length - 1 && (
                    <span aria-hidden className="pointer-events-none absolute right-[-9px] top-1/2 hidden -translate-y-1/2 md:inline-flex">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M2 9 H14 M10 5 L14 9 L10 13" stroke="rgb(184, 136, 0)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* LAIF — the wrapper */}
            <div className="mt-3 flex flex-col items-center justify-between gap-2 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/10 via-gold/15 to-gold/10 px-5 py-3 text-center md:flex-row md:text-left">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-gold-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-600" aria-hidden />
                LAIF · Livio AI Factory
              </span>
              <span className="text-[14px] text-text-mid">Runs all five as one EPC. Land to live compute in 99 days.</span>
            </div>
          </div>
        </Reveal>

        {/* Section header for the 6 cards */}
        <div className="mt-20 flex items-end justify-between gap-6 border-b border-line/60 pb-4">
          <Reveal><span className="eyebrow-gold">Each tool, in detail</span></Reveal>
          <Reveal delay={1}>
            <span className="hidden text-[13px] text-text-low md:inline-block">Hover any card to open its product page.</span>
          </Reveal>
        </div>

        {/* The 6 product cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <a
                href={p.href}
                {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group card-light lift relative block h-full overflow-hidden p-6 md:p-7"
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${p.accent} to-transparent opacity-60 blur-3xl transition-opacity group-hover:opacity-80`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-gold-700">
                      {String(i + 1).padStart(2, "0")} · {p.badge}
                    </span>
                    {p.free && <span className="badge-free ml-auto">Free</span>}
                  </div>
                  <h3 className="mt-3 text-[24px] font-bold tracking-[-0.02em] text-text-hi">
                    {p.name}
                  </h3>
                  <div className="mt-1 text-[14px] font-medium text-text-low">{p.sub}</div>
                  <p className="mt-4 text-[17px] font-bold leading-tight text-gold-700">{p.headline}</p>
                  <ul className="mt-5 grid gap-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[15px] text-text-mid">
                        <span aria-hidden className="mt-[10px] inline-block h-px w-3 flex-shrink-0 bg-gold-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4">
                    <span className={p.monoDomain ? "font-mono text-[13px] text-text-low" : "text-[13px] text-text-low"}>
                      {p.domain}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-gold-700 transition-transform group-hover:translate-x-[2px]">
                      {p.href.startsWith("http") ? "Open" : "Learn more"} <span aria-hidden>→</span>
                    </span>
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
