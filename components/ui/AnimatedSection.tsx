'use client'

import { ReactNode } from 'react'
import { useLocale } from 'next-intl'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const locale = useLocale()

  return (
    <div key={locale} className={className}>
      {children}
    </div>
  )
}
