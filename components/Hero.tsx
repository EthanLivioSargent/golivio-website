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
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.12em] text-gold-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-600" aria-hidden />
              Livio AI Factory · LAIF
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 id="hero-h" className="mt-6 text-balance font-bold tracking-[-0.025em] text-text-hi" style={{ fontSize: "clamp(2.6rem, 5.6vw, 4.6rem)", lineHeight: 1.02 }}>
              <span className="text-gold-700">75% faster</span> <span className="whitespace-nowrap">land to compute.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-pretty text-[1.15rem] leading-[1.7] text-text-mid md:text-[1.2rem]">
              Livio is the AI Factory. A pre-assembled, panelized building system — combined with first-principles engineering, buy-side procurement, and proposal review — that turns land and power into operational AI compute capacity. From <strong className="font-semibold text-text-hi">20 MW to 1+ GW</strong>. Same methodology every time.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8">
              <AISearch />
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#stack" className="btn-gold">Explore the stack <span aria-hidden>→</span></a>
              <a href="#factory" className="btn-outline-dark">How the factory works</a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6 text-left">
              {[
                { k: "99d",          v: "Land → operational compute" },
                { k: "20–1000+ MW",  v: "Per-site capacity" },
                { k: "1 prompt",     v: "Engineer, source, build" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-text-low">{s.v}</dt>
                  <dd className="mt-1.5 font-mono text-[1.35rem] font-bold text-gold-700 md:text-[1.5rem]">{s.k}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={2}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-60 blur-2xl" aria-hidden />
              <SmartShell variant="dark" />
              <p className="mt-3 px-1 text-[13px] text-text-low">
                <span className="font-mono font-bold text-gold-700">smart&gt;</span> — the Livio Smart Shell. One prompt drives <span className="text-text-mid">Land · Grid · Hub · Review · Factory</span>.
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
                "Livio Grid — engineering & underwriting",
                "Livio Hub — buy-side procurement",
                "Livio Smart Shell — pre-assembled buildings",
                "Livio Review — proposal review",
                "LAIF — full-stack EPC",
                "20 MW → 1+ GW",
                "75% faster construction",
                "From first principles of physics",
              ].map((label, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-3 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.1em] text-text-low">
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
