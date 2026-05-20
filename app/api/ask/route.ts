import { NextResponse } from "next/server";

/**
 * /api/ask — Ask Livio.
 *
 * Proxies a natural-language question to Claude with the Livio corpus
 * as system context. Returns a short, citation-friendly answer plus a
 * product hint so the UI can deep-link.
 *
 * Requires ANTHROPIC_API_KEY env var. If not set, returns 503 and the
 * client falls back to the on-page keyword ranker (still useful, just
 * less fuzzy).
 *
 * Model: claude-haiku-4-5 (fast, cheap, plenty for FAQ-style answers).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM = `You are the assistant for golivio.com, the Livio AI Factory marketing site. Visitors ask questions about Livio. Answer briefly, helpfully, and only from the facts below.

# Livio at a glance
- The one-stop shop for AI data centers — every step from land sourcing to live compute, under one roof.
- Per-site scale: 20 MW to 1+ GW.
- HQ: Los Altos, California. Origin: Livio Building Systems.

# Six services
1. **Livio Land** (land.golivio.com). Site sourcing for AI data centers. Finds power-ready parcels — screened for power availability, fiber, water, utility-queue and LOI status, climate and realistic PUE. Also surfaces shovel-ready projects for offtakers.
2. **Livio Grid** (grid.golivio.com) · Perpetually free. Engineers a full AI data center in 30 minutes, from first principles of physics. Reads power, water, climate; sizes clusters, transformers, CDUs, cooling plant; outputs CapEx + critical-path schedule + vendor shortlist.
3. **Livio Hub** (hub.golivio.com) · Perpetually free. Buy-side procurement engine. Drop in an RFP (PDF/Excel/form) → AI extracts every spec → fires structured RFQs to 80+ verified vendors → first bids in under 24 hours. Anonymous routing.
4. **Livio Smart Shell** (the factory). Pre-assembled, panelized building system for 75% faster construction. Walls and roof modules ship with structural, electrical, and plumbing inside. LEGO-style assembly on-site. 20 MW to 1+ GW with the same kit.
5. **Livio Review** (review.golivio.com) · Perpetually free. AI DC proposal review for offtakers and buyers. Drop in a vendor proposal → physics-first audit in 5 minutes → flags optimistic PUE, undersized cooling, vendor swap opportunities, CapEx delta vs. Livio's parametric model.
6. **LAIF** (Livio AI Factory, full EPC). End-to-end: runs Land → Grid → Hub → Smart Shell as one playbook. Same spec dictionary across every step. Day-one operational, hand-off to ops.

# 99-day timeline
- Day 0: site + spec. Grid sizes the design. Permits in motion.
- Day 30: shell complete. Panelized walls + roof done while procurement still running.
- Day 60: MEP energized. Switchgear, transformers, gensets land via Hub.
- Day 99: first compute online. Racks in, cooling commissioned, hand-off.

# Methodology highlights
- Power: utility queue, co-gen, hydro, nuclear → transformer config + risk.
- Water: real flow rates → CDU count + cooling plant size.
- Climate: ambient wet-bulb → adiabatic / air-side / hybrid viability + realistic PUE.

# What's free
- Grid, Hub, and Review are perpetually free. Smart Shell + the full LAIF EPC are commercial engagements.

# Style
- Keep answers under 4 sentences. Be specific, no fluff.
- Cite product names exactly: "Livio Land", "Livio Grid", "Livio Hub", "Livio Smart Shell", "Livio Review", "LAIF".
- If the user asks something you can't answer from the facts above, say "I don't have that yet — try console.golivio.com" and stop. Don't invent.
- Always reply in JSON with this exact shape:
  {"answer": "<your 1-4 sentence answer>", "product": "Land"|"Grid"|"Hub"|"Smart Shell"|"Review"|"LAIF"|"Livio"|null, "url": "<canonical url for that product, or null>"}
- product/url should reflect the single best deep link for the user. For LAIF or general Livio questions, use the main site.`;

const URLS: Record<string, string> = {
  "Land": "https://land.golivio.com",
  "Grid": "https://grid.golivio.com",
  "Hub": "https://hub.golivio.com",
  "Smart Shell": "https://golivio.com/#factory",
  "Review": "https://review.golivio.com",
  "LAIF": "https://golivio.com",
  "Livio": "https://golivio.com",
};

export async function POST(req: Request) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "ANTHROPIC_API_KEY not set — using client fallback." },
      { status: 503 }
    );
  }

  let body: { query?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }
  const query = (body.query || "").trim().slice(0, 500);
  if (!query) {
    return NextResponse.json({ ok: false, error: "Empty query" }, { status: 400 });
  }

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 400,
        system: SYSTEM,
        messages: [{ role: "user", content: query }],
      }),
    });
    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json({ ok: false, error: `upstream ${r.status}: ${text.slice(0, 200)}` }, { status: 502 });
    }
    const data = await r.json();
    const text: string = data?.content?.[0]?.text || "";
    // Parse JSON answer; if model returned prose, wrap it.
    let parsed: { answer: string; product?: string | null; url?: string | null } = {
      answer: text,
      product: null,
      url: null,
    };
    try {
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      if (start >= 0 && end > start) {
        parsed = JSON.parse(text.slice(start, end + 1));
      }
    } catch { /* fall through with prose */ }

    if (parsed.product && !parsed.url) {
      parsed.url = URLS[parsed.product] || URLS["Livio"];
    }

    return NextResponse.json({
      ok: true,
      answer: parsed.answer || "I don't have that yet — try console.golivio.com",
      product: parsed.product || null,
      url: parsed.url || null,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "fetch failed" }, { status: 500 });
  }
}
