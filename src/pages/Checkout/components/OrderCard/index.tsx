import { formatPrice } from '../../../../utils/formatPrice'

import imgUrl from '../../../../assets/coffees/expresso-tradicional.png'

import {
  OrderCardContainer,
  CoffeeCardCart,
  OrderConfirmation,
  RemoveButton,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from 'phosphor-react'

export function OrderCard() {
  const formattedPrice = formatPrice(9.9)
  const formattedTotalItensPrice = formatPrice(29.7)
  const formattedDeliveryPrice = formatPrice(3.5)
  const formattedTotalCartPrice = formatPrice(33.2)

  return (
    <OrderCardContainer>
      <CoffeeCardCart>
        <img src={imgUrl} alt="" />

        <div>
          <p>Expresso Tradicional</p>

          <div>
            <QuantityInput />
            <RemoveButton type="button">
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </div>

        <span>R$ {formattedPrice}</span>
      </CoffeeCardCart>

      <OrderConfirmation>
        <div>
          <span>Total de itens</span>
          <span>R$ {formattedTotalItensPrice}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ {formattedDeliveryPrice}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {formattedTotalCartPrice}</strong>
        </div>

        <button>Confirmar Pedido</button>
      </OrderConfirmation>
    </OrderCardContainer>
  )
}
