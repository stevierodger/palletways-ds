// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2002-1749
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Switch/Switch.tsx
// component=Switch
// figma=input.switch
import figma from 'figma'

const instance = figma.selectedInstance

const checked = instance.getEnum('Property 1', {
  off: false,
  on: true,
})

export default {
  example: checked
    ? figma.code`<Switch defaultChecked />`
    : figma.code`<Switch />`,
  imports: ['import { Switch } from "./components/Switch"'],
  id: 'switch',
  metadata: {
    nestable: true,
  },
}
