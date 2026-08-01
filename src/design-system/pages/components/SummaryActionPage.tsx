import { SummaryAction } from "../../../components/SummaryAction";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function SummaryActionPage() {
  return (
    <DocPage
      title="SummaryAction"
      description="Compact summary row action. Code Connect: `summary-action` (2283:10519)."
    >
      <DocSection title="Variants">
        <ComponentPreview>
          <SummaryAction variant="edit" />
          <SummaryAction variant="order-again" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { SummaryAction } from "./components/SummaryAction";

<SummaryAction variant="edit" />
<SummaryAction variant="order-again" />`}
        />
        <PropTable
          rows={[
            {
              prop: "variant",
              type: '"edit" | "order-again"',
              default: "edit",
              description: "Label and trailing icon",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
