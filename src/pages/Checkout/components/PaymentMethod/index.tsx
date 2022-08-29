import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodContainer, PaymentType } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <h4>
        <CurrencyDollar size={22} />
        Pagamento
      </h4>

      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

      <div>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentType key={key}>
            <input type="radio" id={key} value={label} name="paymentMethod" />
            <label htmlFor={key}>
              <div>
                {icon}
                {label}
              </div>
            </label>
          </PaymentType>
        ))}
      </div>
    </PaymentMethodContainer>
  )
}
