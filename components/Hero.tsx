import Reveal from "./Reveal";
import AISearch from "./AISearch";
import { CALENDLY_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="section-cream relative isolate overflow-hidden border-b border-line/40" aria-labelledby="hero-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[680px] w-[1200px] -translate-x-1/2 rounded-full bg-gold-radial opacity-45 animate-glow" aria-hidden />

      <div className="container-page relative pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal immediate>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-gold-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-600" aria-hidden />
              Livio AI Factory · LAIF
            </div>
          </Reveal>

          <Reveal immediate delay={1}>
            <h1
              id="hero-h"
              className="mx-auto mt-7 max-w-4xl text-balance font-bold tracking-[-0.04em] text-text-hi"
              style={{ fontSize: "clamp(2.9rem, 6.6vw, 5.6rem)", lineHeight: 1.01 }}
            >
              We bring technology to{" "}
              <span className="text-gold-700">data center construction.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={2}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-[1.16rem] leading-[1.6] text-text-mid md:text-[1.25rem]">
              For decades, building a data center meant stitching together brokers, engineers, GCs, and vendors. Livio replaces all of it &mdash; <strong className="font-bold text-text-hi">one company, one platform</strong>, from raw land to live compute.
            </p>
          </Reveal>

          <Reveal immediate delay={3}>
            <div className="mx-auto mt-9 max-w-2xl">
              <AISearch />
            </div>
          </Reveal>

          <Reveal immediate delay={4}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="#stack" className="btn-gold">Explore solutions <span aria-hidden>→</span></a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">Book a 15-min call</a>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={4}>
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-7 border-t border-line/70 pt-9 sm:grid-cols-3">
            {[
              { k: "30 min",     v: "Engineer a site",   src: "Grid" },
              { k: "24 hr",      v: "First vendor bids",  src: "Hub" },
              { k: "75% faster", v: "Build the shell",    src: "Smart Shell" },
            ].map((s) => (
              <div key={s.k} className="flex flex-col items-center text-center">
                <dd className="font-mono text-[1.7rem] font-bold tracking-[-0.01em] text-gold-700 md:text-[2rem]">{s.k}</dd>
                <dt className="mt-2 flex flex-wrap items-baseline justify-center gap-x-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-text-low">
                  {s.v}
                  <span className="font-mono text-[11px] font-bold text-gold-700/80">· {s.src}</span>
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="relative border-t border-line/60 bg-white/70 backdrop-blur-sm">
        <div className="overflow-hidden py-3.5">
          <div className="ticker-track">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                "Land · site sourcing",
                "Grid · engineering",
                "Hub · procurement",
                "Smart Shell · panel buildings",
                "Review · proposal QA",
                "LAIF · full EPC",
                "20 MW → 1+ GW",
                "One company, end to end",
              ].map((label, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-4 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.12em] text-text-low">
                  {label}
                  <span aria-hidden className="h-3 w-px bg-gold-600/40" />
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
