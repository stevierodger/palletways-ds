import { useId, useState, type ButtonHTMLAttributes } from "react";
import "./Switch.css";

export type SwitchProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "role" | "aria-checked" | "type"
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

/** Figma: input.switch (2002:1749) — Property 1 = off | on */
export function Switch({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  className = "",
  disabled,
  id,
  ...rest
}: SwitchProps) {
  const autoId = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const isControlled = checkedProp !== undefined;
  const checked = isControlled ? checkedProp : uncontrolled;

  return (
    <button
      {...rest}
      id={id ?? autoId}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={`pw-switch ${checked ? "pw-switch--on" : "pw-switch--off"} ${className}`.trim()}
      onClick={() => {
        if (disabled) return;
        const next = !checked;
        if (!isControlled) setUncontrolled(next);
        onCheckedChange?.(next);
      }}
    >
      <span className="pw-switch__thumb" aria-hidden="true" />
    </button>
  );
}
