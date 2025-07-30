import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Basilio Markos - Full-Stack Web Developer',
    template: '%s | Basilio Markos',
  },
  description:
    '23-year-old Full-Stack developer with 5+ years of remote work experience. Specializing in React, Next.js, TypeScript and modern web technologies.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Remote Developer',
    'Web Development',
  ],
  authors: [{ name: 'Basilio Markos' }],
  creator: 'Basilio Markos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basilio-markos.dev',
    title: 'Basilio Markos - Full-Stack Web Developer',
    description: '23-year-old Full-Stack developer with 5+ years of remote work experience.',
    siteName: 'Basilio Markos Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basilio Markos - Full-Stack Web Developer',
    description: '23-year-old Full-Stack developer with 5+ years of remote work experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when available
    // google: 'verification-code',
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: Promise<{ locale?: string }>
}) {
  const resolvedParams = await params
  return (
    <html lang={resolvedParams?.locale || 'en'} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
