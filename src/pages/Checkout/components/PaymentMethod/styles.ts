import styled, { css } from 'styled-components'
import { BaseCompleteOrderCard } from '../../styles'

export const PaymentMethodContainer = styled(BaseCompleteOrderCard)`
  margin-top: 0.75rem;

  h4 {
    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  div {
    margin-top: 2rem;

    display: flex;
    gap: 0.75rem;
  }
`
interface PaymentTypeButtonProps {
  isSelected?: boolean
}

export const PaymentTypeButton = styled.button<PaymentTypeButtonProps>`
  flex: 1;
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

  &:not(:disabled):hover {
    color: ${(props) => props.theme['base-subtitle']};
    background: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.isSelected &&
    css`
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};

      &:disabled {
        cursor: default;
      }
    `}
`
