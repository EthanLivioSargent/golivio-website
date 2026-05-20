import Reveal from "./Reveal";

export const faqs = [
  { q: "What is Livio?",
    a: "The AI factory for data centers. We deliver from land to live compute in 99 days using engineering (Grid), procurement (Hub), and a panelized building system (Smart Shell)." },
  { q: "What does “75% faster” actually mean?",
    a: "99 days from break ground to first compute — vs. the industry-typical 18+ months. Shell up in ~45 days. MEP and racks land in parallel." },
  { q: "Which tools are free?",
    a: "Three of the six are perpetually free: Grid (engineering), Hub (procurement), and Review (proposal QA). Smart Shell and the full LAIF EPC are commercial." },
  { q: "Difference between Grid and Review?",
    a: "Grid is for developers designing a site. Review is for buyers vetting someone else's proposal. Both run on the same physics model." },
  { q: "What is Smart Shell?",
    a: "A pre-assembled, panelized building. Walls and roof modules ship with MEP inside, then dock together on-site. 20 MW to 1+ GW with the same kit." },
  { q: "How is Livio different from a GC?",
    a: "We treat the data center as a product, not a project. Same panels, same crews, same playbook on every site. Cost and quality stop varying." },
  { q: "What size data center can Livio build?",
    a: "20 MW to 1+ GW per site. Regional inference to gigawatt training, same playbook." },
  { q: "How does Hub get bids in 24 hours?",
    a: "AI reads your RFP and turns it into a structured RFQ. It fires to 80+ verified vendors in parallel. Anonymous routing until you engage." },
  { q: "Where is Livio based?",
    a: "Los Altos, California. Built on top of Livio Building Systems." },
  { q: "How do I start?",
    a: "Open the free tool you need — Grid, Hub, or Review. For the full LAIF playbook — land, engineering, procurement, and build — explore the solutions on this page." },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-cream relative scroll-mt-24 border-b border-line py-20 md:py-28" aria-labelledby="faq-h">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal><span className="eyebrow-gold">FAQ</span></Reveal>
          <Reveal delay={1}><h2 id="faq-h" className="section-title mt-4 text-balance">Common questions.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Short answers. If yours isn&rsquo;t here,{" "}
              <a className="font-bold text-gold-700 underline-offset-4 hover:underline" href="#stack">explore the solutions</a>.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-line">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)} as="li" className="py-1">
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[19px] font-bold text-text-hi transition-colors hover:text-gold-700">
                    <span className="text-pretty">{f.q}</span>
                    <span aria-hidden className="mt-1 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-line2 text-gold-700 text-[20px] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-prose text-[17px] leading-[1.65] text-text-mid">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
