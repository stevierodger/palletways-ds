import { DocPage, DocSection } from "../layout/DocPage";

export function OverviewPage() {
  return (
    <DocPage
      title="Palletways Design System"
      description="A shared language of tokens and components for building consistent Palletways experiences — from quote funnels to marketing surfaces."
    >
      <DocSection title="What this is">
        <p>
          This site documents the foundations and components extracted from the{" "}
          <a
            href="https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=80-154"
            target="_blank"
            rel="noreferrer"
          >
            Palletways v1.2 Figma file
          </a>
          . Use it as the single reference for design–dev handoffs.
        </p>
      </DocSection>

      <DocSection title="How to use">
        <ul>
          <li>
            <strong>Foundations</strong> — import tokens from{" "}
            <code>src/styles/tokens.css</code> or <code>src/tokens/index.ts</code>
          </li>
          <li>
            <strong>Components</strong> — import from <code>src/components/</code> and
            compose with documented props
          </li>
          <li>
            <strong>Figma parity</strong> — each component page lists the matching Figma
            node and usage rules
          </li>
        </ul>
        <div className="doc-callout">
          PolySans Trial is the brand typeface in Figma. Geist Sans is the development
          fallback until licensed font files are added under <code>public/fonts/</code>.
        </div>
      </DocSection>

      <DocSection title="Foundations at a glance">
        <p>
          Token values live in <code>src/styles/tokens.css</code> and{" "}
          <code>src/tokens/index.ts</code>. Jump to a foundation page for full tables and live
          previews.
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Foundation</th>
              <th>What's included</th>
              <th>Page</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Color</td>
              <td>
                Primitive ramps (slate, brand blue/green), brand, text, surface, and border tokens
              </td>
              <td>
                <a href="#/colors">Color</a>
              </td>
            </tr>
            <tr>
              <td>Typography</td>
              <td>
                Responsive type scale, display H1, font families, and font weights (300, 400, 500,
                700)
              </td>
              <td>
                <a href="#/typography">Typography</a>
              </td>
            </tr>
            <tr>
              <td>Spacing</td>
              <td>
                Base scale (<code>--spacing-0</code> … <code>--spacing-20</code>), component padding
                (<code>--spacing-comp-*</code>), and section spacing (
                <code>--spacing-section-sm</code>, <code>--spacing-section-md</code>,{" "}
                <code>--spacing-section-lg</code>)
              </td>
              <td>
                <a href="#/spacing">Spacing</a>
              </td>
            </tr>
            <tr>
              <td>Border radius</td>
              <td>
                <code>--radius-xs</code> through <code>--radius-pill</code>, plus component-specific
                radii
              </td>
              <td>
                <a href="#/radius">Border radius</a>
              </td>
            </tr>
            <tr>
              <td>Shadows</td>
              <td>
                Elevation stack <code>--shadow-elevation-0</code> …{" "}
                <code>--shadow-elevation-5</code>
              </td>
              <td>
                <a href="#/shadows">Shadows</a>
              </td>
            </tr>
            <tr>
              <td>Breakpoints</td>
              <td>Desktop, tablet (≤1024px), and mobile (≤768px) layout widths</td>
              <td>
                <a href="#/breakpoints">Breakpoints</a>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: "16px" }}>
          <strong>Section spacing</strong> — semantic tokens from Figma Semantics (
          <code>spacing/section-*</code>) for vertical rhythm between page sections and marketing
          blocks. See the <a href="#/spacing">Spacing</a> page for the scale, Figma aliases, and a
          live padding demo.
        </p>
      </DocSection>

      <DocSection title="Structure">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Foundations</td>
              <td>
                Color, typography (incl. font weights), spacing (base, component, section), radius,
                shadows, breakpoints
              </td>
            </tr>
            <tr>
              <td>Components</td>
              <td>Button, Input, Tag, Tracker</td>
            </tr>
          </tbody>
        </table>
      </DocSection>
    </DocPage>
  );
}
