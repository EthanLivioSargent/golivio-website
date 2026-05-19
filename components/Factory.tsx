import Reveal from "./Reveal";

const features = [
  { title: "Pre-engineered, multi-trade panels",  body: "Walls and roof modules ship from the factory with structural, electrical, and plumbing integrated. No trade-stacking on-site, no surprises in the field." },
  { title: "LEGO-brick assembly · 75% faster",    body: "Standardized components dock together with repeatable connections. Crews are smaller, schedules predictable, quality holds across every site we build." },
  { title: "20 MW to 1+ GW",                       body: "The same module set scales from regional inference deployments to gigawatt-class training campuses. Identical methodology, identical interfaces." },
  { title: "Day-one AI-ready",                     body: "Designed around modern liquid-cooled rack densities, MV switchgear topology, and adiabatic / hybrid cooling — not retrofitted around them." },
];

export default function Factory() {
  return (
    <section id="factory" className="section-navy relative isolate scroll-mt-24 overflow-hidden border-b border-navy-900 py-20 md:py-28" aria-labelledby="factory-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-dark-fine opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[800px] rounded-full bg-sky-radial opacity-60" aria-hidden />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-light">The Factory · Smart Shell</span></Reveal>
          <Reveal delay={1}><h2 id="factory-h" className="section-title mt-3 text-balance text-invert-hi">A buildable AI data center, shipped in panels.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-invert-mid">
              Livio Smart Shell — a pre-assembled, panelized building system — replaces stick-built construction with a factory-grade product. The same wall, roof, and MEP modules go to every site, so schedule, cost, and quality stop varying with local trades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <article className="card-dark lift-dark h-full p-6 md:p-7">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 font-mono text-[0.95rem] font-bold text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[1.08rem] font-bold tracking-[-0.01em] text-invert-hi">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-[1.7] text-invert-low">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
