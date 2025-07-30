'use client'

import { useTranslations } from 'next-intl'
import { m } from 'framer-motion'
import { Search, Palette, Code, Rocket } from 'lucide-react'

interface ProcessCardProps {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  delay?: number
}

interface AdvantageCardProps {
  title: string
  description: string
  color: string
  delay?: number
}

const ProcessCard = ({ number, title, description, icon, delay = 0 }: ProcessCardProps) => (
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative"
  >
    <div className="bg-background/60 border-border hover:shadow-tech-lg hover:border-border/60 h-full cursor-pointer rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] sm:p-8">
      {/* Number Badge */}
      <div className="bg-muted text-foreground group-hover:bg-foreground group-hover:text-background absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold shadow-lg transition-all duration-300 sm:-top-4 sm:-left-4 sm:h-12 sm:w-12 sm:text-lg">
        {number}
      </div>

      {/* Icon */}
      <div className="text-foreground group-hover:text-foreground mt-2 mb-4 inline-flex transition-all duration-300 group-hover:scale-110 sm:mb-6">
        <div className="h-6 w-6 sm:h-8 sm:w-8">{icon}</div>
      </div>

      {/* Content */}
      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-foreground group-hover:text-foreground text-lg font-semibold transition-colors sm:text-xl">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover glow effect */}
      <div className="from-primary/5 absolute inset-0 rounded-xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  </m.div>
)

const AdvantageCard = ({ title, description, color, delay = 0 }: AdvantageCardProps) => {
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case 'emerald':
        return {
          background: 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/20',
          border: 'border-emerald-500/30',
          text: 'text-emerald-600',
          hover: 'hover:shadow-emerald-500/20',
        }
      case 'blue':
        return {
          background: 'bg-gradient-to-br from-blue-500/10 to-blue-600/20',
          border: 'border-blue-500/30',
          text: 'text-blue-600',
          hover: 'hover:shadow-blue-500/20',
        }
      case 'purple':
        return {
          background: 'bg-gradient-to-br from-purple-500/10 to-purple-600/20',
          border: 'border-purple-500/30',
          text: 'text-purple-600',
          hover: 'hover:shadow-purple-500/20',
        }
      case 'orange':
        return {
          background: 'bg-gradient-to-br from-orange-500/10 to-orange-600/20',
          border: 'border-orange-500/30',
          text: 'text-orange-600',
          hover: 'hover:shadow-orange-500/20',
        }
      default:
        return {
          background: 'bg-gradient-to-br from-muted/10 to-muted/20',
          border: 'border-border/30',
          text: 'text-foreground',
          hover: 'hover:shadow-border/20',
        }
    }
  }

  const colorClasses = getColorClasses(color)

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div
        className={`${colorClasses.background} ${colorClasses.border} ${colorClasses.hover} h-full cursor-pointer rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-6`}
      >
        {/* Content */}
        <div className="space-y-2">
          <h4
            className={`${colorClasses.text} dark:text-foreground text-base font-semibold sm:text-lg`}
          >
            {title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>

        {/* Subtle accent line */}
        <div
          className={`absolute top-0 right-0 left-0 h-1 rounded-t-xl ${colorClasses.background}`}
        />
      </div>
    </m.div>
  )
}

export default function WorkProcess() {
  const t = useTranslations('workProcess')

  const processIcons = [
    <Search size={24} className="sm:h-8 sm:w-8" key="search" />,
    <Palette size={24} className="sm:h-8 sm:w-8" key="palette" />,
    <Code size={24} className="sm:h-8 sm:w-8" key="code" />,
    <Rocket size={24} className="sm:h-8 sm:w-8" key="rocket" />,
  ]

  return (
    <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="text-foreground mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl lg:text-5xl">
            {t('title')}
            <span className="text-foreground block">{t('titleAccent')}</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
            {t('subtitle')}
          </p>
          <p className="text-muted-foreground/80 mx-auto mt-3 max-w-3xl text-sm sm:mt-4 sm:text-base">
            {t('description')}
          </p>
        </m.div>

        {/* Process Cards Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 sm:gap-8 md:grid-cols-2 lg:mb-20 lg:grid-cols-4">
          {t.raw('steps').map((step: { title: string; description: string }, index: number) => (
            <ProcessCard
              key={index}
              number={(index + 1).toString()}
              title={step.title}
              description={step.description}
              icon={processIcons[index]}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Advantages Section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 sm:space-y-8"
        >
          <h3 className="text-foreground text-center text-xl font-semibold sm:text-2xl">
            {t('advantagesTitle')}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t
              .raw('advantages')
              .map(
                (
                  advantage: { title: string; description: string; color: string },
                  index: number
                ) => (
                  <AdvantageCard
                    key={index}
                    title={advantage.title}
                    description={advantage.description}
                    color={advantage.color}
                    delay={index * 0.1}
                  />
                )
              )}
          </div>
        </m.div>
      </div>
    </section>
  )
}
