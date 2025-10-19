'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'

export function useScrollReset() {
  const locale = useLocale()

  useEffect(() => {
    // Reset scroll position when language changes
    window.scrollTo(0, 0)
  }, [locale])
}
