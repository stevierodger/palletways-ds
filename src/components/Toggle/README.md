# Toggle

Two-option segmented control from Figma `input.toggle` (`2002:1773`).

| Figma | Code |
|-------|------|
| `Option 1` / `Option 2` TEXT | `option1` / `option2` |
| `Property 1=primary` | selects `option1` |
| `Property 1=secondary` | selects `option2` |

## Files

| Path | Role |
|------|------|
| `Toggle.tsx` | Segmented group of two buttons |
| `Toggle.css` | Track + selected option styles |
| `toggle.figma.ts` | Code Connect template |
| `index.ts` | Public exports |

## Props

- `option1` / `option2` (defaults `"Option 1"` / `"Option 2"`)
- `value` / `defaultValue` / `onValueChange`
- `disabled`, `aria-label`

## Tokens

`--spacing-comp-x-xs`, `--border-color-border-bold-default`, `--border-color-border-subtle-default`, `--corner-radius-sm` / `xs`, `--surface-color-bg-natural-default`, body-small typography tokens

## Deploy

Code Connect source: GitHub `main` `src/components/Toggle/Toggle.tsx`.
