import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer, StyledNavLink } from './styles'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const { cart } = useContext(CartContext)

  const totalCartItens = cart.reduce((acc, item) => {
    return (acc += item.amount)
  }, 0)

  return (
    <HeaderContainer>
      <Link to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>

      <nav>
        <span>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </span>
        <StyledNavLink to="/checkout" title="Checkout">
          {cart.length >= 1 && <span>{totalCartItens}</span>}
          <ShoppingCart size={24} weight="fill" />
        </StyledNavLink>
      </nav>
    </HeaderContainer>
  )
}
