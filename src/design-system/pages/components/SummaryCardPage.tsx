import { SummaryCard } from "../../../components/SummaryCard";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function SummaryCardPage() {
  return (
    <DocPage
      title="SummaryCard"
      description="Order summary with consignment and price. Code Connect: `summary-card` (2283:10482)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <SummaryCard />
        </ComponentPreview>
      </DocSection>

      <DocSection title="With action panel">
        <ComponentPreview>
          <SummaryCard showActionPanel />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { SummaryCard } from "./components/SummaryCard";

<SummaryCard />
<SummaryCard showActionPanel />`}
        />
        <PropTable
          rows={[
            { prop: "showInventory / inventoryValue", type: "boolean / string", description: "Consignment inventory line" },
            { prop: "collection / delivery", type: "SummaryPartyDetails", description: "Party contact blocks" },
            { prop: "showPrice / price", type: "boolean / SummaryFooterPriceProps", description: "Footer price rows" },
            { prop: "showActionPanel", type: "boolean", default: "false", description: "Show terms + login CTAs" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}