import type { SVGProps } from "react";
import "./Icon.css";

export type CircleCheckProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Warning / Circle_Check */
export function CircleCheck({
  size = 24,
  title,
  className = "",
  ...rest
}: CircleCheckProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--circle-check ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M12 22C6.4858 22 2 17.5142 2 12C2 6.4858 6.4858 2 12 2C17.5142 2 22 6.4858 22 12C22 17.5142 17.5142 22 12 22ZM12 4C7.5889 4 4 7.5889 4 12C4 16.4111 7.5889 20 12 20C16.4111 20 20 16.4111 20 12C20 7.5889 16.4111 4 12 4ZM11 15C10.7441 15 10.4883 14.9023 10.293 14.707L8.29297 12.707C7.90237 12.3164 7.90237 11.6835 8.29297 11.2928C8.68357 10.9021 9.31645 10.9022 9.70715 11.2928L11.0001 12.5859L14.2931 9.29285C14.6837 8.90225 15.3165 8.90225 15.7072 9.29285C16.0979 9.68345 16.0978 10.3163 15.7072 10.707L11.7072 14.707C11.5117 14.9023 11.2559 15 11 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
