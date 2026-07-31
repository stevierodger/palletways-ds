// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=277-683
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Button/Button.tsx
// component=Button
// figma=button-ghost-lg → variant="ghost" size="lg"
import figma from 'figma'

const instance = figma.selectedInstance

const label = instance.getString('button text')
const state = instance.getEnum('State', {
  default: 'default',
  hover: 'hover',
  focus: 'focus',
  disabled: 'disabled',
  loading: 'loading',
  error: 'error',
  success: 'success',
})

const showLeading = instance.getBoolean('Show leading icon')
const showTrailing = instance.getBoolean('Show trailing icon')
const leadingIcon = showLeading ? instance.getSlot('leading-icon') : undefined
const trailingIcon = showTrailing ? instance.getSlot('trailing-icon') : undefined

const isLoading = state === 'loading'
const isDisabled = state === 'disabled'

// Figma State hover/focus/error/success are visual-only — no matching ButtonProps

export default {
  example: figma.code`
    <Button
      variant="ghost"
      size="lg"
      ${isLoading ? 'loading' : ''}
      ${isDisabled ? 'disabled' : ''}
      ${leadingIcon ? figma.code`leadingIcon={${leadingIcon}}` : ''}
      ${trailingIcon ? figma.code`trailingIcon={${trailingIcon}}` : ''}
    >
      ${label}
    </Button>
  `,
  imports: ['import { Button } from "./components/Button"'],
  id: 'button-ghost-lg',
  metadata: {
    nestable: true,
  },
}
