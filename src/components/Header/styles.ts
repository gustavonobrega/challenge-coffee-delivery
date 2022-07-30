import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;

      padding: 0.5rem;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;
      text-decoration: none;

      &:first-child {
        color: ${(props) => props.theme['purple-dark']};
        background: ${(props) => props.theme['purple-light']};
        font-size: 0.875rem;
        gap: 0.25rem;
      }
    }
  }
`
