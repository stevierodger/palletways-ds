// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=210-319
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Input/Input.tsx
// component=Input
// figma=field (legacy set — prefer input-field for richer props)
import figma from 'figma'

const instance = figma.selectedInstance

const showHelp = instance.getBoolean('help text')
const showTitle = instance.getBoolean('view-field-title')

const field = instance.getEnum('field', {
  static: 'static',
  hover: 'hover',
  focus: 'focus',
  'active-empty': 'active-empty',
  'active-filled': 'active-filled',
  complete: 'complete',
  error: 'error',
  disabled: 'disabled',
  'field-dropdown': 'field-dropdown',
})

const titleLayer = instance.findText('field-title', { traverseInstances: true })
const helpLayer =
  instance.findText('Supporting hint text', { traverseInstances: true }) ||
  instance.findText('help-text', { traverseInstances: true })
const valueLayer =
  instance.findText('Value text', { traverseInstances: true }) ||
  instance.findText('Placeholder', { traverseInstances: true }) ||
  instance.findText('field input', { traverseInstances: true }) ||
  instance.findText('field-input', { traverseInstances: true })

const label =
  showTitle && titleLayer && titleLayer.type === 'TEXT' ? titleLayer.textContent : undefined
const helpText =
  helpLayer && helpLayer.type === 'TEXT' ? helpLayer.textContent : undefined
const value =
  valueLayer && valueLayer.type === 'TEXT' ? valueLayer.textContent : undefined

const isDisabled = field === 'disabled'
const isError = field === 'error'
const isEmpty =
  field === 'static' ||
  field === 'hover' ||
  field === 'focus' ||
  field === 'active-empty'

export default {
  example: figma.code`
    <Input
      ${label ? figma.code`label="${label}"` : ''}
      ${value ? (isEmpty ? figma.code`placeholder="${value}"` : figma.code`defaultValue="${value}"`) : ''}
      ${isError && helpText ? figma.code`error="${helpText}"` : showHelp && helpText ? figma.code`hint="${helpText}"` : ''}
      ${isDisabled ? 'disabled' : ''}
    />
  `,
  imports: ['import { Input } from "./components/Input"'],
  id: 'field',
  metadata: {
    nestable: true,
  },
}
