import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee-delivery.png'

import { HomeContainer, Intro, CoffeeList, CoffeesContainer } from './styles'
import { CoffeeCard } from './components/CoffeeCard'
import { CustomIcon } from '../../components/CustomIcon'

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
              <CustomIcon iconBg="shopping">
                <ShoppingCart weight="fill" />
              </CustomIcon>
              Compra simples e segura
            </li>
            <li>
              <CustomIcon iconBg="package">
                <Package weight="fill" />
              </CustomIcon>
              Embalagem mantém o café intacto
            </li>
            <li>
              <CustomIcon iconBg="timer">
                <Timer weight="fill" />
              </CustomIcon>
              Entrega rápida e rastreada
            </li>
            <li>
              <CustomIcon iconBg="coffee">
                <Coffee weight="fill" />
              </CustomIcon>
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
