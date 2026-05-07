import Reveal from "./Reveal";
import SlartShell from "./SlartShell";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-line bg-bg-deep"
      aria-labelledby="hero-h"
    >
      {/* Blueprint backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.55]" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-gold-radial opacity-60 animate-glow"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-12 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.08] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              Livio AI Factory · LAIF
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1
              id="hero-h"
              className="mt-5 text-balance font-bold tracking-[-0.035em] text-ink-hi"
              style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)", lineHeight: 1.04 }}
            >
              Land to compute in <span className="text-gold">99 days.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-[1.75] text-ink-mid md:text-[1.125rem]">
              Livio is the AI Factory. A pre-engineered, panelized building system — combined with a
              site-intelligence platform, a buy-side procurement engine, and a single command line —
              that turns land and power into operational AI compute capacity. From{" "}
              <strong className="font-semibold text-ink-hi">20 MW to 1+ GW</strong>. Same methodology
              every time.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#stack" className="btn-gold">
                See the stack
                <span aria-hidden>→</span>
              </a>
              <a href="#factory" className="btn-ghost">
                How the factory works
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6 text-left">
              {[
                { k: "99d", v: "Land → operational compute" },
                { k: "20–1000+ MW", v: "Per site capacity" },
                { k: "1 prompt", v: "Plan, source, procure" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-dim">
                    {s.v}
                  </dt>
                  <dd className="mt-1 font-mono text-[1.25rem] font-bold text-gold md:text-[1.4rem]">
                    {s.k}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={2}>
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/15 via-transparent to-transparent opacity-60 blur-2xl"
                aria-hidden
              />
              <SlartShell />
              <p className="mt-3 px-1 text-[12px] text-ink-dim">
                <span className="font-mono font-bold text-gold">slart&gt;</span> — the agentic command
                line for the Livio stack. One prompt drives <span className="text-ink-mid">land</span>,{" "}
                <span className="text-ink-mid">grid</span>,{" "}
                <span className="text-ink-mid">hub</span>, and the factory schedule.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Subdomain ticker */}
      <div className="relative border-t border-line/60 bg-bg-panel/60">
        <div className="overflow-hidden py-3">
          <div className="ticker-track">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                "Land — engineered parcels",
                "Grid — site intelligence",
                "Hub — buy-side procurement",
                "Slart — the unified shell",
                "Factory — 99-day buildout",
                "20 MW → 1+ GW",
                "Panelized · Repeatable · Standardized",
                "AI-ready · Day-one operational",
              ].map((label, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex items-center gap-3 whitespace-nowrap text-[0.85rem] font-medium uppercase tracking-[0.12em] text-ink-low"
                >
                  {label}
                  <span className="text-gold/50">●</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
