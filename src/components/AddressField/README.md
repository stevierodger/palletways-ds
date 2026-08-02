# AddressField

Address lookup **exception** to regular Input / field states. Covers postcode completed, free-text entry, results dropdown, clear, and multi-line completed address — as wired in product flow screens.

Not a Figma published library component (yet); built from product interaction design (lookup / clear / freetext / completed). Reuses `FieldTitle` and icon set (`Close`, `ChevronRight`, `CaretDown`).

## States

| State | Role |
|-------|------|
| `completed` | Postcode success chip — green status + `N1 3HB (London)` + `Lookup >` |
| `active-filled` | Same filled postcode with label + **Clear this field** |
| `freetext` | Editable postcode entry + plain **Lookup** action |
| `lookup` | Open results list under caret; pick an address |
| `address-completed` | Multi-line full address + status + `Lookup >` + clear |

## Props

| Prop | Type | Notes |
|------|------|--------|
| `state` | `AddressFieldState` | Default `freetext` |
| `value` | `string` | Postcode / free text |
| `addressLines` | `string[]` | Multi-line completed body |
| `results` | `AddressResult[]` | Dropdown options |
| `onLookup` / `onClear` / `onChange` / `onSelectResult` | handlers | Parent owns the flow |

## Files

- `AddressField.tsx` / `AddressField.css` / `index.ts`
- Docs: `/#/address-field`

## Deploy

Wire into collection/delivery steps; keep regular `Input` for non-address fields. When a Figma `field-address-*` set is published, add `.figma.ts` + Code Connect.
