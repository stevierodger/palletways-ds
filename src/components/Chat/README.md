# Chat

Floating chat launcher (collapsed) and expanded help panel with suggestions + composer.

**Figma:** `chat.component` (`2145:13148`)

## States

| State | Description |
|-------|-------------|
| `collapsed` | Primary pill launcher with `ChatCircle` + “Chat with us” |
| `expanded` | Header (logo + close), greeting, suggestion chips, `Input` composer, History footer |

## Composes

- `LogoWordmark`, `Close`, `ChatCircle`, `PaperPlane`, `Input`

## CSS variables

Uses Figma WEB vars: `--button-color-bg-primary-*`, `--surface-color-bg-*`, `--text-color-text-*`, `--icon-color-icon-*`, `--typography-body-*`, `--spacing-comp-*`, `--corner-radius-sm`.

## Deploy

Code Connect source: `https://github.com/stevierodger/palletways-web/blob/main/src/components/Chat/Chat.tsx` (previews after merge to `main`).
