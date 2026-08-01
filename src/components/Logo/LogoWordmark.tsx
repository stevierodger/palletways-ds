import logoLarge from "./assets/logo-large.svg";
import logoSmall from "./assets/logo-small.svg";
import "./LogoWordmark.css";

export type LogoWordmarkSize = "large" | "small";

export type LogoWordmarkProps = {
  size?: LogoWordmarkSize;
  className?: string;
  title?: string;
};

const DIMENSIONS = {
  large: { src: logoLarge, width: 134, height: 50 },
  small: { src: logoSmall, width: 86, height: 32 },
} as const;

/**
 * Palletways wordmark logo.
 * Figma: logo-wordmark (194:883) — State large | small
 */
export function LogoWordmark({
  size = "large",
  className = "",
  title = "Palletways",
}: LogoWordmarkProps) {
  const { src, width, height } = DIMENSIONS[size];

  return (
    <img
      className={`pw-logo-wordmark pw-logo-wordmark--${size} ${className}`.trim()}
      src={src}
      alt={title}
      width={width}
      height={height}
    />
  );
}
