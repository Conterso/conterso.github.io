## Conterso — Copilot / AI agent instructions

This repository is a small Astro-based marketing site for Conterso. Keep instructions concrete and local: reference files under `src/`, static assets in `public/`, and dev/build commands in `package.json`.

- Tech: Astro (v4), TypeScript, vanilla CSS modules, Lenis for scroll behavior.
- Dev commands: `npm install` then `npm run dev` (dev server). Production build uses `npm run build` (runs `astro check` then `astro build`).

Key files to reference (use exact paths):

- `src/layouts/BaseLayout.astro` — base HTML wrapper, imports `../styles/main.css` and initializes Lenis via `../scripts/lenis.js`. Any global head/meta updates go here.
- `src/components/Header.astro` — site nav and mobile toggle. JavaScript relies on an element with id nav-toggle and the navigation element using class header__nav.
- `src/scripts/lenis.js` — Lenis initialization and scroll-triggered animation helpers. Use `initScrollFeatures()` to wire scrolling and the `animate-on-scroll` pattern.
- `src/pages/*.astro` — routes. Adding a new page = adding a `.astro` file under `src/pages/` and typically wrapping content in `BaseLayout`.
- `src/styles/main.css` (and imports) — central CSS; component-sizing and class names live here. Keep class-name contracts stable when JS references them.

Conventions and small contract

- Component pattern: `.astro` components export props via frontmatter and are imported with normal ES-style imports. Example: `import BaseLayout from '../layouts/BaseLayout.astro';` in a page.
- Styling: classes (BEM-like) are the source of truth. JavaScript expects these selectors: element with id nav-toggle, class header__nav, class animate-on-scroll; Lenis will add html.lenis and classes matching .lenis-*. Don't rename these without updating JS/CSS together.
- Static assets: place images under `public/images/...` and reference them by absolute path (e.g., `/images/logos/conterso-wordmark.svg`).

Examples (copy/paste safe snippets):

- Lenis init in `BaseLayout.astro`:

  <script>
    import { initScrollFeatures } from '../scripts/lenis.js';
    initScrollFeatures();
  </script>

- Header mobile toggle usage (JS expects this id):

  <button id="nav-toggle" aria-label="Toggle navigation">☰</button>

Rules for edits and PRs

- Small visual or copy changes: modify `src/pages/*` or `src/components/*` and run `npm run dev` to preview.
- CSS-only changes: edit `src/styles/*` files. Keep media queries consistent with the breakpoints used across `pages/*` and `components/*`.
- JavaScript changes: update `src/scripts/lenis.js` or small inline scripts in components. If you change selector names, update both CSS and any component script that queries them.
- New route/page: add `src/pages/<name>.astro`, import `BaseLayout` and the components you need. Assets used by the page should go in `public/images/<something>`.

Build/test notes

- Node requirement: README recommends Node >= 18.14.1. CI or developers should use a Node 18+ runtime.
- `npm run build` triggers `astro check` which may surface TypeScript or config problems — fix issues in `tsconfig.json` or the offending `.astro`/`.ts` files before releasing.

When in doubt

- Preserve class names and data attributes that are referenced by JavaScript (for example: animate-on-scroll, header__nav, nav-toggle, and Lenis-related classes).
- Prefer editing components over duplicating markup in pages — components are in `src/components/` and provide consistent patterns (Hero, FeatureCard, CTASection, PricingCard).

If anything here is unclear or you'd like more examples (e.g., a suggested PR template or linting steps), tell me what to add and I will update this file.
