import { PaymentCard } from "../../../components/PaymentCard";
import {
  CodeBlock,
  ComponentPreview,
  PropTable,
} from "../../components/ComponentPreview";
import { DocPage, DocSection } from "../../layout/DocPage";

export function PaymentCardPage() {
  return (
    <DocPage
      title="PaymentCard"
      description="Checkout payment panel. Code Connect: `payment-card` (2137:10584)."
    >
      <DocSection title="OneLink / express">
        <ComponentPreview>
          <PaymentCard state="onelink" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Card payment">
        <ComponentPreview>
          <PaymentCard state="card-payment-biller" />
          <PaymentCard state="card-payment-biller-selector" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Processing & collapsed">
        <ComponentPreview>
          <PaymentCard state="processing" />
          <PaymentCard state="collapsed" />
        </ComponentPreview>
      </DocSection>

      <DocSection title="Code">
        <CodeBlock
          code={`import { PaymentCard } from "./components/PaymentCard";

<PaymentCard state="onelink" amount="158.56" />
<PaymentCard state="card-payment-biller" />
<PaymentCard state="collapsed" />`}
        />
        <PropTable
          rows={[
            {
              prop: "state",
              type: '"onelink" | "card-payment-biller" | "card-payment-biller-selector" | "collapsed" | "processing"',
              default: "onelink",
              description: "Payment panel variant",
            },
            { prop: "amount / currency", type: "string", default: "158.56 / £", description: "Amount due display" },
            { prop: "email / maskedPhone", type: "string", description: "OneLink identity copy" },
            { prop: "payers / selectedPayerId", type: "PaymentPayer[] / string", description: "Card payer selector" },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
