import { useState } from "react";
import { Toggle } from "../../../components/Toggle";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function TogglePage() {
  const [value, setValue] = useState("Delivery");

  return (
    <DocPage
      title="Toggle"
      description="Segmented two-option control. Figma `Property 1=primary` selects option 1; `secondary` selects option 2. Code Connect: `input.toggle` (2002:1773)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <Toggle />
          <Toggle option1="Yes" option2="No" defaultValue="No" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Controlled">
        <ComponentPreview>
          <Toggle
            option1="Collection"
            option2="Delivery"
            value={value}
            onValueChange={setValue}
            aria-label="Shipment type"
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Disabled">
        <ComponentPreview>
          <Toggle option1="A" option2="B" disabled />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Toggle } from "./components/Toggle";

<Toggle option1="Collection" option2="Delivery" defaultValue="Collection" />`}
        />
        <PropTable
          rows={[
            { prop: "option1", type: "string", default: "Option 1", description: "First segment label" },
            { prop: "option2", type: "string", default: "Option 2", description: "Second segment label" },
            { prop: "value", type: "string", description: "Controlled selected value (must match an option)" },
            { prop: "defaultValue", type: "string", description: "Uncontrolled initial value" },
            { prop: "onValueChange", type: "(value: string) => void", description: "Fires when selection changes" },
            { prop: "disabled", type: "boolean", description: "Disables both options" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
