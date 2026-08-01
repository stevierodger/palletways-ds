import { PalletSizes } from "../../../components/PalletSizes";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

const STATES = [
  "mini",
  "x-small",
  "small",
  "medium",
  "narrow-medium",
  "large",
  "x-large",
] as const;

export function PalletSizesPage() {
  return (
    <DocPage
      title="PalletSizes"
      description="Pallet size illustration with person scale. Code Connect: `pallet-sizes` (2012:2844)."
    >
      <DocSection title="All sizes">
        <ComponentPreview>
          {STATES.map((state) => (
            <PalletSizes key={state} state={state} />
          ))}
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { PalletSizes } from "./components/PalletSizes";

<PalletSizes state="mini" />
<PalletSizes state="large" />`}
        />
        <PropTable
          rows={[
            {
              prop: "state",
              type: '"mini" | "x-small" | "small" | "medium" | "narrow-medium" | "large" | "x-large"',
              default: "mini",
              description: "Illustration variant",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
