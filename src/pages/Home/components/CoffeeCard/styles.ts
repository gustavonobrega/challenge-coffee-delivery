import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    height: 7.5rem;
    width: 7.5rem;

    margin-top: -1.25rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    gap: 0.25rem;

    > span {
      padding: 0.25rem 0.5rem;
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 100px;
    }
  }

  strong {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.063rem;

  div:nth-child(1) {
    margin-right: 1.438rem;

    span {
      font-size: 0.875rem;
      margin-right: 0.25rem;
    }

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  > button {
    margin-left: 0.25rem;

    padding: 0.5rem 0.5rem 0.25rem;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.1s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
