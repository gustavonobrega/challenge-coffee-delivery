import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { QuantityInput } from '../../../../components/QuantityInput'
import { formatPrice } from '../../../../utils/formatPrice'

import { CoffeeCardContainer, CoffeeCardFooter } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

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
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  function onDecreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  function onIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const formattedPrice = formatPrice(price)

  return (
    <CoffeeCardContainer key={id}>
      <img src={imgUrl} alt="" />

      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <strong>{name}</strong>

      <p>{description}</p>

      <CoffeeCardFooter>
        <div>
          <span>R$</span>
          <strong>{formattedPrice}</strong>
        </div>

        <QuantityInput
          quantity={quantity}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
        />

        <button type="button" onClick={() => addToCart(id, quantity)}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
