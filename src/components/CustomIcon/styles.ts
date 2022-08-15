import styled from 'styled-components'

export const ICONS_BACKGROUND = {
  shopping: 'yellow-dark',
  package: 'base-text',
  timer: 'yellow',
  coffee: 'purple',
  map: 'purple',
  dollar: 'yellow-dark',
} as const

interface IconsProps {
  iconBg: keyof typeof ICONS_BACKGROUND
}

export const IconContainer = styled.span<IconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;

  background: ${(props) => props.theme[ICONS_BACKGROUND[props.iconBg]]};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
`
