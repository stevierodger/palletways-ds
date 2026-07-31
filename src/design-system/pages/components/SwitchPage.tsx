import { useState } from "react";
import { Switch } from "../../../components/Switch";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function SwitchPage() {
  const [on, setOn] = useState(true);

  return (
    <DocPage
      title="Switch"
      description="On/off pill switch. Figma keeps the same track colour for both states. Code Connect: `input.switch` (2002:1749)."
    >
      <DocSection title="States">
        <ComponentPreview>
          <Switch aria-label="Notifications off" />
          <Switch aria-label="Notifications on" defaultChecked />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Controlled">
        <ComponentPreview>
          <Switch
            aria-label="Enable alerts"
            checked={on}
            onCheckedChange={setOn}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Disabled">
        <ComponentPreview>
          <Switch aria-label="Disabled off" disabled />
          <Switch aria-label="Disabled on" defaultChecked disabled />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Switch } from "./components/Switch";

<Switch aria-label="Enable alerts" />
<Switch defaultChecked aria-label="Dark mode" />`}
        />
        <PropTable
          rows={[
            { prop: "checked", type: "boolean", description: "Controlled on/off state" },
            { prop: "defaultChecked", type: "boolean", default: "false", description: "Uncontrolled initial state" },
            { prop: "onCheckedChange", type: "(checked: boolean) => void", description: "Fires when toggled" },
            { prop: "disabled", type: "boolean", description: "Disables interaction" },
            { prop: "aria-label", type: "string", description: "Accessible name (required when no visible label)" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
