import Reveal from "./Reveal";

export default function Bottleneck() {
  return (
    <section
      className="relative border-b border-line bg-bg-deep py-20 md:py-28"
      aria-labelledby="bottleneck-h"
    >
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">The Constraint</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="bottleneck-h" className="section-title mt-3">
              The chips are ready. The buildings aren't.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <Reveal delay={2}>
            <p className="section-deck max-w-prose">
              Hyperscalers and AI developers are committing hundreds of billions to new capacity. The
              GPUs ship. The cooling works. The bottleneck is the building itself — site selection,
              permits, long-lead equipment, on-site labor, and the months it takes to coordinate them
              all.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="section-deck mt-5 max-w-prose">
              Livio collapses that buildout into a repeatable factory process. We pre-engineer the
              shell off-site, assemble it like Lego on-site, and bring the data, vendors, and
              schedule under a single command line — so a project doesn't slip because a transformer
              quote took six weeks to come back.
            </p>
          </Reveal>

          <Reveal delay={4}>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  num: "45d",
                  label: "Building shell delivered",
                  body: "Panelized walls + roof, MEP integrated, assembled on-site like LEGO.",
                },
                {
                  num: "24h",
                  label: "First procurement bids",
                  body: "Hub fires structured RFQs to 80+ verified vendors, in parallel.",
                },
                {
                  num: "0 reformatting",
                  label: "From RFP to RFQ",
                  body: "Drop a PDF or Excel — Livio extracts every spec automatically.",
                },
              ].map((c) => (
                <li
                  key={c.label}
                  className="surface lift p-5"
                >
                  <div className="font-mono text-[1.5rem] font-bold text-gold">{c.num}</div>
                  <div className="mt-1 text-[0.92rem] font-semibold text-ink-hi">{c.label}</div>
                  <div className="mt-2 text-[0.86rem] leading-[1.6] text-ink-low">{c.body}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
