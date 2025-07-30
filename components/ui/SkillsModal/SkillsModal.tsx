'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import skillsData from '@/lib/data/skills.json'
import TechCard from '@/components/ui/TechCard'

type TechLevel = 'expert' | 'advanced' | 'intermediate'

interface SkillsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  const t = useTranslations('skills')
  const { skillSections } = skillsData

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="4xl"
      scrollBehavior="inside"
      placement="center"
      hideCloseButton
      radius="lg"
      classNames={{
        backdrop: 'bg-black/20 backdrop-blur-sm',
        base: 'bg-white dark:bg-gray-900 border-0 shadow-2xl mx-0 my-0 h-screen w-screen max-w-none rounded-none sm:mx-4 sm:my-4 sm:h-auto sm:w-auto sm:max-w-4xl sm:rounded-2xl',
        header: 'border-b border-gray-200',
        body: 'py-4 sm:py-6 dark:bg-gray-900 h-full sm:h-auto sm:max-h-[70vh] overflow-y-auto',
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-2 px-4 py-3 sm:px-6 sm:py-4">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 cursor-pointer rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 sm:top-4 sm:right-4 sm:p-2 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <X size={24} className="sm:h-5 sm:w-5" />
              </button>
              <h2 className="pr-8 text-xl font-bold text-gray-900 sm:pr-0 sm:text-2xl dark:text-white">
                {t('fullStackTechnologies')}
              </h2>
              <p className="text-xs font-normal text-gray-600 sm:text-sm dark:text-gray-400">
                {t('allTechnologiesIWorkWith')}
              </p>
            </ModalHeader>
            <ModalBody className="flex-1 px-4 sm:px-6">
              <div className="space-y-6 sm:space-y-8">
                {skillSections.map(section => (
                  <div key={section.title} className="space-y-3 sm:space-y-4">
                    <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                      <div className="bg-foreground h-0.5 w-4 rounded-full sm:h-1 sm:w-6"></div>
                      {section.title}
                    </h3>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      {section.techs.map(tech => (
                        <TechCard
                          key={tech.name}
                          name={tech.name}
                          level={tech.level as TechLevel}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
            </ModalBody>
            <ModalFooter className="border-t border-gray-200 px-4 pt-4 text-center sm:px-6 sm:pt-6 dark:border-gray-700">
              <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                {t('levelsBasedOnCommercialExperience')}
              </p>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
