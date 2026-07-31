import type { ButtonHTMLAttributes } from "react";
import "./CalendarDate.css";

export type CalendarDateTone =
  | "default"
  | "empty"
  | "today"
  | "collection"
  | "travel"
  | "delivery";

export type CalendarDateProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  date?: string;
  tone?: CalendarDateTone;
};

/**
 * Single calendar day cell.
 * Figma: calendar-date (2059:4796)
 * Hover variants map to CSS :hover; disabled maps to Figma State=disabled.
 */
export function CalendarDate({
  date = "01",
  tone = "default",
  disabled,
  className = "",
  type = "button",
  ...rest
}: CalendarDateProps) {
  const showDate = tone !== "empty";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`pw-calendar-date pw-calendar-date--${tone} ${className}`.trim()}
      {...rest}
    >
      {tone === "today" ? (
        <span className="pw-calendar-date__today">
          {showDate ? <span className="pw-calendar-date__label">{date}</span> : null}
        </span>
      ) : showDate ? (
        <span className="pw-calendar-date__label">{date}</span>
      ) : (
        <span className="pw-calendar-date__label pw-calendar-date__label--hidden" aria-hidden="true">
          {date}
        </span>
      )}
    </button>
  );
}
