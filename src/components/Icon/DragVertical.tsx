import type { SVGProps } from "react";
import "./Icon.css";

export type DragVerticalProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Interface / Drag_Vertical */
export function DragVertical({
  size = 24,
  title,
  className = "",
  ...rest
}: DragVerticalProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--drag-vertical ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M15 20C13.897 20 13 19.103 13 18C13 16.897 13.897 16 15 16C16.103 16 17 16.897 17 18C17 19.103 16.103 20 15 20ZM14.999 17.998L14 18L15 18.0005C15 18 14.9995 17.9985 14.999 17.998Z"
        fill="currentColor"
      />
      <path
        d="M9 20C7.897 20 7 19.103 7 18C7 16.897 7.897 16 9 16C10.103 16 11 16.897 11 18C11 19.103 10.103 20 9 20ZM8.99902 17.998L8 18L9 18.0005C9 18 8.99952 17.9985 8.99902 17.998Z"
        fill="currentColor"
      />
      <path
        d="M15 14C13.897 14 13 13.103 13 12C13 10.897 13.897 10 15 10C16.103 10 17 10.897 17 12C17 13.103 16.103 14 15 14ZM14.999 11.998L14 12L15 12.0005C15 12 14.9995 11.9985 14.999 11.998Z"
        fill="currentColor"
      />
      <path
        d="M9 14C7.897 14 7 13.103 7 12C7 10.897 7.897 10 9 10C10.103 10 11 10.897 11 12C11 13.103 10.103 14 9 14ZM8.99902 11.998L8 12L9 12.0005C9 12 8.99952 11.9985 8.99902 11.998Z"
        fill="currentColor"
      />
      <path
        d="M15 8C13.897 8 13 7.103 13 6C13 4.897 13.897 4 15 4C16.103 4 17 4.897 17 6C17 7.103 16.103 8 15 8ZM14.999 5.99799L14 6L15 6.00049C15 5.99999 14.9995 5.99849 14.999 5.99799Z"
        fill="currentColor"
      />
      <path
        d="M9 8C7.897 8 7 7.103 7 6C7 4.897 7.897 4 9 4C10.103 4 11 4.897 11 6C11 7.103 10.103 8 9 8ZM8.99902 5.99799L8 6L9 6.00049C9 5.99999 8.99952 5.99849 8.99902 5.99799Z"
        fill="currentColor"
      />
    </svg>
  );
}
