import type { SVGProps } from "react";
import "./Icon.css";

export type SearchProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Interface / Search_Magnifying_Glass */
export function Search({
  size = 24,
  title,
  className = "",
  ...rest
}: SearchProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--search ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M21 22C20.7441 22 20.4883 21.9023 20.293 21.707L14.9033 16.3174C13.5478 17.3716 11.8457 18 10 18C5.5889 18 2 14.4111 2 10C2 5.5889 5.5889 2 10 2C14.4111 2 18 5.5889 18 10C18 11.8457 17.3711 13.5479 16.3174 14.9033L21.707 20.2929C22.0976 20.6835 22.0976 21.3163 21.707 21.707C21.5117 21.9023 21.2559 22 21 22ZM10 4C6.6914 4 4 6.6914 4 10C4 13.3086 6.6914 16 10 16C13.3086 16 16 13.3086 16 10C16 6.6914 13.3086 4 10 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
