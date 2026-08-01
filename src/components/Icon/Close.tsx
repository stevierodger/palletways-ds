import type { SVGProps } from "react";
import "./Icon.css";

export type CloseProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Menu / Close_MD */
export function Close({
  size = 24,
  title,
  className = "",
  ...rest
}: CloseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--close ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M18.0001 19.0001C17.7442 19.0001 17.4884 18.9025 17.2931 18.7072L12.0001 13.4141L6.70705 18.7072C6.31645 19.0978 5.68369 19.0978 5.29299 18.7072C4.90229 18.3166 4.90239 17.6837 5.29299 17.293L10.586 12L5.29299 6.70705C4.90239 6.31645 4.90239 5.68369 5.29299 5.29299C5.68359 4.90229 6.31635 4.90239 6.70705 5.29299L12.0001 10.586L17.2931 5.29299C17.6837 4.90239 18.3165 4.90239 18.7072 5.29299C19.0979 5.68359 19.0978 6.31635 18.7072 6.70705L13.4142 12L18.7072 17.293C19.0978 17.6836 19.0978 18.3165 18.7072 18.7072C18.5118 18.9025 18.256 19.0001 18.0001 19.0001Z"
        fill="currentColor"
      />
    </svg>
  );
}
