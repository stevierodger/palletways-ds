// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2069-5436
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/SelectionCard/SelectionCard.tsx
// component=SelectionCard
// figma=selection-cards
import figma from 'figma'

const instance = figma.selectedInstance

const endDate = instance.getString('collection-date')
const endTime = instance.getString('collection-time')
const price = instance.getString('price')
const showPriceNote = instance.getBoolean('price-note')

const state = instance.getEnum('State', {
  'economy-default': 'economy',
  'economy-hover': 'economy',
  'economy-selected': 'economy-selected',
  'premium-default': 'premium',
  'premium-hover': 'premium',
  'premium-selected': 'premium-selected',
  'empty-state': 'empty',
})

const isEmpty = state === 'empty'
const selected = state === 'economy-selected' || state === 'premium-selected'
const plan = state.startsWith('premium') ? 'premium' : 'economy'

export default {
  example: isEmpty
    ? figma.code`<SelectionCard empty />`
    : figma.code`
    <SelectionCard
      plan="${plan}"
      endDate="${endDate}"
      endTime="${endTime}"
      price="${price}"
      ${showPriceNote ? '' : 'showPriceNote={false}'}
      ${selected ? 'selected' : ''}
    />
  `,
  imports: ['import { SelectionCard } from "./components/SelectionCard"'],
  id: 'selection-cards',
  metadata: {
    nestable: true,
  },
}
