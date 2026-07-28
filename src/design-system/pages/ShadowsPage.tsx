import { shadows } from "../../tokens";
import { DocPage, DocSection } from "../layout/DocPage";

const elevationUsage = [
  { level: 0, name: "None", usage: "Flat surfaces, bordered only", example: "Elevation 0 — border only" },
  { level: 1, name: "Subtle", usage: "Minimal lift", example: "Subtle hover states" },
  { level: 2, name: "Default", usage: "Cards & containers", example: "Content cards, selection cards" },
  { level: 3, name: "Medium", usage: "Dropdowns & popovers", example: "Calendar, nav menus" },
  { level: 4, name: "Elevated", usage: "Modals & dialogs", example: "Overlay panels" },
  { level: 5, name: "Floating", usage: "Floating actions", example: "FAB, sticky CTAs" },
];

export function ShadowsPage() {
  return (
    <DocPage
      title="Shadows & elevation"
      description="Primary-based elevation system. All shadow colors use variable opacity of Primary (#0F172A)."
    >
      <DocSection title="Elevation levels">
        <div className="doc-grid-2">
          {Object.entries(shadows).map(([key, value], i) => (
            <div key={key} className="elevation-demo">
              <div
                className="elevation-demo__card"
                style={{
                  boxShadow: value === "none" ? undefined : value,
                  border: value === "none" ? "1px solid var(--color-border-neutral)" : "none",
                }}
              />
              <p className="elevation-demo__title">Elevation {i} — {elevationUsage[i]?.name}</p>
              <code className="elevation-demo__value">{value === "none" ? "1px border only" : value}</code>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Usage">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>CSS variable</th>
              <th>When to use</th>
            </tr>
          </thead>
          <tbody>
            {elevationUsage.map((row) => (
              <tr key={row.level}>
                <td>{row.level}</td>
                <td>
                  <code>{`--shadow-elevation-${row.level}`}</code>
                </td>
                <td>{row.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DocSection>
    </DocPage>
  );
}
