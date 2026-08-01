import { AcceptedCards } from "../../../components/AcceptedCards";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function AcceptedCardsPage() {
  return (
    <DocPage
      title="AcceptedCards"
      description="Accepted payment brand row. Code Connect: `info.pallet-selection/Accepted cards` (2135:10505)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <AcceptedCards />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { AcceptedCards } from "./components/AcceptedCards";

<AcceptedCards />`}
        />
        <PropTable
          rows={[
            {
              prop: "className",
              type: "string",
              description: "Optional class",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
