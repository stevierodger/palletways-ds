import type { ButtonHTMLAttributes } from "react";
import { AddPlus } from "../Icon/AddPlus";
import "./ActionAdd.css";

export type ActionAddProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

/**
 * Compact add action with trailing plus icon.
 * Figma: action.add (2280:8236) — State static | hover
 */
export function ActionAdd({
  label = "Add",
  className = "",
  type = "button",
  ...rest
}: ActionAddProps) {
  return (
    <button
      type={type}
      className={`pw-action-add ${className}`.trim()}
      {...rest}
    >
      <span className="pw-action-add__label">{label}</span>
      <span className="pw-action-add__icon" aria-hidden="true">
        <AddPlus size={24} />
      </span>
    </button>
  );
}
