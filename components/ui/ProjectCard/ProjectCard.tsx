'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Zap, User, Minimize2, Maximize2, Lock } from 'lucide-react'
import { m } from 'framer-motion'
import { getCategoryColor, getCategoryLabel } from '@/lib/utils/project-categories'
import { Project } from '@/lib/constants/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects')
  const projectT = useTranslations('projectData')
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="group perspective-1000 relative h-auto">
      <m.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
        className="preserve-3d relative h-auto min-h-[400px] w-full"
      >
        {/* Front Side */}
        <div
          className={`w-full ${isFlipped ? 'invisible' : 'visible'} bg-background border-border hover:shadow-tech-lg hover:border-border/60 overflow-hidden rounded-xl border transition-all duration-300 backface-hidden`}
          style={{ transform: 'translateZ(1px)' }}
        >
          {/* Project Image */}
          <div className="relative aspect-[16/8] overflow-hidden">
            {project.image ? (
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-6xl dark:from-gray-600 dark:to-gray-700">
                💻
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="space-y-4 p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${
                    project.confidential
                      ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/20'
                      : getCategoryColor(project.category)
                  }`}
                >
                  {project.confidential && <Lock size={12} />}
                  {project.confidential ? 'private' : getCategoryLabel(project.category)}
                </span>
              </div>

              <h3 className="text-foreground text-lg font-semibold">{project.title}</h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((technology, index) => (
                  <span
                    key={index}
                    className="bg-secondary/60 text-secondary-foreground rounded-md px-2 py-1 text-xs font-medium"
                  >
                    {technology}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="bg-secondary/40 text-muted-foreground rounded-md px-2 py-1 text-xs font-medium">
                    +{project.tech.length - 3} {t('card.moreTechnologies')}
                  </span>
                )}
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-2">
                  {project.highlights.slice(0, 4).map((highlight, index) => (
                    <div
                      key={index}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <Zap size={14} className="text-foreground mt-0.5 flex-shrink-0" />
                      <span>{projectT(`${project.id}.highlights.${index}`)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Flip Button */}
            <Button
              variant="animated"
              size="lg"
              onClick={handleFlip}
              className="w-full"
              endContent={
                <Maximize2
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              }
            >
              {t('card.viewDetails')}
            </Button>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 w-full ${isFlipped ? 'visible' : 'invisible'} bg-background border-border shadow-tech-lg overflow-hidden rounded-xl border backface-hidden`}
          style={{ transform: 'rotateY(180deg) translateZ(1px)' }}
        >
          <div className="flex h-full min-h-[400px] flex-col p-6">
            {/* Header */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-foreground text-lg font-semibold">{project.title}</h3>
                <span
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${
                    project.confidential
                      ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/20'
                      : getCategoryColor(project.category)
                  }`}
                >
                  {project.confidential && <Lock size={12} />}
                  {project.confidential ? 'private' : getCategoryLabel(project.category)}
                </span>
              </div>

              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <User size={14} />
                <span>{projectT(`${project.id}.role`)}</span>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 space-y-4 overflow-y-auto">
              <p className="text-foreground text-sm leading-relaxed">
                {projectT(`${project.id}.description`)}
              </p>

              {/* All Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-foreground text-sm font-medium">{t('card.technologies')}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-secondary/60 text-secondary-foreground rounded-md px-2 py-1 text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Duration */}
              {project.duration && (
                <div className="text-muted-foreground text-sm">
                  <strong>{t('card.duration')}</strong> {project.duration}
                </div>
              )}

              {/* Note */}
              {project.note && (
                <div className="text-muted-foreground text-sm italic">
                  {projectT(`${project.id}.note`)}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-2">
              <Button
                variant="outline"
                size="lg"
                onClick={handleFlip}
                className="w-full"
                endContent={
                  <Minimize2
                    size={16}
                    className="rotate-180 transition-transform duration-200 group-hover:translate-x-1"
                  />
                }
              >
                {t('card.hide')}
              </Button>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  )
}
