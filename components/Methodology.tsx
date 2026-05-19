import Reveal from "./Reveal";

const inputs = [
  { label: "Power",   body: "Utility queue, co-gen, hydro, nuclear — sets transformer config and project risk." },
  { label: "Water",   body: "Real flow rates set cooling plant size. No assumed numbers." },
  { label: "Climate", body: "Wet-bulb sets cooling type (adiabatic / air-side / hybrid) and realistic PUE." },
];

const outputs = [
  "Cluster + rack counts",
  "Transformer and switchgear",
  "CDU count + cooling plant",
  "Critical-path schedule",
  "Parametric CapEx",
  "Vendor shortlist (into Hub)",
];

export default function Methodology() {
  return (
    <section id="methodology" className="section-navy relative scroll-mt-24 border-b border-navy-900 py-20 md:py-28" aria-labelledby="method-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-dark opacity-50" aria-hidden />
      <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow-light">How it works · Grid</span></Reveal>
          <Reveal delay={1}><h2 id="method-h" className="section-title mt-4 text-balance text-invert-hi">Inputs in. Designs out.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-invert-mid">
              Same methodology on every project. The variables that change are the site&rsquo;s, not ours.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a href="https://grid.golivio.com" target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
              Open Livio Grid <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={2}>
            <div className="grid gap-3 md:grid-cols-3">
              {inputs.map((i) => (
                <div key={i.label} className="card-glass p-6">
                  <div className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-gold-400">Input</div>
                  <h3 className="mt-1.5 text-[20px] font-bold text-invert-hi">{i.label}</h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-invert-low">{i.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-6 card-glass p-7 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-gold-400">Outputs</div>
                <span className="text-[14px] text-invert-dim">Sized to the parcel — not a template.</span>
              </div>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-[16px] text-invert-mid">
                    <span aria-hidden className="mt-[9px] inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
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
