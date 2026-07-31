// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2054-4704
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Tracker/Tracker.tsx
// component=Tracker
// figma=tracker
import figma from 'figma'

const instance = figma.selectedInstance

const step = instance.getString('count')
const label = instance.getString('step name')
const showConnector = instance.getBoolean('branch')

const status = instance.getEnum('State', {
  default: 'default',
  active: 'active',
  completed: 'completed',
})

export default {
  example: figma.code`
    <Tracker
      step="${step}"
      label="${label}"
      status="${status}"
      ${showConnector ? '' : 'showConnector={false}'}
    />
  `,
  imports: ['import { Tracker } from "./components/Tracker"'],
  id: 'tracker',
  metadata: {
    nestable: true,
  },
}
