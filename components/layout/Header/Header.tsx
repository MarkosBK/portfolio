'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react'
import { Sun, Moon, Globe, Menu, X } from 'lucide-react'
import { useRouter, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/cn'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = useTranslations('navigation')
  const tTheme = useTranslations('theme')
  const tLanguage = useTranslations('language')
  const router = useRouter()
  const pathname = usePathname()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ]

  const languages = [
    { code: 'ua', name: tLanguage('ukrainian'), flag: '🇺🇦' },
    { code: 'ru', name: tLanguage('russian'), flag: '🇷🇺' },
    { code: 'en', name: tLanguage('english'), flag: '🇺🇸' },
    { code: 'de', name: tLanguage('german'), flag: '🇩🇪' },
  ]

  const currentLocale = pathname.split('/')[1] || 'ua'
  const currentLanguage = languages.find(lang => lang.code === currentLocale)

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const changeLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/[^\/]+/, `/${locale}`)
    router.push(newPath)
  }

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="glass-effect border-border/50 fixed top-0 z-50 border-b backdrop-blur-lg"
      maxWidth="xl"
    >
      {/* Brand */}
      <NavbarContent>
        <NavbarBrand>
          <button
            onClick={() => scrollToSection('#hero')}
            className="gradient-text focus:ring-primary/50 cursor-pointer rounded-lg px-2 py-1 text-xl font-bold transition-all duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:outline-none"
            aria-label="Go to top"
          >
            BM
          </button>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden gap-8 lg:flex" justify="center">
        {navigation.map(item => (
          <NavbarItem key={item.href}>
            <button
              onClick={() => scrollToSection(item.href)}
              className="text-foreground/80 hover:text-primary focus:text-primary group relative cursor-pointer rounded-md px-2 py-1 font-medium transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none"
            >
              {item.name}
              <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Theme & Language Controls */}
      <NavbarContent justify="end">
        {/* Theme Toggle */}
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            aria-label={tTheme('toggle')}
            className="hover:bg-primary/10 cursor-pointer transition-all duration-200 hover:scale-110 focus:scale-110"
          >
            {mounted && theme === 'light' ? (
              <Moon size={18} className="transition-transform hover:rotate-12" />
            ) : mounted && theme === 'dark' ? (
              <Sun size={18} className="transition-transform hover:rotate-12" />
            ) : (
              <div className="bg-muted-foreground/20 h-[18px] w-[18px] animate-pulse rounded-full"></div>
            )}
          </Button>
        </NavbarItem>

        {/* Language Selector */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="hover:bg-primary/10 cursor-pointer transition-all duration-200 hover:scale-105 focus:scale-105"
                startContent={<Globe size={18} className="transition-transform hover:rotate-12" />}
              >
                <span className="hidden text-lg sm:inline">{currentLanguage?.flag}</span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label={tLanguage('toggle')}
              selectedKeys={new Set([currentLocale])}
              className="min-w-[160px]"
            >
              {languages.map(lang => (
                <DropdownItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  startContent={<span className="text-lg">{lang.flag}</span>}
                  className={cn(
                    'hover:bg-primary/10 cursor-pointer transition-colors',
                    lang.code === currentLocale ? 'bg-primary/5 text-primary' : ''
                  )}
                >
                  {lang.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="hover:bg-primary/10 cursor-pointer rounded-md transition-all duration-200 hover:scale-110 focus:scale-110 lg:hidden"
          icon={
            isMenuOpen ? (
              <X size={20} className="rotate-90 transition-transform" />
            ) : (
              <Menu size={20} className="transition-transform hover:rotate-180" />
            )
          }
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/95 pt-6 backdrop-blur-lg">
        <div className="space-y-2">
          {navigation.map((item, index) => (
            <NavbarMenuItem key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary hover:bg-primary/5 focus:bg-primary/5 group w-full cursor-pointer rounded-lg px-4 py-4 text-left text-lg transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center gap-3">
                  <span className="bg-primary/50 group-hover:bg-primary h-2 w-2 rounded-full transition-all duration-200 group-hover:scale-150"></span>
                  {item.name}
                </span>
              </button>
            </NavbarMenuItem>
          ))}
        </div>

        {/* Mobile Theme Toggle */}
        <div className="border-border/50 mt-8 border-t pt-4">
          <Button
            variant="light"
            onPress={toggleTheme}
            className="hover:bg-primary/10 w-full cursor-pointer justify-start transition-all duration-200 hover:scale-105"
            startContent={
              mounted && theme === 'light' ? (
                <Moon size={18} className="transition-transform" />
              ) : mounted && theme === 'dark' ? (
                <Sun size={18} className="transition-transform" />
              ) : (
                <div className="bg-muted-foreground/20 h-[18px] w-[18px] animate-pulse rounded-full"></div>
              )
            }
          >
            {mounted && theme === 'light'
              ? 'Switch to Dark'
              : mounted && theme === 'dark'
                ? 'Switch to Light'
                : 'Loading...'}
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
