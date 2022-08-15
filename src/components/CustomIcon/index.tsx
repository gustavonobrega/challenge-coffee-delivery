import { ReactNode } from 'react'

import { IconContainer, ICONS_BACKGROUND } from './styles'

interface CustomIconProps {
  children: ReactNode
  iconBg: keyof typeof ICONS_BACKGROUND
}

export function CustomIcon({ children, iconBg }: CustomIconProps) {
  return <IconContainer iconBg={iconBg}>{children}</IconContainer>
}
