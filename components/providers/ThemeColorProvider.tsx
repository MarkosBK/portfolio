'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeColorProvider() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Get the actual theme (resolvedTheme handles 'system' theme)
    const currentTheme = resolvedTheme || theme

    // Define theme colors that match CSS variables
    const themeColors = {
      light: '#ffffff', // var(--color-background) - light background
      dark: '#1a1f2e', // var(--color-background) - dark background
    }

    // Update theme-color meta tag
    const updateThemeColor = (color: string) => {
      let metaThemeColor = document.querySelector('meta[name="theme-color"]')

      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta')
        metaThemeColor.setAttribute('name', 'theme-color')
        document.getElementsByTagName('head')[0].appendChild(metaThemeColor)
      }

      metaThemeColor.setAttribute('content', color)
    }

    // Apply theme color
    if (currentTheme === 'dark') {
      updateThemeColor(themeColors.dark)
    } else {
      updateThemeColor(themeColors.light)
    }
  }, [theme, resolvedTheme, mounted])

  return null
}
