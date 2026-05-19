import Reveal from "./Reveal";

export default function Bottleneck() {
  return (
    <section className="section-sky relative border-b border-line py-20 md:py-28" aria-labelledby="bottleneck-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light-fine opacity-50" aria-hidden />
      <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow-gold">The Constraint</span></Reveal>
          <Reveal delay={1}>
            <h2 id="bottleneck-h" className="section-title mt-3 text-balance">
              The chips are ready. The buildings aren't.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <Reveal delay={2}>
            <p className="section-deck max-w-prose text-text-mid">
              Hyperscalers and AI developers are committing hundreds of billions to new capacity. The GPUs ship. The cooling works. The bottleneck is the building itself — site selection, permits, long-lead equipment, on-site labor, and the months it takes to coordinate them all.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Livio collapses that buildout into a repeatable factory process. We pre-engineer the shell off-site, assemble it on-site like LEGO, and bring the data, vendors, and schedule under a single command line — so a project doesn't slip because a transformer quote took six weeks to come back.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { num: "75%",    label: "Faster construction",    body: "Pre-assembled, panelized shells. Same modules to every site." },
                { num: "24h",    label: "First procurement bids", body: "Hub fires structured RFQs to 80+ verified vendors in parallel." },
                { num: "30 min", label: "Engineer a site",        body: "Grid sizes the design from real power/water/climate inputs." },
              ].map((c) => (
                <li key={c.label} className="card-light lift p-5">
                  <div className="font-mono text-[1.5rem] font-bold text-gold-700">{c.num}</div>
                  <div className="mt-1 text-[0.92rem] font-semibold text-text-hi">{c.label}</div>
                  <div className="mt-2 text-[0.86rem] leading-[1.6] text-text-mid">{c.body}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
