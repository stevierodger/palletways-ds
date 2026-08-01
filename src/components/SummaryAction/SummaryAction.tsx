import { ArrowsReload, EditPencil } from "../Icon";
import "./SummaryAction.css";

export type SummaryActionVariant = "edit" | "order-again";

export type SummaryActionProps = {
  variant?: SummaryActionVariant;
  className?: string;
  onClick?: () => void;
};

const LABELS: Record<SummaryActionVariant, string> = {
  edit: "Edit",
  "order-again": "Order again",
};

/**
 * Compact summary row action (edit or order again).
 * Figma: summary-action (2283:10519)
 */
export function SummaryAction({
  variant = "edit",
  className = "",
  onClick,
}: SummaryActionProps) {
  const label = LABELS[variant];
  const Icon = variant === "edit" ? EditPencil : ArrowsReload;

  return (
    <button
      type="button"
      className={`pw-summary-action pw-summary-action--${variant} ${className}`.trim()}
      onClick={onClick}
    >
      <span className="pw-summary-action__label">{label}</span>
      <Icon className="pw-summary-action__icon" size={16} aria-hidden="true" />
    </button>
  );
}
