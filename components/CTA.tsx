import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section-navy relative isolate overflow-hidden border-b border-navy-900 py-20 md:py-28" aria-labelledby="cta-h">
      <div className="pointer-events-none absolute inset-0 bg-gold-radial opacity-40 animate-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-on-dark opacity-30" aria-hidden />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><span className="eyebrow-light">Bring Livio to your site</span></Reveal>
          <Reveal delay={1}>
            <h2 id="cta-h" className="section-title mt-4 text-balance text-invert-hi" style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.4rem)" }}>
              You have the load. We have the factory.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mx-auto mt-5 max-w-2xl text-invert-mid">
              Open the tool that fits where you are — Grid for sizing, Hub for procurement, Review for vetting a proposal — or kick off the full LAIF playbook from a single sign-in.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="https://console.golivio.com" className="btn-gold">Sign in to the console <span aria-hidden>→</span></a>
              <a href="https://grid.golivio.com" className="btn-outline-light">Open Livio Grid</a>
              <a href="https://hub.golivio.com" className="btn-outline-light">Start an RFQ on Hub</a>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-8 font-mono text-[14px] text-invert-dim">
              <span className="font-bold text-gold-400">smart&gt;</span> ready when you are.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
