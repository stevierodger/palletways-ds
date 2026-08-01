# Card

Marketing content card and Trustpilot review card.

**Figma:** `card` (`2283:8404`)

## Variants

| Variant | Description |
|---------|-------------|
| `content-card` | Optional image, leading icon, title, tags, strong text, body, CTA slot |
| `trustpilot-card` | Reviewer avatar/meta, Trustpilot stars, truncated review, Useful/Share/Flag |

## Composes

- `Image`, `Trustpilot`, `ExternalLink`
- Assets in `assets/` (`content-hero.jpg`, `thumbs-up.svg`, `share.svg`, `flag.svg`)

## CSS variables

Uses Figma WEB vars: `--surface-color-bg-*`, `--border-color-border-*`, `--text-color-text-*`, `--typography-heading-3-*`, `--typography-body-*`, `--color-bg-blue-lighter-default`, `--color-status-info-strong-default`, `--spacing-comp-*`, `--corner-radius-*`.

## Deploy

Code Connect source: `https://github.com/stevierodger/palletways-web/blob/main/src/components/Card/Card.tsx` (previews after merge to `main`).
