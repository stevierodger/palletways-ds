import { radius } from "../../tokens";
import { DocPage, DocSection } from "../layout/DocPage";

export function RadiusPage() {
  return (
    <DocPage
      title="Border radius"
      description="Corner tokens from Figma variables — applied to buttons, inputs, cards, and pills."
    >
      <DocSection title="Tokens">
        <div className="doc-grid-2">
          {Object.entries(radius).map(([name, value]) => (
            <div key={name} className="radius-demo">
              <div
                className="radius-demo__shape"
                style={{
                  borderRadius: value,
                  background: "var(--color-brand-green-50)",
                  border: "1px solid var(--color-border-natural)",
                }}
              />
              <p className="radius-demo__name">{name}</p>
              <code>{value}</code>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Mapping">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Used on</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--radius-xs</code></td>
              <td>4px</td>
              <td>Buttons (focus wrapper), small UI</td>
            </tr>
            <tr>
              <td><code>--radius-md</code></td>
              <td>12px</td>
              <td>Inputs, cards</td>
            </tr>
            <tr>
              <td><code>--radius-tag</code></td>
              <td>6px</td>
              <td>Tags, badges</td>
            </tr>
            <tr>
              <td><code>--radius-pill</code></td>
              <td>999px</td>
              <td>Tracker steps</td>
            </tr>
          </tbody>
        </table>
      </DocSection>
    </DocPage>
  );
}
