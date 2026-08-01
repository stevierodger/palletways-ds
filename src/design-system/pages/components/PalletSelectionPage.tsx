import { PalletSelection } from "../../../components/PalletSelection";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function PalletSelectionPage() {
  return (
    <DocPage
      title="PalletSelection"
      description="Pallet size picker layout. Code Connect: `info.pallet-selection` (2007:5851)."
    >
      <DocSection title="Default (landscape grid)">
        <ComponentPreview>
          <div style={{ width: "100%", overflow: "auto" }}>
            <PalletSelection state="default" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Alt (portrait row)">
        <ComponentPreview>
          <div style={{ width: "100%", overflow: "auto" }}>
            <PalletSelection state="alt" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { PalletSelection } from "./components/PalletSelection";

<PalletSelection state="default" />
<PalletSelection state="alt" />`}
        />
        <PropTable
          rows={[
            {
              prop: "state",
              type: '"default" | "alt"',
              default: "default",
              description: "Grid vs horizontal portrait layout",
            },
            { prop: "items", type: "PalletSelectionItem[]", description: "Override size cards" },
            {
              prop: "onCustomSize / onHelpDecide / onAdd",
              type: "() => void",
              description: "Forwarded card actions",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
