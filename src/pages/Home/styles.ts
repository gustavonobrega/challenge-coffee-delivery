import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
`
export const Intro = styled.div`
  height: 34rem;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  width: 100%;
  background-image: url(/src/assets/blur-background.png);
  background-repeat: no-repeat;
  background-size: cover;

  div {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    > ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1.563rem;

      margin-top: 4.125rem;

      li {
        display: flex;
        align-items: center;
      }
    }
  }
`

const ITEMS_COLORS = {
  shopping: 'yellow-dark',
  package: 'base-text',
  timer: 'yellow',
  coffee: 'purple',
} as const

interface ItemsProps {
  itemColor: keyof typeof ITEMS_COLORS
}

export const Items = styled.span<ItemsProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  margin-right: 0.75rem;
  border-radius: 50%;
  background: ${(props) => props.theme[ITEMS_COLORS[props.itemColor]]};

  svg {
    color: ${(props) => props.theme.white};
  }
`
export const CoffeeList = styled.main`
  margin: 2rem 0 9.813rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeesContainer = styled.div`
  margin-top: 3.375rem;

  display: flex;
  gap: 2rem;
`
