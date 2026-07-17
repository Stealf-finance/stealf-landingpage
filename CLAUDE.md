# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for **Stealf** — a privacy-focused, stablecoin neobank on Solana. Single-page Next.js App Router site plus a `/blog` index and `/privacy` + `/terms` legal pages. Deployed on Vercel.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

```bash
pnpm dev      # dev server with Turbopack at http://localhost:3000
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # next lint (ESLint 9, flat config in eslint.config.mjs)
```

There is no test suite.

## Architecture

- **Next.js 15 App Router + React 19**, all files under `src/`. Path alias `@/*` → `src/*`.
- **Tailwind CSS v4** — no `tailwind.config`. Theme, custom colors (e.g. `gold`, `secondary`), fonts, and keyframe animations are all defined in `src/app/globals.css` via `@theme inline` and CSS variables under `:root` / `.dark`. Add design tokens there, not in a config file.
- **shadcn/ui** (new-york style, `components.json`) for base UI in `src/components/ui/`. Icons from `lucide-react`.
- **Dark theme by default** via `next-themes` (`ThemeProvider` in `layout.tsx`, `defaultTheme="dark"`, class strategy). The `dark` variant is `&:where(.dark, .dark *)`.
- Fonts loaded in `layout.tsx`: local **Sansation** (`--font-sans`), Google **Cormorant Garamond** italic (`--font-serif`), **JetBrains Mono** (`--font-mono`).
- Animation via `motion` (Framer Motion successor). Visual set pieces use `cobe` (globe), and custom UI in `src/components/ui/` (marquee, flickering-grid, orbiting-circle, feature-slideshow, response-stream).

### Page composition

`src/app/page.tsx` is just an ordered list of section components from `src/components/sections/` (`HeroSection`, `CompanyShowcase`, `QuoteSection`, `BentoSection`, `FAQSection`, `FooterSection`). The `Navbar` is rendered once in `layout.tsx`, which also draws the fixed max-w-7xl bordered frame with vertical guide lines. Nav anchors (`#hero`, `#bento`, `#faq`) must match section element IDs.

### Content is data-driven — edit config, not JSX

Most page copy lives in **`src/lib/config.tsx`** as the `siteConfig` object: hero text/CTAs, company logos, bento items, quote, FAQ items, footer links, plus `WAITLIST_URL` and `DOCS_URL` constants. Section components read from this object, so change wording and links there rather than in the section JSX.

Blog posts live in **`src/lib/blog.ts`** as the `posts` array (newest first); each entry links straight out to an externally hosted article (Medium/Substack) — there is no local article rendering.

> **Gotcha — two different `siteConfig` objects.** `src/lib/site.ts` exports a *separate, smaller* `siteConfig` used only for SEO metadata (`layout.tsx`, `metadata.ts`). The large content object is in `src/lib/config.tsx`. They duplicate `name`/`description`/`url`/links — keep them in sync when updating brand-level fields.

## Conventions

- Prefer editing `src/lib/config.tsx` / `src/lib/blog.ts` for copy and links; reserve section-component edits for layout/behavior changes.
- Use the `cn()` helper from `@/lib/utils` for conditional class merging.
- Static assets go in `public/` (protocol logos in `public/icons-protocols/`, screenshots in `public/screens/`, fonts in `public/font/`).
- `NEXT_PUBLIC_APP_URL` overrides the canonical site URL in `config.tsx` (defaults to `https://stealf.xyz`).
