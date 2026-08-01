// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2283-9012
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Image/Image.tsx
// component=Image
// figma=image
import figma from 'figma'

const instance = figma.selectedInstance

const aspect = instance.getEnum('Property 1', {
  landscape: 'landscape',
  square: 'square',
  portrait: 'portrait',
})

export default {
  example: figma.code`
    <Image src="/path/to/image.jpg" aspect="${aspect}" alt="" />
  `,
  imports: ['import { Image } from "./components/Image"'],
  id: 'image',
  metadata: {
    nestable: true,
  },
}
