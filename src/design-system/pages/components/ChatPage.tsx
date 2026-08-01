import { useState } from "react";
import { Chat } from "../../../components/Chat";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function ChatPage() {
  const [state, setState] = useState<"collapsed" | "expanded">("collapsed");

  return (
    <DocPage
      title="Chat"
      description="Floating chat launcher and expanded help panel. Code Connect: `chat.component` (2145:13148)."
    >
      <DocSection title="Collapsed">
        <ComponentPreview>
          <Chat state="collapsed" onOpen={() => setState("expanded")} />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Expanded">
        <ComponentPreview>
          <Chat
            state="expanded"
            onClose={() => setState("collapsed")}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Interactive demo">
        <ComponentPreview>
          <Chat
            state={state}
            onOpen={() => setState("expanded")}
            onClose={() => setState("collapsed")}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { Chat } from "./components/Chat";

<Chat state="collapsed" onOpen={...} />
<Chat state="expanded" onClose={...} />`}
        />
        <PropTable
          rows={[
            {
              prop: "state",
              type: '"collapsed" | "expanded"',
              default: "collapsed",
              description: "Launcher vs full panel",
            },
            {
              prop: "suggestions",
              type: "string[]",
              default: "Track / Pallet / Preparing…",
              description: "Quick-reply chips",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
