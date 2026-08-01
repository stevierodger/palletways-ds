// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2121-10615
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/FieldComponents/FieldComponents.tsx
// component=FieldInput
// figma=Field input
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('Property 1', {
  placeholder: 'placeholder',
  filled: 'filled',
})

const secondAction = instance.getBoolean('Second action')

export default {
  example: figma.code`
    <FieldInput
      state="${state}"
      ${secondAction ? 'secondAction' : ''}
    />
  `,
  imports: ['import { FieldInput } from "./components/FieldComponents"'],
  id: 'Field input',
  metadata: {
    nestable: true,
  },
}
