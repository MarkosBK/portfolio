'use client'

import { useTranslations } from 'next-intl'
import { m } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ExternalLink } from 'lucide-react'
import SkillsModal from '@/components/ui/SkillsModal'
import skillsData from '@/lib/data/skills.json'
import TechCard from '@/components/ui/TechCard'

type TechLevel = 'expert' | 'advanced' | 'intermediate'

export default function Skills() {
  const t = useTranslations('skills')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { coreSkills } = skillsData

  return (
    <>
      <section id="skills" className="bg-secondary/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 space-y-3 text-center sm:mb-16 sm:space-y-4"
          >
            <h2 className="text-foreground mb-3 text-3xl leading-tight font-bold tracking-tight sm:mb-4 sm:text-4xl lg:text-5xl">
              {t('mainTitle')}
              <span className="text-foreground mt-2 block text-xl font-medium sm:text-2xl lg:text-3xl">
                {t('mainSubtitle')}
              </span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-7 sm:text-lg">
              {t('description')}
            </p>
          </m.div>

          {/* Core Skills Grid */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 sm:mb-12"
          >
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {coreSkills.map((tech, index) => (
                <m.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <TechCard name={tech.name} level={tech.level as TechLevel} />
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Show All Button */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              endContent={<ExternalLink size={18} className="sm:h-5 sm:w-5" />}
              className="hover:shadow-tech-lg w-full sm:w-auto"
            >
              {t('showAllTechnologies')}
            </Button>
          </m.div>

          {/* Footer Note */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center sm:mt-12"
          >
            <p className="text-muted-foreground text-xs sm:text-sm">{t('mainTechnologiesShown')}</p>
          </m.div>
        </div>
      </section>

      {/* Skills Modal */}
      <SkillsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
