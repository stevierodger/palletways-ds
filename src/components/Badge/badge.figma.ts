// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=30-41
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Badge/Badge.tsx
// component=Badge
// figma=Badge
import figma from 'figma'

const instance = figma.selectedInstance
const label = instance.getString('Text')

export default {
  example: figma.code`
    <Badge label="${label}" />
  `,
  imports: ['import { Badge } from "./components/Badge"'],
  id: 'badge',
  metadata: {
    nestable: true,
  },
}
