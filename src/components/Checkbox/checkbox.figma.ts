// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2001-1712
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Checkbox/Checkbox.tsx
// component=Checkbox
// figma=input.check-field
import figma from 'figma'

const instance = figma.selectedInstance
const labelLayer = instance.findText('I am the sender')
const label =
  labelLayer && labelLayer.type === 'TEXT' ? labelLayer.textContent : 'I am the sender'

export default {
  example: figma.code`
    <Checkbox label="${label}" />
  `,
  imports: ['import { Checkbox } from "./components/Checkbox"'],
  id: 'checkbox',
  metadata: {
    nestable: true,
  },
}
