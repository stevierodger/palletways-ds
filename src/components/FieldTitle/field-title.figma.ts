// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2125-12386
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/FieldTitle/FieldTitle.tsx
// component=FieldTitle
// figma=field-title
import figma from 'figma'

const instance = figma.selectedInstance

const tone = instance.getEnum('Property 1', {
  active: 'active',
  secondary: 'secondary',
})

export default {
  example: figma.code`
    <FieldTitle tone="${tone}" />
  `,
  imports: ['import { FieldTitle } from "./components/FieldTitle"'],
  id: 'field-title',
  metadata: {
    nestable: true,
  },
}
