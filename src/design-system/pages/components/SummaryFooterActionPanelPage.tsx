import { SummaryFooterActionPanel } from "../../../components/SummaryFooterActionPanel";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function SummaryFooterActionPanelPage() {
  return (
    <DocPage
      title="SummaryFooterActionPanel"
      description="Summary footer CTA row. Code Connect: `summary-footer/action-panel` (2287:10610)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <SummaryFooterActionPanel />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { SummaryFooterActionPanel } from "./components/SummaryFooterActionPanel";

<SummaryFooterActionPanel />`}
        />
        <PropTable
          rows={[
            { prop: "termsLabel / loginLabel", type: "string", description: "Button labels" },
            { prop: "onTermsClick / onLoginClick", type: "() => void", description: "Click handlers" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
