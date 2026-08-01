import { ActionAdd } from "../ActionAdd";
import { Button } from "../Button";
import { CaretCircleRight } from "../Icon/CaretCircleRight";
import { ChevronRight } from "../Icon/ChevronRight";
import { PalletSizeInfo } from "../PalletSizeInfo";
import { PalletSizes, type PalletSizeState } from "../PalletSizes";
import "./PalletSelectionCard.css";

export type PalletSelectionCardState =
  | "help"
  | "help-portrait"
  | "landscape"
  | "portrait"
  | "hover";

export type PalletDimension = {
  dimension: string;
  value: string;
  changed?: boolean;
};

export type PalletSelectionCardProps = {
  state?: PalletSelectionCardState;
  sizeLabel?: string;
  sizeState?: PalletSizeState;
  index?: number;
  dimensions?: PalletDimension[];
  helpTitle?: string;
  helpBody?: string;
  customSizeLabel?: string;
  helpDecideLabel?: string;
  addLabel?: string;
  onCustomSize?: () => void;
  onHelpDecide?: () => void;
  onAdd?: () => void;
  className?: string;
};

const DEFAULT_DIMENSIONS: PalletDimension[] = [
  { dimension: "Length", value: "1.2m" },
  { dimension: "Width", value: "1.2m" },
  { dimension: "Height", value: "0.6m" },
  { dimension: "Weight", value: "150kg" },
];

/**
 * Pallet size selection card — help prompt or selectable size tile.
 * Figma: info.pallet-selection-card (2007:4482)
 */
export function PalletSelectionCard({
  state = "help",
  sizeLabel = "Mini",
  sizeState = "mini",
  index = 1,
  dimensions = DEFAULT_DIMENSIONS,
  helpTitle = "Not sure what size pallet you need?",
  helpBody = "Tell us what you are shipping, and we can help you decide",
  customSizeLabel = "Custom size",
  helpDecideLabel = "Help me decide",
  addLabel = "Add",
  onCustomSize,
  onHelpDecide,
  onAdd,
  className = "",
}: PalletSelectionCardProps) {
  const isHelp = state === "help" || state === "help-portrait";

  if (isHelp) {
    return (
      <article
        className={`pw-pallet-selection-card pw-pallet-selection-card--${state} ${className}`.trim()}
      >
        <div className="pw-pallet-selection-card__message">
          <h3 className="pw-pallet-selection-card__title">{helpTitle}</h3>
          <p className="pw-pallet-selection-card__body">{helpBody}</p>
        </div>
        <div className="pw-pallet-selection-card__actions">
          <Button
            variant="ghost"
            size="sm"
            className="pw-pallet-selection-card__ghost-btn"
            trailingIcon={<CaretCircleRight size={24} />}
            onClick={onCustomSize}
          >
            {customSizeLabel}
          </Button>
          <Button
            variant="primary"
            size="sm"
            trailingIcon={<ChevronRight size={24} />}
            onClick={onHelpDecide}
          >
            {helpDecideLabel}
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`pw-pallet-selection-card pw-pallet-selection-card--${state} ${className}`.trim()}
    >
      <div className="pw-pallet-selection-card__visual">
        <div className="pw-pallet-selection-card__header">
          <span className="pw-pallet-selection-card__badge" aria-hidden="true">
            {index}
          </span>
          <h3 className="pw-pallet-selection-card__size">{sizeLabel}</h3>
        </div>
        <PalletSizes state={sizeState} className="pw-pallet-selection-card__illustration" />
      </div>
      <div className="pw-pallet-selection-card__details">
        <div className="pw-pallet-selection-card__specs">
          {dimensions.map((row) => (
            <PalletSizeInfo
              key={row.dimension}
              dimension={row.dimension}
              value={row.value}
              changed={row.changed}
            />
          ))}
        </div>
        <ActionAdd
          label={addLabel}
          className="pw-pallet-selection-card__add"
          onClick={onAdd}
        />
      </div>
    </article>
  );
}
