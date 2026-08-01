import { Button } from "../Button";
import { CaretDown, ChevronRight, Hamburger, User } from "../Icon";
import ukFlag from "./assets/uk-flag.svg";
import "./NavMenuItems.css";

export type NavMenuItemsState = "collapsed" | "expanded" | "expanded-cta";

export type NavMenuItemsProps = {
  state?: NavMenuItemsState;
  className?: string;
  onMenuClick?: () => void;
  onQuoteClick?: () => void;
};

/**
 * Primary navigation menu items.
 * Figma: nav.menu-items (288:1034)
 */
export function NavMenuItems({
  state = "expanded",
  className = "",
  onMenuClick,
  onQuoteClick,
}: NavMenuItemsProps) {
  if (state === "collapsed") {
    return (
      <nav className={`pw-nav-menu-items pw-nav-menu-items--collapsed ${className}`.trim()}>
        <button
          type="button"
          className="pw-nav-menu-items__icon-btn"
          aria-label="Open menu"
          onClick={onMenuClick}
        >
          <Hamburger size={24} aria-hidden="true" />
        </button>
      </nav>
    );
  }

  const showCta = state === "expanded-cta";

  return (
    <nav className={`pw-nav-menu-items pw-nav-menu-items--${state} ${className}`.trim()}>
      <button type="button" className="pw-nav-menu-items__item">
        About Us
        <CaretDown size={16} aria-hidden="true" />
      </button>
      <button type="button" className="pw-nav-menu-items__item">
        Services
        <CaretDown size={16} aria-hidden="true" />
      </button>
      <button type="button" className="pw-nav-menu-items__item">
        Log in
        <User size={24} aria-hidden="true" />
      </button>
      <button type="button" className="pw-nav-menu-items__item pw-nav-menu-items__locale">
        <img
          className="pw-nav-menu-items__flag"
          src={ukFlag}
          alt=""
          width={25}
          height={15}
          aria-hidden="true"
        />
        UK
        <CaretDown size={16} aria-hidden="true" />
      </button>
      {showCta ? (
        <Button
          variant="primary"
          size="sm"
          trailingIcon={<ChevronRight size={16} aria-hidden="true" />}
          onClick={onQuoteClick}
        >
          Get a quote
        </Button>
      ) : null}
    </nav>
  );
}
