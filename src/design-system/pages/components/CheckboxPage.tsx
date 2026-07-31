import { useState } from "react";
import { Checkbox } from "../../../components/Checkbox";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function CheckboxPage() {
  const [checked, setChecked] = useState(true);

  return (
    <DocPage
      title="Checkbox"
      description="Labelled checkbox using Figma Interface checkbox icons. Code Connect: `input.check-field` (2001:1712)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <Checkbox label="I am the sender" />
          <Checkbox label="I agree to the terms" defaultChecked />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Controlled">
        <ComponentPreview>
          <Checkbox
            label="Notify me by email"
            checked={checked}
            onCheckedChange={setChecked}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Disabled">
        <ComponentPreview>
          <Checkbox label="Unavailable option" disabled />
          <Checkbox label="Locked preference" defaultChecked disabled />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Checkbox } from "./components/Checkbox";

<Checkbox label="I am the sender" />
<Checkbox label="Notify me" checked={checked} onCheckedChange={setChecked} />`}
        />
        <PropTable
          rows={[
            { prop: "label", type: "string", description: "Visible label text" },
            { prop: "checked", type: "boolean", description: "Controlled checked state" },
            { prop: "defaultChecked", type: "boolean", default: "false", description: "Uncontrolled initial state" },
            { prop: "onCheckedChange", type: "(checked: boolean) => void", description: "Fires when toggled" },
            { prop: "disabled", type: "boolean", description: "Disables interaction" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
