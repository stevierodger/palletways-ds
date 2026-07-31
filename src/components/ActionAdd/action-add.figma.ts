// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2280-8236
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/ActionAdd/ActionAdd.tsx
// component=ActionAdd
// figma=action.add
import figma from 'figma'

const instance = figma.selectedInstance
const labelLayer = instance.findText('Label')
const label =
  labelLayer && labelLayer.type === 'TEXT' ? labelLayer.textContent : 'Add'

export default {
  example: figma.code`
    <ActionAdd label="${label}" />
  `,
  imports: ['import { ActionAdd } from "./components/ActionAdd"'],
  id: 'action-add',
  metadata: {
    nestable: true,
  },
}
