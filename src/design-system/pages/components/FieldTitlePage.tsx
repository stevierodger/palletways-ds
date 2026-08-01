import { FieldTitle } from "../../../components/FieldTitle";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function FieldTitlePage() {
  return (
    <DocPage
      title="FieldTitle"
      description="Form field title line. Code Connect: `field-title` (2125:12386)."
    >
      <DocSection title="Tones">
        <ComponentPreview>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <FieldTitle tone="active" />
            <FieldTitle tone="secondary" title="Optional label" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { FieldTitle } from "./components/FieldTitle";

<FieldTitle tone="active" title="Full name*" />`}
        />
        <PropTable
          rows={[
            {
              prop: "tone",
              type: '"active" | "secondary"',
              description: "Emphasis",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
