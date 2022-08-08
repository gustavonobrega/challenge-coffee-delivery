import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee-delivery.png'

import {
  HomeContainer,
  Intro,
  Items,
  CoffeeList,
  CoffeesContainer,
} from './styles'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            <li>
              <Items itemColor="shopping">
                <ShoppingCart weight="fill" />
              </Items>
              Compra simples e segura
            </li>
            <li>
              <Items itemColor="package">
                <Package weight="fill" />
              </Items>
              Embalagem mantém o café intacto
            </li>
            <li>
              <Items itemColor="timer">
                <Timer weight="fill" />
              </Items>
              Entrega rápida e rastreada
            </li>
            <li>
              <Items itemColor="coffee">
                <Coffee weight="fill" />
              </Items>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>

        <img src={coffee} alt="A cup of coffee" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <CoffeesContainer>
          <CoffeeCard
            id={1}
            imgUrl="src/assets/coffees/expresso-tradicional.png"
            tags={['Tradicional']}
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
          <CoffeeCard
            id={2}
            imgUrl="src/assets/coffees/expresso-tradicional.png"
            tags={['Tradicional', 'Gelado']}
            name="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
            price={9.9}
          />
        </CoffeesContainer>
      </CoffeeList>
    </HomeContainer>
  )
}
