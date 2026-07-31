import { Badge } from "../../../components/Badge";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function BadgePage() {
  return (
    <DocPage
      title="Badge"
      description="Uppercase category badge. Code Connect: `Badge` (30:41)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <Badge label="Funnel" />
          <Badge label="Quote" />
          <Badge label="Delivery" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Badge } from "./components/Badge";

<Badge label="Funnel" />`}
        />
        <PropTable
          rows={[
            { prop: "label", type: "string", description: "Badge text (rendered uppercase)" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
