import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatPrice } from '../../../../utils/formatPrice'
import { CoffeeCardContainer, CoffeeCardFooter } from './styles'

interface CoffeeCardProps {
  id: number
  imgUrl: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  id,
  imgUrl,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  const formattedPrice = formatPrice(price)

  return (
    <CoffeeCardContainer>
      <img src={imgUrl} alt="" />

      <div>
        {tags.map((tag) => (
          <span key={id}>{tag}</span>
        ))}
      </div>

      <strong>{name}</strong>

      <p>{description}</p>

      <CoffeeCardFooter>
        <div>
          <span>R$</span>
          <strong>{formattedPrice}</strong>
        </div>

        <QuantityInput />

        <button type="button">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
