import styled from 'styled-components'

export const CoffeeCardCartContainer = styled.div`
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
