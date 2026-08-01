import type { SVGProps } from "react";
import "./Icon.css";

export type UserProps = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: User / User_01 */
export function User({
  size = 24,
  title,
  className = "",
  ...rest
}: UserProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pw-icon pw-icon--user ${className}`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M20 22C19.4478 22 19 21.5527 19 21C19 18.832 15.7944 17 12 17C8.2056 17 5 18.832 5 21C5 21.5527 4.5522 22 4 22C3.4478 22 3 21.5527 3 21C3 17.6357 6.9531 15 12 15C17.0469 15 21 17.6357 21 21C21 21.5527 20.5522 22 20 22ZM12 14C8.6914 14 6 11.3086 6 8C6 4.6914 8.6914 2 12 2C15.3086 2 18 4.6914 18 8C18 11.3086 15.3086 14 12 14ZM12 4C9.7944 4 8 5.7939 8 8C8 10.2061 9.7944 12 12 12C14.2056 12 16 10.2061 16 8C16 5.7939 14.2056 4 12 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
