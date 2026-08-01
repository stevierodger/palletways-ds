// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2012-2844
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/PalletSizes/PalletSizes.tsx
// component=PalletSizes
// figma=pallet-sizes
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  mini: 'mini',
  'x-small': 'x-small',
  small: 'small',
  medium: 'medium',
  'narrow-medium': 'narrow-medium',
  large: 'large',
  'x-large': 'x-large',
})

export default {
  example: figma.code`
    <PalletSizes state="${state}" />
  `,
  imports: ['import { PalletSizes } from "./components/PalletSizes"'],
  id: 'pallet-sizes',
  metadata: {
    nestable: true,
  },
}
