import type { SVGProps } from "react";
import "./Icon.css";

export type CaretCircleRightProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Arrow / Caret_Circle_Right */
export function CaretCircleRight({
  size = 24,
  title,
  className = "",
  ...rest
}: CaretCircleRightProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--caret-circle-right ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 22C6.4858 22 2 17.5142 2 12C2 6.4858 6.4858 2 12 2C17.5142 2 22 6.4858 22 12C22 17.5142 17.5142 22 12 22ZM12 4C7.5889 4 4 7.5889 4 12C4 16.4111 7.5889 20 12 20C16.4111 20 20 16.4111 20 12C20 7.5889 16.4111 4 12 4ZM11 16C10.7441 16 10.4883 15.9023 10.293 15.707C9.90243 15.3164 9.90243 14.6836 10.293 14.2929L12.586 11.9999L10.293 9.70691C9.90243 9.31631 9.90243 8.68349 10.293 8.29279C10.6836 7.90209 11.3164 7.90219 11.7071 8.29279L14.7071 11.2928C15.0977 11.6834 15.0977 12.3162 14.7071 12.7069L11.7071 15.7069C11.5117 15.9023 11.2559 16 11 16Z" fill="currentColor" />
    </svg>
  );
}
