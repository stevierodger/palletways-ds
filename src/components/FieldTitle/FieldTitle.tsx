import "./FieldTitle.css";

export type FieldTitleTone = "active" | "secondary";

export type FieldTitleProps = {
  title?: string;
  tone?: FieldTitleTone;
  className?: string;
};

/**
 * Form field title / label line.
 * Figma: field-title (2125:12386)
 */
export function FieldTitle({
  title = "Full name*",
  tone = "active",
  className = "",
}: FieldTitleProps) {
  return (
    <div className={`pw-field-title pw-field-title--${tone} ${className}`.trim()}>
      <p className="pw-field-title__text">{title}</p>
    </div>
  );
}
