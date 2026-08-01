import { SummaryFooterPrice } from "../../../components/SummaryFooterPrice";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function SummaryFooterPricePage() {
  return (
    <DocPage
      title="SummaryFooterPrice"
      description="Order summary price breakdown. Code Connect: `summary-footer/price` (2287:10609)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <SummaryFooterPrice />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { SummaryFooterPrice } from "./components/SummaryFooterPrice";

<SummaryFooterPrice subtotal={132.14} vat={26.42} total={158.56} />`}
        />
        <PropTable
          rows={[
            { prop: "subtotal / vat / total", type: "number | string", description: "Price values" },
            { prop: "currency", type: "string", default: "£", description: "Currency symbol prefix" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
