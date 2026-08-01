// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2007-5851
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/PalletSelection/PalletSelection.tsx
// component=PalletSelection
// figma=info.pallet-selection
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  default: 'default',
  alt: 'alt',
})

export default {
  example: figma.code`
    <PalletSelection state="${state}" />
  `,
  imports: ['import { PalletSelection } from "./components/PalletSelection"'],
  id: 'info.pallet-selection',
  metadata: {
    nestable: true,
  },
}
