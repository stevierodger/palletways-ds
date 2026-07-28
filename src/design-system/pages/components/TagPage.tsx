import { Tag } from "../../../components/Tag";
import { CodeBlock, ComponentPreview, PropTable } from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function TagPage() {
  return (
    <DocPage
      title="Tag"
      description="Uppercase semantic tags for categorisation and status badges."
    >
      <DocSection title="Tones">
        <ComponentPreview>
          <Tag label="Adventure" tone="adventure" />
          <Tag label="Nature" tone="nature" />
          <Tag label="Hiking" tone="hiking" />
          <Tag label="Draft" tone="neutral" />
          <Tag label="Elevation 2" tone="brand" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Tag } from "./components/Tag";

<Tag label="ADVENTURE" tone="adventure" />`}
        />
        <PropTable
          rows={[
            { prop: "label", type: "string", description: "Tag text (uppercase in design)" },
            {
              prop: "tone",
              type: '"adventure" | "nature" | "hiking" | "neutral" | "brand"',
              default: "neutral",
              description: "Color pairing",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
