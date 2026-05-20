import Reveal from "./Reveal";
import AISearch from "./AISearch";
import { CALENDLY_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="section-cream relative isolate overflow-hidden border-b border-line/40" aria-labelledby="hero-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-70" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-gold-radial opacity-35 animate-glow" aria-hidden />

      <div className="container-page relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          <Reveal immediate>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.12em] text-gold-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-600" aria-hidden />
              Livio AI Factory · LAIF
            </div>
          </Reveal>

          <Reveal immediate delay={1}>
            <h1 id="hero-h" className="mt-6 text-balance font-bold tracking-[-0.035em] text-text-hi" style={{ fontSize: "clamp(2.7rem, 5.8vw, 4.9rem)", lineHeight: 1.04 }}>
              We bring technology to
              <br />
              <span className="text-gold-700">data center construction.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={2}>
            <p className="mt-6 max-w-2xl text-pretty text-[1.15rem] leading-[1.6] text-text-mid md:text-[1.27rem]">
              For decades, building a data center meant stitching together brokers, engineers, GCs, and vendors. Livio replaces all of it &mdash; one company, one platform, for <strong className="font-bold text-text-hi">land sourcing, engineering, procurement, the building system, proposal QA, and full EPC delivery</strong>.
            </p>
          </Reveal>

          <Reveal immediate delay={3}>
            <div className="mt-8 max-w-2xl">
              <AISearch />
            </div>
          </Reveal>

          <Reveal immediate delay={4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#stack" className="btn-gold">Explore solutions <span aria-hidden>→</span></a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">Book a 15-min call</a>
            </div>
          </Reveal>

          <Reveal immediate delay={4}>
            <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line/70 pt-8 text-left sm:grid-cols-3">
              {[
                { k: "30 min",     v: "Engineer a site",   src: "Grid" },
                { k: "24 hr",      v: "First vendor bids",  src: "Hub" },
                { k: "75% faster", v: "Build the shell",    src: "Smart Shell" },
              ].map((s) => (
                <div key={s.k} className="flex flex-col">
                  <dt className="flex flex-wrap items-baseline gap-x-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-text-low">
                    {s.v}
                    <span className="font-mono text-[11px] font-bold text-gold-700/80">· {s.src}</span>
                  </dt>
                  <dd className="mt-1.5 font-mono text-[1.6rem] font-bold tracking-[-0.01em] text-gold-700 md:text-[1.8rem]">{s.k}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
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
