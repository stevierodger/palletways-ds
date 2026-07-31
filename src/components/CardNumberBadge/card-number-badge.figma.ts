// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2132-10067
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/CardNumberBadge/CardNumberBadge.tsx
// component=CardNumberBadge
// figma=card-number-badge
import figma from 'figma'

const instance = figma.selectedInstance

const selected = instance.getEnum('State', {
  static: false,
  selected: true,
})

const numberLayer = instance.findText('3133')
const number =
  numberLayer && numberLayer.type === 'TEXT' ? numberLayer.textContent : '3133'

export default {
  example: selected
    ? figma.code`<CardNumberBadge selected number="${number}" />`
    : figma.code`<CardNumberBadge />`,
  imports: ['import { CardNumberBadge } from "./components/CardNumberBadge"'],
  id: 'card-number-badge',
  metadata: {
    nestable: true,
  },
}
