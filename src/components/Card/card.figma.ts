// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2283-8404
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Card/Card.tsx
// component=Card
// figma=card
import figma from 'figma'

const instance = figma.selectedInstance

const variant = instance.getEnum('Property 1', {
  'content-card': 'content-card',
  'trustpilot-card': 'trustpilot-card',
})

const showImage = instance.getBoolean('image')
const showLeadingIcon = instance.getBoolean('Leading icon')
const showTitle = instance.getBoolean('Title')
const showTags = instance.getBoolean('Tags')
const showStrongText = instance.getBoolean('Strong text')
const showBody = instance.getBoolean('Body content')
const showCallToAction = instance.getBoolean('call to action')

export default {
  example: figma.code`
    <Card
      variant="${variant}"
      ${showImage ? 'showImage' : ''}
      ${showLeadingIcon ? 'showLeadingIcon' : ''}
      ${showTitle ? '' : 'showTitle={false}'}
      ${showTags ? 'showTags' : ''}
      ${showStrongText ? 'showStrongText' : ''}
      ${showBody ? '' : 'showBody={false}'}
      ${showCallToAction ? 'showCallToAction' : ''}
    />
  `,
  imports: ['import { Card } from "./components/Card"'],
  id: 'card',
  metadata: {
    nestable: true,
  },
}
