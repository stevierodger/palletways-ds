import miniImg from "./assets/mini.png";
import xSmallImg from "./assets/x-small.png";
import smallImg from "./assets/small.png";
import mediumImg from "./assets/medium.png";
import narrowMediumImg from "./assets/narrow-medium.png";
import largeImg from "./assets/large.png";
import xLargeImg from "./assets/x-large.png";
import personSvg from "./assets/person.svg";
import "./PalletSizes.css";

export type PalletSizeState =
  | "mini"
  | "x-small"
  | "small"
  | "medium"
  | "narrow-medium"
  | "large"
  | "x-large";

export type PalletSizesProps = {
  state?: PalletSizeState;
  className?: string;
};

const PALLET_IMAGES: Record<PalletSizeState, string> = {
  mini: miniImg,
  "x-small": xSmallImg,
  small: smallImg,
  medium: mediumImg,
  "narrow-medium": narrowMediumImg,
  large: largeImg,
  "x-large": xLargeImg,
};

/**
 * Pallet size illustration with person scale reference.
 * Figma: pallet-sizes (2012:2844)
 */
export function PalletSizes({
  state = "mini",
  className = "",
}: PalletSizesProps) {
  return (
    <div className={`pw-pallet-sizes pw-pallet-sizes--${state} ${className}`.trim()}>
      <div className="pw-pallet-sizes__stack">
        <img
          className="pw-pallet-sizes__cargo"
          src={PALLET_IMAGES[state]}
          alt=""
          aria-hidden="true"
        />
        <img
          className="pw-pallet-sizes__person"
          src={personSvg}
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
