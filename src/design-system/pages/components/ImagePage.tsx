import landscape from "../../../components/Image/assets/landscape.jpg";
import { Image } from "../../../components/Image";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function ImagePage() {
  return (
    <DocPage
      title="Image"
      description="Aspect-ratio image frame. Code Connect: `image` (2283:9012)."
    >
      <DocSection title="Landscape">
        <ComponentPreview>
          <div style={{ width: 320 }}>
            <Image src={landscape} aspect="landscape" alt="Sample landscape" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Square / portrait">
        <ComponentPreview>
          <div style={{ display: "flex", gap: 16, width: "100%", maxWidth: 480 }}>
            <Image src={landscape} aspect="square" alt="Sample square" />
            <Image src={landscape} aspect="portrait" alt="Sample portrait" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Image } from "./components/Image";

<Image src="/photo.jpg" aspect="landscape" alt="" />`}
        />
        <PropTable
          rows={[
            {
              prop: "aspect",
              type: '"landscape" | "square" | "portrait"',
              description: "Frame ratio",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
