import "./SummaryFooterPrice.css";

export type SummaryFooterPriceProps = {
  subtotal?: number | string;
  vat?: number | string;
  total?: number | string;
  currency?: string;
  className?: string;
};

function formatAmount(value: number | string): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value;
}

function PriceRow({
  label,
  amount,
  currency,
  strong = false,
}: {
  label: string;
  amount: number | string;
  currency: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`pw-summary-footer-price__row ${strong ? "pw-summary-footer-price__row--total" : ""}`.trim()}
    >
      <span className="pw-summary-footer-price__label">{label}</span>
      <span className="pw-summary-footer-price__value">
        <span className="pw-summary-footer-price__currency">{currency}</span>
        <span className="pw-summary-footer-price__amount">{formatAmount(amount)}</span>
      </span>
    </div>
  );
}

/**
 * Order summary price breakdown rows.
 * Figma: summary-footer/price (2287:10609)
 */
export function SummaryFooterPrice({
  subtotal = 132.14,
  vat = 26.42,
  total = 158.56,
  currency = "£",
  className = "",
}: SummaryFooterPriceProps) {
  return (
    <div className={`pw-summary-footer-price ${className}`.trim()}>
      <div className="pw-summary-footer-price__group">
        <PriceRow label="Sub total" amount={subtotal} currency={currency} />
        <PriceRow label="+ VAT (20%)" amount={vat} currency={currency} />
      </div>
      <PriceRow label="Total" amount={total} currency={currency} strong />
    </div>
  );
}
