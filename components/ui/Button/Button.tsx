'use client'

import { Button as HeroButton } from '@heroui/react'
import { cn } from '@/lib/cn'
import { ButtonProps } from './Button.types'

export const Button = ({ 
  className, 
  variant = 'solid', 
  color = 'primary',
  size = 'md',
  ...props 
}: ButtonProps) => {
  return (
    <HeroButton
      className={cn(
        'transition-all duration-300 font-medium',
        'hover:scale-105 active:scale-95',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className
      )}
      variant={variant}
      color={color}
      size={size}
      {...props}
    />
  )
} 