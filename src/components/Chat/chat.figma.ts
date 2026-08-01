// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2145-13148
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Chat/Chat.tsx
// component=Chat
// figma=chat.component
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  collapsed: 'collapsed',
  expanded: 'expanded',
})

export default {
  example: figma.code`
    <Chat state="${state}" />
  `,
  imports: ['import { Chat } from "./components/Chat"'],
  id: 'chat.component',
  metadata: {
    nestable: true,
  },
}
