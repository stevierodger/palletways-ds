import "./SpacingScale.css";

export type SpacingItem = {
  name: string;
  value: string;
  cssVar: string;
  rem?: string;
  primitive?: string;
  figmaVar?: string;
};

export function SpacingScale({ items }: { items: SpacingItem[] }) {
  return (
    <div className="spacing-scale">
      {items.map((item) => (
        <div key={item.name} className="spacing-scale__row">
          <div className="spacing-scale__label">
            <span className="spacing-scale__name">{item.name}</span>
            <code className="spacing-scale__var">{item.cssVar}</code>
            <span className="spacing-scale__value">
              {item.value}
              {item.rem ? ` · ${item.rem}` : ""}
            </span>
            {item.figmaVar ? (
              <span className="spacing-scale__meta">Figma: {item.figmaVar}</span>
            ) : null}
            {item.primitive ? (
              <span className="spacing-scale__meta">→ {item.primitive}</span>
            ) : null}
          </div>
          <div className="spacing-scale__bar-wrap">
            <div
              className="spacing-scale__bar"
              style={{ width: item.value }}
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
