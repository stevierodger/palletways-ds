import type { ReactNode } from "react";
import "./TokenSwatch.css";

export type TokenSwatchProps = {
  name: string;
  value: string;
  cssVar?: string;
  usage?: string;
};

export function TokenSwatch({ name, value, cssVar, usage }: TokenSwatchProps) {
  return (
    <div className="token-swatch">
      <div className="token-swatch__preview" style={{ background: value }} />
      <div className="token-swatch__meta">
        <p className="token-swatch__name">{name}</p>
        <p className="token-swatch__value">{value}</p>
        {cssVar && <code className="token-swatch__var">{cssVar}</code>}
        {usage && <p className="token-swatch__usage">{usage}</p>}
      </div>
    </div>
  );
}

export function TokenSwatchGrid({ children }: { children: ReactNode }) {
  return <div className="token-swatch-grid">{children}</div>;
}
