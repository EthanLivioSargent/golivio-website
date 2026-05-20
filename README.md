# golivio.com — Livio AI Factory

Marketing site for **Livio**, the AI factory for hyperscale data centers.
*Land to live compute in 99 days.*

It ties together the Livio product stack: **Grid** ([grid.golivio.com](https://grid.golivio.com)),
**Hub** ([hub.golivio.com](https://hub.golivio.com)), **Smart Shell**, **Review**, **Mobile**,
and **LAIF** — the full end-to-end EPC playbook.

## Stack

- **Next.js 14** (App Router, RSC) + **TypeScript**
- **Tailwind CSS 3** with a hand-rolled token system (`tailwind.config.ts`)
- **Helvetica Neue / SF Mono** system font stacks — no web-font requests
- Generated OG image + favicon (`app/opengraph-image.tsx`, `app/icon.tsx`, Node runtime)
- SEO / GEO surfaces: `sitemap.ts`, `robots.ts`, `llms.txt`, and JSON-LD
  (`Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`, product offers)
- `/api/ask` — natural-language "Ask Livio" proxied to Claude, with on-page keyword fallback

No client-side state libraries and no bundle-bloat dependencies — just React + Tailwind.
The only client components are the scroll-reveal observer, the animated terminal, and the search bar.

## Develop

```bash
npm install
npm run dev   # → http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Deploy

Pushes to `main` auto-deploy to **Railway** (Nixpacks; `npm start` pinned in `railway.json`).
Set these in Railway → Variables:

- `NEXT_PUBLIC_SITE_URL` — final canonical URL (e.g. `https://golivio.com`)
- `ANTHROPIC_API_KEY` — optional; enables LLM-backed answers in `/api/ask`
  (without it the route returns 503 and the UI falls back to keyword search)

Add a custom domain in Railway → Settings → Domains, then point DNS at the Railway target.

## For agents

See [`CLAUDE.md`](./CLAUDE.md) — the fast-lookup index covering the file map,
conventions, deploy pipeline, and known landmines.

## License

© Livio. All rights reserved.
