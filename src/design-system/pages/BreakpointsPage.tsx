import { breakpoints, typography } from "../../tokens";
import { DocPage, DocSection } from "../layout/DocPage";

export function BreakpointsPage() {
  return (
    <DocPage
      title="Breakpoints"
      description="Responsive breakpoints controlling the type scale and layout. Values extracted from Figma Type Scale (291:1008)."
    >
      <DocSection title="Breakpoints">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Min width</th>
              <th>CSS variable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mobile</td>
              <td>&lt; {breakpoints.tablet}px</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Tablet</td>
              <td>{breakpoints.tablet}px</td>
              <td><code>--breakpoint-tablet</code></td>
            </tr>
            <tr>
              <td>Desktop</td>
              <td>{breakpoints.desktop}px</td>
              <td><code>--breakpoint-desktop</code></td>
            </tr>
          </tbody>
        </table>
      </DocSection>

      <DocSection title="Responsive type scale">
        <p>
          Headings scale down at tablet and mobile. Body Base, Small, and Caption remain
          fixed across breakpoints.
        </p>
        <table className="doc-table doc-table--type-scale">
          <colgroup>
            <col className="col-token" />
            <col className="col-breakpoint" />
            <col className="col-breakpoint" />
            <col className="col-breakpoint" />
          </colgroup>
          <thead>
            <tr>
              <th>Token</th>
              <th className="col-breakpoint">Desktop</th>
              <th className="col-breakpoint">Tablet (≤1024px)</th>
              <th className="col-breakpoint">Mobile (≤768px)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(typography)
              .filter(([key]) => key.startsWith("h") || key === "bodyLarge")
              .map(([key, val]) => (
                <tr key={key}>
                  <td><code>{key}</code></td>
                  <td>{val.desktop}px</td>
                  <td>{"tablet" in val ? `${val.tablet}px` : "—"}</td>
                  <td>{"mobile" in val ? `${val.mobile}px` : "—"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </DocSection>
    </DocPage>
  );
}
