import Reveal from "./Reveal";

export const faqs = [
  { q: "What is Livio?", a: "Livio is the AI Factory (LAIF) — a pre-assembled, panelized building system combined with first-principles engineering, buy-side procurement, and physics-based proposal review. We deliver AI data centers 75% faster, land to operational compute, under a single methodology used on every live Livio project." },
  { q: "What does \"75% faster land to compute\" actually mean?", a: "From breaking ground on a qualified parcel to first compute online in roughly 99 days vs the industry-typical 18+ months. Livio Smart Shell delivers the building shell in about 45 days; MEP and rack installation run in parallel as long-lead equipment lands through Livio Hub." },
  { q: "Which products are perpetually free?", a: "Three of the five: Livio Grid (engineering & underwriting), Livio Hub (buy-side procurement), and Livio Review (proposal review for offtakers and buyers). Smart Shell and the full LAIF EPC are commercial engagements." },
  { q: "What's the difference between Livio Grid and Livio Review?", a: "Grid is for the developer designing a site — it sizes clusters, transformers, CDUs, and racks against real power/water/climate inputs in 30 minutes. Review is for the offtaker or buyer evaluating an incoming vendor proposal — it audits the design from first principles in 5 minutes and flags optimistic PUE claims, undersized cooling, and vendor swap opportunities." },
  { q: "What is Livio Smart Shell?", a: "Smart Shell is Livio's pre-assembled, panelized building system. Walls and roof modules ship from the factory with structural, electrical, and plumbing integrated, then dock together on-site like LEGO. The same module set scales from 20 MW regional inference sites to 1+ GW training campuses — 75% faster than stick-built." },
  { q: "How is Livio different from a traditional GC or design-build firm?", a: "We treat the data center as a product, not a project. Pre-engineered panels with integrated MEP replace stick-built construction. The same module set scales from 20 MW regional sites to 1+ GW campuses — so labor needs, cost, and quality stop varying with local trades." },
  { q: "What sizes of data center does Livio build?", a: "Modules scale from 20 MW to 1+ GW per site. The same panel system, MEP topology, and procurement workflow apply across that range, so smaller inference deployments use the same playbook as gigawatt training campuses." },
  { q: "How does Hub get first bids in under 24 hours?", a: "Hub maintains a network of 80+ verified vendors with real-time lead-time data. When a buyer drops in an RFP — PDF, Excel, or a 30-second form — Livio's AI extracts each spec into a structured RFQ and fires it to matched vendors automatically. Anonymous routing keeps the buyer's identity private until they engage." },
  { q: "Where is Livio based?", a: "Livio is headquartered in Los Altos, California. The original company, Livio Building Systems, pioneered technology-driven construction; LAIF (the AI Factory) is the AI-data-center-focused product line built on top of that foundation." },
  { q: "How do I bring Livio to a site I'm developing?", a: "The fastest path is to sign in at console.golivio.com, or jump directly into the relevant tool — Grid for sizing, Hub for procurement, Review for vetting a proposal. The team can run the full LAIF playbook on qualified projects." },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-cream relative scroll-mt-24 border-b border-line py-20 md:py-28" aria-labelledby="faq-h">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal><span className="eyebrow-gold">FAQ</span></Reveal>
          <Reveal delay={1}><h2 id="faq-h" className="section-title mt-3 text-balance">The questions builders, buyers, and AI teams ask first.</h2></Reveal>
          <Reveal delay={2}>
            <p className="section-deck mt-5 max-w-prose text-text-mid">
              Short, citable answers to the questions that come up before a kickoff call. If yours isn&rsquo;t here,{" "}
              <a className="font-semibold text-gold-700 underline-offset-4 hover:underline" href="https://console.golivio.com">start a conversation</a>.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-line">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)} as="li" className="py-1">
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.04rem] font-semibold text-text-hi transition-colors hover:text-gold-700">
                    <span className="text-pretty">{f.q}</span>
                    <span aria-hidden className="mt-1 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-line2 text-gold-700 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-prose text-[0.96rem] leading-[1.75] text-text-mid">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
