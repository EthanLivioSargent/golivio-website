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
    name: "Livio Land",
    sub: "Site sourcing",
    href: "https://land.golivio.com",
    domain: "land.golivio.com",
    headline: "Power-ready data center land, matched to your load.",
    bullets: [
      "Parcels screened for power, fiber, water",
      "Utility-queue and LOI status upfront",
      "Climate + realistic PUE per site",
      "Shovel-ready projects for offtakers",
    ],
    badge: "LAND", accent: "from-sky-200 via-sky-100",
  },
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
      "Vendor shortlist straight into Hub",
    ],
    badge: "GRID", free: true, accent: "from-sky-200 via-cream-100",
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
    badge: "HUB", free: true, accent: "from-cream-100 via-sky-100",
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
    badge: "SMART SHELL", monoDomain: true, accent: "from-cream-100 via-sky-50",
  },
  {
    name: "Livio Review",
    sub: "Proposal QA",
    href: "https://review.golivio.com",
    domain: "review.golivio.com",
    headline: "Vet any vendor proposal in 5 minutes, from first principles.",
    bullets: [
      "Physics-first design audit",
      "PUE / cooling / topology checks",
      "CapEx delta vs. Livio's model",
      "Vendor swaps that save money",
    ],
    badge: "REVIEW", free: true, accent: "from-sky-100 via-sky-50",
  },
  {
    name: "Livio AI Factory",
    sub: "Full EPC (LAIF)",
    href: "#factory",
    domain: "golivio.com / LAIF",
    headline: "The whole data center, delivered as one EPC.",
    bullets: [
      "Land → Grid → Hub → Smart Shell, end-to-end",
      "One spec dictionary across every step",
      "20 MW to 1+ GW per site",
      "Day-one operational, hand-off to ops",
    ],
    badge: "LAIF", accent: "from-sky-200 via-cream-100",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section-sky relative isolate scroll-mt-24 overflow-hidden border-b border-line/40 py-20 md:py-28" aria-labelledby="stack-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-50" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-gold">Solutions</span></Reveal>
          <Reveal delay={1}><h2 id="stack-h" className="section-title mt-4 text-balance">Six solutions. One company.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              <strong className="font-bold text-text-hi">Land</strong> finds the site.{" "}
              <strong className="font-bold text-text-hi">Grid</strong> engineers it.{" "}
              <strong className="font-bold text-text-hi">Hub</strong> procures it.{" "}
              <strong className="font-bold text-text-hi">Smart Shell</strong> builds it.{" "}
              <strong className="font-bold text-text-hi">Review</strong> audits any stage.{" "}
              <strong className="font-bold text-text-hi">LAIF</strong> runs the whole thing end-to-end. <span className="text-gold-700">Three are free to use.</span>
            </p>
          </Reveal>
        </div>

        {/* The six tools — clean grid, laid out plainly */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
