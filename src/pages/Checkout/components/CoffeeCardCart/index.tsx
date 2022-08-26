import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext, CartCoffee } from '../../../../contexts/CartContext'
import { QuantityInput } from '../../../../components/QuantityInput'

import { CoffeeCardCartContainer, RemoveButton } from './styles'
import { formatPrice } from '../../../../utils/formatPrice'

interface CoffeeCardCartProps {
  coffee: CartCoffee
}

export function CoffeeCardCart({ coffee }: CoffeeCardCartProps) {
  const { updateCoffeeCart, removeCoffeeCart } = useContext(CartContext)

  function onDecreaseQuantity() {
    updateCoffeeCart({ coffeeId: coffee.id, coffeeAmount: coffee.amount - 1 })
  }
  function onIncreaseQuantity() {
    updateCoffeeCart({ coffeeId: coffee.id, coffeeAmount: coffee.amount + 1 })
  }

  const formattedPrice = formatPrice(coffee.amount * coffee.price)

  return (
    <CoffeeCardCartContainer key={coffee.id}>
      <img src={`src/assets/coffees/${coffee.photo}`} alt="" />

      <div>
        <p>{coffee.name}</p>

        <div>
          <QuantityInput
            quantity={coffee.amount}
            onDecreaseQuantity={onDecreaseQuantity}
            onIncreaseQuantity={onIncreaseQuantity}
          />
          <RemoveButton
            type="button"
            onClick={() => removeCoffeeCart(coffee.id)}
          >
            <Trash size={16} />
            Remover
          </RemoveButton>
        </div>
      </div>

      <span>R$ {formattedPrice}</span>
    </CoffeeCardCartContainer>
  )
}
