'use client'

import { useTranslations } from 'next-intl'
import { Github, Mail, Linkedin, Heart } from 'lucide-react'
import { format } from 'date-fns'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = format(new Date(), 'yyyy')

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/basilio-marcos',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/basilio-marcos',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:contact@basilio-marcos.dev',
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
              Full-Stack Developer passionate about creating modern, scalable web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-background/50 border-border hover:bg-primary/10 group rounded-full border p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  <Icon className="group-hover:text-primary h-5 w-5 transition-colors" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-border/50 mt-8 border-t pt-8">
          <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <div className="flex items-center gap-2">
              <span>{t('madeWith')}</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>{t('technologies')}</span>
            </div>

            <div>
              © {currentYear} Basilio Marcos. {t('rights')}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
