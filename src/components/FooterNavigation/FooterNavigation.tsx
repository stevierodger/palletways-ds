import type { ReactNode } from "react";
import logoFooter from "./assets/logo-footer-inner.svg";
import "./FooterNavigation.css";

export type FooterNavigationState = "desktop" | "mobile";

export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterNavigationProps = {
  state?: FooterNavigationState;
  tagline?: string;
  addressLines?: string[];
  email?: string;
  aboutLinks?: FooterLink[];
  serviceLinks?: FooterLink[];
  helpLinks?: FooterLink[];
  policyLinks?: FooterLink[];
  copyright?: string;
  className?: string;
};

const DEFAULT_ADDRESS = [
  "Palletways UK",
  "Fradley Distribution Park",
  "Wood End Ln",
  "Lichfield",
  "WS13 8NE",
];

const DEFAULT_ABOUT: FooterLink[] = [
  { label: "About us", href: "#" },
  { label: "Why us?", href: "#" },
];

const DEFAULT_SERVICES: FooterLink[] = [
  { label: "Send bulky items", href: "#" },
  { label: "UK pallet shipping", href: "#" },
];

const DEFAULT_HELP: FooterLink[] = [
  { label: "Preparing a pallet", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Blogs", href: "#" },
];

const DEFAULT_POLICIES: FooterLink[] = [
  { label: "Terms and conditions", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Cookie policy", href: "#" },
  { label: "Prohibited items", href: "#" },
];

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="pw-footer-navigation__links">
      {links.map((link) => (
        <li key={link.label}>
          <a className="pw-footer-navigation__link" href={link.href ?? "#"}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="pw-footer-navigation__section">
      <h3 className="pw-footer-navigation__heading">{title}</h3>
      {children}
    </section>
  );
}

function BrandBlock({
  tagline,
  addressLines,
  email,
  showLogo = true,
}: {
  tagline: string;
  addressLines: string[];
  email: string;
  showLogo?: boolean;
}) {
  return (
    <div className="pw-footer-navigation__brand">
      {showLogo ? (
        <img
          className="pw-footer-navigation__logo"
          src={logoFooter}
          alt="Palletways"
        />
      ) : null}
      <p className="pw-footer-navigation__tagline">{tagline}</p>
      <address className="pw-footer-navigation__address">
        {addressLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </address>
      <a className="pw-footer-navigation__email" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}

function Copyright({ text }: { text: string }) {
  return (
    <p className="pw-footer-navigation__copyright">
      <span aria-hidden="true">©</span>
      <span>{text.replace(/^©\s*/, "")}</span>
    </p>
  );
}

/**
 * Site footer with brand block and navigation columns.
 * Figma: footer-navigation (288:1603)
 */
export function FooterNavigation({
  state = "desktop",
  tagline = "Europe’s most trusted pallet network",
  addressLines = DEFAULT_ADDRESS,
  email = "ukonlinesupport@palletways.com",
  aboutLinks = DEFAULT_ABOUT,
  serviceLinks = DEFAULT_SERVICES,
  helpLinks = DEFAULT_HELP,
  policyLinks = DEFAULT_POLICIES,
  copyright = "Copyright Palletways 2026",
  className = "",
}: FooterNavigationProps) {
  const isMobile = state === "mobile";

  return (
    <footer
      className={`pw-footer-navigation pw-footer-navigation--${state} ${className}`.trim()}
    >
      <div className="pw-footer-navigation__accent" aria-hidden="true" />
      <div className="pw-footer-navigation__body">
        <div className="pw-footer-navigation__grid">
          {isMobile ? (
            <>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--nav">
                <FooterSection title="About us">
                  <FooterLinkList links={aboutLinks} />
                </FooterSection>
                <FooterSection title="Services">
                  <FooterLinkList links={serviceLinks} />
                </FooterSection>
              </div>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--nav">
                <FooterSection title="Help Centre">
                  <FooterLinkList links={helpLinks} />
                </FooterSection>
              </div>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--nav">
                <FooterSection title="Policies">
                  <FooterLinkList links={policyLinks} />
                </FooterSection>
              </div>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--brand">
                <BrandBlock
                  tagline={tagline}
                  addressLines={addressLines}
                  email={email}
                />
                <Copyright text={copyright} />
              </div>
            </>
          ) : (
            <>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--brand">
                <BrandBlock
                  tagline={tagline}
                  addressLines={addressLines}
                  email={email}
                />
              </div>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--about">
                <FooterSection title="About us">
                  <FooterLinkList links={aboutLinks} />
                </FooterSection>
                <FooterSection title="Services">
                  <FooterLinkList links={serviceLinks} />
                </FooterSection>
              </div>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--help">
                <FooterSection title="Help Centre">
                  <FooterLinkList links={helpLinks} />
                </FooterSection>
              </div>
              <div className="pw-footer-navigation__cell pw-footer-navigation__cell--policies">
                <FooterSection title="Policies">
                  <FooterLinkList links={policyLinks} />
                </FooterSection>
                <Copyright text={copyright} />
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
