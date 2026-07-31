import { SelectionCard } from "../../../components/SelectionCard";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function SelectionCardPage() {
  return (
    <DocPage
      title="SelectionCard"
      description="Economy / premium shipping option card. Code Connect: `selection-cards` (2069:5436)."
    >
      <DocSection title="Plans">
        <ComponentPreview>
          <SelectionCard plan="economy" />
          <SelectionCard plan="premium" />
          <SelectionCard plan="economy" selected />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Empty">
        <ComponentPreview>
          <SelectionCard empty />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { SelectionCard } from "./components/SelectionCard";

<SelectionCard plan="economy" price="£124.45" />
<SelectionCard plan="premium" selected />
<SelectionCard empty />`}
        />
        <PropTable
          rows={[
            { prop: "plan", type: '"economy" | "premium"', default: "economy", description: "Service tier" },
            { prop: "selected", type: "boolean", description: "Selected border treatment" },
            { prop: "empty", type: "boolean", description: "Placeholder empty state" },
            { prop: "startDate / endDate / endTime / price", type: "string", description: "Content slots" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
