// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2006-4000
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Counter/Counter.tsx
// component=Counter
// figma=action.counter
import figma from 'figma'

const instance = figma.selectedInstance
const labelLayer = instance.findText('Label')
const raw =
  labelLayer && labelLayer.type === 'TEXT' ? labelLayer.textContent : '01'
const parsed = Number.parseInt(raw, 10)
const value = Number.isFinite(parsed) ? parsed : 1

export default {
  example: figma.code`
    <Counter defaultValue={${value}} />
  `,
  imports: ['import { Counter } from "./components/Counter"'],
  id: 'action-counter',
  metadata: {
    nestable: true,
  },
}
