import Reveal from "./Reveal";

const stats = [
  { num: "99", suffix: "d", label: "Land to operational compute" },
  { num: "45", suffix: "d", label: "Building shell delivered" },
  { num: "80", suffix: "+", label: "Verified procurement vendors" },
  { num: "1+", suffix: "GW", label: "Per-site capacity ceiling" },
];

export default function Numbers() {
  return (
    <section className="relative border-b border-line bg-bg-panel py-16 md:py-20" aria-labelledby="numbers-h">
      <div className="container-page">
        <Reveal>
          <h2 id="numbers-h" className="sr-only">
            Livio at a glance
          </h2>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line2 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <div className="bg-bg-panel p-7 md:p-9">
                <div className="font-mono text-[2.6rem] font-black leading-none tracking-tight text-gold md:text-[3.2rem]">
                  {s.num}
                  <span className="text-[1.4rem] md:text-[1.8rem]">{s.suffix}</span>
                </div>
                <div className="mt-3 text-[0.92rem] font-medium text-ink-low">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
