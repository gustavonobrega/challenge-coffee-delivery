import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../utils/formatPrice'

import { OrderConfirmationContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function OrderConfirmation() {
  const { cart } = useContext(CartContext)

  const subTotal = formatPrice(
    cart.reduce((acc, item) => {
      return (acc += item.amount * item.price)
    }, 0),
  )

  const FormattedDeliveryPrice = formatPrice(DELIVERY_PRICE)

  const TotalCartPrice = formatPrice(
    DELIVERY_PRICE + parseFloat(subTotal.replace(',', '.')),
  )

  return (
    <OrderConfirmationContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ {subTotal}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {FormattedDeliveryPrice}</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>R$ {TotalCartPrice}</strong>
      </div>

      <button type="submit" disabled={cart.length <= 0}>
        Confirmar Pedido
      </button>
    </OrderConfirmationContainer>
  )
}
