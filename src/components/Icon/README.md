# Icons

Arrow icons exported from Figma Palletways v1.2 (`Arrow /*` components) as 24×24 SVGs, wrapped as React components using `currentColor`.

| Component | Figma | Node |
|-----------|-------|------|
| `ChevronLeft` | `Arrow / Chevron_Left_MD` | `297:1753` |
| `ChevronRight` | `Arrow / Chevron_Right_MD` | `297:1757` |
| `CaretDown` | `Arrow / Caret_Down_MD` | `297:1759` |
| `CaretUp` | `Arrow / Caret_Up_MD` | `297:1755` |
| `CaretCircleRight` | `Arrow / Caret_Circle_Right` | `297:1752` |
| `ArrowCircleDown` | `Arrow / Arrow_Circle_Down` | `2064:5216` |
| `ArrowCircleUp` | `Arrow / Arrow_Circle_Up` | `2064:5215` |
| `ArrowCircleLeft` | `Arrow / Arrow_Circle_Left` | `2064:5214` |
| `ArrowCircleRight` | `Arrow / Arrow_Circle_Right` | `2064:5213` |
| `ArrowsReload` | `Arrow / Arrows_Reload_01` | `2283:10507` |

### Files
- `assets/*.svg` — static SVG (currentColor)
- `*.tsx` — React components
- `*.figma.ts` — Code Connect (nestable for Button icon slots)

### Usage
```tsx
import { ChevronRight } from "./components/Icon";

<Button trailingIcon={<ChevronRight size={24} />}>Get a quote</Button>
```

Size tokens: use `--icon-size-icon-sm` (16) / `md` (20) / `lg` (24) from `figma-variables.css` when sizing.
