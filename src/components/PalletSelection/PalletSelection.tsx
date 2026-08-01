import {
  PalletSelectionCard,
  type PalletDimension,
  type PalletSelectionCardProps,
} from "../PalletSelectionCard";
import type { PalletSizeState } from "../PalletSizes";
import "./PalletSelection.css";

export type PalletSelectionState = "default" | "alt";

export type PalletSelectionItem = {
  sizeLabel: string;
  sizeState: PalletSizeState;
  index: number;
  dimensions: PalletDimension[];
};

export type PalletSelectionProps = {
  state?: PalletSelectionState;
  items?: PalletSelectionItem[];
  helpTitle?: string;
  helpBody?: string;
  onCustomSize?: () => void;
  onHelpDecide?: () => void;
  onAdd?: PalletSelectionCardProps["onAdd"];
  className?: string;
};

const DEFAULT_ITEMS: PalletSelectionItem[] = [
  {
    sizeLabel: "Mini",
    sizeState: "mini",
    index: 1,
    dimensions: [
      { dimension: "Length", value: "1.2m" },
      { dimension: "Width", value: "1.2m" },
      { dimension: "Height", value: "0.6m" },
      { dimension: "Weight", value: "150kg" },
    ],
  },
  {
    sizeLabel: "X-Small",
    sizeState: "x-small",
    index: 2,
    dimensions: [
      { dimension: "Length", value: "1.2m" },
      { dimension: "Width", value: "1.2m" },
      { dimension: "Height", value: "0.8m", changed: true },
      { dimension: "Weight", value: "250kg", changed: true },
    ],
  },
  {
    sizeLabel: "Small",
    sizeState: "small",
    index: 3,
    dimensions: [
      { dimension: "Length", value: "1.2m" },
      { dimension: "Width", value: "1.2m" },
      { dimension: "Height", value: "1.2m", changed: true },
      { dimension: "Weight", value: "500kg", changed: true },
    ],
  },
  {
    sizeLabel: "N. Medium",
    sizeState: "narrow-medium",
    index: 4,
    dimensions: [
      { dimension: "Length", value: "1.2m" },
      { dimension: "Width", value: "0.8m", changed: true },
      { dimension: "Height", value: "2.2m", changed: true },
      { dimension: "Weight", value: "500kg" },
    ],
  },
  {
    sizeLabel: "Medium",
    sizeState: "medium",
    index: 5,
    dimensions: [
      { dimension: "Length", value: "1.2m" },
      { dimension: "Width", value: "1.2m", changed: true },
      { dimension: "Height", value: "2.2m", changed: true },
      { dimension: "Weight", value: "750kg", changed: true },
    ],
  },
  {
    sizeLabel: "Large",
    sizeState: "large",
    index: 6,
    dimensions: [
      { dimension: "Length", value: "1.2m" },
      { dimension: "Width", value: "1.2m" },
      { dimension: "Height", value: "2.2m", changed: true },
      { dimension: "Weight", value: "1200kg", changed: true },
    ],
  },
  {
    sizeLabel: "X-Large",
    sizeState: "x-large",
    index: 7,
    dimensions: [
      { dimension: "Length", value: "1.2m" },
      { dimension: "Width", value: "1.6m", changed: true },
      { dimension: "Height", value: "2.2m" },
      { dimension: "Weight", value: "1200kg" },
    ],
  },
];

/**
 * Pallet size selection layout composing PalletSelectionCard tiles.
 * Figma: info.pallet-selection (2007:5851)
 */
export function PalletSelection({
  state = "default",
  items = DEFAULT_ITEMS,
  helpTitle,
  helpBody,
  onCustomSize,
  onHelpDecide,
  onAdd,
  className = "",
}: PalletSelectionProps) {
  const isAlt = state === "alt";
  const helpState = isAlt ? "help-portrait" : "help";
  const cardState = isAlt ? "portrait" : "landscape";

  return (
    <div className={`pw-pallet-selection pw-pallet-selection--${state} ${className}`.trim()}>
      <PalletSelectionCard
        state={helpState}
        helpTitle={helpTitle}
        helpBody={helpBody}
        onCustomSize={onCustomSize}
        onHelpDecide={onHelpDecide}
      />
      {items.map((item) => (
        <PalletSelectionCard
          key={item.index}
          state={cardState}
          sizeLabel={item.sizeLabel}
          sizeState={item.sizeState}
          index={item.index}
          dimensions={item.dimensions}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
