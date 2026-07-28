import { ColorRamp } from "../components/ColorRamp";
import { TokenSwatch, TokenSwatchGrid } from "../components/TokenSwatch";
import { DocPage, DocSection } from "../layout/DocPage";
import { colorRamps } from "../../tokens";

const brandColors = [
  { name: "Brand Primary", value: "#225595", cssVar: "--color-brand-primary", usage: "Primary buttons, links, active states" },
  { name: "Brand Green", value: "#8cc63f", cssVar: "--color-brand-green", usage: "Accent underline, success highlights" },
  { name: "Brand Green 50", value: "#e8ffdd", cssVar: "--color-brand-green-50", usage: "Active tracker step background" },
  { name: "Brand Green Subtle", value: "#f0f9e6", cssVar: "--color-brand-green-subtle", usage: "Badges, callouts" },
];

const textColors = [
  { name: "Primary", value: "#0f172a", cssVar: "--color-primary", usage: "Headings, labels, shadow base" },
  { name: "Secondary", value: "#475569", cssVar: "--color-secondary", usage: "Supporting text, secondary body copy" },
  { name: "Text Body Secondary", value: "#44536a", cssVar: "--color-text-body-secondary", usage: "Secondary buttons, tracker labels" },
  { name: "Text Inverse", value: "#ffffff", cssVar: "--color-text-inverse", usage: "Text on primary buttons" },
];

const surfaceColors = [
  { name: "Surface Default", value: "#ffffff", cssVar: "--color-surface-default", usage: "Cards, inputs, page background" },
  { name: "Surface Subtle", value: "#f3f4f6", cssVar: "--color-surface-subtle", usage: "Card backgrounds, secondary button bg, tracker default" },
  { name: "Surface Muted", value: "#f1f5f9", cssVar: "--color-surface-muted", usage: "Example panels, hover states" },
];

const borderColors = [
  { name: "Border Subtle", value: "#e2e8f0", cssVar: "--color-border-subtle", usage: "Input borders, dividers" },
  { name: "Border Natural", value: "#cbd5e1", cssVar: "--color-border-natural", usage: "Tracker default ring" },
  { name: "Border Bold", value: "#64748b", cssVar: "--color-border-bold", usage: "Active tracker, secondary button border" },
  { name: "Button Secondary Border", value: "#334155", cssVar: "--color-button-secondary-border", usage: "Secondary button outline" },
];

function rampSteps(
  family: keyof typeof colorRamps,
  prefix: string,
  usageByStep?: Record<string, string>,
) {
  const ramp = colorRamps[family];
  return Object.entries(ramp).map(([step, value]) => ({
    step,
    value,
    cssVar: `--color-${prefix}-${step}`,
    usage: usageByStep?.[step],
  }));
}

const slateUsage: Record<string, string> = {
  "000": "Surface Subtle — card backgrounds, neutral tags (semantic alias)",
  100: "Surface muted, tracker completed bg",
  200: "Input borders, disabled button bg",
  300: "Natural borders, disabled text",
  500: "Example text, bold borders",
  600: "Secondary text, secondary copy",
  700: "Secondary button borders",
  800: "Shadow base tint",
  900: "Primary text",
};

const brandBlueUsage: Record<string, string> = {
  50: "Subtle button bg, selection tint",
  300: "Selection card accents",
  500: "Primary buttons, brand primary",
  700: "Selected delivery dates (alias of 500 in Figma)",
  800: "Primary hover",
  900: "Primary active / pressed",
};

const brandGreenUsage: Record<string, string> = {
  50: "Active tracker step bg",
  300: "Focus rings, calendar collection",
  400: "Calendar collection dates",
  500: "Field focus border",
  700: "Selection card labels",
  800: "Header accent, dark green text",
};

export function ColorsPage() {
  return (
    <DocPage
      title="Color"
      description="Semantic color tokens and primitive ramps from the Palletways v1.2 Figma library. Shadow colors derive from Primary (slate/900)."
    >
      <DocSection title="Color ramps">
        <p>
          Primitive scales from the Figma <strong>Primitives</strong> collection. Values extracted via{" "}
          <code>get_variable_defs</code> on component nodes and <code>search_design_system</code> variable discovery.
        </p>
        <ColorRamp
          name="Slate"
          description="Neutral slate scale — text, borders, surfaces, and shadow tints."
          steps={rampSteps("slate", "slate", slateUsage)}
        />
        <ColorRamp
          name="Brand Blue"
          description="Primary brand scale — buttons, links, and selection states."
          steps={rampSteps("brandBlue", "brand-blue", brandBlueUsage)}
        />
        <ColorRamp
          name="Brand Green"
          description="Accent scale — tracker steps, focus rings, and success highlights."
          steps={rampSteps("brandGreen", "brand-green", brandGreenUsage)}
        />
      </DocSection>

      <DocSection title="Brand">
        <TokenSwatchGrid>
          {brandColors.map((c) => (
            <TokenSwatch key={c.name} {...c} />
          ))}
        </TokenSwatchGrid>
      </DocSection>

      <DocSection title="Text">
        <TokenSwatchGrid>
          {textColors.map((c) => (
            <TokenSwatch key={c.name} {...c} />
          ))}
        </TokenSwatchGrid>
      </DocSection>

      <DocSection title="Surface">
        <TokenSwatchGrid>
          {surfaceColors.map((c) => (
            <TokenSwatch key={c.name} {...c} />
          ))}
        </TokenSwatchGrid>
      </DocSection>

      <DocSection title="Border">
        <TokenSwatchGrid>
          {borderColors.map((c) => (
            <TokenSwatch key={c.name} {...c} />
          ))}
        </TokenSwatchGrid>
      </DocSection>

      <DocSection title="Usage rules">
        <ul>
          <li>Use <code>--color-brand-primary</code> for primary CTAs only — one per viewport section.</li>
          <li>Prefer ramp tokens (<code>--color-slate-*</code>, <code>--color-brand-blue-*</code>) for new UI; semantic aliases remain for existing components.</li>
          <li>Shadows always use Primary at calibrated opacity — never pure black.</li>
          <li>Tag colors are semantic (adventure / nature / hiking) — do not repurpose for status.</li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
