import visa from "./assets/visa.svg";
import mastercard from "./assets/mastercard.svg";
import amex from "./assets/amex.svg";
import discover from "./assets/discover.svg";
import "./AcceptedCards.css";

const BRANDS = [
  { id: "visa", src: visa, alt: "Visa", width: 36, height: 21 },
  { id: "mastercard", src: mastercard, alt: "Mastercard", width: 21, height: 13 },
  { id: "amex", src: amex, alt: "American Express", width: 42, height: 21 },
  { id: "discover", src: discover, alt: "Discover", width: 33, height: 21 },
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
    <div className={`pw-accepted-cards ${className}`.trim()} aria-label="Accepted cards">
      {BRANDS.map((brand) => (
        <img
          key={brand.id}
          className={`pw-accepted-cards__logo pw-accepted-cards__logo--${brand.id}`}
          src={brand.src}
          alt={brand.alt}
          width={brand.width}
          height={brand.height}
        />
      ))}
    </div>
  );
}
