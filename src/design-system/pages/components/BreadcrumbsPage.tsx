import { Breadcrumbs } from "../../../components/Breadcrumbs";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function BreadcrumbsPage() {
  return (
    <DocPage
      title="Breadcrumbs"
      description="Text breadcrumb trail. Current page uses Median weight. Code Connect: `Breadcrumbs` (194:2939)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <Breadcrumbs
            items={[
              { label: "Home", href: "#" },
              { label: "About Us", current: true },
            ]}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Longer path">
        <ComponentPreview>
          <Breadcrumbs
            items={[
              { label: "Home", href: "#" },
              { label: "Services", href: "#" },
              { label: "Pallet delivery", current: true },
            ]}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Breadcrumbs } from "./components/Breadcrumbs";

<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "About Us", current: true },
  ]}
/>`}
        />
        <PropTable
          rows={[
            { prop: "items", type: "BreadcrumbItem[]", description: "Trail segments" },
            { prop: "separator", type: "ReactNode", default: "/", description: "Between items" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
