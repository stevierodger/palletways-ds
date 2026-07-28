import { Tracker } from "../../../components/Tracker";
import { CodeBlock, ComponentPreview, PropTable } from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function TrackerPage() {
  return (
    <DocPage
      title="Tracker"
      description="Quote funnel step indicator. Based on Figma tracker step-token variants (2054:4703 default, 2054:4709 active)."
    >
      <DocSection title="States">
        <ComponentPreview title="Funnel progress">
          <Tracker step="01" label="Details" status="completed" />
          <Tracker step="02" label="Pallets" status="completed" />
          <Tracker step="03" label="Dates" status="active" />
          <Tracker step="04" label="Review" status="default" showConnector={false} />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Tracker } from "./components/Tracker";

<Tracker step="03" label="Dates" status="active" />`}
        />
        <PropTable
          rows={[
            { prop: "step", type: "number | string", description: "Step number or checkmark when completed" },
            { prop: "label", type: "string", description: "Step name below badge" },
            {
              prop: "status",
              type: '"default" | "active" | "completed"',
              default: "default",
              description: "Visual state",
            },
            { prop: "showConnector", type: "boolean", default: "true", description: "Horizontal line to next step" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
