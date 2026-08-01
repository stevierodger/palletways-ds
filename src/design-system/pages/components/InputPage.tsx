import { Input } from "../../../components/Input";
import {
  CodeBlock,
  ComponentPreview,
  DoDont,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function InputPage() {
  return (
    <DocPage
      title="Input"
      description="Text field with label, focus, and error states. Code Connect: Figma `input-field` (2280:8235) and legacy `field` (210:319)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <Input label="First Name" placeholder="John Appleseed" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Error">
        <ComponentPreview>
          <Input
            label="Email*"
            placeholder="you@company.com"
            error="Please enter a valid email address"
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Usage">
        <DoDont
          doItems={[
            "Use 12px corner radius (--radius-md) for input boxes",
            "Mark required fields with asterisk in label",
            "Minimum touch target height is 48px",
          ]}
          dontItems={[
            "Don't use placeholder as the only label",
            "Don't nest inputs without field wrapper spacing",
          ]}
        />
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Input } from "./components/Input";

<Input label="First Name" placeholder="John Appleseed" />`}
        />
        <PropTable
          rows={[
            { prop: "label", type: "string", description: "Visible field label" },
            { prop: "error", type: "string", description: "Error message below field" },
            { prop: "hint", type: "string", description: "Helper text when no error" },
            {
              prop: "leadingIcon / trailingIcon",
              type: "ReactNode",
              description: "Optional icons inside the input box",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
