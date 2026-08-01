import { CaretDown } from "../../../components/Icon/CaretDown";
import { CheckBig } from "../../../components/Icon/CheckBig";
import { CircleHelp } from "../../../components/Icon/CircleHelp";
import {
  FieldComponents,
  FieldInput,
} from "../../../components/FieldComponents";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function FieldComponentsPage() {
  return (
    <DocPage
      title="FieldComponents"
      description="Atomic form field pieces plus Field input. Code Connect: `field-components` (2118:6960), `Field input` (2121:10615)."
    >
      <DocSection title="Title">
        <ComponentPreview>
          <FieldComponents variant="field-title" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Input shell">
        <ComponentPreview>
          <FieldComponents variant="field-input" />
          <FieldComponents
            variant="field-input"
            showLeadingIcon
            leadingIcon={<CheckBig size={20} />}
            showTrailingIcon
            trailingIcon={<CaretDown size={20} />}
          />
          <FieldComponents
            variant="field-input"
            interactive
            inputPlaceholder="field input"
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Field input atom">
        <ComponentPreview>
          <FieldInput state="placeholder" />
          <FieldInput state="filled" />
          <FieldInput state="filled" secondAction />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Dropdown rows">
        <ComponentPreview>
          <FieldComponents variant="field-dropdown-option" />
          <FieldComponents variant="field-dropdown-hover" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Help text">
        <ComponentPreview>
          <FieldComponents variant="field-help-text" />
          <FieldComponents
            variant="field-help-text"
            showHelpIcon
            helpIcon={<CircleHelp size={16} />}
            showTrailingIcon
            trailingIcon={<CaretDown size={16} />}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { FieldComponents, FieldInput } from "./components/FieldComponents";

<FieldComponents variant="field-title" />
<FieldComponents variant="field-input" />
<FieldInput state="filled" secondAction />`}
        />
        <PropTable
          rows={[
            {
              prop: "variant",
              type: '"field-title" | "field-input" | "field-help-text" | "field-dropdown-option" | "field-dropdown-hover"',
              default: "field-title",
              description: "Atomic piece",
            },
            {
              prop: "inputState (FieldInput)",
              type: '"placeholder" | "filled"',
              default: "placeholder",
              description: "Text atom state",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
