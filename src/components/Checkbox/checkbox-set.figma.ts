// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2251-8006
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Checkbox/Checkbox.tsx
// component=Checkbox
// figma=checkbox (full state set)
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('label text')
const state = instance.getEnum('State', {
  unchecked: 'unchecked',
  checked: 'checked',
  'hover-unchecked': 'hover-unchecked',
  'focus-unchecked': 'focus-unchecked',
  'disabled-unchecked': 'disabled-unchecked',
  'disabled-checked': 'disabled-checked',
})

const checked = state === 'checked' || state === 'disabled-checked'
const disabled =
  state === 'disabled-unchecked' || state === 'disabled-checked'

export default {
  example: figma.code`
    <Checkbox
      label="${label}"
      ${checked ? 'defaultChecked' : ''}
      ${disabled ? 'disabled' : ''}
    />
  `,
  imports: ['import { Checkbox } from "./components/Checkbox"'],
  id: 'checkbox-set',
  metadata: {
    nestable: true,
  },
}
