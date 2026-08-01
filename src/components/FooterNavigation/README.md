# FooterNavigation

Site footer with green accent bar, brand block, and navigation columns. Figma `footer-navigation` (`288:1603`).

## States

| State | Layout |
|-------|--------|
| `desktop` | 6-column grid, max-width 1400px — brand spans 2 cols; About/Services, Help Centre, Policies + copyright |
| `mobile` | Stacked nav sections, brand + copyright at bottom |

## Files

- `FooterNavigation.tsx` — component
- `FooterNavigation.css` — `pw-footer-navigation*` classes
- `assets/logo-footer-inner.svg` — white wordmark (clean export without canvas fill)

## CSS variables

- `--brand-green-400` — top accent bar (#74c043)
- `--brand-blue-800` — body background (#063875 / #003774 border)
- `--text-color-text-inverse-primary-default` — white link text
- `--text-color-text-inverse-secondary-default` — copyright (#cbd5e1)
- `--typography-body-font-size`, `--typography-body-strong-font-size`, `--typography-caption-font-size`

## Deploy

Code Connect source: GitHub `main` `src/components/FooterNavigation/FooterNavigation.tsx`.
