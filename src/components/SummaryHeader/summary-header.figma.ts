// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2283-10525
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/SummaryHeader/SummaryHeader.tsx
// component=SummaryHeader
// figma=summary-header
import figma from 'figma'

const instance = figma.selectedInstance
const titleLayer = instance.findText('Order Summary')
const title =
  titleLayer && titleLayer.type === 'TEXT'
    ? titleLayer.textContent
    : 'Order Summary'

export default {
  example: figma.code`
    <SummaryHeader title="${title}" />
  `,
  imports: ['import { SummaryHeader } from "./components/SummaryHeader"'],
  id: 'summary-header',
  metadata: {
    nestable: true,
  },
}
