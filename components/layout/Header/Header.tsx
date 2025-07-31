'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useTheme } from 'next-themes'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react'
import { Button } from '@/components/ui/Button'
import { Sun, Moon, Globe, Menu, X } from 'lucide-react'
import { useRouter, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/cn'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const t = useTranslations('navigation')
  const tTheme = useTranslations('theme')
  const tLanguage = useTranslations('language')
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Get the actual theme for display
  const currentTheme = mounted ? resolvedTheme || theme : 'light'

  const navigation = [
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('skills'), href: '#skills' },
    { name: t('contact'), href: '#contact' },
  ]

  const languages = [
    { code: 'ua', name: tLanguage('ukrainian'), flag: '🇺🇦' },
    { code: 'ru', name: tLanguage('russian'), flag: '🇷🇺' },
    { code: 'en', name: tLanguage('english'), flag: '🇺🇸' },
    { code: 'de', name: tLanguage('german'), flag: '🇩🇪' },
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLocale)

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const changeLanguage = (locale: string) => {
    // Сбрасываем scroll position и переключаем язык
    window.scrollTo(0, 0)
    setTimeout(() => {
      router.replace(pathname, { locale })
    }, 100)
  }

  const toggleTheme = () => {
    if (mounted && setTheme) {
      setTheme(currentTheme === 'light' ? 'dark' : 'light')
    }
  }

  const toggleThemeAndCloseMenu = () => {
    toggleTheme()
    setIsMenuOpen(false)
  }

  // Render theme toggle button
  const renderThemeToggle = (isMobile = false) => {
    if (!mounted) {
      return (
        <div className="bg-muted-foreground/20 h-[18px] w-[18px] animate-pulse rounded-full"></div>
      )
    }

    const isLight = currentTheme === 'light'
    const Icon = isLight ? Moon : Sun
    const label = isLight ? tTheme('switchToDark') : tTheme('switchToLight')

    if (isMobile) {
      return (
        <>
          <Icon size={18} className="transition-transform" />
          <span className="text-foreground/80 group-hover:text-primary text-sm font-medium">
            {label}
          </span>
        </>
      )
    }

    return <Icon size={18} className="transition-transform hover:rotate-12" />
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={cn(
        'fixed top-0 z-50',
        'mobile-solid-header lg:glass-effect lg:border-border/50 lg:border-b lg:backdrop-blur-lg'
      )}
      maxWidth="xl"
    >
      {/* Brand */}
      <NavbarContent>
        <NavbarBrand>
          <button
            onClick={() => scrollToSection('#hero')}
            className="gradient-text focus:ring-primary/50 cursor-pointer rounded-lg px-3 py-2 text-2xl font-bold transition-all duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:outline-none lg:text-xl"
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

      {/* Theme & Language Controls - Desktop Only */}
      <NavbarContent justify="end" className="hidden lg:flex">
        {/* Theme Toggle */}
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            aria-label={tTheme('toggle')}
            className="hover:bg-muted cursor-pointer transition-all duration-200 hover:scale-110 focus:scale-110"
            isDisabled={!mounted}
          >
            {renderThemeToggle()}
          </Button>
        </NavbarItem>

        {/* Language Selector */}
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="border-border hover:border-border/60 hover:bg-muted group min-w-[80px] cursor-pointer gap-2 rounded-xl border px-3 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:scale-105"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                    {currentLanguage?.flag}
                  </span>
                  <span className="text-foreground/80 group-hover:text-foreground hidden text-sm font-medium tracking-wide uppercase transition-colors duration-300 sm:inline">
                    {currentLocale}
                  </span>
                  <Globe
                    size={14}
                    className="text-foreground/60 group-hover:text-foreground transition-all duration-300 group-hover:rotate-12"
                  />
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label={tLanguage('toggle')}
              selectedKeys={new Set([currentLocale])}
              className="border-border/20 bg-background min-w-[200px] rounded-xl border"
              itemClasses={{
                base: 'rounded-lg data-[hover=true]:bg-muted data-[selectable=true]:focus:bg-muted',
                title: 'font-medium',
              }}
            >
              {languages.map(lang => (
                <DropdownItem
                  key={lang.code}
                  textValue={`${lang.name} (${lang.code})`}
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    'group cursor-pointer rounded-lg px-4 py-3 transition-all duration-200',
                    lang.code === currentLocale
                      ? 'bg-muted text-foreground shadow-sm'
                      : 'hover:bg-muted/50 hover:shadow-sm'
                  )}
                  startContent={
                    <div className="flex items-center gap-3">
                      <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                        {lang.flag}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-foreground/50 text-xs tracking-wider uppercase">
                          {lang.code}
                        </span>
                      </div>
                    </div>
                  }
                >
                  {lang.code === currentLocale && (
                    <div className="ml-auto">
                      <div className="bg-foreground h-2 w-2 rounded-full"></div>
                    </div>
                  )}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent justify="end" className="lg:hidden">
        <Button
          isIconOnly
          variant="light"
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="hover:bg-primary/10 h-12 w-12 cursor-pointer rounded-md transition-all duration-200 hover:scale-110 focus:scale-110"
        >
          {isMenuOpen ? (
            <X size={24} className="rotate-90 transition-transform" />
          ) : (
            <Menu size={24} className="transition-transform hover:rotate-180" />
          )}
        </Button>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background mobile-menu-solid border-border/20 border-t pt-6">
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

        {/* Mobile Controls - More Compact */}
        <div className="border-border/50 mt-6 flex flex-col gap-3 border-t pt-4">
          {/* Mobile Language Dropdown */}
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 group w-full cursor-pointer justify-start gap-3 rounded-lg border px-4 py-3 transition-all duration-300"
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {currentLanguage?.flag}
                </span>
                <span className="text-foreground/80 group-hover:text-primary text-sm font-medium">
                  {currentLanguage?.name}
                </span>
                <Globe
                  size={16}
                  className="text-foreground/60 group-hover:text-primary ml-auto transition-all duration-300"
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label={tLanguage('toggle')}
              selectedKeys={new Set([currentLocale])}
              className="border-border/20 bg-background min-w-[200px] rounded-xl border"
              itemClasses={{
                base: 'rounded-lg data-[hover=true]:bg-primary/10 data-[selectable=true]:focus:bg-primary/10',
                title: 'font-medium',
              }}
            >
              {languages.map(lang => (
                <DropdownItem
                  key={lang.code}
                  textValue={`${lang.name} (${lang.code})`}
                  onClick={() => {
                    changeLanguage(lang.code)
                    setIsMenuOpen(false)
                  }}
                  className={cn(
                    'group cursor-pointer rounded-lg px-4 py-3 transition-all duration-200',
                    lang.code === currentLocale
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'hover:bg-primary/5 hover:shadow-sm'
                  )}
                  startContent={
                    <div className="flex items-center gap-3">
                      <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                        {lang.flag}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-foreground/50 text-xs tracking-wider uppercase">
                          {lang.code}
                        </span>
                      </div>
                    </div>
                  }
                >
                  {lang.code === currentLocale && (
                    <div className="ml-auto">
                      <div className="bg-primary h-2 w-2 rounded-full"></div>
                    </div>
                  )}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {/* Mobile Theme Toggle - Compact */}
          <Button
            variant="bordered"
            onPress={toggleThemeAndCloseMenu}
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 group w-full cursor-pointer justify-start gap-3 rounded-lg border px-4 py-3 transition-all duration-300"
            isDisabled={!mounted}
          >
            {renderThemeToggle(true)}
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
