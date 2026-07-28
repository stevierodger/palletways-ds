import { sectionSpacing as sectionSpacingTokens } from "../../tokens";
import { SpacingScale } from "../components/SpacingScale";
import { DocPage, DocSection } from "../layout/DocPage";
import "./SpacingPage.css";

const scaleItems = [
  { name: "0", value: "0px", cssVar: "--spacing-0" },
  { name: "1", value: "4px", cssVar: "--spacing-1" },
  { name: "2", value: "8px", cssVar: "--spacing-2" },
  { name: "3", value: "12px", cssVar: "--spacing-3" },
  { name: "4", value: "16px", cssVar: "--spacing-4" },
  { name: "5", value: "20px", cssVar: "--spacing-5" },
  { name: "6", value: "24px", cssVar: "--spacing-6" },
  { name: "8", value: "32px", cssVar: "--spacing-8" },
  { name: "10", value: "40px", cssVar: "--spacing-10" },
  { name: "12", value: "48px", cssVar: "--spacing-12" },
  { name: "16", value: "64px", cssVar: "--spacing-16" },
  { name: "20", value: "80px", cssVar: "--spacing-20" },
];

const componentSpacing = [
  { name: "comp-x-xs", value: "4px", cssVar: "--spacing-comp-x-xs" },
  { name: "comp-y-xs", value: "4px", cssVar: "--spacing-comp-y-xs" },
  { name: "comp-x-sm", value: "8px", cssVar: "--spacing-comp-x-sm" },
  { name: "comp-y-sm", value: "6px", cssVar: "--spacing-comp-y-sm" },
  { name: "comp-x-md", value: "16px", cssVar: "--spacing-comp-x-md" },
  { name: "comp-y-md", value: "12px", cssVar: "--spacing-comp-y-md" },
];

const sectionSpacing = Object.entries(sectionSpacingTokens).map(([key, token]) => ({
  name: `section-${key}`,
  value: token.value,
  rem: token.rem,
  cssVar: token.cssVar,
  figmaVar: `spacing/section-${key}`,
  primitive: token.primitive,
}));

export function SpacingPage() {
  return (
    <DocPage
      title="Spacing"
      description="Figma spacing scale, component padding, and section spacing tokens used across UI and marketing layouts."
    >
      <DocSection title="Base scale">
        <SpacingScale items={scaleItems} />
      </DocSection>

      <DocSection title="Component spacing">
        <SpacingScale items={componentSpacing} />
      </DocSection>

      <DocSection title="Section spacing">
        <p>
          Vertical rhythm between page sections, marketing blocks, and content bands. Sourced from
          Figma <strong>Semantics</strong> collection (<code>spacing/section-*</code>) on the
          components audit canvas.
        </p>
        <SpacingScale items={sectionSpacing} />

        <div className="section-spacing-demo">
          <div className="section-spacing-demo__block section-spacing-demo__block--sm">
            <span>section-sm</span>
            <code>padding-block: var(--spacing-section-sm)</code>
          </div>
          <div className="section-spacing-demo__block section-spacing-demo__block--md">
            <span>section-md</span>
            <code>padding-block: var(--spacing-section-md)</code>
          </div>
          <div className="section-spacing-demo__block section-spacing-demo__block--lg">
            <span>section-lg</span>
            <code>padding-block: var(--spacing-section-lg)</code>
          </div>
        </div>
      </DocSection>

      <DocSection title="Usage">
        <ul>
          <li>
            <strong>Section vs component:</strong> Use <code>--spacing-section-*</code> for
            outer page layout (hero → features → footer). Use <code>--spacing-comp-*</code> or base
            scale tokens inside components.
          </li>
          <li>
            <strong>When to pick a size:</strong> <code>section-sm</code> for related content
            groups; <code>section-md</code> for standard page sections; <code>section-lg</code> for
            major marketing breaks or hero adjacency.
          </li>
          <li>
            Card body padding uses <code>--spacing-5</code> (20px).
          </li>
          <li>
            Button internal gap uses <code>--spacing-comp-x-sm</code> (8px).
          </li>
          <li>
            Input padding uses <code>--spacing-3</code> vertical and <code>--spacing-4</code>{" "}
            horizontal.
          </li>
          <li>
            <strong>Responsive:</strong> Figma Semantics collection defines single default values
            for section spacing — no breakpoint modes found. Scale down manually on mobile if needed
            (e.g. <code>section-lg</code> → <code>section-md</code> below 768px).
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
