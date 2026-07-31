// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2059-4796
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/CalendarDate/CalendarDate.tsx
// component=CalendarDate
// figma=calendar-date
import figma from 'figma'

const instance = figma.selectedInstance

const date = instance.getString('date')
const state = instance.getEnum('State', {
  default: 'default',
  'default-hover': 'default',
  empty: 'empty',
  'empty-hover': 'empty',
  today: 'today',
  'today-hover': 'today',
  'collection-default': 'collection',
  'collection-hover': 'collection',
  'travel-default': 'travel',
  'travel-hover': 'travel',
  'delivery-default': 'delivery',
  'delivery-hover': 'delivery',
  disabled: 'disabled',
})

const disabled = state === 'disabled'
const tone = disabled ? 'default' : state

export default {
  example: figma.code`
    <CalendarDate
      date="${date}"
      tone="${tone}"
      ${disabled ? 'disabled' : ''}
    />
  `,
  imports: ['import { CalendarDate } from "./components/CalendarDate"'],
  id: 'calendar-date',
  metadata: {
    nestable: true,
  },
}
