'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/routing'
import { Github, Mail, Linkedin, Facebook, MessageCircle } from 'lucide-react'
import { format } from 'date-fns'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = format(new Date(), 'yyyy')

  const socialLinks = [
    {
      name: 'GitHub',
      href: SOCIAL_LINKS.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Facebook',
      href: SOCIAL_LINKS.facebook,
      icon: Facebook,
    },
    {
      name: 'Telegram',
      href: SOCIAL_LINKS.telegram,
      icon: MessageCircle,
    },
    {
      name: 'Email',
      href: SOCIAL_LINKS.email,
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-secondary/5 border-border/50 border-t py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and Description */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="gradient-text text-2xl font-bold">BM</div>
            <p className="text-muted-foreground max-w-md text-center text-sm md:text-left">
              {t('description')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <Button
                  key={link.name}
                  as={Link}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-background/50 border-border hover:bg-muted group rounded-full border p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                  isIconOnly
                  size="md"
                >
                  <Icon className="group-hover:text-foreground h-5 w-5 transition-colors" />
                </Button>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-border/50 mt-8 border-t pt-8">
          <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <div className="flex items-center gap-2"></div>

            <div>
              © {currentYear} Basilio Markos. {t('rights')}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
