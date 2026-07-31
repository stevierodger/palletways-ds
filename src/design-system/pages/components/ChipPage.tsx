import { Chip } from "../../../components/Chip";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function ChipPage() {
  return (
    <DocPage
      title="Chip"
      description="Status chip with optional leading glyph. Code Connect: `Chip` (1:98)."
    >
      <DocSection title="Tones">
        <ComponentPreview>
          <Chip label="Critical" tone="red" />
          <Chip label="Warning" tone="yellow" icon="alert" />
          <Chip label="Success" tone="green" icon="check" />
          <Chip label="Info" tone="blue" />
          <Chip label="Note" tone="purple" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Without leading icon">
        <ComponentPreview>
          <Chip label="Plain" tone="blue" showLeading={false} />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Chip } from "./components/Chip";

<Chip label="Critical" tone="red" />
<Chip label="Success" tone="green" icon="check" />`}
        />
        <PropTable
          rows={[
            { prop: "label", type: "string", description: "Chip text" },
            {
              prop: "tone",
              type: '"red" | "yellow" | "green" | "blue" | "purple"',
              default: "red",
              description: "Figma Property 1 colour",
            },
            {
              prop: "icon",
              type: '"dot" | "alert" | "check" | "cross" | "none"',
              default: "dot",
              description: "Built-in leading glyph",
            },
            { prop: "showLeading", type: "boolean", default: "true", description: "Toggle leading slot" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
