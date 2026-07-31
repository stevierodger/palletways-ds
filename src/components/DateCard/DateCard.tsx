import {
  CalendarDate,
  type CalendarDateTone,
} from "../CalendarDate";
import { ChevronLeft } from "../Icon/ChevronLeft";
import { ChevronRight } from "../Icon/ChevronRight";
import "./DateCard.css";

export type DateCardDay = {
  date: string;
  tone?: CalendarDateTone;
  disabled?: boolean;
  onClick?: () => void;
};

export type DateCardProps = {
  title?: string;
  month: string;
  year: string | number;
  weekdays?: string[];
  days: DateCardDay[];
  countdown?: string;
  countdownLabel?: string;
  footnote?: string;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  className?: string;
};

const DEFAULT_WEEKDAYS = ["M", "T", "W", "T", "F", "S*", "S"];

/**
 * Collection-date picker card.
 * Figma: date-card (2296:14613) — composes CalendarDate + chevrons
 */
export function DateCard({
  title = "Choose collection date",
  month,
  year,
  weekdays = DEFAULT_WEEKDAYS,
  days,
  countdown,
  countdownLabel = "left to get next day pickup",
  footnote = "*Saturdays incur an extra charge",
  onPrevMonth,
  onNextMonth,
  className = "",
}: DateCardProps) {
  return (
    <section className={`pw-date-card ${className}`.trim()}>
      <h2 className="pw-date-card__title">{title}</h2>
      <hr className="pw-date-card__rule" />
      <div className="pw-date-card__calendar">
        <div className="pw-date-card__nav">
          <button
            type="button"
            className="pw-date-card__nav-btn"
            aria-label="Previous month"
            onClick={onPrevMonth}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="pw-date-card__month">
            <span>{month}</span>
            <span>{year}</span>
          </div>
          <button
            type="button"
            className="pw-date-card__nav-btn"
            aria-label="Next month"
            onClick={onNextMonth}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="pw-date-card__grid" role="grid" aria-label={`${month} ${year}`}>
          {weekdays.map((label, index) => (
            <CalendarDate
              key={`wd-${index}`}
              date={label}
              tone="default"
              disabled={label === "S" && !label.includes("*")}
              tabIndex={-1}
              className="pw-date-card__weekday"
            />
          ))}
          {days.map((day, index) => (
            <CalendarDate
              key={`${day.date}-${index}`}
              date={day.date}
              tone={day.tone ?? "default"}
              disabled={day.disabled}
              onClick={day.onClick}
            />
          ))}
        </div>
      </div>
      {countdown ? (
        <p className="pw-date-card__countdown">
          <span>{countdown}</span>
          <span>{countdownLabel}</span>
        </p>
      ) : null}
      {footnote ? <p className="pw-date-card__footnote">{footnote}</p> : null}
    </section>
  );
}
