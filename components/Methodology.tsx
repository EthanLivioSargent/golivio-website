import Reveal from "./Reveal";

const inputs = [
  {
    label: "Power",
    body:
      "Grid, co-gen, hydro, or nuclear proximity changes transformer config and project risk. Livio Grid prices and routes around the actual utility queue.",
  },
  {
    label: "Water",
    body:
      "Free-cooling eligibility and flow rates drive CDU count and cooling-plant sizing. Real availability, not assumed.",
  },
  {
    label: "Climate",
    body:
      "Ambient wet-bulb determines whether adiabatic, air-side, or hybrid is viable — and what PUE is realistic at that site.",
  },
];

const outputs = [
  "Cluster sizing & rack counts",
  "Transformer and switchgear topology",
  "CDU count and cooling plant",
  "Critical-path schedule",
  "Parametric CapEx budget",
  "Vendor shortlist (matched to Hub)",
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="relative scroll-mt-24 border-b border-line bg-bg-deep py-20 md:py-28"
      aria-labelledby="method-h"
    >
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">Methodology</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="method-h" className="section-title mt-3 text-balance">
              Inputs in. Designs out. Same way every time.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose">
              Every output the Livio stack produces follows the methodology used on live Livio
              projects — same rack models, same valve specs, same cost framework. The variables that
              change are the site's, not ours.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a href="https://grid.golivio.com" target="_blank" rel="noopener noreferrer" className="btn-outline-gold mt-7">
              Open Livio Grid <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={2}>
            <div className="grid gap-3 md:grid-cols-3">
              {inputs.map((i) => (
                <div key={i.label} className="surface p-5">
                  <div className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] text-gold">
                    Input
                  </div>
                  <h3 className="mt-1 text-[1.05rem] font-bold text-ink-hi">{i.label}</h3>
                  <p className="mt-2 text-[0.88rem] leading-[1.65] text-ink-low">{i.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-6 surface p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <div className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] text-gold">
                  Outputs
                </div>
                <span className="text-[0.85rem] text-ink-dim">
                  Sized against the parcel — not a template.
                </span>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-[0.94rem] text-ink-mid">
                    <span aria-hidden className="mt-[8px] inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
