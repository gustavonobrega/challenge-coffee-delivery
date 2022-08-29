import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;

  nav {
    display: flex;
    gap: 0.75rem;

    > span {
      display: flex;
      align-items: center;

      padding: 0.5rem;
      color: ${(props) => props.theme['purple-dark']};
      background: ${(props) => props.theme['purple-light']};
      font-size: 0.875rem;
      border-radius: 6px;
      gap: 0.25rem;
      cursor: default;
    }
  }
`

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;

  padding: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  text-decoration: none;

  span {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    position: absolute;
    top: -0.5rem;
    right: -0.522rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
