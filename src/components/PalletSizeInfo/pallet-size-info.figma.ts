// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=2007-4430
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/PalletSizeInfo/PalletSizeInfo.tsx
// component=PalletSizeInfo
// figma=info.pallet-size
import figma from 'figma'

const instance = figma.selectedInstance

const dimension = instance.getString('dimension')
const value = instance.getString('value')
const changed = instance.getEnum('State', {
  default: false,
  change: true,
})

export default {
  example: figma.code`
    <PalletSizeInfo
      dimension="${dimension}"
      value="${value}"
      ${changed ? 'changed' : ''}
    />
  `,
  imports: ['import { PalletSizeInfo } from "./components/PalletSizeInfo"'],
  id: 'pallet-size-info',
  metadata: {
    nestable: true,
  },
}
