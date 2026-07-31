# Switch

On/off pill control from Figma `input.switch` (`2002:1749`). Variants: `Property 1` = `off` | `on`. Track colour does not change between states (matches Figma).

## Files

| Path | Role |
|------|------|
| `Switch.tsx` | `role="switch"` button |
| `Switch.css` | 32×24 track, 16px thumb |
| `switch.figma.ts` | Code Connect template |
| `index.ts` | Public exports |

## Props

- `checked` / `defaultChecked` / `onCheckedChange`
- Provide `aria-label` (or visible label wrapping) for accessibility

## Tokens

`--icon-size-icon-xl`, `--spacing-comp-*-xs`, `--border-color-border-bold-default`, `--border-color-border-natural-default`, `--surface-color-bg-subtle-default`, `--corner-radius-rounded`

## Deploy

Code Connect source: GitHub `main` `src/components/Switch/Switch.tsx`.
