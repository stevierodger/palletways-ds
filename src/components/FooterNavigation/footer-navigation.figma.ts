// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=288-1603
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/FooterNavigation/FooterNavigation.tsx
// component=FooterNavigation
// figma=footer-navigation
import figma from 'figma'

const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  desktop: 'desktop',
  mobile: 'mobile',
})

export default {
  example: figma.code`
    <FooterNavigation state="${state}" />
  `,
  imports: ['import { FooterNavigation } from "./components/FooterNavigation"'],
  id: 'footer-navigation',
  metadata: {
    nestable: true,
  },
}
