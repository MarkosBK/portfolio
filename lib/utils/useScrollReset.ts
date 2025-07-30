'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'

export function useScrollReset() {
  const locale = useLocale()

  useEffect(() => {
    // Сбрасываем scroll position при смене языка
    window.scrollTo(0, 0)
  }, [locale])
}
