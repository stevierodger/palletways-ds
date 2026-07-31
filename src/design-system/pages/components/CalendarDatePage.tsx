import { CalendarDate } from "../../../components/CalendarDate";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function CalendarDatePage() {
  return (
    <DocPage
      title="CalendarDate"
      description="Day cell for date pickers. Collection / travel / delivery tones form a range. Code Connect: `calendar-date` (2059:4796)."
    >
      <DocSection title="Tones">
        <ComponentPreview>
          <CalendarDate date="01" tone="default" />
          <CalendarDate date="02" tone="today" />
          <CalendarDate date="03" tone="collection" />
          <CalendarDate date="04" tone="travel" />
          <CalendarDate date="05" tone="delivery" />
          <CalendarDate tone="empty" />
          <CalendarDate date="07" disabled />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Range example">
        <ComponentPreview>
          <div style={{ display: "inline-flex" }}>
            <CalendarDate date="12" tone="collection" />
            <CalendarDate date="13" tone="travel" />
            <CalendarDate date="14" tone="travel" />
            <CalendarDate date="15" tone="delivery" />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { CalendarDate } from "./components/CalendarDate";

<CalendarDate date="12" tone="collection" />
<CalendarDate date="15" tone="delivery" />`}
        />
        <PropTable
          rows={[
            { prop: "date", type: "string", default: "01", description: "Day label" },
            {
              prop: "tone",
              type: '"default" | "empty" | "today" | "collection" | "travel" | "delivery"',
              default: "default",
              description: "Visual state (hover via CSS)",
            },
            { prop: "disabled", type: "boolean", description: "Muted disabled day" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
