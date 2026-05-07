import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="container-page flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.16em] text-gold">404 / not found</p>
      <h1 className="mt-4 text-balance font-bold tracking-[-0.03em] text-ink-hi" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        That page hasn&rsquo;t been built yet.
      </h1>
      <p className="mt-5 max-w-prose text-ink-low">
        Try the front page — or jump straight into the stack.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href="/" className="btn-gold">
          Back to home <span aria-hidden>→</span>
        </a>
        <a href="https://hub.golivio.com" className="btn-ghost">
          Open Hub
        </a>
        <a href="https://grid.golivio.com" className="btn-ghost">
          Open Grid
        </a>
      </div>
    </main>
  );
}
