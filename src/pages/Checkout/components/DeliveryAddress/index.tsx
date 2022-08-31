import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { DeliveryAddressContainer, Input } from './styles'

export function DeliveryAddress() {
  const { register, formState } = useFormContext()

  return (
    <DeliveryAddressContainer>
      <h4>
        <MapPinLine size={22} />
        Endereço de entrega
      </h4>

      <p>Informe o endereço onde deseja receber seu pedido</p>

      <div>
        <Input
          type="text"
          placeholder="CEP"
          {...register('cep')}
          hasError={!!formState.errors.cep?.message}
        />
        <Input
          type="text"
          placeholder="Rua"
          {...register('rua')}
          hasError={!!formState.errors.rua?.message}
        />

        <div>
          <Input
            type="text"
            placeholder="Número"
            {...register('numero')}
            hasError={!!formState.errors.numero?.message}
          />
          <Input
            type="text"
            placeholder="Complemento"
            {...register('complemento')}
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="Bairro"
            {...register('bairro')}
            hasError={!!formState.errors.bairro?.message}
          />
          <Input
            type="text"
            placeholder="Cidade"
            {...register('cidade')}
            hasError={!!formState.errors.cidade?.message}
          />
          <Input
            type="text"
            placeholder="UF"
            {...register('uf')}
            hasError={!!formState.errors.uf?.message}
          />
        </div>
      </div>
    </DeliveryAddressContainer>
  )
}
