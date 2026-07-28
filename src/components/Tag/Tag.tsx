import "./Tag.css";

export type TagTone = "adventure" | "nature" | "hiking" | "neutral" | "brand";

export type TagProps = {
  label: string;
  tone?: TagTone;
  className?: string;
};

export function Tag({ label, tone = "neutral", className = "" }: TagProps) {
  return (
    <span className={`pw-tag pw-tag--${tone} ${className}`.trim()}>{label}</span>
  );
}
