import { SummaryAction, type SummaryActionProps } from "../SummaryAction";
import "./SummaryHeader.css";

export type SummaryHeaderProps = {
  title?: string;
  /** Pass `null` to hide the action. */
  action?: SummaryActionProps | null;
  className?: string;
};

/**
 * Order summary section header with optional action.
 * Figma: summary-header (2283:10525)
 */
export function SummaryHeader({
  title = "Order Summary",
  action,
  className = "",
}: SummaryHeaderProps) {
  const showAction = action !== null;
  const actionProps: SummaryActionProps = action ?? { variant: "edit" };

  return (
    <header className={`pw-summary-header ${className}`.trim()}>
      <h2 className="pw-summary-header__title">{title}</h2>
      {showAction ? <SummaryAction {...actionProps} /> : null}
    </header>
  );
}
