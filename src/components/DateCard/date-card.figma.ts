// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2296-14613
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/DateCard/DateCard.tsx
// component=DateCard
// figma=date-card
import figma from 'figma'

const instance = figma.selectedInstance
const titleLayer = instance.findText('Choose collection date')
const title =
  titleLayer && titleLayer.type === 'TEXT'
    ? titleLayer.textContent
    : 'Choose collection date'

export default {
  example: figma.code`
    <DateCard
      title="${title}"
      month="JULY"
      year={2026}
      days={[{ date: "15", tone: "today" }]}
    />
  `,
  imports: ['import { DateCard } from "./components/DateCard"'],
  id: 'date-card',
  metadata: {
    nestable: false,
  },
}
