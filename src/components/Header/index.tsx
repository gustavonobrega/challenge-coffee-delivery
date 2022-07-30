import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <nav>
        <NavLink to="/" title="Home">
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
