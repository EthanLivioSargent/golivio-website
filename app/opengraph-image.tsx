import { ImageResponse } from "next/og";

// Node runtime so this works on any Node host (Railway, etc.) — not just Vercel edge.
export const runtime = "nodejs";
export const alt = "Livio — Land to Compute in 99 Days";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#070b14",
          padding: 80,
          color: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow — single gradient, satori-safe */}
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: 80,
            width: 1000,
            height: 700,
            background:
              "radial-gradient(ellipse at center, rgba(255,193,7,0.32) 0%, rgba(255,193,7,0) 65%)",
            display: "flex",
          }}
        />
        {/* Diagonal gradient sheen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(7,11,20,0) 0%, rgba(15,23,42,0.6) 60%, rgba(15,23,42,1) 100%)",
            display: "flex",
          }}
        />

        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
            }}
          >
            LIVIO
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              background: "#FFC107",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 18,
              color: "#94a3b8",
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            LAIF
          </span>
          <span
            style={{
              marginLeft: 16,
              padding: "5px 14px",
              border: "1px solid rgba(255,193,7,0.4)",
              borderRadius: 999,
              background: "rgba(255,193,7,0.10)",
              color: "#FFC107",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            AI Factory
          </span>
        </div>

        {/* Bottom block: H1 + tagline + subdomains */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: 110,
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 1.02,
              margin: 0,
              color: "#ffffff",
              maxWidth: 1000,
            }}
          >
            Land to compute in{" "}
            <span style={{ color: "#FFC107" }}>99 days.</span>
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              maxWidth: 920,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            The AI Factory for hyperscale data centers — Land, Grid, Hub, and the Slart shell, under one methodology.
          </p>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 18,
              fontSize: 22,
              color: "#94a3b8",
              alignItems: "center",
            }}
          >
            <span>land.golivio.com</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>grid.golivio.com</span>
            <span style={{ color: "#475569" }}>·</span>
            <span>hub.golivio.com</span>
            <span style={{ color: "#475569" }}>·</span>
            <span style={{ color: "#FFC107", fontWeight: 700 }}>slart&gt;</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
