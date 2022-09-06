import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import confirmedOrder from '../../assets/confirmed-order.png'
import { CustomIcon } from '../../components/CustomIcon'
import { NewOrderFormData } from '../Checkout'

import { SuccessContainer, ConfirmedOrder, OrderInfos } from './styles'

interface LocationProps {
  state: NewOrderFormData
}

export function Success() {
  const { state } = useLocation() as LocationProps

  return (
    <div className="container">
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
                Entrega em{' '}
                <b>
                  {state.rua}, {state.numero}
                </b>
                <br />
                {state.bairro} - {state.cidade}, {state.uf}
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
                <b>{state.paymentMethod}</b>
              </p>
            </OrderInfos>
          </div>
        </ConfirmedOrder>

        <img src={confirmedOrder} alt="" />
      </SuccessContainer>
    </div>
  )
}
