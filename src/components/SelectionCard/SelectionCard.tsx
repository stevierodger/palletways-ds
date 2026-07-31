import { Button } from "../Button";
import { ArrowCircleRight } from "../Icon/ArrowCircleRight";
import { ChevronRight } from "../Icon/ChevronRight";
import "./SelectionCard.css";

export type SelectionCardPlan = "economy" | "premium";

export type SelectionCardProps = {
  plan?: SelectionCardPlan;
  empty?: boolean;
  selected?: boolean;
  startDate?: string;
  endDate?: string;
  endTime?: string;
  price?: string;
  showPriceNote?: boolean;
  priceNote?: string;
  ctaLabel?: string;
  emptyMessage?: string;
  onSelect?: () => void;
  className?: string;
};

/**
 * Economy / premium date-option card.
 * Figma: selection-cards (2069:5436)
 */
export function SelectionCard({
  plan = "economy",
  empty = false,
  selected = false,
  startDate = "Thu 18 Jun",
  endDate = "Fri 23 Jun",
  endTime = "2pm",
  price = "£124.45",
  showPriceNote = true,
  priceNote,
  ctaLabel = "Select these dates",
  emptyMessage = "Make a selection on the calendar to see available options.",
  onSelect,
  className = "",
}: SelectionCardProps) {
  if (empty) {
    return (
      <div className={`pw-selection-card pw-selection-card--empty ${className}`.trim()}>
        <p className="pw-selection-card__empty">{emptyMessage}</p>
      </div>
    );
  }

  const note =
    priceNote ??
    (plan === "premium" ? "Next day delivery" : "Saturday surcharge");

  return (
    <div
      className={`pw-selection-card pw-selection-card--${plan} ${selected ? "pw-selection-card--selected" : ""} ${className}`.trim()}
    >
      <div className="pw-selection-card__header">
        <span className="pw-selection-card__plan">{plan}</span>
      </div>
      <div className="pw-selection-card__dates">
        <span className="pw-selection-card__chip pw-selection-card__chip--start">
          {startDate}
        </span>
        <ArrowCircleRight size={24} className="pw-selection-card__arrow" />
        <span className="pw-selection-card__chip pw-selection-card__chip--end">
          <span>{endDate}</span>
          <span>{endTime}</span>
        </span>
      </div>
      <div className="pw-selection-card__price-row">
        {showPriceNote ? (
          <span className="pw-selection-card__note">{note}</span>
        ) : null}
        <span className="pw-selection-card__subtotal">Subtotal</span>
        <span className="pw-selection-card__price">{price}</span>
      </div>
      <hr className="pw-selection-card__rule" />
      <Button
        variant="secondary"
        size="sm"
        className="pw-selection-card__cta"
        trailingIcon={<ChevronRight size={24} />}
        onClick={onSelect}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
