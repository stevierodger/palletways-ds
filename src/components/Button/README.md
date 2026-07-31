# Button — Code Connect

Maps the nine published Figma component sets (`button-{variant}-{size}`) to `Button` in `Button.tsx`.

| Figma set | Code |
|-----------|------|
| `button-primary-sm` … `button-ghost-lg` | `<Button variant="…" size="…" />` |

### Property map

| Figma | Type | Code |
|-------|------|------|
| `button text` | TEXT | `children` |
| `State` | VARIANT | `loading` / `disabled` (hover, focus, error, success omitted — CSS/pseudo) |
| `Show leading icon` | BOOLEAN | gates `leadingIcon` |
| `Show trailing icon` | BOOLEAN | gates `trailingIcon` |
| `leading-icon` | SLOT | `leadingIcon={…}` |
| `trailing-icon` | SLOT | `trailingIcon={…}` |

### Files

- `button-*.figma.ts` — parserless Code Connect templates
- Publish: `npx figma connect publish` (requires `FIGMA_ACCESS_TOKEN`)

Templates were also registered in Figma via MCP (`add_code_connect_map`) for all nine sets. Re-run publish when iterating on local `.figma.ts` files so Dev Mode stays in sync.

`source` comments point at GitHub (`stevierodger/palletways-web`) so MCP can preview code — push to `main` first or Figma shows “Source code not found.”

Variant and size are encoded in the Figma component-set name (not VARIANT props), so each set has its own template with those props hardcoded.
