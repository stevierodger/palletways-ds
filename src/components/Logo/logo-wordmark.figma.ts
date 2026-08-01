// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=194-883
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Logo/LogoWordmark.tsx
// component=LogoWordmark
// figma=logo-wordmark
import figma from 'figma'

const instance = figma.selectedInstance

const size = instance.getEnum('State', {
  large: 'large',
  small: 'small',
})

export default {
  example: figma.code`
    <LogoWordmark size="${size}" />
  `,
  imports: ['import { LogoWordmark } from "./components/Logo"'],
  id: 'logo-wordmark',
  metadata: {
    nestable: true,
  },
}
