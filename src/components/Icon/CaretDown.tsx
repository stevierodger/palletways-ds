import type { SVGProps } from "react";
import "./Icon.css";

export type CaretDownProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Arrow / Caret_Down_MD */
export function CaretDown({
  size = 24,
  title,
  className = "",
  ...rest
}: CaretDownProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--caret-down ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 15.0001C11.7441 15.0001 11.4883 14.9024 11.293 14.7071L7.29295 10.7071C6.90235 10.3165 6.90235 9.68369 7.29295 9.29299C7.68355 8.90229 8.31634 8.90239 8.70704 9.29299L12 12.586L15.293 9.29299C15.6836 8.90239 16.3165 8.90239 16.7072 9.29299C17.0979 9.68359 17.0978 10.3164 16.7072 10.7071L12.7072 14.7071C12.5117 14.9024 12.2559 15.0001 12 15.0001Z" fill="currentColor" />
    </svg>
  );
}
