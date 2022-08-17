import styled from 'styled-components'

export const OrderCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
`

export const CoffeeCardCart = styled.div`
  display: flex;
  padding-bottom: 2.094rem;
  margin-bottom: 2.094rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    height: 4rem;
    width: 4rem;
  }

  > div {
    margin-left: 1.25rem;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.5rem;
    }

    > div {
      display: flex;
      gap: 0.5rem;
    }
  }

  span {
    margin-left: auto;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.406rem 0.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    color: ${(props) => props.theme['base-subtitle']};
    background: ${(props) => props.theme['base-hover']};
  }
`

export const OrderConfirmation = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.813rem;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};

      &:last-child {
        font-size: 1rem;
      }
    }

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  button {
    margin-top: 0.688rem;
    width: 100%;
    padding: 0.875rem 0;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
