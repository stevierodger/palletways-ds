# PalletSelectionCard

Pallet size selection tile or help prompt. Figma `info.pallet-selection-card` (`2007:4482`).

## States

| State | Layout |
|-------|--------|
| `help` | Slate help card, horizontal CTAs (~309×204) |
| `help-portrait` | Stacked CTAs (~190×412) |
| `landscape` | White card with badge, `PalletSizes`, specs, Add (~309×204) |
| `hover` | Subtle-hover background variant of landscape |
| `portrait` | Vertical stack (~190×412) |

## Composes

- `Button` — help CTAs
- `ActionAdd` — Add action
- `PalletSizeInfo` — dimension rows
- `PalletSizes` — illustration
- `CaretCircleRight`, `ChevronRight` — button icons

## CSS variables

- `--surface-color-bg-bold-default` — help background (#f1f5f9)
- `--surface-color-bg-subtle-default` / `--surface-color-bg-subtle-hover` — selection cards
- `--border-color-border-natural-default` — card border
- `--icon-color-icon-secondary-default` — index badge

## Deploy

Code Connect source: GitHub `main` `src/components/PalletSelectionCard/PalletSelectionCard.tsx`.
