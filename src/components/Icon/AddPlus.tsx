import type { SVGProps } from "react";
import "./Icon.css";

export type AddPlusProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

/** Figma: Edit / Add_Plus (2003:2092) — 24 viewBox, stroke icon */
export function AddPlus({
  size = 24,
  title,
  className = "",
  ...rest
}: AddPlusProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--add-plus ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M6 12H12M12 12H18M12 12V18M12 12V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
