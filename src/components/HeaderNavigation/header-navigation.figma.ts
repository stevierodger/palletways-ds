// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=194-2378
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/HeaderNavigation/HeaderNavigation.tsx
// component=HeaderNavigation
// figma=header-navigation
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  desktop: 'desktop',
  'desktop-cta': 'desktop-cta',
  mobile: 'mobile',
})

export default {
  example: figma.code`
    <HeaderNavigation state="${state}" />
  `,
  imports: ['import { HeaderNavigation } from "./components/HeaderNavigation"'],
  id: 'header-navigation',
  metadata: {
    nestable: true,
  },
}
