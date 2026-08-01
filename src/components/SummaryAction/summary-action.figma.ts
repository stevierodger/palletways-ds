// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2283-10519
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/SummaryAction/SummaryAction.tsx
// component=SummaryAction
// figma=summary-action
import figma from 'figma'

const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  'Frame 359': 'edit',
  'Frame 324': 'order-again',
})

export default {
  example: figma.code`
    <SummaryAction variant="${variant}" />
  `,
  imports: ['import { SummaryAction } from "./components/SummaryAction"'],
  id: 'summary-action',
  metadata: {
    nestable: true,
  },
}
