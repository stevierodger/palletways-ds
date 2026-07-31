// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2283-9436
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Tag/Tag.tsx
// component=Tag
// figma=label (published chip; no tone variant in Figma — defaults to neutral)
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('info-label')

export default {
  example: figma.code`
    <Tag label="${label}" />
  `,
  imports: ['import { Tag } from "./components/Tag"'],
  id: 'tag-label',
  metadata: {
    nestable: true,
  },
}
