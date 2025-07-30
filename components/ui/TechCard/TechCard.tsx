'use client'

import { useTranslations } from 'next-intl'

interface TechCardProps {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
}

export default function TechCard({ name, level }: TechCardProps) {
  const t = useTranslations('skills')

  const getLevelColor = (level: TechCardProps['level']) => {
    switch (level) {
      case 'expert':
        return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
      case 'advanced':
        return 'text-blue-500 bg-blue-500/10 border-blue-500/20'
      case 'intermediate':
        return 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    }
  }

  const getLevelText = (level: TechCardProps['level']) => {
    switch (level) {
      case 'expert':
        return t('levels.expert')
      case 'advanced':
        return t('levels.advanced')
      case 'intermediate':
        return t('levels.intermediate')
    }
  }

  return (
    <div className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:shadow-tech-lg hover:border-border/60 group flex items-center justify-between rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105">
      <span className="text-gray-900 dark:text-white group-hover:text-foreground font-medium transition-colors">
        {name}
      </span>
      <span
        className={`rounded-full border px-2 py-1 text-xs font-semibold transition-all duration-300 ${getLevelColor(level)}`}
      >
        {getLevelText(level)}
      </span>
    </div>
  )
}
