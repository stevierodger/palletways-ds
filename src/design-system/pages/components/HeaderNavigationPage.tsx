import { HeaderNavigation } from "../../../components/HeaderNavigation";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function HeaderNavigationPage() {
  return (
    <DocPage
      title="HeaderNavigation"
      description="Site header bar. Code Connect: `header-navigation` (194:2378)."
    >
      <DocSection title="Desktop">
        <ComponentPreview padded={false}>
          <HeaderNavigation state="desktop" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Desktop with CTA">
        <ComponentPreview padded={false}>
          <HeaderNavigation state="desktop-cta" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Mobile">
        <ComponentPreview padded={false}>
          <HeaderNavigation state="mobile" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { HeaderNavigation } from "./components/HeaderNavigation";

<HeaderNavigation state="desktop" />
<HeaderNavigation state="desktop-cta" />
<HeaderNavigation state="mobile" />`}
        />
        <PropTable
          rows={[
            {
              prop: "state",
              type: '"desktop" | "desktop-cta" | "mobile"',
              default: "desktop",
              description: "Logo size + nav layout",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
