'use client'

import { useLocale } from 'next-intl'
import { ReactNode } from 'react'

interface LanguageAnimationProviderProps {
  children: ReactNode
}

export function LanguageAnimationProvider({ children }: LanguageAnimationProviderProps) {
  const locale = useLocale()

  return (
    <div key={locale} className="contents">
      {children}
    </div>
  )
}
