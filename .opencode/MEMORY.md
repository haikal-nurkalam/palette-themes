# Memory

## Deployment (2026-10-13)
- Hosted on **Vercel** at `palette.heykals.com` (also `palette-themes.vercel.app`). Build command `npm run build`, output `dist`, framework preset Vite. Vercel auto-deploys on push to `main`.
- `vercel.json` rewrites `/(.*)` to `/index.html` — without it, Vercel's Vite preset 404s deep links like `/theme/<slug>`. Don't delete it.
- `heykals.com` nameservers are at **Vercel DNS** (`ns1.vercel-dns.com`), not Domainesia (registrar only). A wildcard `*` record exists, so any subdomain resolves to Vercel; adding a domain in the dashboard needs no manual DNS.
- A Cloudflare Worker named `palette-themes` was deployed during setup and later **deleted by the user**. `wrangler.jsonc` is kept so a future `wrangler deploy` skips Workers autoconfig, but nothing deploys to Cloudflare today.
- `.node-version` pins Node `22.16.0` (Vite 8 requires >= 22.12; CF's older build image defaults to Node 18). Harmless on Vercel, needed on Cloudflare.

## Toolchain (2026-10-13)
- Vite **8** (Rolldown + Oxc), `@vitejs/plugin-react` **5.2.0**, Vitest **4**. Vite 8 renamed `rollupOptions` -> `rolldownOptions` and `esbuild` -> `oxc`; this project uses neither, so `vite.config.js` is plain.
- `@vitejs/plugin-react@6` requires Vite ^8 only and drops Babel — stay on 5.x unless deliberately migrating.
- Tests: `npm test` (8 tests, `src/data/themes.test.js` + `src/lib/export.test.js`).
