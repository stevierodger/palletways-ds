import type { ReactNode } from "react";
import "./Breadcrumbs.css";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
  "aria-label"?: string;
};

/**
 * Text breadcrumbs. Last item (or `current`) uses Median weight.
 * Figma: Breadcrumbs (194:2939)
 */
export function Breadcrumbs({
  items,
  separator = "/",
  className = "",
  "aria-label": ariaLabel = "Breadcrumb",
}: BreadcrumbsProps) {
  return (
    <nav className={`pw-breadcrumbs ${className}`.trim()} aria-label={ariaLabel}>
      <ol className="pw-breadcrumbs__list">
        {items.map((item, index) => {
          const isCurrent =
            item.current ?? index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="pw-breadcrumbs__item">
              {index > 0 ? (
                <span className="pw-breadcrumbs__sep" aria-hidden="true">
                  {separator}
                </span>
              ) : null}
              {item.href && !isCurrent ? (
                <a className="pw-breadcrumbs__link" href={item.href}>
                  {item.label}
                </a>
              ) : (
                <span
                  className={`pw-breadcrumbs__text ${isCurrent ? "pw-breadcrumbs__text--current" : ""}`}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
