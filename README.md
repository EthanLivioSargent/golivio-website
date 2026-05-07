# golivio.com — Livio AI Factory (LAIF)

Marketing site for **Livio**, the AI Factory. Tagline: *Land to compute in 99 days.*

The site ties together the Livio product stack:

- [`land.golivio.com`](https://land.golivio.com) — Livio Land · engineered parcels
- [`grid.golivio.com`](https://grid.golivio.com) — Livio Grid · site intelligence
- [`hub.golivio.com`](https://hub.golivio.com) — Livio Hub · buy-side procurement
- `slart>` — the Slart shell · the agentic command line for the stack

## Stack

- **Next.js 14** (App Router, RSC) + **TypeScript**
- **Tailwind CSS 3** with a hand-rolled token system (`tailwind.config.ts`)
- **Inter** + **JetBrains Mono** via Google Fonts (single CSS request)
- Edge-runtime dynamic OG image (`app/opengraph-image.tsx`)
- Edge-runtime favicon (`app/icon.tsx`)
- `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts`
- JSON-LD: `Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`

No client-side state libraries, no bundle-bloat dependencies — just React + Tailwind. The only client components are the scroll reveal observer and the animated Slart shell demo.

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deploying to Railway

1. Push this repo to GitHub.
2. In Railway, **New Project → Deploy from GitHub repo**.
3. Railway auto-detects Next.js via Nixpacks. The `railway.json` in this repo pins the `npm start` command.
4. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` — your final canonical URL (e.g. `https://golivio.com`).
5. Add a custom domain in Railway → Settings → Domains, then point your DNS at the Railway target.

## SEO / GEO checklist

- [x] Per-page canonical URLs and `metadataBase`
- [x] OpenGraph + Twitter card metadata
- [x] Dynamic OG image (1200×630, edge-rendered)
- [x] `sitemap.xml` + `robots.txt` (with anchored sections + AI crawlers explicitly allowed)
- [x] `llms.txt` digest tuned for AI answer-engine citation
- [x] JSON-LD: `Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`, product offers for each subdomain
- [x] Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section aria-labelledby>`)
- [x] Skip-to-content link, focus-visible rings, prefers-reduced-motion respected
- [x] Image-free hero (no LCP image penalty); Slart shell demo defers to viewport
- [x] Fonts preconnected, single request, `display=swap`
- [x] Static asset caching headers in `next.config.mjs`

## File map

```
app/
  layout.tsx              # Metadata, fonts, JSON-LD (Org + WebSite), skip link
  page.tsx                # Homepage composition + FAQ/Breadcrumb JSON-LD
  globals.css             # Tailwind layers, animations, blueprint grid, terminal styles
  sitemap.ts              # Dynamic sitemap
  robots.ts               # robots.txt with AI bot allowlist
  llms.txt/route.ts       # llms.txt digest
  opengraph-image.tsx     # Edge OG image
  icon.tsx                # Edge favicon
  not-found.tsx           # Custom 404
  error.tsx               # Runtime error boundary

components/
  Nav.tsx                 # Sticky nav with anchor links
  Hero.tsx                # H1, deck, stats, ticker
  SlartShell.tsx          # Animated terminal demo (intersection-triggered)
  Bottleneck.tsx          # "Chips are ready, buildings aren't"
  Factory.tsx             # Panelized building features
  Timeline.tsx            # 99-day phase timeline
  Stack.tsx               # The four products (Land/Grid/Hub/Slart)
  Methodology.tsx         # Inputs (power/water/climate) → outputs
  Numbers.tsx             # Stat band
  FAQ.tsx                 # Accordion (+ shared faqs export for JSON-LD + llms.txt)
  CTA.tsx                 # Final conversion section
  Footer.tsx              # Links, legal, llms.txt
  Reveal.tsx              # IntersectionObserver scroll reveal
  Logo.tsx                # Inline SVG wordmark
```

## Brand notes (for future edits)

- **Color**: navy `#0a0e1a` / `#0f172a`, surface `#1e293b`, accent gold `#FFC107`.
- **Type**: Inter for UI, JetBrains Mono for terminal and stat numerals.
- **Voice**: confident, technical, no hype words. Numbers over adjectives.
- **Don't**: invent capacity numbers, claim partnerships, or use stock-marketing phrasing.

## License

© Livio. All rights reserved.
