import { LogoWordmark } from "../Logo";
import { NavMenuItems, type NavMenuItemsState } from "../NavMenu";
import "./HeaderNavigation.css";

export type HeaderNavigationState = "desktop" | "desktop-cta" | "mobile";

export type HeaderNavigationProps = {
  state?: HeaderNavigationState;
  className?: string;
  onMenuClick?: () => void;
  onQuoteClick?: () => void;
};

const LOGO_SIZE = {
  desktop: "large",
  "desktop-cta": "small",
  mobile: "small",
} as const;

const NAV_STATE: Record<HeaderNavigationState, NavMenuItemsState> = {
  desktop: "expanded",
  "desktop-cta": "expanded-cta",
  mobile: "collapsed",
};

/**
 * Site header with logo and navigation.
 * Figma: header-navigation (194:2378)
 */
export function HeaderNavigation({
  state = "desktop",
  className = "",
  onMenuClick,
  onQuoteClick,
}: HeaderNavigationProps) {
  return (
    <header className={`pw-header-navigation pw-header-navigation--${state} ${className}`.trim()}>
      <div className="pw-header-navigation__inner">
        <LogoWordmark size={LOGO_SIZE[state]} />
        <NavMenuItems
          state={NAV_STATE[state]}
          onMenuClick={onMenuClick}
          onQuoteClick={onQuoteClick}
        />
      </div>
    </header>
  );
}
