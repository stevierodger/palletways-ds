# LogoWordmark

Palletways wordmark from Figma `logo-wordmark` (`194:883`). Renders as `<img>` from SVG assets.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"large" \| "small"` | `"large"` | 134×50 or 86×32 |
| `title` | `string` | `"Palletways"` | `alt` text |

## Files

- `LogoWordmark.tsx` — component
- `assets/logo-large.svg`, `assets/logo-small.svg` — SVG imports
- `logo-wordmark.figma.ts` — Code Connect (`State` → `size`)

## CSS variables

None — dimensions are fixed per size variant.

## Deploy

Code Connect source: GitHub `main` `src/components/Logo/LogoWordmark.tsx`.
