import type { SVGProps } from "react";
import "./Icon.css";

export type ChevronRightProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Arrow / Chevron_Right_MD */
export function ChevronRight({
  size = 24,
  title,
  className = "",
  ...rest
}: ChevronRightProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--chevron-right ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9.99995 17.0002C9.74405 17.0002 9.48825 16.9025 9.29295 16.7072C8.90235 16.3166 8.90235 15.6838 9.29295 15.2931L12.5859 12.0001L9.29295 8.70711C8.90235 8.31651 8.90235 7.68369 9.29295 7.29299C9.68355 6.90229 10.3163 6.90239 10.707 7.29299L14.707 11.293C15.0976 11.6836 15.0976 12.3164 14.707 12.7071L10.707 16.7071C10.5116 16.9025 10.2559 17.0002 9.99995 17.0002Z" fill="currentColor" />
    </svg>
  );
}
