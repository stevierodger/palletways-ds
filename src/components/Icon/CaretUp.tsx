import type { SVGProps } from "react";
import "./Icon.css";

export type CaretUpProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Arrow / Caret_Up_MD */
export function CaretUp({
  size = 24,
  title,
  className = "",
  ...rest
}: CaretUpProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--caret-up ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M16.0001 15C15.7442 15 15.4884 14.9023 15.2931 14.707L12.0001 11.414L8.70708 14.707C8.31648 15.0976 7.68369 15.0976 7.29299 14.707C6.90229 14.3164 6.90239 13.6837 7.29299 13.293L11.293 9.29295C11.6836 8.90235 12.3164 8.90235 12.7071 9.29295L16.7071 13.293C17.0977 13.6836 17.0977 14.3163 16.7071 14.707C16.5118 14.9023 16.256 15 16.0001 15Z" fill="currentColor" />
    </svg>
  );
}
