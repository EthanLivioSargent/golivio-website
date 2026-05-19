import Reveal from "./Reveal";
import SmartShell from "./SmartShell";
import AISearch from "./AISearch";

export default function Hero() {
  return (
    <section className="section-cream relative isolate overflow-hidden border-b border-line" aria-labelledby="hero-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-90" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-gold-radial opacity-50 animate-glow" aria-hidden />

      <div className="container-page relative grid items-start gap-12 pt-14 pb-20 md:pt-20 md:pb-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal immediate>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.12em] text-gold-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-600" aria-hidden />
              Livio AI Factory · LAIF
            </div>
          </Reveal>

          <Reveal immediate delay={1}>
            <h1 id="hero-h" className="mt-6 text-balance font-bold tracking-[-0.025em] text-text-hi" style={{ fontSize: "clamp(2.6rem, 5.6vw, 4.6rem)", lineHeight: 1.02 }}>
              <span className="text-gold-700">75% faster</span>{" "}
              <span className="whitespace-nowrap">land to compute.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={2}>
            <p className="mt-6 max-w-2xl text-pretty text-[1.15rem] leading-[1.65] text-text-mid md:text-[1.25rem]">
              The AI factory for data centers. Engineering, procurement, and a panelized building system. We get a site from <strong className="font-bold text-text-hi">land to live compute in 99 days</strong>, at <strong className="font-bold text-text-hi">20&nbsp;MW to 1+&nbsp;GW</strong>.
            </p>
          </Reveal>

          <Reveal immediate delay={3}>
            <div className="mt-8">
              <AISearch />
            </div>
          </Reveal>

          <Reveal immediate delay={4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#stack" className="btn-gold">See the 6 tools <span aria-hidden>→</span></a>
              <a href="#factory" className="btn-outline-dark">How we build</a>
            </div>
          </Reveal>

          <Reveal immediate delay={4}>
            <dl className="mt-10 grid grid-cols-1 gap-5 border-t border-line pt-6 text-left sm:grid-cols-3">
              {[
                { k: "99 days",       v: "Land → live compute" },
                { k: "20–1000+ MW",   v: "Per site" },
                { k: "1 prompt",      v: "Plan · source · build" },
              ].map((s) => (
                <div key={s.k} className="flex flex-col">
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.1em] text-text-low">{s.v}</dt>
                  <dd className="mt-1.5 font-mono text-[1.4rem] font-bold text-gold-700 md:text-[1.55rem]">{s.k}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal immediate delay={2}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-60 blur-2xl" aria-hidden />
              <SmartShell variant="dark" />
              <p className="mt-3 px-1 text-[14px] text-text-low">
                <span className="font-mono font-bold text-gold-700">smart&gt;</span> — one command line for the whole factory.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-line bg-white/60">
        <div className="overflow-hidden py-3.5">
          <div className="ticker-track">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                "Grid · engineering",
                "Hub · procurement",
                "Smart Shell · panel buildings",
                "Review · proposal QA",
                "Mobile · field ops",
                "LAIF · full EPC",
                "20 MW → 1+ GW",
                "75% faster",
              ].map((label, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-3 whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.1em] text-text-low">
                  {label}
                  <span className="text-gold-600/60">●</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
