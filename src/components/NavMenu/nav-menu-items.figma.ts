// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=288-1034
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/NavMenu/NavMenuItems.tsx
// component=NavMenuItems
// figma=nav.menu-items
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  collapsed: 'collapsed',
  expanded: 'expanded',
  'expanded-cta': 'expanded-cta',
})

export default {
  example: figma.code`
    <NavMenuItems state="${state}" />
  `,
  imports: ['import { NavMenuItems } from "./components/NavMenu"'],
  id: 'nav-menu-items',
  metadata: {
    nestable: true,
  },
}
