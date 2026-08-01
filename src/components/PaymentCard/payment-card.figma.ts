// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2137-10584
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/PaymentCard/PaymentCard.tsx
// component=PaymentCard
// figma=payment-card
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  'card-payment-biller': 'card-payment-biller',
  'card-payment-biller-selector': 'card-payment-biller-selector',
  onelink: 'onelink',
  collapsed: 'collapsed',
  processing: 'processing',
})

export default {
  example: figma.code`
    <PaymentCard state="${state}" />
  `,
  imports: ['import { PaymentCard } from "./components/PaymentCard"'],
  id: 'payment-card',
  metadata: {
    nestable: true,
  },
}
