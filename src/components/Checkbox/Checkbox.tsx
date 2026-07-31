import { useId, useState, type InputHTMLAttributes } from "react";
import { CheckboxChecked } from "../Icon/CheckboxChecked";
import { CheckboxUnchecked } from "../Icon/CheckboxUnchecked";
import "./Checkbox.css";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "size"
> & {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

/** Figma: input.check-field (2001:1712) */
export function Checkbox({
  label,
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  id,
  className = "",
  disabled,
  ...rest
}: CheckboxProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const isControlled = checkedProp !== undefined;
  const checked = isControlled ? checkedProp : uncontrolled;

  return (
    <label
      className={`pw-checkbox ${disabled ? "pw-checkbox--disabled" : ""} ${className}`.trim()}
      htmlFor={inputId}
    >
      <input
        {...rest}
        id={inputId}
        type="checkbox"
        className="pw-checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          const next = event.target.checked;
          if (!isControlled) setUncontrolled(next);
          onCheckedChange?.(next);
        }}
      />
      <span className="pw-checkbox__control" aria-hidden="true">
        {checked ? <CheckboxChecked size={20} /> : <CheckboxUnchecked size={20} />}
      </span>
      <span className="pw-checkbox__label">{label}</span>
    </label>
  );
}
