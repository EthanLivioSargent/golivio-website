import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f7f2", borderRadius: 6, border: "1px solid rgba(255,193,7,0.55)" }}>
        <span style={{ color: "#b88800", fontSize: 18, fontWeight: 900, letterSpacing: "-0.06em", fontFamily: "system-ui" }}>L</span>
      </div>
    ),
    { ...size }
  );
}
