import "./Badge.css";

export type BadgeProps = {
  label: string;
  className?: string;
};

/**
 * Compact uppercase category badge.
 * Figma: Badge (30:41)
 */
export function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span className={`pw-badge ${className}`.trim()}>{label}</span>
  );
}
