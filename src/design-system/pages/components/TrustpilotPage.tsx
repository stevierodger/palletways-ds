import { Trustpilot } from "../../../components/Trustpilot";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function TrustpilotPage() {
  return (
    <DocPage
      title="Trustpilot"
      description="Trustpilot star tile. Code Connect: `trustpilot` (194:2143)."
    >
      <DocSection title="Tones">
        <ComponentPreview>
          <Trustpilot tone="positive" />
          <Trustpilot tone="neutral" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Trustpilot } from "./components/Trustpilot";

<Trustpilot tone="positive" />
<Trustpilot tone="neutral" />`}
        />
        <PropTable
          rows={[
            {
              prop: "tone",
              type: '"positive" | "neutral"',
              default: "positive",
              description: "Green vs grey tile",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
