import { PalletSelectionCard } from "../../../components/PalletSelectionCard";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function PalletSelectionCardPage() {
  return (
    <DocPage
      title="PalletSelectionCard"
      description="Pallet size selection or help card. Code Connect: `info.pallet-selection-card` (2007:4482)."
    >
      <DocSection title="Help">
        <ComponentPreview>
          <PalletSelectionCard state="help" />
          <PalletSelectionCard state="help-portrait" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Selection">
        <ComponentPreview>
          <PalletSelectionCard state="landscape" />
          <PalletSelectionCard state="hover" />
          <PalletSelectionCard state="portrait" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { PalletSelectionCard } from "./components/PalletSelectionCard";

<PalletSelectionCard state="help" />
<PalletSelectionCard state="landscape" sizeLabel="Mini" sizeState="mini" />`}
        />
        <PropTable
          rows={[
            { prop: "state", type: '"help" | "help-portrait" | "landscape" | "portrait" | "hover"', default: "help", description: "Card variant" },
            { prop: "sizeLabel / sizeState / index", type: "string | number", description: "Selection card content" },
            { prop: "dimensions", type: "PalletDimension[]", description: "PalletSizeInfo rows" },
            { prop: "onCustomSize / onHelpDecide / onAdd", type: "() => void", description: "Action callbacks" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
