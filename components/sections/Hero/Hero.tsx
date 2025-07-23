'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@heroui/react'
import { Mail, Download, ExternalLink } from 'lucide-react'
import { m } from 'framer-motion'
import Image from 'next/image'

interface StatCardProps {
  value: string
  label: string
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="flex flex-col items-center py-4">
    <span className="text-foreground text-2xl font-bold">{value}</span>
    <span className="text-muted-foreground text-center text-sm">{label}</span>
  </div>
)

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="bg-background relative min-h-screen overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-200/20"></div>
        <div className="absolute top-1/3 right-0 h-80 w-80 translate-x-1/2 rounded-full bg-purple-400/20 blur-3xl dark:bg-blue-200/20"></div>
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl dark:bg-pink-200/20"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 lg:px-8">
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary text-lg font-semibold tracking-wide uppercase">
                  {t('greeting')}
                </p>
                <h1 className="text-foreground text-5xl leading-tight font-bold lg:text-7xl">
                  <span className="text-foreground">{t('name')}</span>
                </h1>
              </div>

              <div className="flex items-center space-x-2">
                <h2 className="text-foreground text-xl font-semibold lg:text-2xl">{t('title')}</h2>
                <span className="text-primary animate-pulse text-2xl">|</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                {t('subtitle')}
              </p>
              <p className="text-muted-foreground max-w-md leading-relaxed">{t('description')}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                color="primary"
                className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer px-8 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </Button>

              <Button
                size="lg"
                variant="bordered"
                color="primary"
                startContent={<ExternalLink size={20} />}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer border-2 px-6 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                View Portfolio
              </Button>

              <Button
                size="lg"
                variant="bordered"
                color="primary"
                startContent={<Download size={20} />}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer border-2 px-6 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Download Resume
              </Button>
            </div>
          </m.div>

          {/* Right Side - Profile Image */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-lg">
              {/* Profile Image Container */}
              <div className="shadow-tech-xl relative overflow-hidden rounded-[25px]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/main-photo.webp"
                    alt="Basilio Marcos - Full-Stack Web Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="bg-primary/60 dark:bg-primary/20 absolute -top-4 -right-4 h-20 w-20 rounded-full blur-xl"></div>
              <div className="bg-secondary/70 dark:bg-secondary/20 absolute -bottom-4 -left-4 h-32 w-32 rounded-full blur-xl"></div>
            </div>

            {/* Social Links - Floating */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-8 left-8"
            >
              <div className="bg-background/95 shadow-tech-lg flex gap-3 rounded-xl border p-4 backdrop-blur-sm">
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  className="h-12 w-12 cursor-pointer bg-blue-600 text-white transition-all duration-200 hover:scale-110 hover:bg-blue-700"
                  aria-label="Facebook"
                >
                  <div className="h-5 w-5 rounded-sm bg-white"></div>
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  className="h-12 w-12 cursor-pointer bg-gray-800 text-white transition-all duration-200 hover:scale-110 hover:bg-gray-900"
                  aria-label="GitHub"
                >
                  <div className="h-5 w-5 rounded-sm bg-white"></div>
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  className="h-12 w-12 cursor-pointer bg-blue-700 text-white transition-all duration-200 hover:scale-110 hover:bg-blue-800"
                  aria-label="LinkedIn"
                >
                  <div className="h-5 w-5 rounded-sm bg-white"></div>
                </Button>
              </div>
            </m.div>
          </m.div>
        </div>

        {/* Stats Section */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 mb-20"
        >
          <div className="bg-background/90 shadow-tech-lg hover:shadow-tech-xl mx-auto max-w-2xl rounded-xl border p-8 backdrop-blur-sm transition-shadow duration-300">
            <div className="divide-border grid grid-cols-3 divide-x">
              <StatCard value="5+" label="Years Experience" />
              <StatCard value="50+" label="Projects Completed" />
              <StatCard value="25+" label="Happy Clients" />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
