import { SummaryHeader } from "../../../components/SummaryHeader";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function SummaryHeaderPage() {
  return (
    <DocPage
      title="SummaryHeader"
      description="Order summary section header. Code Connect: `summary-header` (2283:10525)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <div style={{ width: "100%", maxWidth: 480 }}>
            <SummaryHeader />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Order again action">
        <ComponentPreview>
          <div style={{ width: "100%", maxWidth: 480 }}>
            <SummaryHeader action={{ variant: "order-again" }} />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { SummaryHeader } from "./components/SummaryHeader";

<SummaryHeader />
<SummaryHeader action={{ variant: "order-again" }} />`}
        />
        <PropTable
          rows={[
            {
              prop: "title",
              type: "string",
              default: "Order Summary",
              description: "Section heading",
            },
            {
              prop: "action",
              type: "SummaryActionProps",
              default: "{ variant: 'edit' }",
              description: "Trailing action props",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
