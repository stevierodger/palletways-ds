import linkMark from "./assets/link-mark.svg";
import linkMarkCompact from "./assets/link-mark-compact.svg";
import mastercard from "./assets/mastercard.svg";
import "./CardNumberBadge.css";

export type CardNumberBadgeProps = {
  /** Last-four (or card digits) shown in selected state. */
  number?: string;
  selected?: boolean;
  className?: string;
};

/**
 * Link payment mark badge. Selected state shows network + last four.
 * Figma: card-number-badge (2132:10067) — State static | selected
 */
export function CardNumberBadge({
  number = "3133",
  selected = false,
  className = "",
}: CardNumberBadgeProps) {
  return (
    <span
      className={`pw-card-number-badge ${selected ? "pw-card-number-badge--selected" : "pw-card-number-badge--static"} ${className}`.trim()}
    >
      <img
        className={`pw-card-number-badge__mark ${selected ? "pw-card-number-badge__mark--compact" : ""}`}
        src={selected ? linkMarkCompact : linkMark}
        alt=""
        aria-hidden="true"
      />
      {selected ? (
        <>
          <span className="pw-card-number-badge__divider" aria-hidden="true" />
          <span className="pw-card-number-badge__network">
            <img src={mastercard} alt="" aria-hidden="true" />
          </span>
          <span className="pw-card-number-badge__number">{number}</span>
        </>
      ) : null}
    </span>
  );
}
