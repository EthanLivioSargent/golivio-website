import Reveal from "./Reveal";

const features = [
  { title: "Walls ship ready",          body: "Structural, electrical, and plumbing are already inside each panel. No trade-stacking on-site." },
  { title: "Bolt, don&rsquo;t build · 75% faster",   body: "Standardized parts dock together like LEGO. Smaller crews. Predictable schedule." },
  { title: "20 MW → 1+ GW",              body: "Same module set scales from regional inference to gigawatt training." },
  { title: "AI-ready by default",        body: "Liquid-cooled densities, MV switchgear, adiabatic / hybrid cooling — designed in, not bolted on." },
];

export default function Factory() {
  return (
    <section id="factory" className="section-navy relative isolate scroll-mt-24 overflow-hidden border-b border-navy-900 py-20 md:py-28" aria-labelledby="factory-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-dark-fine opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[800px] rounded-full bg-sky-radial opacity-60" aria-hidden />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-light">The Factory · Smart Shell</span></Reveal>
          <Reveal delay={1}><h2 id="factory-h" className="section-title mt-4 text-balance text-invert-hi">A data center, shipped in panels.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-invert-mid">
              We replace stick-built construction with a product. The same panels go to every site — schedule, cost, and quality stop varying with local trades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <article className="card-dark lift-dark h-full p-7 md:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 font-mono text-[16px] font-bold text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-[20px] font-bold tracking-[-0.01em] text-invert-hi"
                  dangerouslySetInnerHTML={{ __html: f.title }}
                />
                <p className="mt-2 text-[16px] leading-[1.6] text-invert-low">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
