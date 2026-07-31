// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2280-8235
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Input/Input.tsx
// component=Input
// figma=input-field
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('Label')
const value = instance.getString('Value')
const helpText = instance.getString('Help text')
const showHelp = instance.getBoolean('Show help text')

const state = instance.getEnum('State', {
  static: 'static',
  hover: 'hover',
  'active-empty': 'active-empty',
  'active-filled': 'active-filled',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  success: 'success',
})

// Leading/Trailing icon INSTANCE_SWAPs omitted — Input has no icon props yet
const isDisabled = state === 'disabled'
const isError = state === 'error'
const isEmpty =
  state === 'static' || state === 'hover' || state === 'active-empty'

export default {
  example: figma.code`
    <Input
      label="${label}"
      ${isEmpty ? figma.code`placeholder="${value}"` : figma.code`defaultValue="${value}"`}
      ${isError ? figma.code`error="${helpText}"` : showHelp ? figma.code`hint="${helpText}"` : ''}
      ${isDisabled ? 'disabled' : ''}
    />
  `,
  imports: ['import { Input } from "./components/Input"'],
  id: 'input-field',
  metadata: {
    nestable: true,
  },
}
