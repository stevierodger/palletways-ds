# Icons

Icons exported from Figma Palletways v1.2 as 24×24 SVGs, wrapped as React components using `currentColor`.

## Arrow icons

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

## Edit & menu icons

| Component | Figma | Node |
|-----------|-------|------|
| `AddPlus` | `Edit / Add_Plus` | `2003:2092` |
| `RemoveMinus` | `Edit / Remove_Minus` | `2003:2093` |
| `EditPencil` | `Edit / Edit_Pencil_01` | — |
| `Hamburger` | `Menu / Hamburger_MD` | — |
| `Close` | `Menu / Close_MD` | `297:1739` |
| `MoreHorizontal` | `Menu / More_Horizontal` | `297:1754` |

## Communication icons

| Component | Figma | Node |
|-----------|-------|------|
| `ChatCircle` | `Communication / Chat_Circle` | `297:1740` |
| `Mail` | `Communication / Mail` | `2135:10366` |
| `PaperPlane` | `Communication / Paper_Plane` | `2145:13127` |
| `Phone` | `Communication / Phone` | `2135:10333` |

## Interface icons

| Component | Figma | Node |
|-----------|-------|------|
| `CheckBig` | `Interface / Check_Big` | `297:1749` |
| `CreditCard` | `Interface / Credit_Card_01` | `2137:6432` |
| `DragVertical` | `Interface / Drag_Vertical` | `297:1747` |
| `ExternalLink` | `Interface / External_Link` | `297:1751` |
| `LinkHorizontal` | `Interface / Link_Horizontal` | `297:1750` |
| `Search` | `Interface / Search_Magnifying_Glass` | `297:1748` |
| `ShoppingBag` | `Interface / Shopping_Bag_02` | `297:1746` |

## Navigation & shape icons

| Component | Figma | Node |
|-----------|-------|------|
| `Globe` | `Navigation / Globe` | `297:1745` |
| `ShapeCircle` | `Shape / Circle` | `297:2313` |
| `User` | `User / User_01` | — |

## Warning & status icons

| Component | Figma | Node |
|-----------|-------|------|
| `CircleCheck` | `Warning / Circle_Check` | `297:1743` |
| `CircleHelp` | `Warning / Circle_Help` | `297:1741` |
| `Info` | `Warning / Info` | `297:1744` |
| `TriangleWarning` | `Warning / Triangle_Warning` | `297:1742` |

## Checkbox icons

| Component | Figma | Node |
|-----------|-------|------|
| `CheckboxUnchecked` | — | — |
| `CheckboxChecked` | — | — |

### Files
- `assets/*.svg` — static SVG (currentColor)
- `*.tsx` — React components
- `*.figma.ts` — Code Connect (nestable for Button icon slots)

### Usage
```tsx
import { ChevronRight, Mail, Search } from "./components/Icon";

<Button trailingIcon={<ChevronRight size={24} />}>Get a quote</Button>
<Mail size={20} title="Email" />
```

Size tokens: use `--icon-size-icon-sm` (16) / `md` (20) / `lg` (24) from `figma-variables.css` when sizing.

### Regenerating icons
```bash
node scripts/gen-icons.mjs
```
Reads SVG path data from `scripts/icons.ndjson` (exported from Figma via Plugin API).
