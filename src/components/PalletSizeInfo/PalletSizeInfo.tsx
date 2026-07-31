import "./PalletSizeInfo.css";

export type PalletSizeInfoProps = {
  dimension: string;
  value: string;
  /** Figma State=change — shows asterisk after value */
  changed?: boolean;
  className?: string;
};

/**
 * Dimension / value row for pallet specs.
 * Figma: info.pallet-size (2007:4430)
 */
export function PalletSizeInfo({
  dimension,
  value,
  changed = false,
  className = "",
}: PalletSizeInfoProps) {
  return (
    <div className={`pw-pallet-size-info ${className}`.trim()}>
      <span className="pw-pallet-size-info__dimension">{dimension}</span>
      <span className="pw-pallet-size-info__value">
        {value}
        {changed ? <span aria-hidden="true">*</span> : null}
      </span>
    </div>
  );
}
