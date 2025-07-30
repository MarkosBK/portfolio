'use client'

import { Button as HeroButton } from '@heroui/react'
import { cn } from '@/lib/cn'
import { ButtonProps } from './Button.types'

export const Button = ({
  className,
  variant = 'solid',
  color = 'default',
  size = 'md',
  animatedBorder = false,
  children,
  ...props
}: ButtonProps) => {
  // Основная кнопка с анимированным бордером
  if (variant === 'animated') {
    return (
      <HeroButton
        className={cn(
          'group border-animated relative overflow-hidden font-semibold transition-all duration-300 hover:scale-[1.02]',
          'text-gray-900 dark:text-white',
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'md' && 'px-6 py-3 text-base',
          size === 'lg' && 'px-8 py-4 text-base',
          className
        )}
        variant="solid"
        color={color}
        size={size}
        {...props}
      >
        {children}
        <div className="border-bottom" />
        <div className="border-left" />
      </HeroButton>
    )
  }

  // Вторичная кнопка с бордером
  if (variant === 'outline') {
    return (
      <HeroButton
        className={cn(
          'font-semibold transition-all duration-300 hover:scale-105',
          'border-border text-foreground hover:bg-muted hover:text-foreground border-2',
          'focus-visible:ring-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'md' && 'px-6 py-3 text-base',
          size === 'lg' && 'px-8 py-4 text-base',
          className
        )}
        variant="bordered"
        color={color}
        size={size}
        {...props}
      >
        {children}
      </HeroButton>
    )
  }

  // Обычная кнопка с опциональной бордер-анимацией
  const heroVariant = variant as
    | 'solid'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'faded'
    | 'shadow'
    | 'ghost'

  return (
    <HeroButton
      className={cn(
        'font-medium transition-all duration-300',
        'hover:scale-105 active:scale-95',
        'focus-visible:ring-border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        animatedBorder && 'border-animated group relative overflow-hidden',
        className
      )}
      variant={heroVariant}
      color={color}
      size={size}
      {...props}
    >
      {children}
      {animatedBorder && (
        <>
          <div className="border-bottom" />
          <div className="border-left" />
        </>
      )}
    </HeroButton>
  )
}
