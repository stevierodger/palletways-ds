import { ActionAdd } from "../../../components/ActionAdd";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function ActionAddPage() {
  return (
    <DocPage
      title="ActionAdd"
      description="Compact add control with trailing plus. Hover uses primary fill (Figma State=hover). Code Connect: `action.add` (2280:8236)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <ActionAdd />
          <ActionAdd label="Add pallet" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Disabled">
        <ComponentPreview>
          <ActionAdd disabled />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { ActionAdd } from "./components/ActionAdd";

<ActionAdd label="Add" />`}
        />
        <PropTable
          rows={[
            { prop: "label", type: "string", default: "Add", description: "Button label" },
            { prop: "disabled", type: "boolean", description: "Disables the control" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
