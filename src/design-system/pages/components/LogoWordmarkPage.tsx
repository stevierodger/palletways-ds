import { LogoWordmark } from "../../../components/Logo";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function LogoWordmarkPage() {
  return (
    <DocPage
      title="LogoWordmark"
      description="Palletways wordmark logo. Code Connect: `logo-wordmark` (194:883)."
    >
      <DocSection title="Sizes">
        <ComponentPreview>
          <LogoWordmark size="large" />
          <LogoWordmark size="small" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { LogoWordmark } from "./components/Logo";

<LogoWordmark size="large" />
<LogoWordmark size="small" />`}
        />
        <PropTable
          rows={[
            {
              prop: "size",
              type: '"large" | "small"',
              default: "large",
              description: "134×50 or 86×32",
            },
            {
              prop: "title",
              type: "string",
              default: "Palletways",
              description: "alt text",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
