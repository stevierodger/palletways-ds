import { DateCard, type DateCardDay } from "../../../components/DateCard";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

/** July 2026 starts Wednesday — matches Figma date-card demo */
const JULY_2026: DateCardDay[] = [
  { date: "01", tone: "empty" },
  { date: "01", tone: "empty" },
  { date: "01" },
  { date: "02" },
  { date: "03" },
  { date: "04" },
  { date: "05", disabled: true },
  { date: "06" },
  { date: "07" },
  { date: "08" },
  { date: "09" },
  { date: "10" },
  { date: "11" },
  { date: "12", disabled: true },
  { date: "13" },
  { date: "14" },
  { date: "15", tone: "today" },
  { date: "16" },
  { date: "17" },
  { date: "18" },
  { date: "19", disabled: true },
  { date: "20" },
  { date: "21" },
  { date: "22" },
  { date: "23" },
  { date: "24" },
  { date: "25" },
  { date: "26", disabled: true },
  { date: "27" },
  { date: "28" },
  { date: "29" },
  { date: "30" },
  { date: "31" },
  { date: "01", tone: "empty" },
  { date: "01", tone: "empty" },
];

export function DateCardPage() {
  return (
    <DocPage
      title="DateCard"
      description="Collection date picker composing CalendarDate cells. Code Connect: `date-card` (2296:14613)."
    >
      <DocSection title="Default">
        <ComponentPreview>
          <DateCard
            month="JULY"
            year={2026}
            days={JULY_2026}
            countdown="1:24:34"
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { DateCard } from "./components/DateCard";

<DateCard
  month="JULY"
  year={2026}
  days={[{ date: "15", tone: "today" }]}
  countdown="1:24:34"
/>`}
        />
        <PropTable
          rows={[
            { prop: "month / year", type: "string | number", description: "Nav header" },
            { prop: "days", type: "DateCardDay[]", description: "Grid cells after weekday row" },
            { prop: "countdown", type: "string", description: "Optional timer text" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
