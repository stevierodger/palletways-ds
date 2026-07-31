# Palletways

Vite + React + TypeScript project for the **Palletways** design system and components, sourced from [Palletways v1.2 Figma](https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=80-154).

## Design system website

Interactive documentation site (Carbon / Wise inspired) with sidebar navigation, live component previews, token tables, and code examples.

### What it does

- Documents foundations: color, typography (incl. font weights), spacing (base, component, section), radius, shadows, breakpoints
- Documents components: ActionAdd, Badge, Breadcrumbs, Button, CalendarDate, CardNumberBadge, Checkbox, Chip, Counter, Input, Switch, Tag, Toggle, Tracker, Trustpilot
- Uses real token values extracted from Figma MCP (`get_design_context` on component nodes)
- Hash-based routing — share links like `/#/colors` or `/#/button`

### Files affected

| Path | Role |
|------|------|
| `src/design-system/` | Doc site app, layout, pages, doc components |
| `src/design-system/DesignSystemApp.tsx` | Router + page registry |
| `src/design-system/layout/` | `DocLayout`, `DocPage` (sidebar + content shell); `doc-table--type-scale` fixes equal breakpoint column widths on typography tables |
| `src/design-system/components/` | `TokenSwatch`, `ColorRamp`, `SpacingScale`, `ComponentPreview`, `CodeBlock`, `PropTable`, `DoDont` |
| `src/design-system/pages/` | Foundation + component documentation pages |
| `src/styles/tokens.css` | App CSS custom properties (colors, type, spacing) |
| `src/styles/figma-variables.css` | Figma variable catalogue using each variable’s WEB code syntax (Code Connect bridge) |
| `src/styles/fonts.css` | PolySans Trial `@font-face` declarations |
| `public/fonts/` | Drop licensed font files here (see README) |
| `src/tokens/index.ts` | JS/TS token exports |
| `src/components/Button/` | Primary / secondary / ghost button + Code Connect templates (`button-*.figma.ts`) |
| `src/components/Icon/` | Arrow icons from Figma (SVG assets + React + nestable Code Connect) |
| `figma.config.json` | Code Connect include/label/parser config |
| `src/components/Input/` | Text field with label + error; Code Connect (`input-field`, `field`) |
| `src/components/Checkbox/` | Labelled checkbox; Code Connect (`input.check-field`, `checkbox`) |
| `src/components/Switch/` | On/off pill switch; Code Connect (`input.switch`) |
| `src/components/Toggle/` | Two-option segmented control; Code Connect (`input.toggle`) |
| `src/components/ActionAdd/` | Compact add action; Code Connect (`action.add`) |
| `src/components/Counter/` | Quantity stepper; Code Connect (`action.counter`) |
| `src/components/Chip/` | Status chips; Code Connect (`Chip`) |
| `src/components/Badge/` | Uppercase category badge; Code Connect (`Badge`) |
| `src/components/Breadcrumbs/` | Text breadcrumbs; Code Connect (`Breadcrumbs`) |
| `src/components/CalendarDate/` | Calendar day cell; Code Connect (`calendar-date`) |
| `src/components/CardNumberBadge/` | Link payment badge; Code Connect (`card-number-badge`) |
| `src/components/Trustpilot/` | Trustpilot star tile; Code Connect (`trustpilot`) |
| `src/components/Tag/` | Semantic tag chips; Code Connect via Figma `label` |
| `src/components/Tracker/` | Quote funnel step indicator; Code Connect (`tracker`) |
| `src/App.tsx` | Renders design system site |

### CSS / design tokens

**App tokens** live in `src/styles/tokens.css` (mirrored in `src/tokens/index.ts`). **Figma WEB catalogue** lives in `src/styles/figma-variables.css` — variable names match each Figma variable’s WEB code syntax 1:1 for Code Connect.

#### Figma WEB catalogue (`figma-variables.css`)

Exported from Palletways v1.2 local variables (196 vars / 6 collections). Imported from `src/index.css`.

| Collection | Modes | Example WEB syntax |
|------------|-------|--------------------|
| Primitives | Default | `--brand-blue-700`, `--slate-900`, `--spacing-4` |
| Status | Light / Dark | `--color-status-error-strong-default` (Dark via `[data-color-mode="dark"]`) |
| Typography | Desktop / Tablet / Mobile | `--typography-heading-1-font-size` |
| Semantics | Mode 1 | `--button-color-bg-primary-default`, `--corner-radius-md` |
| Type Scale | Desktop / Tablet / Mobile | `--heading-h1`, `--body-base` |
| Motion | Default | Proposed `--motion-*` (no WEB syntax set in Figma yet) |

**Deploy notes:** Keep WEB code syntax in Figma as the source of truth; re-export when variables change. Do not rename CSS vars without updating Figma WEB syntax (breaks Code Connect mapping).

### Code Connect (Button)

Parserless templates map the nine published Figma sets (`button-{primary|secondary|ghost}-{sm|md|lg}`) to `src/components/Button/Button.tsx`.

| Path | Role |
|------|------|
| `src/components/Button/button-*.figma.ts` | One template per Figma component set |
| `src/components/Button/README.md` | Property map + publish notes |
| `figma.config.json` | `include: src/**/*.figma.ts`, label React |

**Property coverage:** `button text` → children; `State` → `loading` / `disabled` (hover/focus/error/success are visual-only); icon booleans + `leading-icon` / `trailing-icon` slots → `leadingIcon` / `trailingIcon`.

**Publish:** `npx figma connect publish` with `FIGMA_ACCESS_TOKEN`. Variant/size live in the Figma set name, so each set has its own template with those props hardcoded.

**MCP preview note:** Figma’s “Can’t generate MCP preview. Source code not found.” means the `source` URL isn’t reachable on GitHub yet. Templates use `https://github.com/stevierodger/palletways-web/blob/main/...` — push these files to `main` (or update the branch in the URL) for previews to resolve.

#### Icons (Arrow set)

Ten Figma `Arrow /*` components → React + SVG in `src/components/Icon/`:

`ChevronLeft`, `ChevronRight`, `CaretDown`, `CaretUp`, `CaretCircleRight`, `ArrowCircleDown`, `ArrowCircleUp`, `ArrowCircleLeft`, `ArrowCircleRight`, `ArrowsReload`

Exported as clean 24×24 SVGs via Figma Plugin API (`exportAsync`), using `currentColor`. Code Connect templates are `nestable: true` so they render inside Button icon slots.

#### Input / Tracker / Tag

| Figma | Code | Template |
|-------|------|----------|
| `input-field` (`2280:8235`) | `Input` | `src/components/Input/input-field.figma.ts` |
| `field` (`210:319`) | `Input` | `src/components/Input/field.figma.ts` (legacy) |
| `tracker` (`2054:4704`) | `Tracker` | `src/components/Tracker/tracker.figma.ts` |
| `label` (`2283:9436`) | `Tag` | `src/components/Tag/label.figma.ts` (no tone variants in Figma yet) |

**Gaps:** `Input` has no leading/trailing icon props yet (Figma INSTANCE_SWAPs omitted). No dedicated Tag component set — tones live only in code.

#### Checkbox / Switch / Toggle

| Figma | Code | Template |
|-------|------|----------|
| `input.check-field` (`2001:1712`) | `Checkbox` | `src/components/Checkbox/checkbox.figma.ts` |
| `input.switch` (`2002:1749`) | `Switch` | `src/components/Switch/switch.figma.ts` |
| `input.toggle` (`2002:1773`) | `Toggle` | `src/components/Toggle/toggle.figma.ts` |

Checkbox icons: Figma `Interface / Checkbox_Unchecked` (`297:1909`) and `Checkbox_Check` (`297:1908`) → `CheckboxUnchecked` / `CheckboxChecked` at 20px. Switch track colour is the same for off/on (matches Figma). Toggle `Property 1=primary` → option1; `secondary` → option2. Full state set `checkbox` (`2251:8006`) also maps to `Checkbox`.

#### ActionAdd / Counter / Chip / Badge

| Figma | Code | Template |
|-------|------|----------|
| `action.add` (`2280:8236`) | `ActionAdd` | `src/components/ActionAdd/action-add.figma.ts` |
| `action.counter` (`2006:4000`) | `Counter` | `src/components/Counter/counter.figma.ts` |
| `Chip` (`1:98`) | `Chip` | `src/components/Chip/chip.figma.ts` |
| `Badge` (`30:41`) | `Badge` | `src/components/Badge/badge.figma.ts` |

Plus/minus icons: `Edit / Add_Plus` (`2003:2092`), `Edit / Remove_Minus` (`2003:2093`). Chip tones use Figma hex (no WEB tokens on that set); leading glyphs from Figma `Icons` (`dot` / `alert` / `check` / `cross`).

#### CalendarDate / Breadcrumbs / CardNumberBadge / Trustpilot

| Figma | Code | Template |
|-------|------|----------|
| `calendar-date` (`2059:4796`) | `CalendarDate` | `src/components/CalendarDate/calendar-date.figma.ts` |
| `Breadcrumbs` (`194:2939`) | `Breadcrumbs` | `src/components/Breadcrumbs/breadcrumbs.figma.ts` |
| `card-number-badge` (`2132:10067`) | `CardNumberBadge` | `src/components/CardNumberBadge/card-number-badge.figma.ts` |
| `trustpilot` (`194:2143`) | `Trustpilot` | `src/components/Trustpilot/trustpilot.figma.ts` |

CalendarDate tones: `default` / `empty` / `today` / `collection` (green, left-round) / `travel` (mid range) / `delivery` (blue, right-round). Hover variants are CSS. Trustpilot star path from Figma VECTOR export.

#### App token layer (`tokens.css`)

| Category | Key variables | Figma source |
|----------|---------------|--------------|
| Color ramps | `--color-slate-*`, `--color-brand-blue-*`, `--color-brand-green-*` | Palletways v1.2 Primitives collection |
| Brand | `--color-brand-primary` (#225595), `--color-brand-green` (#8cc63f) | Button, shadows pages |
| Text | `--color-primary`, `--color-secondary`, `--color-text-body-secondary` | Field, tracker nodes |
| Spacing | `--spacing-1` … `--spacing-20`, `--spacing-comp-*`, `--spacing-section-*` | Primitives + Semantics (components audit canvas) |
| Radius | `--radius-xs` (4px), `--radius-md` (12px), `--radius-pill` (999px) | Buttons, inputs, tracker |
| Shadows | `--shadow-elevation-1` … `--shadow-elevation-5` | Node 140:464 |
| Type | `--text-display-1-size`, `--text-h1-size` … `--text-body-caption-size`, `--font-family-*`, `--font-weight-slim` … `--font-weight-bold` | Display H1 derived 1.25× H1; Type Scale node 291:1008 |

Typography uses **PolySans Trial** in Figma (Median / Neutral / Slim cuts). **Geist Sans** is the development fallback until font files are added — see [Fonts](#fonts) below.

### Fonts

Brand typeface: **PolySans Trial** (Figma family name). Three cuts map to one CSS family via `font-weight`:

| Cut | Weight | Files |
|-----|--------|-------|
| Median | 600–700 | `PolySansTrial-Median.woff2` |
| Neutral | 400 | `PolySansTrial-Neutral.woff2` |
| Slim | 300 | `PolySansTrial-Slim.woff2` |

Weight **500** has no PolySans cut — the browser resolves to Neutral (400). Documented on `/#/typography` under **Font weights**.

**Quick start**

1. Copy your licensed font files into `public/fonts/` using the names above (OTF/TTF also work — see README).
2. Prefer woff2; convert with [Transfonter](https://transfonter.org/) or `fonttools` if needed.
3. Run `npm run dev` → open `/#/typography` → DevTools Network should show font files loading (200).
4. Confirm **Rendered fonts** in Computed styles shows PolySans Trial, not Geist Sans.

Step-by-step details: [`public/fonts/README.md`](public/fonts/README.md).  
`@font-face` rules: `src/styles/fonts.css`. Token variables: `src/styles/tokens.css`.

Ensure your organisation holds a valid PolySans license before deploying font files to production.

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Navigate via the sidebar or hash routes:

- `/#/` — Overview
- `/#/colors` — Color tokens and primitive ramps (slate, brand blue, brand green)
- `/#/typography` — Type scale and font weights (300, 400, 500, 700)
- `/#/spacing` — Base scale, component padding, and section spacing (`--spacing-section-*`)
- `/#/button` — Button component

### Build & deploy

```bash
npm run build   # → dist/
npm run preview # serve production build
```

Static Vite output — deploy `dist/` to any static host (Vercel, Netlify, S3). No environment variables required.

### Color ramps (added)

Primitive scales from Figma **Palletways v1.2 → Primitives** collection:

| Ramp | CSS prefix | Steps in code | Figma variable pattern |
|------|------------|---------------|------------------------|
| Slate | `--color-slate-*` | 000, 100–300, 500–900 | `slate/{step}` |
| Brand blue | `--color-brand-blue-*` | 50, 300, 500, 700–900 | `brand/blue/{step}` |
| Brand green | `--color-brand-green-*` | 50, 300–500, 700–800 | `brand/green/{step}` |

**Files:** `src/styles/tokens.css`, `src/tokens/index.ts` (`colorRamps`), `src/design-system/components/ColorRamp.tsx`, `src/design-system/pages/ColorsPage.tsx`.

**Text color tokens (merged):** Ink and Ink Muted are consolidated into **Primary** and **Secondary**. Canonical CSS variables are `--color-primary` (#0f172a, slate/900) and `--color-secondary` (#475569, slate/600). Legacy aliases `--color-ink`, `--color-ink-muted`, `--color-text-primary`, and `--color-text-secondary` remain for backwards compatibility.

**Surface tokens (merged):** Slate 0 (`slate/000`, #f3f4f6) is consolidated into **Surface Subtle**. Canonical CSS variable is `--color-surface-subtle` (#f3f4f6). Legacy alias `--color-slate-000` remains for backwards compatibility.

**Not extracted via MCP** (variables exist in Figma but no bound node returned hex): `slate/50`, `slate/400`, `brand/blue/100`, `brand/blue/200`, `brand/blue/400`, `brand/blue/600`, `brand/green/100`, `brand/green/200`, `brand/green/600`, `brand/green/900`. Re-run extraction with a color palette frame selected in Figma to resolve these.

### Section spacing (added)

Semantic tokens from Figma **Palletways v1.2 → Semantics** collection (components audit canvas, node `80:154`):

| Token | CSS variable | Value | Figma alias |
|-------|--------------|-------|-------------|
| section-sm | `--spacing-section-sm` | 32px (2rem) | `spacing/section-sm` → `spacing/8` |
| section-md | `--spacing-section-md` | 64px (4rem) | `spacing/section-md` → `spacing/16` |
| section-lg | `--spacing-section-lg` | 120px (7.5rem) | `spacing/section-lg` → `spacing/30` |

**Files:** `src/styles/tokens.css`, `src/tokens/index.ts` (`sectionSpacing`), `src/design-system/pages/SpacingPage.tsx`, `src/design-system/pages/OverviewPage.tsx` (Foundations at a glance).

Use section spacing for vertical rhythm between page sections and marketing blocks; use `--spacing-comp-*` for internal component padding. No breakpoint-specific section spacing modes found in Figma — values are single defaults.

**Not in base primitive scale:** `spacing/30` (120px) is referenced by `section-lg` but not exported as `--spacing-30` in the base scale (minimize scope).
