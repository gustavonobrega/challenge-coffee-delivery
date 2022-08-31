import styled from 'styled-components'
import { BaseCompleteOrderCard } from '../../styles'

export const PaymentMethodContainer = styled(BaseCompleteOrderCard)`
  margin-top: 0.75rem;

  h4 {
    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  > div {
    margin: 1rem 0;

    display: flex;
    gap: 0.75rem;
  }

  > span {
    font-size: 0.9rem;
    color: red;
  }
`

export const PaymentType = styled.div`
  flex: 1;

  input {
    visibility: hidden;
    appearance: none;

    &:checked + label div {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};

      cursor: default;
    }
  }

  label div {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    padding: 1rem;
    border: none;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
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
  }
`
