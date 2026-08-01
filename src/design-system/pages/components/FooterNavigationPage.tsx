import { FooterNavigation } from "../../../components/FooterNavigation";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function FooterNavigationPage() {
  return (
    <DocPage
      title="FooterNavigation"
      description="Site footer with brand block and link columns. Code Connect: `footer-navigation` (288:1603)."
    >
      <DocSection title="Desktop">
        <ComponentPreview>
          <FooterNavigation state="desktop" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Mobile">
        <ComponentPreview>
          <div style={{ maxWidth: 400 }}>
            <FooterNavigation state="mobile" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { FooterNavigation } from "./components/FooterNavigation";

<FooterNavigation state="desktop" />
<FooterNavigation state="mobile" />`}
        />
        <PropTable
          rows={[
            { prop: "state", type: '"desktop" | "mobile"', default: "desktop", description: "Layout variant" },
            { prop: "tagline / addressLines / email", type: "string | string[]", description: "Brand block overrides" },
            { prop: "aboutLinks / serviceLinks / helpLinks / policyLinks", type: "FooterLink[]", description: "Navigation link groups" },
            { prop: "copyright", type: "string", default: "Copyright Palletways 2026", description: "Copyright line" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
