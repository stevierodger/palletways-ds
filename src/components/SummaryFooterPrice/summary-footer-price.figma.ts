// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2287-10609
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/SummaryFooterPrice/SummaryFooterPrice.tsx
// component=SummaryFooterPrice
// figma=summary-footer/price
import figma from 'figma'

export default {
  example: figma.code`
    <SummaryFooterPrice subtotal={132.14} vat={26.42} total={158.56} />
  `,
  imports: ['import { SummaryFooterPrice } from "./components/SummaryFooterPrice"'],
  id: 'summary-footer/price',
  metadata: {
    nestable: true,
  },
}
