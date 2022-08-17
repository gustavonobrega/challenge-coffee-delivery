import { DeliveryAddress } from './components/DeliveryAddress'
import { PaymentMethod } from './components/PaymentMethod'
import { OrderCard } from './components/OrderCard'

import { CheckoutContainer, CompleteOrder, SelectedCoffees } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h3>Complete seu pedido</h3>

        <DeliveryAddress />

        <PaymentMethod />
      </CompleteOrder>

      <SelectedCoffees>
        <h3>Cafés selecionados</h3>

        <OrderCard />
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
