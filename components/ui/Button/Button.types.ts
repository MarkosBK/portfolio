import { ButtonProps as HeroButtonProps } from '@heroui/react'

export interface ButtonProps extends Omit<HeroButtonProps, 'variant'> {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost' | 'animated' | 'outline'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animatedBorder?: boolean
} 