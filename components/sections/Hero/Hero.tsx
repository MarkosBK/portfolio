'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Download, ExternalLink } from 'lucide-react'
import { m } from 'framer-motion'
import Image from 'next/image'
import SocialLinks from '@/components/ui/SocialLinks'

const handleDownloadResume = () => {
  const link = document.createElement('a')
  link.href = '/markos-basilio-cv.pdf'
  link.download = 'markos-basilio-cv.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

interface StatCardProps {
  value: string
  label: string
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="flex flex-col items-center px-1 py-3 sm:px-2 sm:py-4">
    <span className="text-foreground text-xl font-bold sm:text-2xl">{value}</span>
    <span className="text-muted-foreground text-center text-xs sm:text-sm">{label}</span>
  </div>
)

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="bg-background relative min-h-screen overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-1/4 left-0 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-300/20 blur-3xl sm:h-96 sm:w-96 dark:bg-purple-200/20"
        ></m.div>
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/3 right-0 h-40 w-40 translate-x-1/2 rounded-full bg-purple-300/20 blur-3xl sm:h-80 sm:w-80 dark:bg-blue-200/20"
        ></m.div>
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-1/4 left-1/3 h-32 w-32 rounded-full bg-purple-300/20 blur-3xl sm:h-64 sm:w-64 dark:bg-pink-200/20"
        ></m.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid min-h-[80vh] items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 space-y-6 sm:space-y-8 lg:order-1"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <p className="text-foreground text-base font-semibold tracking-wide uppercase sm:text-lg">
                  {t('greeting')}
                </p>
                <h1 className="text-foreground text-3xl leading-tight font-bold sm:text-5xl lg:text-7xl">
                  <span className="text-foreground">{t('name')}</span>
                </h1>
              </div>

              <div className="flex items-center space-x-2">
                <h2 className="text-foreground text-lg font-semibold sm:text-xl lg:text-2xl">
                  {t('title')}
                </h2>
                <span className="text-foreground animate-pulse text-xl sm:text-2xl">|</span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-muted-foreground max-w-md text-base leading-relaxed sm:text-lg">
                {t('subtitle')}
              </p>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed sm:text-base">
                {t('description')}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
              <Button
                variant="outline"
                size="lg"
                startContent={<ExternalLink size={18} className="sm:h-5 sm:w-5" />}
                as="a"
                href="#projects"
                className="w-full sm:w-auto"
              >
                {t('cta.projects')}
              </Button>

              <Button
                variant="outline"
                size="lg"
                startContent={<Download size={18} className="sm:h-5 sm:w-5" />}
                className="w-full sm:w-auto"
                onClick={handleDownloadResume}
              >
                {t('cta.resume')}
              </Button>
            </div>
          </m.div>

          {/* Right Side - Profile Image */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-sm sm:max-w-lg">
              {/* Profile Image Container */}
              <div className="shadow-tech-xl relative overflow-hidden rounded-[20px] sm:rounded-[25px]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/main-photo.webp"
                    alt="Basilio Markos - Full-Stack Web Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <m.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="bg-muted/20 dark:bg-muted/20 absolute -top-2 -right-2 h-12 w-12 rounded-full blur-xl sm:-top-4 sm:-right-4 sm:h-20 sm:w-20"
              ></m.div>
              <m.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.0 }}
                className="bg-secondary/70 dark:bg-secondary/20 absolute -bottom-2 -left-2 h-20 w-20 rounded-full blur-xl sm:-bottom-4 sm:-left-4 sm:h-32 sm:w-32"
              ></m.div>
            </div>

            {/* Social Links - Floating */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-4 left-4 rounded-xl backdrop-blur-sm sm:bottom-8 sm:left-8"
            >
              <div className="bg-background/10 shadow-tech-lg rounded-xl border p-3 sm:p-4">
                <SocialLinks showTelegram={true} showEmail={true} />
              </div>
            </m.div>
          </m.div>
        </div>

        {/* Stats Section */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 mb-16 sm:mt-16 sm:mb-20"
        >
          <div className="bg-background/90 shadow-tech-lg hover:shadow-tech-xl mx-auto max-w-sm rounded-xl border p-6 backdrop-blur-sm transition-shadow duration-300 sm:max-w-2xl sm:p-8">
            <div className="divide-border grid grid-cols-2 items-center divide-x">
              <StatCard value="5+" label={t('stats.yearsExperience')} />
              <StatCard value="10K+" label={t('stats.projectsCompleted')} />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
