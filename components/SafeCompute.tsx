import Reveal from "./Reveal";
import { CALENDLY_URL } from "@/lib/site";

const points = [
  {
    title: "Predictable delivery",
    body: "Fixed scope, validated reference designs, a 99-day clock. You get the capacity, cost, and date you were quoted — no overruns, no slipped schedules.",
  },
  {
    title: "Resilient by design",
    body: "2N power and N+1 cooling, redundant distribution paths. Every design is engineered for uptime from day one — not retrofitted for it later.",
  },
  {
    title: "Verified, not assumed",
    body: "Every panel is QC-verified and logged on the way in. Livio Review audits the design from first-principles physics at each stage.",
  },
  {
    title: "Secure & compliant",
    body: "Hardened facilities, controlled site access, and construction built to meet hyperscale security and compliance standards.",
  },
];

export default function SafeCompute() {
  return (
    <section
      id="safe-compute"
      className="section-navy relative isolate scroll-mt-24 overflow-hidden border-b border-navy-900 py-20 md:py-28"
      aria-labelledby="safe-h"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-on-dark-fine opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[800px] rounded-full bg-sky-radial opacity-50" aria-hidden />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-light">Safe Compute</span></Reveal>
          <Reveal delay={1}>
            <h2 id="safe-h" className="section-title mt-4 text-balance text-invert-hi">
              Compute you can count on.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-invert-mid">
              Speed only counts if the compute is solid. Every Livio data center is{" "}
              <strong className="font-bold text-invert-hi">de-risked on delivery and resilient in operation</strong>{" "}
              — you get the capacity you were promised, and it stays online.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <article className="card-dark lift-dark h-full p-7 md:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 font-mono text-[16px] font-bold text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[20px] font-bold tracking-[-0.01em] text-invert-hi">{p.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-invert-low">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book a 15-min call <span aria-hidden>→</span>
            </a>
            <span className="text-[15px] text-invert-mid">
              Talk through your site, your load, and how fast Livio can deliver it.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
