import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
`
export const Intro = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  background-image: url(/src/assets/blur-background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
export const IntroContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

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
  > div {
    margin: 2rem 0 9.813rem;
  }

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
