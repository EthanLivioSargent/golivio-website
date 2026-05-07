import Reveal from "./Reveal";

const features = [
  {
    title: "Pre-engineered, multi-trade panels",
    body:
      "Walls and roof modules ship from the factory with structural, electrical, and plumbing integrated. No trade-stacking on-site, no surprises in the field.",
  },
  {
    title: "LEGO-brick assembly",
    body:
      "Standardized components dock together with repeatable connections. Crews are smaller, schedules are predictable, quality holds across sites.",
  },
  {
    title: "20 MW to 1+ GW",
    body:
      "The same module set scales from regional inference deployments to gigawatt-class training campuses. Identical methodology, identical interfaces.",
  },
  {
    title: "Day-one AI-ready",
    body:
      "Designed around modern liquid-cooled rack densities, MV switchgear topology, and adiabatic / hybrid cooling — not retrofitted around them.",
  },
];

export default function Factory() {
  return (
    <section
      id="factory"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-line bg-bg-panel py-20 md:py-28"
      aria-labelledby="factory-h"
    >
      <div className="pointer-events-none absolute inset-0 bg-blueprint-fine opacity-50" aria-hidden />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">The Factory</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="factory-h" className="section-title mt-3 text-balance">
              A buildable AI data center, shipped in panels.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose">
              Livio's pre-engineered panelized system replaces stick-built construction with a
              factory-grade product. The same wall, roof, and MEP modules go to every site — so the
              schedule, cost, and quality stop varying with local trades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <article className="surface lift h-full p-6 md:p-7">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 font-mono text-[0.95rem] font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[1.08rem] font-bold tracking-[-0.01em] text-ink-hi">{f.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-[1.7] text-ink-low">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
