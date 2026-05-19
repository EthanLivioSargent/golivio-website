import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Livio — 75% Faster Land to Compute";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f7f7f2", padding: 80, color: "#0a1628", fontFamily: "Inter, system-ui, sans-serif", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -260, right: -60, width: 1100, height: 760, background: "radial-gradient(ellipse at center, rgba(255,193,7,0.40) 0%, rgba(255,193,7,0) 65%)", display: "flex" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(232,241,251,0.6) 0%, rgba(247,247,242,0) 50%)", display: "flex" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
          <span style={{ fontSize: 30, fontWeight: 900, letterSpacing: "-0.04em", color: "#0a1628" }}>LIVIO</span>
          <span style={{ width: 8, height: 8, borderRadius: 8, background: "#FFC107", display: "flex" }} />
          <span style={{ fontSize: 18, color: "#4b5563", fontWeight: 500, letterSpacing: "0.06em" }}>LAIF</span>
          <span style={{ marginLeft: 16, padding: "5px 14px", border: "1px solid rgba(255,193,7,0.55)", borderRadius: 999, background: "rgba(255,193,7,0.15)", color: "#92660a", fontSize: 14, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>AI Factory</span>
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 20, zIndex: 1 }}>
          <h1 style={{ fontSize: 108, fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0, color: "#0a1628", maxWidth: 1000 }}>
            <span style={{ color: "#b88800" }}>75% faster</span>
            <br />
            land to compute.
          </h1>
          <p style={{ fontSize: 28, color: "#4b5563", maxWidth: 940, lineHeight: 1.4, margin: 0 }}>
            The AI Factory for hyperscale data centers — Grid, Hub, Smart Shell, Review, and LAIF, under one methodology.
          </p>
          <div style={{ marginTop: 12, display: "flex", gap: 14, fontSize: 20, color: "#6b7280", alignItems: "center", flexWrap: "wrap" }}>
            <span>grid.golivio.com</span>
            <span style={{ color: "#9ca3af" }}>·</span>
            <span>hub.golivio.com</span>
            <span style={{ color: "#9ca3af" }}>·</span>
            <span>review.golivio.com</span>
            <span style={{ color: "#9ca3af" }}>·</span>
            <span style={{ color: "#b88800", fontWeight: 700 }}>smart&gt;</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
