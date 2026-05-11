# Landing Page Refactor — Magic UI Template Drop-in

**Date:** 2026-05-11
**Repo:** `stealf-landingpage`
**Branch:** `refactor/magicui-template` (off `main`)

## Goal

Replace the contents of `stealf-landingpage` with the purchased Magic UI
agent template (`magicuidesign-agent-template-67c4ec6bf25256173c4d6a87d3033f21d3200443`),
overlay stealf brand tokens (colors + fonts) from `stealf-app/src/design-system/`,
preserve mobile-deeplink infrastructure, and ship via Vercel preview before merge.

V1 scope is intentionally narrow: **structural drop-in only**. No copy
rewrites, no section reordering, no visual customization beyond brand
tokens and fonts. Future passes adapt copy and visuals section-by-section.

## Non-goals (V1)

- Adapting template copy to stealf messaging — template lorem ipsum stays.
- Retaining current 3D/shader hero (`@paper-design/shaders-react`,
  `@react-three/fiber`, GSAP). All dropped with the legacy landing.
- Pricing strategy decisions — `PricingSection` ships with template defaults.
- Image/illustration swaps beyond what's strictly necessary.
- Multi-locale, A/B testing, analytics overhaul.

## Production safety constraints

`main` of `stealf-landingpage` auto-deploys to production on Vercel. Hard
rules for this work:

- All changes happen on `refactor/magicui-template`. `main` is read-only
  until the final approved merge.
- No `git push --force`, no `git reset --hard` on shared branches.
- `vercel.json` headers for `.well-known/apple-app-site-association` and
  `.well-known/assetlinks.json` are load-bearing — they power universal
  links / App Links for the mobile app. Must survive the refactor intact.
- Merge gated on explicit user approval of the Vercel preview deployment.
- Merge strategy: squash via PR. Never merge by force-push.

## Source inputs

- **Template:** `magicuidesign-agent-template-67c4ec6bf25256173c4d6a87d3033f21d3200443/`
  Next 15 + Tailwind v4 + Radix + Motion + tw-animate-css. Uses `src/`
  layout. 11 sections composed in `src/app/page.tsx`.
- **Design system:** `stealf-app/src/design-system/{tokens.ts,palettes.ts,typography.ts}`.
  React Native tokens; we port values, not code.
- **Current landing:** `stealf-landingpage/{app,components,lib}/` — to be
  removed. `public/` and `vercel.json` — to be preserved.

## Decisions

### D1 — Branch strategy: feature branch (not orphan)

Create `refactor/magicui-template` from `main`. Wipe legacy app files via
`git rm`, copy template contents, restore preserved files. Atomic commits
keep the PR reviewable and enable surgical `git revert`.

**Rejected:** orphan branch (history disconnect, no `git diff main..branch`,
merge needs `--allow-unrelated-histories`).

### D2 — Repo layout: adopt template's `src/`

Move to `src/{app,components,hooks,lib}` as shipped by the template. The
template's `tsconfig.json` already maps `@/*` → `src/*`. Zero import
rewrites needed.

### D3 — Brand token overlay via Tailwind v4 CSS variables

Tailwind v4 `@theme inline` block in template's `globals.css` reads from
CSS custom properties (`--background`, `--foreground`, `--primary`, etc.).
We **don't modify the template** — we only override variable *values* in
`:root` and `.dark` selectors.

Mapping (dark mode primary, mirrors stealf-app `T` tokens):

| Stealf-app token        | Tailwind variable             | Value                            |
|-------------------------|-------------------------------|----------------------------------|
| `T.bg`                  | `--background`                | `#0a0a0a`                        |
| `T.ink`                 | `--foreground`                | `#f1ece1`                        |
| `T.bgRaised`            | `--card`                      | `#151513`                        |
| `T.bgRaised2`           | `--muted`                     | `#1e1d1a`                        |
| `T.gold`                | `--primary`, `--accent`       | `#c9a86a`                        |
| `T.inkDim`              | `--muted-foreground`          | `rgba(241,236,225,0.65)`         |
| `T.hairline`            | `--border`, `--input`         | `rgba(241,236,225,0.09)`         |
| `T.error`               | `--destructive`               | `#d1604a`                        |

Light mode values: not in V1 scope (template ships both; we override dark
defaults; light variant can be tuned in a later pass if needed).

### D4 — Fonts: Sansation / Cormorant Garamond / JetBrains Mono

Replace template's Geist fonts. Load via `next/font/local` (Sansation
files are already in current `/public/font/`) or `next/font/google`
(Cormorant, JetBrains Mono).

- `--font-sans` → Sansation (matches stealf-app)
- `--font-serif` → Cormorant Garamond (add to `@theme inline` — template
  doesn't define it by default)
- `--font-mono` → JetBrains Mono

### D5 — Section composition: full template, no edits

`src/app/page.tsx` ships exactly as the template composes it: Hero,
CompanyShowcase, Bento, Quote, Feature, Growth, Pricing, Testimonial,
FAQ, CTA, Footer. No section is removed or reordered in V1.

### D6 — `/public` merge: preserve current + add template assets

1. Copy current `stealf-landingpage/public/` intact into the branch.
   Confirmed contents include `/public/font/Sansation/*` and
   `/public/.well-known/{apple-app-site-association,assetlinks.json}`.
2. Add template's `agent-cta-background.png` and `agent-template-og.png`
   on top — no name collisions.
3. Post-migration check: `/public/.well-known/apple-app-site-association`
   and `/public/.well-known/assetlinks.json` resolve over HTTP with the
   `vercel.json`-declared `Content-Type: application/json` header.

### D7 — `/privacy` page migration

Current `app/privacy/page.tsx` → `src/app/privacy/page.tsx`. If it depends
on legacy `components/ui/{navbar,footer}`, swap those for the template's
`Navbar` / `FooterSection`. If self-contained, keep as is.

### D8 — Deployment: Vercel preview-gated

Every push to `refactor/magicui-template` produces a Vercel preview. Smoke
test before opening the merge PR:
- `/` renders with all 11 sections
- `/privacy` accessible
- `/.well-known/apple-app-site-association` returns 200 + `application/json`
- `/.well-known/assetlinks.json` returns 200 + `application/json`
- Lighthouse perf ≥ 90 on `/`

Open a draft PR early to link preview URLs to the PR thread. Merge only on
explicit user OK. Post-merge, monitor first prod deploy; have `git revert`
ready for the squash commit.

## Execution outline

Atomic commits on `refactor/magicui-template`:

1. `docs: spec for magicui template refactor` — this document.
2. `chore: remove legacy landing files` —
   `git rm -r app/ components/ lib/ eslint.config.mjs postcss.config.mjs
   tsconfig.json next-env.d.ts package.json package-lock.json`. Keep
   `public/`, `vercel.json`, `README.md`, `.gitignore`.
3. `feat: import magicui template structure` — copy template's
   `src/`, `package.json`, `pnpm-lock.yaml`, `components.json`,
   `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`,
   `postcss.config.mjs`, `tailwind` config. Install with `pnpm install`.
4. `chore: restore privacy page + preserve public + vercel.json` — move
   `/privacy/page.tsx` into `src/app/privacy/`, verify `/public` is the
   original plus template's two PNGs, confirm `vercel.json` untouched.
5. `feat: port stealf brand tokens` — override CSS variables in
   `globals.css`, wire up Sansation / Cormorant / JetBrains Mono via
   `next/font`, set `--font-serif` in `@theme inline`.
6. `chore: rename project` — set `package.json` `name` to
   `stealf-landingpage`, update `README.md` if needed.

After commit 6, draft PR → preview smoke test → user approves preview →
squash merge.

## Risks & mitigations

| Risk                                          | Mitigation                                                                 |
|-----------------------------------------------|----------------------------------------------------------------------------|
| `.well-known/*` headers break mobile deeplinks | `vercel.json` preserved verbatim; smoke test both URLs on preview before merge. |
| Font swap (Sansation) breaks template typography | Validate visually on preview before brand-token PR is reviewed.            |
| Package manager mismatch (current = npm, template = pnpm) | Adopt pnpm with template's lockfile; remove `package-lock.json`.    |
| Template peer-dep conflicts with current deps  | Old deps fully removed in commit 2; clean install in commit 3.             |
| Preview URL leaks pre-launch content publicly  | Vercel preview URLs are unguessable but technically public; treat lorem ipsum as fine for V1. |

## Open follow-ups (post-V1)

Tracked as future work, not part of this spec:

- Copy adaptation per section (hero, bento, FAQ, CTA, footer links).
- Decide whether to keep `PricingSection`.
- Re-introduce a stealf-signature visual element in the hero.
- Light mode tuning if needed.
- Swap `CompanyShowcase` logos for actual partners.
