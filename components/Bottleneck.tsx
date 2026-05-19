import Reveal from "./Reveal";

export default function Bottleneck() {
  return (
    <section className="section-sky relative border-b border-line py-20 md:py-28" aria-labelledby="bottleneck-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light-fine opacity-50" aria-hidden />
      <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal><span className="eyebrow-gold">The Problem</span></Reveal>
          <Reveal delay={1}>
            <h2 id="bottleneck-h" className="section-title mt-4 text-balance">
              The chips are ready. The buildings aren&rsquo;t.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pt-2">
          <Reveal delay={2}>
            <p className="section-deck max-w-prose text-text-mid">
              AI capacity isn&rsquo;t blocked by chips or cooling. It&rsquo;s blocked by the <strong className="font-bold text-text-hi">building</strong>. Site selection, permits, long-lead equipment, and stick-built construction take <strong className="font-bold text-text-hi">18+ months</strong>.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Livio turns that into <strong className="font-bold text-text-hi">99 days</strong> — by treating the data center as a product, not a project.
            </p>
          </Reveal>

          <Reveal delay={4}>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { num: "75%",    label: "Faster build",        body: "Walls + roof ship ready. Crews bolt, not build." },
                { num: "24 hr",  label: "First vendor bids",   body: "Hub fires the RFQ. 80+ vendors quote in parallel." },
                { num: "30 min", label: "Engineer a full site", body: "Grid sizes the design from real power, water, climate." },
              ].map((c) => (
                <li key={c.label} className="card-light lift p-6">
                  <div className="font-mono text-[1.9rem] font-bold leading-none text-gold-700">{c.num}</div>
                  <div className="mt-3 text-[17px] font-bold text-text-hi">{c.label}</div>
                  <div className="mt-2 text-[15px] leading-[1.55] text-text-mid">{c.body}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
