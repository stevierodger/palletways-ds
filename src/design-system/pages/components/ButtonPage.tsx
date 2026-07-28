import { Button } from "../../../components/Button";
import {
  CodeBlock,
  ComponentPreview,
  DoDont,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function ButtonPage() {
  return (
    <DocPage
      title="Button"
      description="Primary, secondary, and ghost buttons in sm / md / lg. Based on Figma button-primary-sm (259:561), button-secondary-md (277:483), and button-ghost-md (277:550)."
    >
      <DocSection title="Variants">
        <ComponentPreview title="Primary">
          <Button variant="primary">Get a quote</Button>
        </ComponentPreview>
        <ComponentPreview title="Secondary">
          <Button variant="secondary">Get a quote</Button>
        </ComponentPreview>
        <ComponentPreview title="Ghost">
          <Button variant="ghost">Get a quote</Button>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Sizes">
        <ComponentPreview title="Small · Medium · Large">
          <Button size="sm">Get a quote</Button>
          <Button size="md">Get a quote</Button>
          <Button size="lg">Get a quote</Button>
        </ComponentPreview>
      </DocSection>

      <DocSection title="States">
        <ComponentPreview title="Loading & disabled">
          <Button loading>Loading…</Button>
          <Button disabled>Disabled</Button>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Usage">
        <DoDont
          doItems={[
            "Use primary for the main CTA per screen section",
            "Pair trailing chevron on forward actions in funnels",
            "Use md (80px) in quote funnel footers",
          ]}
          dontItems={[
            "Don't use multiple primary buttons in one view",
            "Don't use sm buttons for primary funnel CTAs",
            "Don't remove focus ring — accessibility requirement",
          ]}
        />
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Button } from "./components/Button";

<Button variant="primary" size="md">
  Get a quote
</Button>`}
        />
        <PropTable
          rows={[
            { prop: "variant", type: '"primary" | "secondary" | "ghost"', default: "primary", description: "Visual style" },
            { prop: "size", type: '"sm" | "md" | "lg"', default: "md", description: "Button dimensions" },
            { prop: "loading", type: "boolean", default: "false", description: "Shows spinner, disables interaction" },
            { prop: "leadingIcon", type: "ReactNode", description: "Optional icon before label" },
            { prop: "trailingIcon", type: "ReactNode", description: "Optional icon after label" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
