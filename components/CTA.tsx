import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-bg-deep py-20 md:py-28" aria-labelledby="cta-h">
      <div
        className="pointer-events-none absolute inset-0 bg-gold-radial opacity-40 animate-glow"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-30" aria-hidden />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Bring Livio to your site</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="cta-h" className="section-title mt-3 text-balance" style={{ fontSize: "clamp(2rem, 4.4vw, 3.2rem)" }}>
              You have the load. We have the factory.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-deck mx-auto mt-5 max-w-2xl">
              Open the tool that fits where you are — site selection, design, or procurement — or
              kick off the full LAIF playbook from a single sign-in.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="https://console.golivio.com" className="btn-gold">
                Sign in to the console <span aria-hidden>→</span>
              </a>
              <a href="https://hub.golivio.com" className="btn-ghost">
                Start an RFQ on Hub
              </a>
              <a href="https://grid.golivio.com" className="btn-ghost">
                Open Grid
              </a>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-8 font-mono text-[0.84rem] text-ink-dim">
              <span className="font-bold text-gold">slart&gt;</span> ready when you are.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
