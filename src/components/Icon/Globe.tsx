import type { SVGProps } from "react";
import "./Icon.css";

export type GlobeProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: Navigation / Globe */
export function Globe({
  size = 24,
  title,
  className = "",
  ...rest
}: GlobeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--globe ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M12 22C6.4863 22 2 17.5142 2 12C2 6.4858 6.4863 2 12 2C17.5137 2 22 6.4858 22 12C22 17.5142 17.5137 22 12 22ZM9.02539 13C9.24609 17.3047 10.8623 20 12 20C13.1377 20 14.7539 17.3047 14.9746 13H9.02539ZM16.9775 13C16.8662 15.4487 16.3506 17.5884 15.5547 19.166C17.9024 17.9966 19.5986 15.706 19.9375 13H16.9775ZM4.0625 13C4.4014 15.7061 6.09771 17.9966 8.44531 19.166C7.64941 17.5884 7.13386 15.4487 7.02246 13H4.0625ZM16.9775 11H19.9375C19.5986 8.2939 17.9023 6.00338 15.5547 4.83398C16.3506 6.41158 16.8662 8.5513 16.9775 11ZM9.02539 11H14.9746C14.7539 6.6953 13.1377 4 12 4C10.8623 4 9.24609 6.6953 9.02539 11ZM4.0625 11H7.02246C7.13376 8.5513 7.64941 6.41158 8.44531 4.83398C6.09761 6.00338 4.4014 8.2939 4.0625 11Z"
        fill="currentColor"
      />
    </svg>
  );
}
