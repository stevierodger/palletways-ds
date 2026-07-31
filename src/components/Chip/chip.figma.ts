// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=1-98
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Chip/Chip.tsx
// component=Chip
// figma=Chip
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('Label')
const showLeading = instance.getBoolean('leading slot')
const tone = instance.getEnum('Property 1', {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
  PURPLE: 'purple',
})

export default {
  example: figma.code`
    <Chip
      label="${label}"
      tone="${tone}"
      ${showLeading ? '' : 'showLeading={false}'}
    />
  `,
  imports: ['import { Chip } from "./components/Chip"'],
  id: 'chip',
  metadata: {
    nestable: true,
  },
}
