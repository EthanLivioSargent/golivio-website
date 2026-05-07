"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("[livio] route error:", error);
  }, [error]);

  return (
    <main className="container-page flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.16em] text-gold">runtime error</p>
      <h1 className="mt-4 text-balance font-bold tracking-[-0.03em] text-ink-hi" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
        Something derailed on the way to compute.
      </h1>
      <p className="mt-4 max-w-prose text-ink-low">
        Reload the page — if it persists, jump into one of the tools directly.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button onClick={() => reset()} className="btn-gold">
          Try again
        </button>
        <a href="/" className="btn-ghost">Home</a>
      </div>
    </main>
  );
}
