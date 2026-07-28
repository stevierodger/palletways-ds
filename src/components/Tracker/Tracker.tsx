import "./Tracker.css";

export type TrackerStatus = "default" | "active" | "completed";

export type TrackerProps = {
  step: number | string;
  label: string;
  status?: TrackerStatus;
  showConnector?: boolean;
  className?: string;
};

export function Tracker({
  step,
  label,
  status = "default",
  showConnector = true,
  className = "",
}: TrackerProps) {
  return (
    <div className={`pw-tracker ${className}`.trim()}>
      <div className="pw-tracker__step">
        <div className={`pw-tracker__badge pw-tracker__badge--${status}`}>
          {status === "completed" ? "✓" : step}
        </div>
        <span className="pw-tracker__label">{label}</span>
      </div>
      {showConnector && (
        <div
          className={`pw-tracker__connector pw-tracker__connector--${status}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
