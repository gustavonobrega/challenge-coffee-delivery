import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
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

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
`
