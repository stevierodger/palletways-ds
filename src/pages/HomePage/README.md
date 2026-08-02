# HomePage

Marketing homepage composition from Figma **landingpage-new** (`2221:7819`) in [Palletways v1.2](https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2221-7819).

## What it does

Assembles the design-system shell for a first visual pass of the public landing page:

- Header (`HeaderNavigation` desktop-cta) + floating **Chat**
- Full-bleed hero (H1 + lede + Track / Quote CTAs) over the truck photo
- “Europe’s most trusted…” who-we-are + Trustpilot reviews strip + benefits
- “What happens to your pallet?” process cards (numbered 1–3)
- FAQ grid + “Read all the FAQs” feature tile
- Footer (`FooterNavigation`)

## Files affected

| Path | Role |
|------|------|
| `src/pages/HomePage/HomePage.tsx` | Page composition |
| `src/pages/HomePage/HomePage.css` | Layout / section styles (`pw-home*`) |
| `src/pages/HomePage/assets/` | Exported Figma images (hero, warehouse, process, Trustpilot badge, FAQ feature, benefit icon) |
| `src/App.tsx` | Routes default view to homepage; hash design-system pages still load |

## How to test

```bash
npm run dev
```

- **Homepage:** `/` or `/#/` or `/#/home`
- **Design system:** any existing doc hash, e.g. `/#/button` (also via the fixed “Design system →” chip)

## Components / tokens used

- **Components:** `HeaderNavigation`, `FooterNavigation`, `Button`, `Card` (content + trustpilot), `Badge`, `Chat`, `Image` (via Card), `ChevronRight`, `CaretCircleRight`, `Search`
- **Motion:** `pw-motion-1` / `pw-motion-2` on hero title + lede
- **Tokens:** Figma WEB vars (`--typography-*`, `--surface-color-*`, `--color-bg-blue-dark-default`, etc.)

## Deploy notes

- First-pass layout for review — FAQ copy for several cards still mirrors Figma placeholder body text.
- Benefit icons: network SVG from Figma for “Trusted network”; `Search` icon for visibility; star badge for awards (Figma trophy export not cleanly separable from asset batch).
- Large hero/warehouse JPEGs are checked in for offline fidelity; consider CDN/compression before production.
