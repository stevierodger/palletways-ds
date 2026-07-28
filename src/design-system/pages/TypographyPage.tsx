import { fontWeights, typography } from "../../tokens";
import { DocPage, DocSection } from "../layout/DocPage";

const displayHeading1 = typography.displayHeading1;

const samples: Array<{
  key: keyof typeof typography;
  label: string;
  sample: string;
  style: "display" | "heading" | "body" | "caption";
}> = [
  {
    key: "displayHeading1",
    label: "Display Heading 1",
    sample: "Europe's most trusted pallet network",
    style: "display",
  },
  { key: "h1", label: "H1 — Heading 1", sample: "Send with Europe's most trusted pallet specialists", style: "heading" },
  { key: "h2", label: "H2 — Heading 2", sample: "Choose collection date", style: "heading" },
  { key: "h3", label: "H3 — Heading 3", sample: "Order Summary", style: "heading" },
  { key: "h4", label: "H4 — Heading 4", sample: "Select best option", style: "heading" },
  { key: "h5", label: "H5 — Heading 5", sample: "Consignment details", style: "heading" },
  { key: "h6", label: "H6 — Heading 6", sample: "Saturday surcharge", style: "heading" },
  { key: "bodyLarge", label: "Body Large", sample: "Experience nature at its finest with our curated retreat packages.", style: "body" },
  { key: "bodyBase", label: "Body Base", sample: "Get a quote for your pallet delivery across Europe.", style: "body" },
  { key: "bodySmall", label: "Body Small", sample: "*Saturdays incur an extra charge", style: "body" },
  { key: "caption", label: "Caption / Button SM", sample: "Get a quote", style: "caption" },
];

export function TypographyPage() {
  return (
    <DocPage
      title="Typography"
      description="PolySans Trial (Median / Neutral / Slim) with Geist Sans fallback until font files are added. Responsive sizes follow Desktop / Tablet / Mobile breakpoints from Figma."
    >
      <DocSection title="Display Heading 1">
        <p>
          Marketing and hero headlines — use sparingly. One step above standard H1 on the type
          scale. Figma defines a <code>Display H1</code> text style (PolySans Median); responsive
          sizes are derived at 1.25× H1 because they are not yet on the Type Scale frame (291:1008).
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Desktop</th>
              <th>Tablet</th>
              <th>Mobile</th>
              <th>Weight</th>
              <th>Line height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>displayHeading1</code>
              </td>
              <td>{displayHeading1.desktop}px</td>
              <td>{displayHeading1.tablet}px</td>
              <td>{displayHeading1.mobile}px</td>
              <td>{displayHeading1.weight}</td>
              <td>{displayHeading1.line}</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: "24px" }}>
          <p
            style={{
              margin: "0 0 4px",
              fontFamily: "var(--font-geist)",
              fontSize: "12px",
              color: "var(--color-text-secondary)",
            }}
          >
            Display Heading 1 · {displayHeading1.desktop} / {displayHeading1.tablet} /{" "}
            {displayHeading1.mobile}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-family-display)",
              fontSize: `${displayHeading1.desktop}px`,
              fontWeight: displayHeading1.weight,
              lineHeight: displayHeading1.line,
              color: "var(--color-text-primary)",
            }}
          >
            Europe's most trusted pallet network
          </p>
        </div>
        <p style={{ marginTop: "16px" }}>
          CSS: <code>--text-display-1-size</code>, <code>--text-display-1-line</code>
        </p>
      </DocSection>

      <DocSection title="Responsive type scale">
        <table className="doc-table doc-table--type-scale">
          <colgroup>
            <col className="col-token" />
            <col className="col-breakpoint" />
            <col className="col-breakpoint" />
            <col className="col-breakpoint" />
            <col className="col-weight" />
          </colgroup>
          <thead>
            <tr>
              <th>Token</th>
              <th className="col-breakpoint">Desktop</th>
              <th className="col-breakpoint">Tablet (≤1024px)</th>
              <th className="col-breakpoint">Mobile (≤768px)</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(typography).map(([key, val]) => (
              <tr key={key}>
                <td>
                  <code>{key}</code>
                </td>
                <td>{val.desktop}px</td>
                <td>{"tablet" in val ? `${val.tablet}px` : "—"}</td>
                <td>{"mobile" in val ? `${val.mobile}px` : "—"}</td>
                <td>{val.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DocSection>

      <DocSection title="Font weights">
        <p>
          PolySans Trial ships three physical cuts; CSS <code>font-weight</code> selects which file
          loads. Figma type scale (291:1008) assigns <strong>700</strong> to H1/H2,{" "}
          <strong>600</strong> to H3–H6, <strong>400</strong> to body styles, and{" "}
          <strong>300</strong> to tags and captions in components. Weight <strong>500</strong> is
          not used in Figma text styles and has no PolySans cut.
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Weight</th>
              <th>PolySans cut</th>
              <th>CSS variable</th>
              <th>Typography roles</th>
              <th>Figma</th>
            </tr>
          </thead>
          <tbody>
            {fontWeights.map(({ weight, cut, cssVar, roles, inFigma }) => (
              <tr key={weight}>
                <td>
                  <code>{weight}</code>
                </td>
                <td>{cut ?? "—"}</td>
                <td>
                  <code>{cssVar}</code>
                </td>
                <td>{roles.length > 0 ? roles.join(", ") : "—"}</td>
                <td>{inFigma ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {fontWeights.map(({ weight, cut, sample, note }) => (
          <div key={weight} style={{ marginTop: "24px" }}>
            <p
              style={{
                margin: "0 0 4px",
                fontFamily: "var(--font-geist)",
                fontSize: "12px",
                color: "var(--color-text-secondary)",
              }}
            >
              {weight}
              {cut ? ` · PolySans ${cut}` : " · no PolySans cut"}
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-family-brand)",
                fontSize: weight >= 700 ? "28px" : weight >= 500 ? "18px" : "16px",
                fontWeight: weight,
                lineHeight: 1.3,
                color: "var(--color-text-primary)",
              }}
            >
              {sample}
            </p>
            {note ? (
              <p
                style={{
                  margin: "8px 0 0",
                  fontFamily: "var(--font-geist)",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                }}
              >
                {note}
              </p>
            ) : null}
          </div>
        ))}
      </DocSection>

      <DocSection title="Live samples">
        {samples.map(({ key, label, sample, style }) => {
          const t = typography[key];
          const fontSize = `${t.desktop}px`;
          const fontWeight = t.weight;
          const fontFamily =
            style === "caption"
              ? "var(--font-family-ui)"
              : style === "heading" || style === "display"
                ? "var(--font-family-display)"
                : "var(--font-family-sans)";
          const resolvedWeight =
            style === "caption" ? 300 : fontWeight;

          return (
            <div key={key} style={{ marginBottom: "24px" }}>
              <p
                style={{
                  margin: "0 0 4px",
                  fontFamily: "var(--font-geist)",
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                }}
              >
                {label} · {t.desktop} / {"tablet" in t ? t.tablet : "—"} /{" "}
                {"mobile" in t ? t.mobile : "—"}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily,
                  fontSize,
                  fontWeight: resolvedWeight,
                  lineHeight:
                    "line" in t && t.line > 3 ? `${t.line}px` : "line" in t ? t.line : 1.2,
                  color: "var(--color-text-primary)",
                }}
              >
                {sample}
              </p>
            </div>
          );
        })}
      </DocSection>

      <DocSection title="Font families">
        <p>
          Figma uses <strong>PolySans Trial</strong> with three cuts. In CSS they share one
          family name; <code>font-weight</code> selects the cut (see{" "}
          <code>src/styles/fonts.css</code>).
        </p>
        <table className="doc-table">
          <thead>
            <tr>
              <th>CSS variable</th>
              <th>Family / cut</th>
              <th>Weight</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>--font-family-display</code>
              </td>
              <td>PolySans Trial → Median</td>
              <td>600–700</td>
              <td>Headings, tracker, buttons</td>
            </tr>
            <tr>
              <td>
                <code>--font-family-sans</code>
              </td>
              <td>PolySans Trial → Neutral</td>
              <td>400</td>
              <td>Body copy, inputs</td>
            </tr>
            <tr>
              <td>
                <code>--font-family-ui</code>
              </td>
              <td>PolySans Trial → Slim</td>
              <td>300</td>
              <td>Tags, captions</td>
            </tr>
            <tr>
              <td>
                <code>--font-geist</code>
              </td>
              <td>Geist Sans → system-ui</td>
              <td>—</td>
              <td>Doc site chrome until PolySans files are added</td>
            </tr>
            <tr>
              <td>
                <code>--font-family-mono</code>
              </td>
              <td>Geist Mono → ui-monospace</td>
              <td>—</td>
              <td>Code snippets, token values</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: "16px" }}>
          Legacy aliases <code>--font-polysans</code> and <code>--font-mono</code> map to{" "}
          <code>--font-family-brand</code> and <code>--font-family-mono</code>.
        </p>
      </DocSection>

      <DocSection title="Adding font files">
        <p>
          Drop licensed PolySans Trial files into <code>public/fonts/</code>. Required names:
        </p>
        <ul>
          <li>
            <code>PolySansTrial-Median.woff2</code> (headings)
          </li>
          <li>
            <code>PolySansTrial-Neutral.woff2</code> (body)
          </li>
          <li>
            <code>PolySansTrial-Slim.woff2</code> (tags / captions)
          </li>
        </ul>
        <p>
          OTF/TTF work if renamed to match; woff2 is recommended. Full steps:{" "}
          <code>public/fonts/README.md</code> and the <strong>Fonts</strong> section in the
          project README.
        </p>
        <p>
          Verify in DevTools → Network (font requests return 200) and on this page (samples
          render as PolySans Trial, not Geist Sans).
        </p>
      </DocSection>
    </DocPage>
  );
}
