import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <button type="button">
        <Minus weight="bold" />
      </button>
      <input type="text" value={1} readOnly />
      <button type="button">
        <Plus weight="bold" />
      </button>
    </QuantityInputContainer>
  )
}
