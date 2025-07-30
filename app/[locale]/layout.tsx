import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AnimationProvider } from '@/components/providers/AnimationProvider'
import { LanguageAnimationProvider } from '@/components/providers/LanguageAnimationProvider'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <AnimationProvider>
          <LanguageAnimationProvider>
            <div className="bg-background text-foreground min-h-screen">{children}</div>
          </LanguageAnimationProvider>
        </AnimationProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }))
}
