// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=194-2939
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Breadcrumbs/Breadcrumbs.tsx
// component=Breadcrumbs
// figma=Breadcrumbs
import figma from 'figma'

const instance = figma.selectedInstance
const homeLayer = instance.findText('Home')
const currentLayer = instance.findText('About Us')
const home =
  homeLayer && homeLayer.type === 'TEXT' ? homeLayer.textContent : 'Home'
const current =
  currentLayer && currentLayer.type === 'TEXT'
    ? currentLayer.textContent
    : 'About Us'

export default {
  example: figma.code`
    <Breadcrumbs
      items={[
        { label: "${home}", href: "/" },
        { label: "${current}", current: true },
      ]}
    />
  `,
  imports: ['import { Breadcrumbs } from "./components/Breadcrumbs"'],
  id: 'breadcrumbs',
  metadata: {
    nestable: true,
  },
}
