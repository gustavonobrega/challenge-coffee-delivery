import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee-delivery.png'

import {
  HomeContainer,
  Intro,
  IntroContent,
  CoffeeList,
  CoffeesContainer,
} from './styles'
import { CoffeeCard } from './components/CoffeeCard'
import { CustomIcon } from '../../components/CustomIcon'
import { coffees } from '../../data/coffees'

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <IntroContent className="container">
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
        </IntroContent>
      </Intro>

      <CoffeeList className="container">
        <div>
          <h2>Nossos cafés</h2>

          <CoffeesContainer>
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                imgUrl={`src/assets/coffees/${coffee.photo}`}
                tags={coffee.tags}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
              />
            ))}
          </CoffeesContainer>
        </div>
      </CoffeeList>
    </HomeContainer>
  )
}
