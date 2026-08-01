import { NavMenuItems } from "../../../components/NavMenu";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function NavMenuItemsPage() {
  return (
    <DocPage
      title="NavMenuItems"
      description="Primary site navigation. Code Connect: `nav.menu-items` (288:1034)."
    >
      <DocSection title="Collapsed">
        <ComponentPreview>
          <NavMenuItems state="collapsed" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Expanded">
        <ComponentPreview>
          <NavMenuItems state="expanded" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Expanded with CTA">
        <ComponentPreview>
          <NavMenuItems state="expanded-cta" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { NavMenuItems } from "./components/NavMenu";

<NavMenuItems state="collapsed" />
<NavMenuItems state="expanded" />
<NavMenuItems state="expanded-cta" />`}
        />
        <PropTable
          rows={[
            {
              prop: "state",
              type: '"collapsed" | "expanded" | "expanded-cta"',
              default: "expanded",
              description: "Layout variant",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
