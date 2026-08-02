import { useState } from "react";
import {
  AddressField,
  type AddressFieldState,
  type AddressResult,
} from "../../../components/AddressField";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

const SAMPLE_RESULTS: AddressResult[] = [
  {
    id: "21a",
    label: "21A Halliford St London, N1 3HB",
    lines: ["21A Halliford street", "London", "N1 3HB"],
  },
  {
    id: "21b",
    label: "21B Halliford St London, N1 3HB",
    lines: ["21B Halliford street", "London", "N1 3HB"],
  },
  {
    id: "24a",
    label: "24A Halliford St London, N1 3HB",
    lines: ["24A Halliford street", "London", "N1 3HB"],
  },
  {
    id: "24b",
    label: "24B Halliford St London, N1 3HB",
    lines: ["24B Halliford street", "London", "N1 3HB"],
  },
  {
    id: "25a",
    label: "25A Halliford St London, N1 3HB",
    lines: ["25A Halliford street", "London", "N1 3HB"],
  },
  {
    id: "25b",
    label: "25B Halliford St London, N1 3HB",
    lines: ["25B Halliford street", "London", "N1 3HB"],
  },
  {
    id: "21",
    label: "21 Halliford St London, N1 3HB",
    lines: ["21 Halliford street", "London", "N1 3HB"],
  },
];

function InteractiveAddressField() {
  const [state, setState] = useState<AddressFieldState>("active-filled");
  const [value, setValue] = useState("N1 3HB (London)");
  const [lines, setLines] = useState<string[] | undefined>();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 420 }}>
      <AddressField
        state={state}
        value={value}
        addressLines={lines}
        results={SAMPLE_RESULTS}
        onClear={() => {
          setState("freetext");
          setValue("");
          setLines(undefined);
        }}
        onChange={setValue}
        onLookup={() => {
          if (state === "freetext" || state === "active-filled" || state === "completed") {
            setValue(value.trim() || "N1 3HB");
            setState("lookup");
          } else if (state === "lookup") {
            setState("freetext");
          } else if (state === "address-completed") {
            setState("lookup");
            setValue("N1 3HB");
          }
        }}
        onSelectResult={(result) => {
          setLines(result.lines ?? [result.label]);
          setValue(result.label);
          setState("address-completed");
        }}
      />
      <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>
        State: <code>{state}</code>
      </p>
    </div>
  );
}

export function AddressFieldPage() {
  return (
    <DocPage
      title="AddressField"
      description="Address lookup exception off regular field states: completed postcode, free-text entry, results dropdown, clear, and multi-line address-completed."
    >
      <DocSection title="Completed (postcode)">
        <ComponentPreview>
          <AddressField state="completed" value="N1 3HB (London)" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Active-filled + clear">
        <ComponentPreview>
          <AddressField state="active-filled" value="N1 3HB (London)" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Freetext (entry)">
        <ComponentPreview>
          <AddressField state="freetext" value="A1 2BC" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Lookup (results open)">
        <ComponentPreview>
          <AddressField state="lookup" value="N1 3HB" results={SAMPLE_RESULTS} />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Address completed">
        <ComponentPreview>
          <AddressField
            state="address-completed"
            addressLines={["21 Halliford street", "London", "N1 3HB"]}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Interactive flow">
        <ComponentPreview>
          <InteractiveAddressField />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { AddressField } from "./components/AddressField";

// Postcode success
<AddressField state="completed" value="N1 3HB (London)" onLookup={…} />

// Free-text entry then lookup
<AddressField
  state="freetext"
  value={postcode}
  onChange={setPostcode}
  onLookup={runLookup}
/>

// Results dropdown
<AddressField
  state="lookup"
  value="N1 3HB"
  results={results}
  onSelectResult={setAddress}
/>

// Full address selected
<AddressField
  state="address-completed"
  addressLines={["21 Halliford street", "London", "N1 3HB"]}
  onClear={reset}
/>`}
        />
        <PropTable
          rows={[
            {
              prop: "state",
              type: '"completed" | "active-filled" | "freetext" | "lookup" | "address-completed"',
              description: "Address-field exception state (not regular Input states)",
            },
            {
              prop: "value",
              type: "string",
              description: "Postcode / free-text display value",
            },
            {
              prop: "addressLines",
              type: "string[]",
              description: "Multi-line body for address-completed",
            },
            {
              prop: "results",
              type: "AddressResult[]",
              description: "Dropdown options when state is lookup",
            },
            {
              prop: "onLookup / onClear / onChange / onSelectResult",
              type: "handlers",
              description: "Parent owns the address lookup flow",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
