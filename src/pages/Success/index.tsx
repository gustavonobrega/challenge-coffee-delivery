import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import confirmedOrder from '../../assets/confirmed-order.png'
import { CustomIcon } from '../../components/CustomIcon'

import { SuccessContainer, ConfirmedOrder, OrderInfos } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <ConfirmedOrder>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <div>
          <OrderInfos>
            <CustomIcon iconBg="map">
              <MapPin size={16} weight="fill" />
            </CustomIcon>

            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br />
              Farrapos - Porto Alegre, RS
            </p>
          </OrderInfos>
          <OrderInfos>
            <CustomIcon iconBg="timer">
              <Timer size={16} weight="fill" />
            </CustomIcon>

            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </OrderInfos>
          <OrderInfos>
            <CustomIcon iconBg="dollar">
              <CurrencyDollar size={16} weight="fill" />
            </CustomIcon>

            <p>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </p>
          </OrderInfos>
        </div>
      </ConfirmedOrder>

      <img src={confirmedOrder} alt="" />
    </SuccessContainer>
  )
}
