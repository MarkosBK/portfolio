'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Download, ExternalLink } from 'lucide-react'
import { m } from 'framer-motion'
import Image from 'next/image'

const handleDownloadResume = () => {
  const link = document.createElement('a')
  link.href = '/portfolio-cv.pdf'
  link.download = 'portfolio-cv.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function About() {
  const t = useTranslations('about')

  return (
    <section id="about" className="bg-secondary/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Left Side - Image & Social */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <div className="hover:shadow-tech-xl shadow-tech-lg relative overflow-hidden rounded-xl transition-all duration-300 sm:rounded-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/workplace.webp"
                  alt="Basilio Markos - Full-Stack Web Developer"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                />
              </div>
            </div>
          </m.div>

          {/* Right Side - Content */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 space-y-6 sm:space-y-8 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-foreground text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                {t('title')}
                <span className="text-foreground mt-2 block text-2xl sm:text-3xl lg:text-4xl">
                  {t('subtitle')}
                </span>
              </h2>

              <div className="text-muted-foreground space-y-4 text-base leading-relaxed sm:space-y-6 sm:text-lg">
                <p className="text-foreground/90 text-lg font-medium sm:text-xl">
                  {t('description')}
                </p>

                {/* Philosophy section */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-foreground text-lg font-semibold sm:text-xl">
                    {t('philosophy.title')}
                  </h3>
                  <ul className="space-y-2">
                    {t.raw('philosophy.principles').map((principle: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-foreground">•</span>
                        <span className="text-sm sm:text-base">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
              <Button
                variant="animated"
                size="lg"
                endContent={<ExternalLink size={18} className="sm:h-5 sm:w-5" />}
                className="w-full cursor-pointer sm:w-auto"
                as="a"
                href="#projects"
              >
                {t('cta.viewWork')}
              </Button>

              <Button
                variant="outline"
                size="lg"
                startContent={<Download size={18} className="sm:h-5 sm:w-5" />}
                className="w-full cursor-pointer sm:w-auto"
                onClick={handleDownloadResume}
              >
                {t('cta.downloadCV')}
              </Button>
            </div>

            {/* Experience Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-border grid grid-cols-2 gap-4 border-t pt-6 sm:gap-8 sm:pt-8 lg:grid-cols-2"
            >
              <div className="cursor-default text-center transition-transform duration-200 hover:scale-105">
                <div className="text-foreground mb-1 text-2xl font-bold sm:mb-2 sm:text-3xl">
                  5+
                </div>
                <div className="text-muted-foreground text-xs font-medium sm:text-sm">
                  {t('stats.yearsExperience')}
                </div>
              </div>
              <div className="cursor-default text-center transition-transform duration-200 hover:scale-105">
                <div className="text-foreground mb-1 text-2xl font-bold sm:mb-2 sm:text-3xl">
                  10K+
                </div>
                <div className="text-muted-foreground text-xs font-medium sm:text-sm">
                  {t('stats.projects')}
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
