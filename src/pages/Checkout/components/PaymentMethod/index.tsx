import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { PaymentMethodContainer, PaymentTypeButton } from './styles'

export function PaymentMethod() {
  const [isSelected, setIsSelected] = useState(true)

  return (
    <PaymentMethodContainer>
      <h4>
        <CurrencyDollar size={22} />
        Pagamento
      </h4>

      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

      <div>
        <PaymentTypeButton
          type="button"
          isSelected={isSelected}
          disabled={isSelected}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentTypeButton>
        <PaymentTypeButton type="button">
          <Bank size={16} />
          Cartão de débito
        </PaymentTypeButton>
        <PaymentTypeButton type="button">
          <Money size={16} />
          Dinheiro
        </PaymentTypeButton>
      </div>
    </PaymentMethodContainer>
  )
}
