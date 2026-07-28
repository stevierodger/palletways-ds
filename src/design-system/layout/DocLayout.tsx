import type { ReactNode } from "react";
import "./DocLayout.css";

export type NavItem = {
  id: string;
  label: string;
  children?: NavItem[];
};

export type DocLayoutProps = {
  nav: NavItem[];
  currentId: string;
  onNavigate: (id: string) => void;
  children: ReactNode;
};

function NavGroup({
  item,
  currentId,
  onNavigate,
  depth = 0,
}: {
  item: NavItem;
  currentId: string;
  onNavigate: (id: string) => void;
  depth?: number;
}) {
  const isActive = currentId === item.id;
  const hasActiveChild = item.children?.some(
    (child) => child.id === currentId || child.children?.some((c) => c.id === currentId),
  );

  return (
    <li className="doc-nav__group">
      <button
        type="button"
        className={`doc-nav__link ${isActive ? "doc-nav__link--active" : ""} ${hasActiveChild ? "doc-nav__link--ancestor" : ""}`}
        style={{ paddingLeft: `${12 + depth * 12}px` }}
        onClick={() => onNavigate(item.id)}
      >
        {item.label}
      </button>
      {item.children && item.children.length > 0 && (
        <ul className="doc-nav__sublist">
          {item.children.map((child) => (
            <NavGroup
              key={child.id}
              item={child}
              currentId={currentId}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function DocLayout({ nav, currentId, onNavigate, children }: DocLayoutProps) {
  return (
    <div className="doc-layout">
      <header className="doc-header">
        <div className="doc-header__brand">
          <span className="doc-header__logo">Palletways</span>
          <span className="doc-header__badge">Design System</span>
        </div>
        <span className="doc-header__version">v1.2</span>
      </header>

      <div className="doc-shell">
        <aside className="doc-sidebar">
          <nav className="doc-nav" aria-label="Design system">
            <p className="doc-nav__heading">Documentation</p>
            <ul className="doc-nav__list">
              {nav.map((item) => (
                <NavGroup
                  key={item.id}
                  item={item}
                  currentId={currentId}
                  onNavigate={onNavigate}
                />
              ))}
            </ul>
          </nav>
        </aside>

        <main className="doc-main">{children}</main>
      </div>
    </div>
  );
}
