import type { ReactNode } from "react";
import "./DocPage.css";

export type DocPageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function DocPage({ title, description, children }: DocPageProps) {
  return (
    <article className="doc-page">
      <header className="doc-page__header">
        <h1 className="doc-page__title pw-motion-1">{title}</h1>
        {description && <p className="doc-page__description">{description}</p>}
        <div className="doc-page__accent" aria-hidden="true" />
      </header>
      <div className="doc-page__content">{children}</div>
    </article>
  );
}

export function DocSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="doc-section">
      <h2 className="doc-section__title pw-motion-2">{title}</h2>
      {children}
    </section>
  );
}
