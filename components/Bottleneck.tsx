import Reveal from "./Reveal";

export default function Bottleneck() {
  // 18 months ≈ 540 days. 99/540 ≈ 18.3%.
  const LIVIO_PCT = 18;

  return (
    <section className="section-sky relative border-b border-line/40 py-20 md:py-28" aria-labelledby="bottleneck-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light-fine opacity-50" aria-hidden />
      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
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
                AI capacity isn&rsquo;t blocked by chips or cooling. It&rsquo;s blocked by the <strong className="font-bold text-text-hi">building</strong>. Site selection, permits, long-lead equipment, and stick-built construction take <strong className="font-bold text-text-hi">18+ months</strong>. Livio turns that into <strong className="font-bold text-text-hi">99 days</strong> — by treating the data center as a product, not a project.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Visual contrast — the whole thesis in one image */}
        <Reveal delay={3}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="grid gap-px bg-line/60">
              {/* Industry row */}
              <div className="bg-white p-5 md:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-text-low">Industry standard</span>
                  <span className="font-mono text-[15px] font-bold text-text-mid">~18 months · 540 days</span>
                </div>
                <div className="relative mt-3 h-9 overflow-hidden rounded-md bg-sky-100/80" aria-hidden>
                  <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-text-low/25 via-text-low/35 to-text-low/45" />
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-text-hi/70">
                    <span>Site · permits</span>
                    <span className="hidden sm:inline">Stick-built shell</span>
                    <span>MEP &amp; commissioning</span>
                  </div>
                </div>
                <div className="mt-3 max-w-xl text-[14px] leading-[1.55] text-text-mid">
                  Sequential trades. Long-lead MEP. Crews rebuild every site from scratch.
                </div>
              </div>

              {/* Livio row */}
              <div className="bg-white p-5 md:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-gold-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-600" aria-hidden /> Livio · LAIF
                  </span>
                  <span className="font-mono text-[15px] font-bold text-gold-700">
                    99 days <span className="text-text-low">·</span> <span className="text-text-hi">75% faster</span>
                  </span>
                </div>
                <div className="relative mt-3 h-9 overflow-hidden rounded-md bg-sky-100/80" aria-hidden>
                  <div
                    className="absolute inset-y-0 left-0 rounded-md bg-gradient-to-r from-gold-400 to-gold-600 shadow-[0_0_24px_rgba(255,193,7,0.5)]"
                    style={{ width: `${LIVIO_PCT}%` }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 flex items-center pl-3 font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-[#0a1628]"
                    style={{ width: `${LIVIO_PCT}%` }}
                  >
                    99d
                  </div>
                  <div className="absolute inset-y-0 right-3 hidden items-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-text-low sm:flex">
                    ← time saved
                  </div>
                </div>
                <div className="mt-3 max-w-xl text-[14px] leading-[1.55] text-text-mid">
                  Same scope. Engineering, procurement, and the shell run in parallel — not in series.
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { num: "30 min", label: "Engineer a site",    body: "Grid sizes the design from real power, water, climate." },
              { num: "24 hr",  label: "First vendor bids",  body: "Hub fires the RFQ. 80+ vendors quote in parallel." },
              { num: "75%",    label: "Faster shell build", body: "Panels ship with MEP inside. Crews bolt, not build." },
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
    </section>
  );
}
