# Landing Page Redesign — Quiet Luxury

**Date:** 2026-09-16
**Repo:** `stealf-landingpage`
**Branch:** `redesign/quiet-luxury` (off `main`, *after* the tokenomics work lands)

## Goal

Move the landing page from its current warm ivory-and-gold palette to a
neutral, near-black "quiet luxury" system, and give the home page a
consistent vertical rhythm. Mood: private banking x modern fintech x
privacy infrastructure. Sophisticated, discreet, never "crypto flashy".

Two workstreams:

1. **Token layer** — rewrite the `.dark` block of `src/app/globals.css`
   with a neutral scale, keeping the shadcn token *names* as the
   interface so no primitive in `src/components/ui/` has to change.
2. **Layout pass** — one consistent vertical scale across the six home
   sections, a wider gap between h1 and h2, and more negative space.

## Non-goals

- **Copy.** No section text is rewritten. The brief asks for "minimal
  copy"; that is a separate pass, because trimming product copy is an
  exercise in the founders' voice, not a visual diff.
- **Page structure.** Same six sections, same order, same components.
  Layout changes happen *inside* each section.
- **The light theme.** The `:root` block stays untouched. It is stock
  shadcn, `defaultTheme="dark"` is forced in `layout.tsx`, and
  `ThemeToggle` is never mounted — the theme is unreachable, so
  restyling it would be invisible work.
- **`/privacy`, `/terms`, `/tokenomics`.** They inherit the new tokens
  automatically; no structural or layout work on them. The one exception
  is `contract-address.tsx`, edited only to consume `--shadow-raised`
  alongside `hero-cta.tsx`.
- **New dependencies.** None.

## Decision log

### Palette source of truth: the brief, not the app

`../stealf-app/src/design-system/` already moved to a silver system
(`palettes.ts` SILVER: bg `#0c0c0e`, ink `#e8e8ea`, inkDim `#8a8a8f`,
accent `#c9c9cc`). The landing's `globals.css` still carries the older
warm set and its "ported from stealf-app" comment is stale.

Two candidates were on the table: port the app's SILVER palette verbatim,
or follow the brief's own hex ranges. **The brief won.**

The tradeoff was raised and accepted: a landing-specific palette means
the landing can drift from the product again, which is exactly how the
current mismatch arose. The values chosen below sit close to SILVER
anyway, so the drift is small today — but nothing enforces it.

### Gold becomes satin silver

`--gold: #c9a86a` has exactly one consumer: the bento shield
(`stealth-wallet-illustration.tsx:41`, `fill-[var(--gold)]`). It is also
the only colour on the page and its most recognisable visual.

It becomes satin silver `#C9C9CC`, making the page fully monochrome per
the brief's "monochrome imagery" and "satin silver details". Accepted
consequence: the shield stops being a focal point by colour and has to
carry on form and contrast alone.

The tokens are **renamed** `--gold*` to `--silver*`. Keeping a token
named "gold" that evaluates to silver is the trap the app fell into —
its `tokens.ts` carries an apologetic comment about it.

### Token names stay shadcn

Rejected: introducing a parallel `--surface-1/2/3` + `--ink-1/2/3`
vocabulary. It expresses the matte-to-glass ladder better, but shadcn
primitives consume `--card` / `--muted` / `--accent` and would keep
doing so, leaving two competing systems to maintain. The existing names
already give a four-step ladder: background, card, secondary/muted,
accent wash.

## Token layer

Rewrite the `.dark` block. Names unchanged, values replaced.

| Token | Current | New |
|---|---|---|
| `--background` | `#0a0a0a` | `#0A0A0B` |
| `--foreground` | `#f1ece1` | `#E8E8EA` |
| `--card`, `--popover` | `#151513` | `#121214` |
| `--card-foreground`, `--popover-foreground` | `#f1ece1` | `#E8E8EA` |
| `--primary` | `#f1ece1` | `#E8E8EA` |
| `--primary-foreground` | `#0a0a0a` | `#0A0A0B` |
| `--secondary`, `--muted` | `#1e1d1a` | `#18181B` |
| `--secondary-foreground` | `#f1ece1` | `#E8E8EA` |
| `--muted-foreground` | `rgba(241,236,225,0.65)` | `rgba(232,232,234,0.62)` |
| `--accent` | `rgba(241,236,225,0.06)` | `rgba(232,232,234,0.05)` |
| `--accent-foreground` | `#f1ece1` | `#E8E8EA` |
| `--border`, `--input` | `rgba(241,236,225,0.09)` | `rgba(232,232,234,0.09)` |
| `--ring` | `rgba(241,236,225,0.35)` | `rgba(232,232,234,0.30)` |
| `--gold` | `#c9a86a` | renamed `--silver`: `#C9C9CC` |
| `--gold-dim` | `rgba(201,168,106,0.5)` | renamed `--silver-dim`: `rgba(201,201,204,0.5)` |
| `--gold-faint` | `rgba(201,168,106,0.15)` | renamed `--silver-faint`: `rgba(201,201,204,0.15)` |
| `--gold-glow` | `rgba(201,168,106,0.28)` | renamed `--silver-glow`: `rgba(220,220,225,0.28)` |

`--destructive` (`#d1604a`) stays. It is functional and currently unused
on the landing.

Background lands inside the brief's `#080808`-`#0D0D0D`; card and
secondary inside `#121212`-`#1A1A1A`.

**`--muted-foreground` stays translucent rather than becoming a solid
`#8A8A8F`.** A solid grey is correct on the page background and wrong on
every raised surface — secondary text on a `#121214` card has to lift
with the card. Alpha does that for free.

### One new token

`--shadow-raised`. The CTA shadow is currently hardcoded, identically,
in `hero-cta.tsx` and `contract-address.tsx`, and its
`inset 0 1px 2px rgba(255,255,255,0.25)` is a hard specular line for a
brief asking for soft shadows. A token softens it once for both.

### Consequent edits outside globals.css

- `@theme inline`: `--color-gold-*` mappings become `--color-silver-*`.
- `stealth-wallet-illustration.tsx:41`: `fill-[var(--gold)]` becomes
  `fill-[var(--silver)]`.
- `hero-cta.tsx`, `contract-address.tsx`: hardcoded shadow becomes
  `--shadow-raised`.
- `globals.css:263`: the stale "ported from stealf-app" comment is
  replaced with one describing the actual source.

## Layout pass

Section padding is ad hoc today: `py-10 pt-20` on CompanyShowcase, `p-14`
on Quote, `pb-10` on FAQ, nothing on Bento. That inconsistency is the
main reason the page reads as cramped in places and loose in others.

**Rule: `py-20 md:py-28` is the default section rhythm**, deviated from
only with a reason.

| Section | Change |
|---|---|
| Hero | `pt-20 md:pt-32` to `pt-28 md:pt-40`; h1 to `text-4xl md:text-6xl lg:text-7xl`; screenshot gap `mt-10` to `mt-16 md:mt-20`. The radial gradient stays — it is the brief's "subtle charcoal gradient, soft lighting". |
| CompanyShowcase | Default rhythm; cells `md:h-32` to `md:h-36`. |
| Quote | `p-14` to `py-20 md:py-28`; quote to `md:text-3xl`, `leading-relaxed`, measure `max-w-3xl` to `max-w-2xl`. |
| Bento | **No vertical padding** — see below. Height cleanup only. |
| FAQ | Default rhythm; item spacing `gap-2` to `gap-3`. |
| Footer | Rhythm only. |

### Typographic hierarchy

The h1 currently tops out at `text-6xl` while section h2s sit at
`text-4xl` — one step apart, so the hierarchy reads flat. Pushing the h1
to `text-7xl` and leaving h2s alone opens the gap without touching any
section heading.

### Hero CTA hierarchy

The three download buttons are identical solid pills today. TestFlight
keeps the solid `bg-secondary` treatment; Google Play and APK become
`border border-border bg-transparent hover:bg-accent`, same height and
radius. This deliberately steers visitors toward iOS.

### Bento keeps zero vertical padding

The default rhythm does not apply here. The bento's bordered box is meant
to sit flush against the `divide-y` rules that `page.tsx` draws between
sections, and its hatched side bands are `h-full` of that box. Give the
section `py-*` and the box floats: the bands start and end in mid-air
instead of running rule to rule, which reads as detached.

### Bento height cleanup

`bento-section.tsx:31` carries `min-h-[600px] md:min-h-[500px]` and
`max-h-[400px]` on the same element. Per CSS, `min-height` wins, so the
`max-h` is dead code that misleads anyone reading it. Keep
`min-h-[600px] md:min-h-[500px]`, delete `max-h-[400px]`, and drop the
`group` class duplicated on the same element. No visual change.

## Files touched

- `src/app/globals.css` — `.dark` block, `@theme inline` silver mappings
- `src/components/illustrations/stealth-wallet-illustration.tsx`
- `src/components/hero-cta.tsx`
- `src/components/contract-address.tsx`
- `src/components/sections/hero-section.tsx`
- `src/components/sections/company-showcase.tsx`
- `src/components/sections/quote-section.tsx`
- `src/components/sections/bento-section.tsx`
- `src/components/sections/faq-section.tsx`
- `src/components/sections/footer-section.tsx`

## Verification

There is no test suite. Per change:

1. `pnpm exec tsc --noEmit`
2. `pnpm lint`
3. Visual read on the dev server, section by section.

**Do not run `rm -rf .next` or `pnpm build` while `next dev` is running.**
They share `.next`, and clobbering it makes the dev server fail with
`PageNotFoundError` on unrelated routes. Run a full `pnpm build` only
once, with the dev server stopped, before opening the PR.

Grep for stragglers before finishing: no `#f1ece1`, `#151513`, `#1e1d1a`,
`#c9a86a` or `--gold` left anywhere in `src/`.

## Production safety

`main` auto-deploys to production on Vercel.

- **Prerequisite: merge `feat/tokenomics-page` into `main` first**, then
  branch `redesign/quiet-luxury` off the updated `main`.
  `src/components/contract-address.tsx` exists only on that branch, and
  it is in this spec's file list — branching off today's `main` would
  make part of the scope unreachable.
- Do not stack the redesign on `feat/tokenomics-page` instead: that puts
  two unrelated diffs in one review.
- If the tokenomics work has to stay unmerged, drop
  `contract-address.tsx` from scope and apply `--shadow-raised` to it
  when that branch lands. Accept that the two CTA shadows disagree in
  the meantime.
- The new tokens reach `/tokenomics` on their own; that page needs no
  structural work.
- Ship through a Vercel preview and eyeball it before merging to `main`.

## Risks

- **The shield loses its focal role.** Accepted, see the decision log.
  If it reads as flat in the preview, the fallback is raising its
  contrast against the card, not reintroducing colour.
- **Landing and product can drift again.** Accepted. No mechanism keeps
  `globals.css` and `stealf-app/src/design-system/` in sync; this spec is
  the only record that they are meant to relate.
- **Warm-to-neutral shifts every screenshot.** `public/screens/stealth.png`
  and `public/banner.png` were produced under the warm palette. They are
  not regenerated here, so they may read slightly warm against the new
  neutral page. Flag for a follow-up if visible.
