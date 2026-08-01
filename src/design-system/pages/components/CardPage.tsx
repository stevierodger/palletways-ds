import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { CheckBig } from "../../../components/Icon/CheckBig";
import { Tag } from "../../../components/Tag";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function CardPage() {
  return (
    <DocPage
      title="Card"
      description="Marketing content card and Trustpilot review card. Code Connect: `card` (2283:8404)."
    >
      <DocSection title="Content card">
        <ComponentPreview>
          <Card variant="content-card" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="With image, icon, tags, CTA">
        <ComponentPreview>
          <Card
            variant="content-card"
            showImage
            showLeadingIcon
            leadingIcon={<CheckBig size={32} />}
            showTags
            tags={<Tag label="TRUST" tone="brand" />}
            showCallToAction
            callToAction={
              <Button variant="primary" size="md">
                Read reviews
              </Button>
            }
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Trustpilot card">
        <ComponentPreview>
          <Card variant="trustpilot-card" rating={4} />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Card } from "./components/Card";

<Card variant="content-card" />
<Card variant="trustpilot-card" rating={4} />`}
        />
        <PropTable
          rows={[
            {
              prop: "variant",
              type: '"content-card" | "trustpilot-card"',
              default: "content-card",
              description: "Card layout",
            },
            {
              prop: "showImage / showLeadingIcon / showTags / showCallToAction",
              type: "boolean",
              default: "false",
              description: "Content-card optional slots",
            },
            {
              prop: "rating",
              type: "number",
              default: "4",
              description: "Trustpilot stars (0–5)",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
