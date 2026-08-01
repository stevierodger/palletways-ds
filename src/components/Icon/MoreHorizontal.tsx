import type { SVGProps } from "react";
import "./Icon.css";

export type MoreHorizontalProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Menu / More_Horizontal */
export function MoreHorizontal({
  size = 24,
  title,
  className = "",
  ...rest
}: MoreHorizontalProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--more-horizontal ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M18 14C16.897 14 16 13.1025 16 12C16 10.8975 16.897 10 18 10C19.103 10 20 10.8975 20 12C20 13.1025 19.103 14 18 14ZM17.9995 11.998L17 12H18L17.9995 11.998Z"
        fill="currentColor"
      />
      <path
        d="M12 14C10.897 14 10 13.1025 10 12C10 10.8975 10.897 10 12 10C13.103 10 14 10.8975 14 12C14 13.1025 13.103 14 12 14ZM11.9995 11.998L11 12H12L11.9995 11.998Z"
        fill="currentColor"
      />
      <path
        d="M6 14C4.897 14 4 13.1025 4 12C4 10.8975 4.897 10 6 10C7.103 10 8 10.8975 8 12C8 13.1025 7.103 14 6 14ZM5.99951 11.998L5 12H6L5.99951 11.998Z"
        fill="currentColor"
      />
    </svg>
  );
}
