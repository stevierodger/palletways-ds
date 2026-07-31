import "./Trustpilot.css";

export type TrustpilotTone = "positive" | "neutral";

export type TrustpilotProps = {
  tone?: TrustpilotTone;
  className?: string;
  title?: string;
};

/**
 * Trustpilot star tile.
 * Figma: trustpilot (194:2143) — State positive | neutral
 */
export function Trustpilot({
  tone = "positive",
  className = "",
  title = "Trustpilot",
}: TrustpilotProps) {
  return (
    <span
      className={`pw-trustpilot pw-trustpilot--${tone} ${className}`.trim()}
      role="img"
      aria-label={title}
    >
      <svg
        className="pw-trustpilot__star"
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16.5487 0L20.4553 12.0233H33.0974L22.8697 19.4542L16.5487 24.0467L23.6976 22.0021L26.7763 31.4775L16.5487 24.0467L6.32104 31.4775L10.2277 19.4542L0 12.0233H12.6421L16.5487 0Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
