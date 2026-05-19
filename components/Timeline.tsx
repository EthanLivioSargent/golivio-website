import Reveal from "./Reveal";

const phases = [
  { day: "Day 0",  title: "Site & spec",          body: "Livio Grid sizes the design from real power, water, and climate inputs. Permits in motion. Livio Review vets any incoming vendor proposals." },
  { day: "Day 30", title: "Shell complete",       body: "Panelized Smart Shell walls and roof modules dock in. Crews are small. The structural envelope is up while procurement is mid-flight." },
  { day: "Day 60", title: "MEP energized",        body: "Pre-integrated electrical and plumbing route through the panels. Switchgear, transformers, and gensets land on schedule via Hub." },
  { day: "Day 99", title: "First compute online", body: "Racks installed. Cooling commissioned. Hand-off to operations. Land has become functional AI capacity in roughly a fiscal quarter." },
];

export default function Timeline() {
  return (
    <section className="section-cream relative isolate overflow-hidden border-b border-line py-20 md:py-28" aria-labelledby="timeline-h">
      <div className="pointer-events-none absolute inset-0 bg-grid-on-light opacity-60" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow-gold">The 99-Day Timeline</span></Reveal>
          <Reveal delay={1}><h2 id="timeline-h" className="section-title mt-4 text-balance">From parcel to compute, on a fiscal-quarter clock.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Every Livio project runs the same playbook. The timeline below is the methodology used on live builds — same modules, same interfaces, same vendors qualified on Hub.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-[24px] hidden h-px bg-gradient-to-r from-gold-500/0 via-gold-500/45 to-gold-500/0 md:block" aria-hidden />
          {phases.map((p, i) => (
            <Reveal key={p.day} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)} as="li" className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/55 bg-white shadow-card">
                <span className="font-mono text-[13px] font-bold text-gold-700">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-4">
                <div className="font-mono text-[14px] font-bold uppercase tracking-[0.12em] text-gold-700">{p.day}</div>
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
