# PaymentCard

Checkout payment panel with express/OneLink, card entry, processing, and collapsed pay CTA states.

**Figma:** `payment-card` (`2137:10584`)

## States

| State | Description |
|-------|-------------|
| `onelink` | Amount due, Apple/Google Pay, CardNumberBadge, OneLink OTP |
| `card-payment-biller` | Card form + payer select (closed) |
| `card-payment-biller-selector` | Card form + payer menu open |
| `processing` | Please wait + loading button |
| `collapsed` | Amount due + Pay CTA |

## Composes

- `Button`, `CardNumberBadge`, `CaretDown` / `CaretUp`, `ChevronRight`, `AddPlus`
- Assets in `assets/` (Apple Pay, Google Pay, OneLink, OTP phone, mail/CCV icons)

## CSS variables

Uses Figma WEB vars: `--surface-color-bg-*`, `--border-color-border-*`, `--color-status-info-*`, `--typography-body-*`, `--corner-radius-*`, `--spacing-comp-*`.

## Deploy

Code Connect source: `https://github.com/stevierodger/palletways-web/blob/main/src/components/PaymentCard/PaymentCard.tsx` (previews after merge to `main`).
