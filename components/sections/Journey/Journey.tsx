'use client'

import { useTranslations } from 'next-intl'
import { m } from 'framer-motion'
import { SiPhp, SiReact, SiNextdotjs } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { IconType } from 'react-icons'

interface JourneyItem {
  year: string
  title: string
  description: string
}

interface JourneyItemWithConfig extends JourneyItem {
  icon: IconType
  bgGradient: string
  textColor: string
  position: 'top' | 'bottom'
}

export default function Journey() {
  const t = useTranslations('about')

  const journeyItems: JourneyItemWithConfig[] = t
    .raw('journey.items')
    .map((item: JourneyItem, index: number) => {
      const configs = [
        {
          icon: SiPhp,
          bgGradient: 'bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800',
          textColor: 'text-slate-700 dark:text-slate-300',
          position: 'top' as const,
        },
        {
          icon: SiReact,
          bgGradient: 'bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700',
          textColor: 'text-blue-700 dark:text-blue-300',
          position: 'bottom' as const,
        },
        {
          icon: TbBrandReactNative,
          bgGradient: 'bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700',
          textColor: 'text-purple-700 dark:text-purple-300',
          position: 'top' as const,
        },
        {
          icon: SiNextdotjs,
          bgGradient: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
          textColor: 'text-gray-800 dark:text-gray-300',
          position: 'bottom' as const,
        },
      ]

      return {
        ...item,
        ...configs[index],
      }
    })

  return (
    <section className="from-background to-muted/20 bg-gradient-to-br py-10 sm:py-12 lg:py-16 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 lg:space-y-12 xl:space-y-16"
        >
          {/* Header */}
          <div className="space-y-2 text-center sm:space-y-4">
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
              {t('journey.title')}
            </h2>
          </div>

          {/* Mobile/Tablet Vertical Timeline (md and below) */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical line with gradient */}
              <div
                className="absolute top-0 bottom-0 left-6 w-0.5 rounded-full sm:left-8 sm:w-1"
                style={{
                  background:
                    'linear-gradient(to bottom, rgb(71 85 105), rgb(37 99 235), rgb(147 51 234), rgb(31 41 55))',
                }}
              />

              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                {journeyItems.map((item: JourneyItemWithConfig, index: number) => {
                  const IconComponent = item.icon

                  return (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex items-start gap-3 sm:gap-4 lg:gap-6"
                    >
                      {/* Circle with Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <m.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 backdrop-blur-sm sm:h-16 sm:w-16 lg:h-20 lg:w-20 ${item.bgGradient}`}
                        >
                          <IconComponent className="h-4 w-4 text-white sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                        </m.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2 sm:pb-4">
                        {/* Year */}
                        <div className="mb-2 sm:mb-3">
                          <span className="rounded-full border border-gray-200/50 bg-gradient-to-r from-white to-gray-50 px-2 py-1 text-sm font-bold text-gray-800 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-lg lg:px-4 lg:py-2 lg:text-xl dark:border-gray-600/50 dark:from-gray-800/90 dark:to-gray-900/90 dark:text-gray-100">
                            {item.year}
                          </span>
                        </div>

                        {/* Content Box */}
                        <m.div
                          whileHover={{ y: -3, scale: 1.01 }}
                          className="rounded-lg border border-white/30 bg-gradient-to-br from-white/95 to-white/85 p-3 backdrop-blur-md transition-all duration-300 sm:rounded-xl sm:p-4 lg:rounded-2xl lg:p-6 dark:border-gray-700/50 dark:from-gray-800/95 dark:to-gray-900/95"
                        >
                          <h3
                            className={`mb-1 text-sm font-bold sm:mb-2 sm:text-base lg:text-lg ${item.textColor}`}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-300">
                            {item.description}
                          </p>
                        </m.div>
                      </div>
                    </m.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Desktop Horizontal Timeline (lg and above) */}
          <div className="relative hidden w-full lg:block">
            {/* Main horizontal line with gradient */}
            <div
              className="absolute top-1/2 right-0 left-0 h-2 -translate-y-1/2 transform rounded-full"
              style={{
                background:
                  'linear-gradient(to right, rgb(71 85 105), rgb(37 99 235), rgb(147 51 234), rgb(31 41 55))',
              }}
            />

            {/* Timeline Items */}
            <div className="relative flex min-h-[400px] items-center justify-between">
              {journeyItems.map((item: JourneyItemWithConfig, index: number) => {
                const IconComponent = item.icon

                return (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, y: item.position === 'top' ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-center"
                    style={{ flex: 1 }}
                  >
                    {/* Content Box - Top */}
                    {item.position === 'top' && (
                      <div className="mb-8 max-w-xs xl:max-w-sm">
                        <m.div
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="rounded-2xl border border-white/30 bg-gradient-to-br from-white/95 to-white/85 p-6 backdrop-blur-md transition-all duration-300 dark:border-gray-700/50 dark:from-gray-800/95 dark:to-gray-900/95"
                        >
                          <h3 className={`mb-2 text-lg font-bold ${item.textColor}`}>
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        </m.div>
                        {/* Connector line to circle */}
                        <div className={`mx-auto mt-4 h-12 w-2 rounded-full ${item.bgGradient}`} />
                      </div>
                    )}

                    {/* Circle with Icon */}
                    <m.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/20 backdrop-blur-sm xl:h-24 xl:w-24 ${item.bgGradient}`}
                    >
                      <IconComponent className="h-8 w-8 text-white xl:h-10 xl:w-10" />

                      {/* Connecting lines */}
                      {index < journeyItems.length - 1 && (
                        <div className="absolute top-1/2 left-full h-1 w-20 -translate-y-1/2 transform bg-gradient-to-r from-current to-transparent opacity-30 xl:w-32" />
                      )}
                    </m.div>

                    {/* Year */}
                    <div className="my-4">
                      <span className="rounded-full border border-gray-200/50 bg-gradient-to-r from-white to-gray-50 px-4 py-2 text-2xl font-bold text-gray-800 backdrop-blur-sm dark:border-gray-600/50 dark:from-gray-800/90 dark:to-gray-900/90 dark:text-gray-100">
                        {item.year}
                      </span>
                    </div>

                    {/* Content Box - Bottom */}
                    {item.position === 'bottom' && (
                      <div className="mt-4 max-w-xs xl:max-w-sm">
                        {/* Connector line to circle */}
                        <div className={`mx-auto mb-4 h-12 w-2 rounded-full ${item.bgGradient}`} />
                        <m.div
                          whileHover={{ y: 5, scale: 1.02 }}
                          className="rounded-2xl border border-white/30 bg-gradient-to-br from-white/95 to-white/85 p-6 backdrop-blur-md transition-all duration-300 dark:border-gray-700/50 dark:from-gray-800/95 dark:to-gray-900/95"
                        >
                          <h3 className={`mb-2 text-lg font-bold ${item.textColor}`}>
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        </m.div>
                      </div>
                    )}
                  </m.div>
                )
              })}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
