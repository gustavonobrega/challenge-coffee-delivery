import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartContext } from '../../contexts/CartContext'
import { DeliveryAddress } from './components/DeliveryAddress'
import { PaymentMethod } from './components/PaymentMethod'
import { CoffeeCardCart } from './components/CoffeeCardCart'
import { OrderConfirmation } from './components/OrderConfirmation'
import {
  CheckoutContainer,
  CompleteOrder,
  SelectedCoffees,
  OrderCard,
  EmptyCard,
} from './styles'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o seu CEP'),
  rua: zod.string().min(1, 'Informe sua Rua'),
  numero: zod.string().min(1, 'Informe o seu Número'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o seu Bairro'),
  cidade: zod.string().min(1, 'Informe sua Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.string().min(1, 'Informe o Método de pagamento'),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { cart } = useContext(CartContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { handleSubmit } = newOrderForm

  const navigate = useNavigate()

  function handleCreateNewOrder(data: NewOrderFormData) {
    navigate('/success', {
      state: data,
    })
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <CompleteOrder>
          <h3>Complete seu pedido</h3>

          <FormProvider {...newOrderForm}>
            <DeliveryAddress />

            <PaymentMethod />
          </FormProvider>
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
      </form>
    </CheckoutContainer>
  )
}
