# FieldComponents

Atomic form field pieces: title, input shell, help text, and dropdown rows. Includes the `FieldInput` text atom (placeholder | filled).

**Figma:** `field-components` (`2118:6960`), `Field input` (`2121:10615`)

## Variants (`FieldComponents`)

| Variant | Description |
|---------|-------------|
| `field-title` | Reuses `FieldTitle` |
| `field-input` | Bordered input shell + optional leading/trailing icons |
| `field-help-text` | Caption help line + optional help/trailing icons |
| `field-dropdown-option` | Plain dropdown row |
| `field-dropdown-hover` | Hover dropdown row |

## FieldInput states

| State | Description |
|-------|-------------|
| `placeholder` | Slim / example text color |
| `filled` | Median weight secondary text; optional `secondAction` (“Lookup”) |

## Composes

- `FieldTitle` for `field-title`
- Icon slots accept any `ReactNode` (`CheckBig`, `CircleHelp`, `CaretDown`, etc.)

## CSS variables

Uses Figma WEB vars: `--surface-color-bg-*`, `--border-color-border-*`, `--text-color-text-*`, `--typography-body-small-*`, `--typography-caption-*`, `--spacing-comp-*`, `--icon-color-icon-*`.

## Deploy

Code Connect sources:
- `https://github.com/stevierodger/palletways-web/blob/main/src/components/FieldComponents/FieldComponents.tsx`
