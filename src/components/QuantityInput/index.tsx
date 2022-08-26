import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
}

export function QuantityInput({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button
        type="button"
        onClick={onDecreaseQuantity}
        disabled={quantity <= 1}
      >
        <Minus weight="bold" />
      </button>
      <input type="text" value={quantity} readOnly />
      <button type="button" onClick={onIncreaseQuantity}>
        <Plus weight="bold" />
      </button>
    </QuantityInputContainer>
  )
}
