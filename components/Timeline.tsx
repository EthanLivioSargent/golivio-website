import Reveal from "./Reveal";

const phases = [
  { day: "Day 0",  title: "Site picked, design done",   body: "Grid sizes the build from real power, water, climate. Permits in motion." },
  { day: "Day 30", title: "Shell up",                    body: "Panels dock in. The building envelope is done while procurement is still running." },
  { day: "Day 60", title: "Power live",                  body: "Switchgear, transformers, and gensets land on schedule via Hub." },
  { day: "Day 99", title: "First compute online",        body: "Racks in. Cooling commissioned. Operations handover." },
];

export default function Timeline() {
  return (
    <section className="section-cream relative isolate overflow-hidden border-b border-line py-20 md:py-28" aria-labelledby="timeline-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-60" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-gold">99-Day Timeline</span></Reveal>
          <Reveal delay={1}><h2 id="timeline-h" className="section-title mt-4 text-balance">Land to compute, on a quarterly clock.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Every Livio project runs the same four steps. Same modules, same interfaces, same vendors.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-[24px] hidden h-px bg-gradient-to-r from-gold-500/0 via-gold-500/45 to-gold-500/0 md:block" aria-hidden />
          {phases.map((p, i) => (
            <Reveal key={p.day} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)} as="li" className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/55 bg-white shadow-card">
                <span className="font-mono text-[13px] font-bold text-gold-700">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-4">
                <div className="font-mono text-[14px] font-bold uppercase tracking-[0.1em] text-gold-700">{p.day}</div>
                <h3 className="mt-1 text-[20px] font-bold tracking-[-0.01em] text-text-hi">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-text-mid">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
