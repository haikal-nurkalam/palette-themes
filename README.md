# Palette Themes

Curated color themes for dashboards. Each theme ships a light and dark pair mapped to
semantic interface roles, previewed on a live dashboard, and ready to paste as CSS
variables, Tailwind config, or JSON.

## Why this exists

Most palette galleries give you a strip of hex values. A dashboard needs more than
that: a background, a raised surface, a border, primary and muted text, an accent with
readable text on it, and positive/negative/warning states. Palette Themes ships those
roles directly, so a theme drops into a real interface instead of needing to be
reinterpreted first.

## Stack

Vite 5, React 18, React Router 6, Tailwind CSS 3. Tests with Vitest.

## Development

```bash
npm install
npm run dev      # local dev server
npm test         # unit tests
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Adding a theme

Add one object to `src/data/themes.js`. Every theme needs a `slug`, `name`, `vibe`,
and a `light` and `dark` object containing all keys listed in `src/data/tokens.js`.
The validation test in `src/data/themes.test.js` enforces this.

## Deploy

Deployed on Vercel at `palette.heykals.com` (framework preset: Vite; build command
`npm run build`, output directory `dist`). `vercel.json` rewrites all paths to
`/index.html` so deep links such as `/theme/<slug>` survive a refresh.

Any static host works. On hosts that don't read `vercel.json`, reproduce the SPA
fallback the platform's own way — for example `assets.not_found_handling:
"single-page-application"` on Cloudflare Workers, or a catch-all rewrite on Netlify.
