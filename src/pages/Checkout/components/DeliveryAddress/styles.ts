import styled from 'styled-components'
import { BaseCompleteOrderCard } from '../../styles'

export const DeliveryAddressContainer = styled(BaseCompleteOrderCard)`
  h4 {
    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input:first-child {
      width: 12.5rem;
    }

    > div {
      display: grid;
      grid-template-columns: 12.5rem 1fr;
      gap: 0.75rem;
    }

    > div:last-child {
      grid-template-columns: 12.5rem 1fr 3.75rem;
    }
  }
`

export const FormInput = styled.input`
  padding: 0.75rem;
  font-size: 0.875rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};
  outline: none;

  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
