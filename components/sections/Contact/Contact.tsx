'use client'

import { useTranslations } from 'next-intl'
import { Mail, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/routing'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="bg-secondary/5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-12 space-y-4 sm:mb-16 sm:space-y-6">
          <h2 className="text-foreground mb-3 text-3xl leading-tight font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
            {t('title')}
            <span className="text-foreground mt-2 block text-xl font-medium sm:text-2xl lg:text-3xl">
              {t('subtitle')}
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-7 sm:text-lg">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            as={Link}
            href={SOCIAL_LINKS.email}
            variant="animated"
            size="lg"
            className="group w-full sm:w-auto"
            startContent={
              <Mail
                size={18}
                className="transition-transform group-hover:animate-bounce sm:h-5 sm:w-5"
              />
            }
            endContent={
              <ExternalLink
                size={14}
                className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
              />
            }
          >
            {t('buttons.sendEmail')}
          </Button>
          <Button
            as={Link}
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="group w-full sm:w-auto"
            startContent={
              <Github
                size={18}
                className="transition-transform group-hover:rotate-12 sm:h-5 sm:w-5"
              />
            }
            endContent={
              <ExternalLink
                size={14}
                className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
              />
            }
          >
            {t('buttons.viewGithub')}
          </Button>
        </div>
      </div>
    </section>
  )
}
