// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2007-4482
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/PalletSelectionCard/PalletSelectionCard.tsx
// component=PalletSelectionCard
// figma=info.pallet-selection-card
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  help: 'help',
  'help-portrait': 'help-portrait',
  landscape: 'landscape',
  portrait: 'portrait',
  hover: 'hover',
})

export default {
  example: figma.code`
    <PalletSelectionCard state="${state}" />
  `,
  imports: ['import { PalletSelectionCard } from "./components/PalletSelectionCard"'],
  id: 'info.pallet-selection-card',
  metadata: {
    nestable: true,
  },
}
