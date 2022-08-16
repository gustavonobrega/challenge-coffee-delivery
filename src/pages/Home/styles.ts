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

        > span {
          margin-right: 0.75rem;
        }
      }
    }
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
  flex-wrap: wrap;
  gap: 2rem;
`
