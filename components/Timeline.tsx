import Reveal from "./Reveal";

const phases = [
  {
    day: "Day 0",
    title: "Site & spec",
    body:
      "Livio Land surfaces engineered parcels. Livio Grid sizes the design from real power, water, and climate inputs. Permits in motion.",
    accent: "from-gold/40",
  },
  {
    day: "Day 30",
    title: "Shell complete",
    body:
      "Panelized walls and roof modules dock in. Crews are small. The structural envelope is up while procurement is mid-flight.",
    accent: "from-gold/55",
  },
  {
    day: "Day 60",
    title: "MEP energized",
    body:
      "Pre-integrated electrical and plumbing route through the panels. Switchgear, transformers, and gensets land on schedule via Hub.",
    accent: "from-gold/75",
  },
  {
    day: "Day 99",
    title: "First compute online",
    body:
      "Racks installed. Cooling commissioned. Hand-off to operations. Land has become functional AI capacity in roughly a fiscal quarter.",
    accent: "from-gold/100",
  },
];

export default function Timeline() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-line bg-bg-deep py-20 md:py-28"
      aria-labelledby="timeline-h"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">The 99-Day Timeline</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="timeline-h" className="section-title mt-3 text-balance">
              From parcel to compute, on a fiscal-quarter clock.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose">
              Every Livio project runs the same playbook. The timeline below is the methodology used
              on live builds — same modules, same interfaces, same vendors qualified on Hub.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-5 md:grid-cols-4">
          {/* spine */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 md:block"
            aria-hidden
          />
          {phases.map((p, i) => (
            <Reveal key={p.day} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)} as="li" className="relative">
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-bg-deep">
                <span className="font-mono text-[0.78rem] font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4">
                <div className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  {p.day}
                </div>
                <h3 className="mt-1 text-[1.05rem] font-bold tracking-[-0.01em] text-ink-hi">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-[1.65] text-ink-low">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
