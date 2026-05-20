# CLAUDE.md — golivio.com hot-cache index

The Livio AI Factory marketing site. Next.js 14 (App Router, RSC) + TypeScript + Tailwind 3.
This file is the fast-lookup index — read it first; it points to everything else.
Keep it current: when a fact here goes stale, fix it in the same change.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev on :3000 |
| `npm run build` | Production build — run before claiming a build-affecting change works |
| `npm start` | Serve the production build |
| `npm run lint` | Next.js lint |

## Deploy pipeline

- **GitHub**: `EthanLivioSargent/golivio-website`, branch `main`. Push to `main` auto-deploys.
- **Host**: Railway → `golivio-website-production.up.railway.app`. Builder Nixpacks; start command `npm start` pinned in `railway.json`.
- **Env vars** (Railway → Variables):
  - `NEXT_PUBLIC_SITE_URL` — canonical URL for metadata / sitemap / OG. Defaults to `https://golivio.com`.
  - `ANTHROPIC_API_KEY` — enables real LLM answers in `/api/ask`. Absent → route returns 503 and the client falls back to on-page keyword search.

## Where things live

- `app/page.tsx` — homepage; composes every section in order.
- `app/layout.tsx` — metadata, JSON-LD (Organization, WebSite), skip link.
- `app/globals.css` — Tailwind layers, component classes, grid pattern, terminal styles, reveal animation.
- `app/api/ask/route.ts` — "Ask Livio" proxy → Claude (`claude-haiku-4-5`). **Node runtime.**
- `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts` — SEO / GEO surfaces.
- `app/opengraph-image.tsx`, `app/icon.tsx` — generated OG image + favicon. **Node runtime, not edge.**
- `app/not-found.tsx`, `app/error.tsx` — 404 + error boundary.
- `components/` — one file per section plus shared helpers (see below).

## Section order (`app/page.tsx`)

Nav → Hero → Bottleneck → Factory → LiveBuild → Timeline → Stack → Methodology → Numbers → FAQ → CTA → Footer

Shared components: `Reveal` (scroll-in), `Logo`, `SmartShell` (animated terminal), `AISearch` (Ask-Livio bar).

## The six products

Single source of truth: `components/Stack.tsx`.

Grid (engineering · free) · Hub (procurement · free) · Smart Shell (building system) ·
Review (proposal QA · free) · Mobile (field ops) · LAIF (full EPC).

## Conventions

- **Design tokens** live in `tailwind.config.ts` — `cream / sky / navy / ink / gold / text / invert`. Use tokens, never raw hex.
- **Fonts**: Helvetica Neue (sans) + SF Mono (mono), system stacks. No Google Fonts, no `@font-face`, no font imports.
- **Sections** rotate background cream → sky → navy → black, each with the architectural grid overlay.
- **Reveal**: wrap above-the-fold content in `<Reveal immediate>` so it doesn't flash; below-fold uses the IntersectionObserver default.
- **Bullets**: short gold hyphen (`h-px w-3 bg-gold-600`), not dots — site-wide.
- **Voice**: confident, technical, numbers over adjectives. No hype words. Never invent capacity figures or claim partnerships.

## Landmines (things that have broken before)

- `app/opengraph-image.tsx` and `app/icon.tsx` must stay `runtime = "nodejs"` — edge runtime breaks the satori gradient parser.
- Railway start command is plain `npm start`. Do **not** add `-p ${PORT}` — Nixpacks shell expansion fails. Next reads `process.env.PORT` itself.
- Tailwind opacity suffixes: `/10` is generated, `/12` is not. Stick to standard steps.
- Keep `next` patched (≥ 14.2.33) — older 14.2.x has a CVE that blocks the Railway build.

## Known pending (user-side)

- Custom domain `golivio.com` — DNS not yet pointed at Railway.
- `ANTHROPIC_API_KEY` not set in Railway — AI search runs in keyword-fallback mode until it is.
