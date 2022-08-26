import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  /* margin-left: 1.438rem; */

  input {
    width: 1rem;
    text-align: center;
    border: none;
    background: ${(props) => props.theme['base-title']};
    background: ${(props) => props.theme['base-button']};

    &:focus {
      outline: none;
    }
  }

  > button {
    height: 2.375rem;
    width: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px 0 0 6px;
    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;

    &:not(:disabled):hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:disabled {
      cursor: default;
    }
  }

  > button:last-child {
    border-radius: 0 6px 6px 0;
  }
`
