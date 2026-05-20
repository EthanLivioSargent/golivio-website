import Reveal from "./Reveal";

type Design = {
  tier: string;
  name: string;
  scale: string;
  desc: string;
  specs: { k: string; v: string }[];
};

const designs: Design[] = [
  {
    tier: "01 · Regional",
    name: "Regional",
    scale: "20–50 MW",
    desc: "A compact footprint for low-latency inference, sited close to demand.",
    specs: [
      { k: "Best for", v: "Inference & edge" },
      { k: "Cooling", v: "Air-side / adiabatic" },
      { k: "Design PUE", v: "~1.20" },
      { k: "Rack density", v: "Up to 50 kW" },
    ],
  },
  {
    tier: "02 · Training",
    name: "Training",
    scale: "100–300 MW",
    desc: "High-density, liquid-cooled blocks built for large AI training runs.",
    specs: [
      { k: "Best for", v: "AI training clusters" },
      { k: "Cooling", v: "Direct liquid (CDU)" },
      { k: "Design PUE", v: "~1.15" },
      { k: "Rack density", v: "80–130 kW" },
    ],
  },
  {
    tier: "03 · Gigawatt",
    name: "Gigawatt",
    scale: "500 MW – 1+ GW",
    desc: "A multi-block hyperscale campus that scales on the same panel kit.",
    specs: [
      { k: "Best for", v: "Hyperscale campus" },
      { k: "Cooling", v: "Hybrid liquid + adiabatic" },
      { k: "Design PUE", v: "~1.15" },
      { k: "Rack density", v: "130+ kW" },
    ],
  },
];

export default function ReferenceDesigns() {
  return (
    <section
      id="designs"
      className="section-cream relative scroll-mt-24 border-b border-line/40 py-20 md:py-28"
      aria-labelledby="designs-h"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-60" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-gold">Reference designs</span></Reveal>
          <Reveal delay={1}>
            <h2 id="designs-h" className="section-title mt-4 text-balance">Start from a proven design.</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Every Livio project starts from a validated reference design &mdash; power topology, cooling, and rack layout already proven at scale. <strong className="font-bold text-text-hi">Grid tunes it to your site</strong>; nothing is engineered from a blank page.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {designs.map((d, i) => (
            <Reveal key={d.name} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <article className="card-light lift h-full p-6 md:p-7">
                <div className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-gold-700">
                  {d.tier}
                </div>
                <h3 className="mt-3 text-[24px] font-bold tracking-[-0.02em] text-text-hi">{d.name}</h3>
                <div className="mt-1 font-mono text-[1.5rem] font-bold tracking-[-0.01em] text-gold-700">
                  {d.scale}
                </div>
                <p className="mt-4 text-[15px] leading-[1.55] text-text-mid">{d.desc}</p>
                <dl className="mt-5 grid gap-2.5 border-t border-line/60 pt-5">
                  {d.specs.map((s) => (
                    <div key={s.k} className="flex items-baseline justify-between gap-4">
                      <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-text-low">{s.k}</dt>
                      <dd className="text-[15px] font-bold text-text-hi">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <p className="mt-8 text-[14px] text-text-low">
            Every reference design ships through the same six solutions &mdash; land, engineering, procurement, build, QA, and EPC.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
