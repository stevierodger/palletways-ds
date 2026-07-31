import { PalletSizeInfo } from "../../../components/PalletSizeInfo";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function PalletSizeInfoPage() {
  return (
    <DocPage
      title="PalletSizeInfo"
      description="Dimension / value row. Code Connect: `info.pallet-size` (2007:4430)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <PalletSizeInfo dimension="Length:" value="1.2m" />
          <PalletSizeInfo dimension="Width:" value="0.8m" />
          <PalletSizeInfo dimension="Height:" value="1.0m" changed />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { PalletSizeInfo } from "./components/PalletSizeInfo";

<PalletSizeInfo dimension="Length:" value="1.2m" />
<PalletSizeInfo dimension="Height:" value="1.0m" changed />`}
        />
        <PropTable
          rows={[
            { prop: "dimension", type: "string", description: "Label e.g. Length:" },
            { prop: "value", type: "string", description: "Measurement" },
            { prop: "changed", type: "boolean", description: "Shows asterisk (State=change)" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
