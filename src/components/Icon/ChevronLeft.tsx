import type { SVGProps } from "react";
import "./Icon.css";

export type ChevronLeftProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Arrow / Chevron_Left_MD */
export function ChevronLeft({
  size = 24,
  title,
  className = "",
  ...rest
}: ChevronLeftProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--chevron-left ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14 17C13.7441 17 13.4883 16.9023 13.293 16.707L9.29295 12.707C8.90235 12.3164 8.90235 11.6837 9.29295 11.293L13.293 7.29295C13.6836 6.90235 14.3163 6.90235 14.707 7.29295C15.0977 7.68355 15.0976 8.31634 14.707 8.70704L11.414 12L14.707 15.293C15.0976 15.6836 15.0976 16.3164 14.707 16.7071C14.5116 16.9023 14.2559 17 14 17Z" fill="currentColor" />
    </svg>
  );
}
