import { useId, useState } from "react";
import "./Toggle.css";

export type ToggleProps = {
  option1?: string;
  option2?: string;
  /** Selected option label/value. Defaults to option1. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  "aria-label"?: string;
};

/**
 * Segmented two-option control.
 * Figma: input.toggle (2002:1773) — Property 1=primary → option1, secondary → option2
 */
export function Toggle({
  option1 = "Option 1",
  option2 = "Option 2",
  value: valueProp,
  defaultValue,
  onValueChange,
  disabled,
  className = "",
  id,
  "aria-label": ariaLabel = "Toggle",
}: ToggleProps) {
  const autoId = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultValue ?? option1);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolled;

  const select = (next: string) => {
    if (disabled) return;
    if (!isControlled) setUncontrolled(next);
    onValueChange?.(next);
  };

  return (
    <div
      id={id ?? autoId}
      role="group"
      aria-label={ariaLabel}
      className={`pw-toggle ${disabled ? "pw-toggle--disabled" : ""} ${className}`.trim()}
    >
      <button
        type="button"
        className={`pw-toggle__option ${value === option1 ? "pw-toggle__option--selected" : ""}`}
        aria-pressed={value === option1}
        disabled={disabled}
        onClick={() => select(option1)}
      >
        {option1}
      </button>
      <button
        type="button"
        className={`pw-toggle__option ${value === option2 ? "pw-toggle__option--selected" : ""}`}
        aria-pressed={value === option2}
        disabled={disabled}
        onClick={() => select(option2)}
      >
        {option2}
      </button>
    </div>
  );
}
