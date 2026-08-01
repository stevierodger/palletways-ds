// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2118-6960
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/FieldComponents/FieldComponents.tsx
// component=FieldComponents
// figma=field-components
import figma from 'figma'

const instance = figma.selectedInstance

const variant = instance.getEnum('field-components', {
  'field-title': 'field-title',
  'field-input': 'field-input',
  'field-help-text': 'field-help-text',
  'field-dropdown-option': 'field-dropdown-option',
  'field-dropdown-hover': 'field-dropdown-hover',
})

const showLeadingIcon = instance.getBoolean('View leading icon')
const showTrailingIcon = instance.getBoolean('View trailing icon')
const showHelpIcon = instance.getBoolean('View help icon')

export default {
  example: figma.code`
    <FieldComponents
      variant="${variant}"
      ${showLeadingIcon ? 'showLeadingIcon' : ''}
      ${showTrailingIcon ? 'showTrailingIcon' : ''}
      ${showHelpIcon ? 'showHelpIcon' : ''}
    />
  `,
  imports: ['import { FieldComponents } from "./components/FieldComponents"'],
  id: 'field-components',
  metadata: {
    nestable: true,
  },
}
