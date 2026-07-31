// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=194-2143
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Trustpilot/Trustpilot.tsx
// component=Trustpilot
// figma=trustpilot
import figma from 'figma'

const instance = figma.selectedInstance

const tone = instance.getEnum('State', {
  positive: 'positive',
  neutral: 'neutral',
})

export default {
  example: figma.code`
    <Trustpilot tone="${tone}" />
  `,
  imports: ['import { Trustpilot } from "./components/Trustpilot"'],
  id: 'trustpilot',
  metadata: {
    nestable: true,
  },
}
