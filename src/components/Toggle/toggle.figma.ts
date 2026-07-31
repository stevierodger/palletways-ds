// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2002-1773
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Toggle/Toggle.tsx
// component=Toggle
// figma=input.toggle
import figma from 'figma'

const instance = figma.selectedInstance

const option1 = instance.getString('Option 1')
const option2 = instance.getString('Option 2')
const selected = instance.getEnum('Property 1', {
  primary: 'option1',
  secondary: 'option2',
})

const value = selected === 'option2' ? option2 : option1

export default {
  example: figma.code`
    <Toggle
      option1="${option1}"
      option2="${option2}"
      defaultValue="${value}"
    />
  `,
  imports: ['import { Toggle } from "./components/Toggle"'],
  id: 'toggle',
  metadata: {
    nestable: true,
  },
}
