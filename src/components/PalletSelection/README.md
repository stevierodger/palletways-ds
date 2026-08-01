# PalletSelection

Layout that composes `PalletSelectionCard` tiles for the pallet size picker (grid or portrait scroll).

**Figma:** `info.pallet-selection` (`2007:5851`)

## States

| State | Layout |
|-------|--------|
| `default` | 4-column grid — help landscape + 7 landscape size cards |
| `alt` | Horizontal row — help-portrait + portrait size cards |

## Composes

`PalletSelectionCard` (and transitively `PalletSizes`, `PalletSizeInfo`, `ActionAdd`, `Button`).

## Deploy

Code Connect source: `https://github.com/stevierodger/palletways-web/blob/main/src/components/PalletSelection/PalletSelection.tsx` (previews after merge to `main`).
