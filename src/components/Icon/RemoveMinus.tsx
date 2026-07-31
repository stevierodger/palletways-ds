import type { SVGProps } from "react";
import "./Icon.css";

export type RemoveMinusProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

/** Figma: Edit / Remove_Minus (2003:2093) — 24 viewBox, stroke icon */
export function RemoveMinus({
  size = 24,
  title,
  className = "",
  ...rest
}: RemoveMinusProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--remove-minus ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M6 12H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
