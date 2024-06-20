import { ReactNode } from 'react'
import { ContainerStyles } from './Container.styles'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <ContainerStyles>{children}</ContainerStyles>
}
