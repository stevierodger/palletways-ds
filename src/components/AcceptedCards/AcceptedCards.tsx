import visa from "./assets/visa.svg";
import mastercard from "./assets/mastercard.svg";
import amex from "./assets/amex.svg";
import discover from "./assets/discover.svg";
import "./AcceptedCards.css";

const BRANDS = [
  { id: "visa", src: visa, alt: "Visa" },
  { id: "mastercard", src: mastercard, alt: "Mastercard" },
  { id: "amex", src: amex, alt: "American Express" },
  { id: "discover", src: discover, alt: "Discover" },
] as const;

export type AcceptedCardsProps = {
  className?: string;
};

/**
 * Accepted payment card brand row.
 * Figma: info.pallet-selection/Accepted cards (2135:10505)
 */
export function AcceptedCards({ className = "" }: AcceptedCardsProps) {
  return (
    <div className={`pw-accepted-cards ${className}`.trim()} role="list" aria-label="Accepted cards">
      {BRANDS.map((brand) => (
        <span key={brand.id} className="pw-accepted-cards__item" role="listitem">
          <img src={brand.src} alt={brand.alt} className="pw-accepted-cards__logo" />
        </span>
      ))}
    </div>
  );
}
