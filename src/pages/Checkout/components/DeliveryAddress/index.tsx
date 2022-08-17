import { MapPinLine } from 'phosphor-react'
import { DeliveryAddressContainer, FormInput } from './styles'

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <h4>
        <MapPinLine size={22} />
        Endereço de entrega
      </h4>

      <p>Informe o endereço onde deseja receber seu pedido</p>

      <form action="">
        <FormInput type="text" placeholder="CEP" />
        <FormInput type="text" placeholder="Rua" />

        <div>
          <FormInput type="text" placeholder="Número" />
          <FormInput type="text" placeholder="Complemento" />
        </div>

        <div>
          <FormInput type="text" placeholder="Bairro" />
          <FormInput type="text" placeholder="Cidade" />
          <FormInput type="text" placeholder="UF" />
        </div>
      </form>
    </DeliveryAddressContainer>
  )
}
