import { CardNumberBadge } from "../../../components/CardNumberBadge";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function CardNumberBadgePage() {
  return (
    <DocPage
      title="CardNumberBadge"
      description="Link payment mark. Selected state shows network + last four. Code Connect: `card-number-badge` (2132:10067)."
    >
      <DocSection title="States">
        <ComponentPreview>
          <CardNumberBadge />
          <CardNumberBadge selected number="3133" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { CardNumberBadge } from "./components/CardNumberBadge";

<CardNumberBadge />
<CardNumberBadge selected number="3133" />`}
        />
        <PropTable
          rows={[
            { prop: "selected", type: "boolean", default: "false", description: "Show network + digits" },
            { prop: "number", type: "string", default: "3133", description: "Card last-four" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
