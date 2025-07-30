'use client'

import { useTranslations } from 'next-intl'
import { m } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/lib/constants/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import { useState, useEffect } from 'react'

export default function Projects() {
  const t = useTranslations('projects')
  const [isClient, setIsClient] = useState(false)

  // Show all projects on homepage
  const featuredProjects = projects

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id="projects" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-3 text-center sm:mb-16 sm:space-y-4"
        >
          <h2 className="text-foreground text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
            {t('subtitle')}
          </p>
        </m.div>

        {/* Projects Slider */}
        <div className="relative">
          {isClient ? (
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                centeredSlides={true}
                loop={false}
                allowTouchMove={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                  disabledClass: 'swiper-button-disabled',
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 3,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 1.1,
                    spaceBetween: 16,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                    centeredSlides: true,
                  },
                  768: {
                    slidesPerView: 1.8,
                    spaceBetween: 24,
                    centeredSlides: true,
                  },
                  1024: {
                    slidesPerView: 2.2,
                    spaceBetween: 28,
                    centeredSlides: true,
                  },
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 32,
                    centeredSlides: true,
                  },
                }}
                className="projects-swiper !pb-12 sm:!pb-14"
              >
                {featuredProjects.map(project => (
                  <SwiperSlide key={project.id} className="!h-auto">
                    <div className="h-full">
                      <ProjectCard project={project} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </m.div>
          ) : (
            // Fallback during SSR and initial hydration
            <m.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {featuredProjects.slice(0, 3).map(project => (
                <div key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </m.div>
          )}

          {/* Custom Navigation Buttons - Only show when Swiper is loaded */}
          {isClient && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <button className="swiper-button-prev-custom bg-background/80 hover:bg-background absolute top-2/5 -left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full border p-1.5 shadow-lg backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-50 sm:-left-4 sm:p-2 lg:p-3">
                <ChevronLeft className="text-foreground h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </button>
              <button className="swiper-button-next-custom bg-background/80 hover:bg-background absolute top-2/5 -right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full border p-1.5 shadow-lg backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-50 sm:-right-4 sm:p-2 lg:p-3">
                <ChevronRight className="text-foreground h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </button>
            </m.div>
          )}
        </div>
      </div>
    </section>
  )
}
