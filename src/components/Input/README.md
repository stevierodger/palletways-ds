# Input — Code Connect

| Figma | Node | Notes |
|-------|------|-------|
| `input-field` | `2280:8235` | Preferred — Label, Value, Help text, State |
| `field` | `210:319` | Legacy set referenced by docs; nested text via `findText` |

### Property map (`input-field`)

| Figma | Code |
|-------|------|
| `Label` | `label` |
| `Value` | `placeholder` (empty states) / `defaultValue` (filled) |
| `Help text` + `Show help text` | `hint` |
| `State=error` + help text | `error` |
| `State=disabled` | `disabled` |
| Leading/Trailing icon | `leadingIcon` / `trailingIcon` |

Publish: `npx figma connect publish`
