import { useState } from "react";
import { Counter } from "../../../components/Counter";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function CounterPage() {
  const [value, setValue] = useState(3);

  return (
    <DocPage
      title="Counter"
      description="Quantity stepper with minus / plus. Code Connect: `action.counter` (2006:4000)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <Counter defaultValue={1} />
          <Counter defaultValue={12} min={0} max={99} />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Controlled">
        <ComponentPreview>
          <Counter value={value} onValueChange={setValue} min={0} max={20} />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Disabled">
        <ComponentPreview>
          <Counter defaultValue={1} disabled />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Counter } from "./components/Counter";

<Counter defaultValue={1} min={0} max={99} />`}
        />
        <PropTable
          rows={[
            { prop: "value", type: "number", description: "Controlled value" },
            { prop: "defaultValue", type: "number", default: "1", description: "Uncontrolled initial value" },
            { prop: "min / max / step", type: "number", description: "Range and increment" },
            { prop: "pad", type: "number", default: "2", description: "Leading-zero display width" },
            { prop: "onValueChange", type: "(value: number) => void", description: "Fires on change" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
