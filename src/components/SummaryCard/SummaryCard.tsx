import {
  SummaryFooterActionPanel,
  type SummaryFooterActionPanelProps,
} from "../SummaryFooterActionPanel";
import {
  SummaryFooterPrice,
  type SummaryFooterPriceProps,
} from "../SummaryFooterPrice";
import { SummaryHeader, type SummaryHeaderProps } from "../SummaryHeader";
import "./SummaryCard.css";

export type SummaryPartyDetails = {
  date?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export type SummaryCardProps = {
  title?: SummaryHeaderProps["title"];
  action?: SummaryHeaderProps["action"];
  showAction?: boolean;
  showInventory?: boolean;
  inventoryLabel?: string;
  inventoryValue?: string;
  showCollectionDate?: boolean;
  showCollectionName?: boolean;
  showCollectionEmail?: boolean;
  showCollectionPhone?: boolean;
  showCollectionAddress?: boolean;
  collection?: SummaryPartyDetails;
  showDeliveryDate?: boolean;
  showDeliveryName?: boolean;
  showDeliveryEmail?: boolean;
  showDeliveryPhone?: boolean;
  showDeliveryAddress?: boolean;
  delivery?: SummaryPartyDetails;
  showPrice?: boolean;
  price?: SummaryFooterPriceProps;
  showActionPanel?: boolean;
  actionPanel?: SummaryFooterActionPanelProps;
  className?: string;
};

const DEFAULT_COLLECTION: SummaryPartyDetails = {
  date: "Thursday, 18th June",
  name: "John Farnham",
  email: "hello@ilovepallets.com",
  phone: "+44 7123 456789",
  address: "21 Halliford Street,\nLondon, N1 3HB",
};

const DEFAULT_DELIVERY: SummaryPartyDetails = {
  date: "Tuesday, 21st June before 5pm",
  name: "Peter Gould",
  email: "info@gouldelectronics.com",
  phone: "+44 7345 456123",
  address: "3 Houldsworth Street\nManchester, M1 1AE",
};

function PartyBlock({
  label,
  tone,
  details,
  showDate,
  showName,
  showEmail,
  showPhone,
  showAddress,
}: {
  label: string;
  tone: "collection" | "delivery";
  details: SummaryPartyDetails;
  showDate: boolean;
  showName: boolean;
  showEmail: boolean;
  showPhone: boolean;
  showAddress: boolean;
}) {
  return (
    <div className="pw-summary-card__party">
      <div className="pw-summary-card__party-label">
        <span
          className={`pw-summary-card__party-icon pw-summary-card__party-icon--${tone}`}
          aria-hidden="true"
        />
        <span>{label}</span>
      </div>
      <div className="pw-summary-card__party-details">
        {showDate && details.date ? (
          <p className="pw-summary-card__party-date">{details.date}</p>
        ) : null}
        {showName && details.name ? <p>{details.name}</p> : null}
        {showEmail && details.email ? <p>{details.email}</p> : null}
        {showPhone && details.phone ? <p>{details.phone}</p> : null}
        {showAddress && details.address ? (
          <p className="pw-summary-card__party-address">{details.address}</p>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Order summary card with consignment details and price footer.
 * Figma: summary-card (2283:10482)
 */
export function SummaryCard({
  title = "Order Summary",
  action,
  showAction = true,
  showInventory = true,
  inventoryLabel = "Supplied pallets of:",
  inventoryValue = "XSmall Pallets - QTY 3",
  showCollectionDate = true,
  showCollectionName = true,
  showCollectionEmail = true,
  showCollectionPhone = true,
  showCollectionAddress = true,
  collection = DEFAULT_COLLECTION,
  showDeliveryDate = true,
  showDeliveryName = true,
  showDeliveryEmail = true,
  showDeliveryPhone = true,
  showDeliveryAddress = true,
  delivery = DEFAULT_DELIVERY,
  showPrice = true,
  price,
  showActionPanel = false,
  actionPanel,
  className = "",
}: SummaryCardProps) {
  return (
    <article className={`pw-summary-card ${className}`.trim()}>
      <div className="pw-summary-card__body">
        <SummaryHeader
          title={title}
          action={showAction ? action ?? { variant: "edit" } : null}
        />

        <div className="pw-summary-card__consignment">
          <h3 className="pw-summary-card__section-title">Consignment</h3>
          {showInventory ? (
            <p className="pw-summary-card__inventory">
              <span className="pw-summary-card__inventory-label">{inventoryLabel}</span>
              <span className="pw-summary-card__inventory-value">{inventoryValue}</span>
            </p>
          ) : null}

          <PartyBlock
            label="Collection"
            tone="collection"
            details={collection}
            showDate={showCollectionDate}
            showName={showCollectionName}
            showEmail={showCollectionEmail}
            showPhone={showCollectionPhone}
            showAddress={showCollectionAddress}
          />
          <PartyBlock
            label="Delivery"
            tone="delivery"
            details={delivery}
            showDate={showDeliveryDate}
            showName={showDeliveryName}
            showEmail={showDeliveryEmail}
            showPhone={showDeliveryPhone}
            showAddress={showDeliveryAddress}
          />
        </div>

        <div className="pw-summary-card__spacer" aria-hidden="true" />
        <hr className="pw-summary-card__divider" />

        {showPrice ? <SummaryFooterPrice {...price} /> : null}
        {showActionPanel ? <SummaryFooterActionPanel {...actionPanel} /> : null}
      </div>
    </article>
  );
}
