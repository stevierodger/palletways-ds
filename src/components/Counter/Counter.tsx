import { useState, type HTMLAttributes } from "react";
import { AddPlus } from "../Icon/AddPlus";
import { RemoveMinus } from "../Icon/RemoveMinus";
import "./Counter.css";

export type CounterProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  disabled?: boolean;
  /** Pad displayed value with leading zeros (Figma shows "01"). Default 2. */
  pad?: number;
  decreaseLabel?: string;
  increaseLabel?: string;
};

/**
 * Quantity stepper (− value +).
 * Figma: action.counter (2006:4000)
 */
export function Counter({
  value: valueProp,
  defaultValue = 1,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  onValueChange,
  disabled,
  pad = 2,
  decreaseLabel = "Decrease",
  increaseLabel = "Increase",
  className = "",
  ...rest
}: CounterProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolled;

  const setValue = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    if (!isControlled) setUncontrolled(clamped);
    onValueChange?.(clamped);
  };

  const display =
    pad > 0 ? String(value).padStart(pad, "0") : String(value);

  return (
    <div
      className={`pw-counter ${disabled ? "pw-counter--disabled" : ""} ${className}`.trim()}
      {...rest}
    >
      <button
        type="button"
        className="pw-counter__btn"
        aria-label={decreaseLabel}
        disabled={disabled || value <= min}
        onClick={() => setValue(value - step)}
      >
        <span className="pw-counter__icon" aria-hidden="true">
          <RemoveMinus size={24} />
        </span>
      </button>
      <span className="pw-counter__value" aria-live="polite">
        {display}
      </span>
      <button
        type="button"
        className="pw-counter__btn"
        aria-label={increaseLabel}
        disabled={disabled || value >= max}
        onClick={() => setValue(value + step)}
      >
        <span className="pw-counter__icon" aria-hidden="true">
          <AddPlus size={24} />
        </span>
      </button>
    </div>
  );
}
