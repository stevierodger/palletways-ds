# Checkbox

Labelled checkbox mapped from Figma `input.check-field` (`2001:1712`). Uses `CheckboxUnchecked` / `CheckboxChecked` icons at 20px (24 viewBox).

## Files

| Path | Role |
|------|------|
| `Checkbox.tsx` | Controlled / uncontrolled checkbox + label |
| `Checkbox.css` | Layout + focus ring |
| `checkbox.figma.ts` | Code Connect template |
| `index.ts` | Public exports |

## Props

- `label` (required)
- `checked` / `defaultChecked` / `onCheckedChange`
- Native input attrs except `type` / `onChange` / `size`

## Tokens

Uses Figma WEB vars with fallbacks: `--text-color-text-body-primary-default`, `--spacing-comp-x-xs`, typography body tokens.

## Deploy

Register via MCP `add_code_connect_map` or `npx figma connect publish`. Source URL: GitHub `main` `src/components/Checkbox/Checkbox.tsx`.
