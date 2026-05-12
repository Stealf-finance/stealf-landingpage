# Landing Page Magic UI Refactor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `stealf-landingpage` content with the purchased Magic UI agent template, overlay stealf brand tokens, and validate via Vercel preview before merging to `main` (prod).

**Architecture:** Drop-in replacement on feature branch `refactor/magicui-template`. Adopt template's `src/` layout, Tailwind v4 CSS-variable theming, and Next 15 App Router. Stealf brand applied by overriding CSS variable values in `globals.css` (no template files modified) and wiring `next/font` for Sansation / Cormorant Garamond / JetBrains Mono. Preserved across the refactor: `vercel.json` (mobile deeplink headers), `/public/.well-known/*`, `/public/font/Sansation/*`, `/privacy` page.

**Tech Stack:** Next.js 15, Tailwind v4, Radix UI, Motion, tw-animate-css, pnpm, Vercel.

**Spec:** `docs/superpowers/specs/2026-05-11-landingpage-magicui-refactor-design.md`

---

## File Map

| Path                                                  | Action                              |
|-------------------------------------------------------|-------------------------------------|
| `app/`, `components/`, `lib/`                          | Remove (legacy)                     |
| `package.json`, `package-lock.json`                    | Remove (replaced by template's pnpm) |
| `eslint.config.mjs`, `postcss.config.mjs`              | Remove (replaced)                   |
| `tsconfig.json`, `next-env.d.ts`                       | Remove (replaced)                   |
| `src/`                                                 | Create (copy template's `src/`)     |
| `src/app/privacy/page.tsx`                             | Create (migrate from legacy)        |
| `src/app/globals.css`                                  | Modify (brand-token overrides)      |
| `src/app/layout.tsx`                                   | Modify (font wiring)                |
| `package.json`                                         | Create (template's, then rename)    |
| `pnpm-lock.yaml`                                       | Create (copy from template)         |
| `components.json`, `next.config.ts`                    | Create (copy from template)         |
| `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs` | Create (copy from template)     |
| `public/`                                              | Preserve + add template's 2 PNGs    |
| `vercel.json`                                          | Preserve verbatim                   |
| `README.md`, `.gitignore`                              | Preserve                            |

---

## Pre-flight constants

```
REPO=/Users/thomasgaugain/Dev/STEALF/stealf-landingpage
TEMPLATE=/Users/thomasgaugain/Dev/STEALF/magicuidesign-agent-template-67c4ec6bf25256173c4d6a87d3033f21d3200443
BRANCH=refactor/magicui-template
```

---

### Task 1: Verify branch state & snapshot preserved files

**Files:** none modified.

- [ ] **Step 1: Verify current branch**

Run: `cd $REPO && git branch --show-current`
Expected: `refactor/magicui-template`

If output is `main`, STOP. Run `git checkout refactor/magicui-template`. If the branch doesn't exist, recreate from `main` with `git checkout -b refactor/magicui-template main`.

- [ ] **Step 2: Verify clean working tree (apart from .DS_Store)**

Run: `git status --short`
Expected: At most `.DS_Store` modified. No staged changes, no other untracked beyond `docs/`.

If anything else is dirty, STOP and surface to the user.

- [ ] **Step 3: Snapshot list of `public/` contents (sanity for later diff)**

Run: `ls -la public/ public/.well-known/ public/font/Sansation/ | tee /tmp/stealf-public-snapshot.txt`

Confirm the following appear in the output:
- `public/.well-known/apple-app-site-association`
- `public/.well-known/assetlinks.json`
- `public/font/Sansation/` (directory with font files)

- [ ] **Step 4: Snapshot `vercel.json` checksum**

Run: `shasum vercel.json | tee /tmp/stealf-vercel-shasum.txt`

Save this hash — Task 5 verifies it's unchanged.

---

### Task 2: Remove legacy landing files

**Files:**
- Remove: `app/`, `components/`, `lib/`, `package.json`, `package-lock.json`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`, `next-env.d.ts`
- Preserve: `public/`, `vercel.json`, `README.md`, `.gitignore`, `docs/`, `.git/`

- [ ] **Step 1: Stash `.DS_Store` change so it doesn't pollute the commit**

Run: `git restore .DS_Store`
Expected: `.DS_Store` reverted to HEAD state. `git status` shows it clean.

- [ ] **Step 2: Remove legacy source directories and config files**

Run:
```bash
git rm -r app components lib
git rm package.json package-lock.json eslint.config.mjs postcss.config.mjs tsconfig.json next-env.d.ts
```

Expected: each `git rm` reports deletion of files. No error.

- [ ] **Step 3: Verify preserved files remain**

Run: `ls -la`
Expected to still see: `public/`, `vercel.json`, `README.md`, `.gitignore`, `docs/`, `.git/`.

Run: `git status --short`
Expected: all deletions staged (`D` prefix). No surprise additions.

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
chore: remove legacy landing source files

Wipe the GSAP/three.js/shaders-based landing in preparation for the
magicui template drop-in. Preserve public/, vercel.json, README, .gitignore.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

Expected: commit succeeds, ~10 files deleted.

---

### Task 3: Import magicui template files

**Files:**
- Create from template: `src/`, `package.json`, `pnpm-lock.yaml`, `components.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`
- Modify: `public/` (add 2 PNGs)

- [ ] **Step 1: Copy template source tree**

Run: `cp -R $TEMPLATE/src ./src`
Expected: `ls src/` shows `app/`, `components/`, `hooks/`, `lib/`.

- [ ] **Step 2: Copy template root config files**

Run:
```bash
cp $TEMPLATE/package.json .
cp $TEMPLATE/pnpm-lock.yaml .
cp $TEMPLATE/components.json .
cp $TEMPLATE/next.config.ts .
cp $TEMPLATE/tsconfig.json .
cp $TEMPLATE/eslint.config.mjs .
cp $TEMPLATE/postcss.config.mjs .
```

Verify: `ls -la package.json pnpm-lock.yaml components.json next.config.ts tsconfig.json eslint.config.mjs postcss.config.mjs`
Expected: all 7 files present.

- [ ] **Step 3: Copy template's two `/public` assets**

Run:
```bash
cp $TEMPLATE/public/agent-cta-background.png public/
cp $TEMPLATE/public/agent-template-og.png public/
```

Verify no collision with existing files: `ls public/agent-cta-background.png public/agent-template-og.png`
Expected: both files present.

- [ ] **Step 4: Stash `.DS_Store` again if it reappeared**

Run: `git restore .DS_Store 2>/dev/null; git status --short`
Expected: no `.DS_Store` line. Many `A`/`??` lines for the new files.

- [ ] **Step 5: Stage all new template files**

Run: `git add src package.json pnpm-lock.yaml components.json next.config.ts tsconfig.json eslint.config.mjs postcss.config.mjs public/agent-cta-background.png public/agent-template-og.png`

Run: `git status --short`
Expected: only the staged new files. No surprise modifications to `vercel.json`, `README.md`, or `/public/.well-known/*`.

- [ ] **Step 6: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat: import magicui agent template structure

Drop-in copy of the purchased magicui agent template: src/ tree,
package.json + pnpm lockfile, components.json, next.config.ts,
tsconfig, eslint, postcss configs, and the two template /public PNGs.
No template files modified at this stage.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

Expected: commit succeeds.

---

### Task 4: Migrate `/privacy` page

**Files:**
- Read: legacy privacy page from git history (`git show main:app/privacy/page.tsx`)
- Create: `src/app/privacy/page.tsx`

- [ ] **Step 1: Inspect legacy privacy page content**

Run: `git show main:app/privacy/page.tsx > /tmp/legacy-privacy.tsx && wc -l /tmp/legacy-privacy.tsx`

Read `/tmp/legacy-privacy.tsx` and identify:
- Does it import from `@/components/ui/navbar`, `@/components/ui/footer`, or other legacy components? → if yes, those imports need swapping.
- Is the body self-contained markup or does it depend on the legacy hero/animations?

- [ ] **Step 2: Create migrated page**

If the legacy page only contains static legal markup (most common), create `src/app/privacy/page.tsx` by adapting the legacy body but:
- Removing imports from the deleted `@/components/ui/*` legacy paths.
- Wrapping content with the template's `Navbar` (from `@/components/sections/navbar`) and `FooterSection` (from `@/components/sections/footer-section`) for visual continuity.
- Keeping the privacy copy verbatim — DO NOT rewrite legal copy.

Template for the migrated file (adapt `<PrivacyBody />` to inline the legacy markup):

```tsx
import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: "Privacy — Stealf",
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <article className="prose prose-invert mx-auto max-w-3xl px-6 py-24">
        {/* Inline the legal copy from the legacy app/privacy/page.tsx body here.
            Do not paraphrase — copy the exact text. */}
      </article>
      <FooterSection />
    </main>
  );
}
```

Verify the template actually exports those names:
- Run: `grep -E "^export" src/components/sections/navbar.tsx src/components/sections/footer-section.tsx`
- Adjust the import path / export name if they differ (e.g. `export default` vs `export function Navbar`).

- [ ] **Step 3: Verify the page compiles (smoke)**

Run: `pnpm install` (first install — Task 6 covers full verify, but we need typecheck here)
Then: `pnpm exec tsc --noEmit -p tsconfig.json | head -30`
Expected: no errors referencing `src/app/privacy/page.tsx`.

If errors only mention other files (template internals), that is acceptable and surfaced in Task 6. Focus only on the privacy file here.

- [ ] **Step 4: Commit**

```bash
git add src/app/privacy/page.tsx
git commit -m "$(cat <<'EOF'
chore: restore /privacy page on new template layout

Re-migrate the privacy page into src/app/privacy/, wrapped with the
template's Navbar + FooterSection. Legal copy preserved verbatim.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

Expected: commit succeeds.

---

### Task 5: Verify preserved files survived the refactor

**Files:** none modified — verification-only task.

- [ ] **Step 1: Verify `vercel.json` is unchanged**

Run: `shasum vercel.json && cat /tmp/stealf-vercel-shasum.txt`
Expected: the two SHA-1 hashes match.

If they differ, STOP. Either we accidentally touched `vercel.json` or the snapshot file was lost. Run `git show main:vercel.json | diff - vercel.json` to inspect.

- [ ] **Step 2: Verify `.well-known/` files present**

Run: `ls public/.well-known/`
Expected: `apple-app-site-association` and `assetlinks.json`.

- [ ] **Step 3: Verify `public/.well-known/apple-app-site-association` content unchanged**

Run: `diff <(git show main:public/.well-known/apple-app-site-association) public/.well-known/apple-app-site-association`
Expected: no output (identical).

- [ ] **Step 4: Verify `public/.well-known/assetlinks.json` content unchanged**

Run: `diff <(git show main:public/.well-known/assetlinks.json) public/.well-known/assetlinks.json`
Expected: no output (identical).

- [ ] **Step 5: Verify Sansation fonts still in `/public/font/Sansation/`**

Run: `ls public/font/Sansation/`
Expected: same files as listed in `/tmp/stealf-public-snapshot.txt`.

No commit — pure verification.

---

### Task 6: Install dependencies and verify dev + production builds

**Files:** none — operational task. May produce `node_modules/` (gitignored).

- [ ] **Step 1: Ensure pnpm is available**

Run: `pnpm --version`
Expected: a version string.

If not installed, install with `npm install -g pnpm` (this is on the engineer's local machine — fine).

- [ ] **Step 2: Install dependencies**

Run: `pnpm install`
Expected: install completes without error. Warnings about peer deps are tolerated.

- [ ] **Step 3: Verify dev server boots**

Run: `pnpm dev` (in background — run in foreground in a separate terminal if pairing).
Expected: `Local: http://localhost:3000` appears within 30 seconds.

Open `http://localhost:3000` in a browser. Expected: the template lands renders with all 11 sections (template content / lorem ipsum still in place — that is correct for V1).

Open `http://localhost:3000/privacy`. Expected: privacy content renders with the new Navbar / FooterSection.

Stop the dev server (Ctrl+C in its terminal).

- [ ] **Step 4: Verify production build succeeds**

Run: `pnpm build`
Expected: build completes with `✓ Compiled successfully` and a route table including `/` and `/privacy`.

If build fails, fix the specific error and re-run. Do not commit until build is green.

No commit (no source changes). Move on to Task 7.

---

### Task 7: Port stealf brand tokens & fonts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Inspect current `globals.css` `:root` and `.dark` blocks**

Run: `grep -n -A 40 "^:root" src/app/globals.css | head -80`
Identify which CSS variables the template sets (`--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--muted-foreground`, `--border`, `--input`, `--card`, `--destructive`, etc.) and on which selectors (`:root`, `.dark`).

- [ ] **Step 2: Override CSS variables with stealf-app brand tokens**

Inside the `.dark` selector (or `:root` if the template defaults to dark), replace the values of these specific variables (leave all other variables untouched):

```css
.dark {
  /* Stealf brand tokens — ported from stealf-app/src/design-system/tokens.ts */
  --background: #0a0a0a;            /* T.bg */
  --foreground: #f1ece1;            /* T.ink */
  --card: #151513;                   /* T.bgRaised */
  --card-foreground: #f1ece1;
  --popover: #151513;
  --popover-foreground: #f1ece1;
  --primary: #c9a86a;                /* T.gold */
  --primary-foreground: #0a0a0a;
  --secondary: #1e1d1a;              /* T.bgRaised2 */
  --secondary-foreground: #f1ece1;
  --muted: #1e1d1a;
  --muted-foreground: rgba(241, 236, 225, 0.65);  /* T.inkDim */
  --accent: #c9a86a;
  --accent-foreground: #0a0a0a;
  --destructive: #d1604a;            /* T.error */
  --destructive-foreground: #f1ece1;
  --border: rgba(241, 236, 225, 0.09);  /* T.hairline */
  --input: rgba(241, 236, 225, 0.09);
  --ring: #c9a86a;
  /* ... keep any other variables (chart-*, sidebar-*) at their template defaults */
}
```

Use Edit on the specific variable lines — do NOT replace the entire `.dark` block, since the template defines variables (chart, sidebar) that must remain.

- [ ] **Step 3: Add `--font-serif` token to `@theme inline`**

In the `@theme inline { ... }` block of `globals.css`, add one line near the other `--font-*` declarations:

```css
  --font-serif: var(--font-serif);
```

- [ ] **Step 4: Wire fonts in `src/app/layout.tsx`**

Replace the template's font imports (Geist) with stealf fonts. The template's `layout.tsx` currently imports something like `Geist, Geist_Mono` from `next/font/google` and applies their `.variable` classes to `<html>` or `<body>`.

Open `src/app/layout.tsx` and:

1. Replace the Geist imports with:

```tsx
import localFont from "next/font/local";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";

const sansation = localFont({
  src: [
    { path: "../../public/font/Sansation/Sansation-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/font/Sansation/Sansation-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/font/Sansation/Sansation-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
```

2. Apply the three `.variable` classes wherever the template applies font variables (typically the `<html>` or `<body>` element's `className`):

```tsx
<html lang="en" className={`${sansation.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}>
```

3. If the template's `layout.tsx` defines metadata or theme provider wiring, KEEP those untouched.

**Important:** Before writing, verify the exact Sansation filenames:

Run: `ls public/font/Sansation/`

Adjust the `src:` paths and weights to match the actual filenames (e.g. they might be `.ttf` instead of `.woff2`, or named `Sansation_Light.ttf`).

- [ ] **Step 5: Re-verify build**

Run: `pnpm build`
Expected: build succeeds. Routes `/` and `/privacy` listed.

If there's a missing `--font-serif` reference or font file path error, fix the specific issue.

- [ ] **Step 6: Visually verify dev server**

Run: `pnpm dev`, open `http://localhost:3000`.

Expected: page uses stealf colors (dark `#0a0a0a` background, cream `#f1ece1` text, gold `#c9a86a` accents) and Sansation font.

Stop dev server.

- [ ] **Step 7: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "$(cat <<'EOF'
feat: port stealf brand tokens and fonts to template

Override Tailwind v4 CSS variables (--background, --foreground, --primary,
--accent, --muted, --border, --destructive) with stealf-app tokens. Add
--font-serif. Wire Sansation (local), Cormorant Garamond, and JetBrains
Mono via next/font.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 8: Rename package, open draft PR, generate Vercel preview

**Files:**
- Modify: `package.json` (name field only)

- [ ] **Step 1: Rename package**

Run: `grep '"name"' package.json`
Expected output (template default): `"name": "agent-template",`

Edit `package.json` to change the `name` field to `"stealf-landingpage"`. Use the Edit tool with `old_string: "agent-template"`, `new_string: "stealf-landingpage"`.

- [ ] **Step 2: Commit**

```bash
git add package.json
git commit -m "$(cat <<'EOF'
chore: rename package to stealf-landingpage

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Push branch — ASK USER FIRST**

This is the first action with public/shared blast radius. Before running:

> "Ready to push `refactor/magicui-template` to origin. This will trigger a Vercel preview deployment. OK to push?"

Wait for explicit user confirmation.

After confirmation, run:

```bash
git push -u origin refactor/magicui-template
```

Expected: branch pushed, Vercel begins building automatically.

- [ ] **Step 4: Open draft PR**

```bash
gh pr create --draft --base main --title "Refactor: magicui template drop-in" --body "$(cat <<'EOF'
## Summary
- Replace legacy GSAP/three.js/shaders landing with magicui agent template (drop-in).
- Overlay stealf brand tokens (gold/ink/dark) and fonts (Sansation, Cormorant, JetBrains Mono).
- Preserve `/privacy`, `vercel.json` (mobile deeplink headers), and `/public/.well-known/*`.

Spec: docs/superpowers/specs/2026-05-11-landingpage-magicui-refactor-design.md

## Test plan
- [ ] Vercel preview renders `/` with all 11 template sections
- [ ] Vercel preview renders `/privacy` with template navbar/footer
- [ ] `GET /.well-known/apple-app-site-association` → 200 + `application/json`
- [ ] `GET /.well-known/assetlinks.json` → 200 + `application/json`
- [ ] Lighthouse perf ≥ 90 on `/`
- [ ] User visually approves preview before merge

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Capture the PR URL and the Vercel preview URL (Vercel posts it as a check on the PR within ~2 min).

---

### Task 9: Smoke-test the Vercel preview deployment

**Files:** none. Pure validation.

Replace `<PREVIEW_URL>` with the Vercel preview URL from the PR checks.

- [ ] **Step 1: Verify `/` renders**

Open `<PREVIEW_URL>/` in a browser.
Expected: all 11 sections render (Hero, CompanyShowcase, Bento, Quote, Feature, Growth, Pricing, Testimonial, FAQ, CTA, Footer). Background is `#0a0a0a`, accents are gold `#c9a86a`.

- [ ] **Step 2: Verify `/privacy` renders**

Open `<PREVIEW_URL>/privacy`.
Expected: privacy page with new Navbar / FooterSection wrapping the legal copy.

- [ ] **Step 3: Verify `apple-app-site-association`**

Run: `curl -sI <PREVIEW_URL>/.well-known/apple-app-site-association`
Expected: `HTTP/2 200` and `content-type: application/json`.

Run: `curl -s <PREVIEW_URL>/.well-known/apple-app-site-association | head -1`
Expected: JSON content matching the file in the repo.

- [ ] **Step 4: Verify `assetlinks.json`**

Run: `curl -sI <PREVIEW_URL>/.well-known/assetlinks.json`
Expected: `HTTP/2 200` and `content-type: application/json`.

Run: `curl -s <PREVIEW_URL>/.well-known/assetlinks.json | head -1`
Expected: JSON.

- [ ] **Step 5: Lighthouse perf check**

Run Lighthouse on `<PREVIEW_URL>/` (Chrome DevTools → Lighthouse → Performance).
Expected: Performance score ≥ 90.

If below 90, surface to user. Possible mitigations (defer to follow-up PR unless trivial): image optimization (`next/image`), font `display: swap` (already in place), preload hints. Do NOT block merge for sub-90 if user accepts.

- [ ] **Step 6: Report smoke results to user**

Post a comment on the PR (or to the user directly) with checklist results. Format:

```
Preview smoke test:
- / renders: ✓
- /privacy renders: ✓
- apple-app-site-association 200 + JSON: ✓
- assetlinks.json 200 + JSON: ✓
- Lighthouse perf: 94
```

---

### Task 10: User approval gate & merge to main

**Files:** none.

- [ ] **Step 1: Wait for explicit user approval**

Do not proceed until the user explicitly says merge / "go" / equivalent after reviewing the preview deployment.

- [ ] **Step 2: Mark PR ready**

```bash
gh pr ready
```

- [ ] **Step 3: Squash merge — ASK USER ONE MORE TIME BEFORE RUNNING**

> "Final confirmation: merging `refactor/magicui-template` → `main` via squash. This will trigger a production deploy. OK?"

After confirmation:

```bash
gh pr merge --squash --delete-branch
```

Expected: PR merged, branch deleted on remote.

- [ ] **Step 4: Monitor production deploy**

```bash
gh run watch
```

Watch the Vercel deploy from the merge to main. Verify the production URL renders within ~3 min.

- [ ] **Step 5: Post-merge smoke test on production**

Repeat the Task 9 checks against the production URL.

If any check fails, immediately:
1. Surface to user.
2. Have `git revert <squash-commit-sha>` ready — do NOT execute without user approval.

- [ ] **Step 6: Clean up local branch**

```bash
git checkout main
git pull
git branch -d refactor/magicui-template
```

---

## Out of scope (do NOT do in this plan)

- Adapting template copy to stealf messaging — separate follow-up plan.
- Removing or reordering template sections — separate follow-up plan.
- Reintroducing 3D/shader hero — separate follow-up plan.
- Swapping `CompanyShowcase` logos for real partners — separate follow-up plan.
- Light mode tuning — separate follow-up plan if needed.
