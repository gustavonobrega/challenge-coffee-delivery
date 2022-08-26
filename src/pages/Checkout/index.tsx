import { DeliveryAddress } from './components/DeliveryAddress'
import { PaymentMethod } from './components/PaymentMethod'

import {
  CheckoutContainer,
  CompleteOrder,
  SelectedCoffees,
  OrderCard,
  EmptyCard,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeCardCart } from './components/CoffeeCardCart'
import { OrderConfirmation } from './components/OrderConfirmation'

export function Checkout() {
  const { cart } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h3>Complete seu pedido</h3>

        <DeliveryAddress />

        <PaymentMethod />
      </CompleteOrder>

      <SelectedCoffees>
        <h3>Cafés selecionados</h3>

        <OrderCard>
          {cart.length > 0 ? (
            cart.map((coffee) => (
              <CoffeeCardCart key={coffee.id} coffee={coffee} />
            ))
          ) : (
            <EmptyCard>Você não possui nenhum item no carrinho!</EmptyCard>
          )}

          <OrderConfirmation />
        </OrderCard>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
