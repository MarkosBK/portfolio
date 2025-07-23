'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@heroui/react'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { m } from 'framer-motion'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  isHighlighted?: boolean
  delay?: number
}

const ProjectCard = ({
  title,
  category,
  description,
  image,
  isHighlighted = false,
  delay = 0,
}: ProjectCardProps) => (
  <m.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ${
      isHighlighted
        ? 'bg-background shadow-tech-xl border-primary/10 scale-[1.02] border'
        : 'bg-background border-border hover:shadow-tech-lg hover:border-primary/20 border'
    }`}
  >
    {/* Project Image */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <div
        className={`flex h-full w-full items-center justify-center text-6xl ${
          isHighlighted
            ? 'from-primary/20 to-secondary/20 bg-gradient-to-br'
            : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
        }`}
      >
        💻
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button isIconOnly color="primary" variant="solid" className="scale-110 transform">
          <ExternalLink size={20} />
        </Button>
      </div>
    </div>

    {/* Project Content */}
    <div className="space-y-4 p-6">
      <div className="space-y-2">
        <span
          className={`text-xs font-medium tracking-wide uppercase ${
            isHighlighted ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          {category}
        </span>
        <h3 className="text-foreground group-hover:text-primary text-lg font-semibold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-6">{description}</p>
      </div>

      <Button
        variant="bordered"
        color="primary"
        size="sm"
        endContent={<ArrowRight size={16} />}
        className="group-hover:bg-primary group-hover:text-primary-foreground w-full transition-all duration-300"
      >
        View Project
      </Button>
    </div>
  </m.div>
)

export default function Projects() {
  const t = useTranslations('projects')

  const projects = [
    {
      title: 'Product Admin Dashboard',
      category: 'UI-UX DESIGN',
      description:
        'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
      image: '/projects/project-1.jpg',
      isHighlighted: true,
    },
    {
      title: 'Product Admin Dashboard',
      category: 'UI-UX DESIGN',
      description:
        'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
      image: '/projects/project-2.jpg',
    },
    {
      title: 'Product Admin Dashboard',
      category: 'UI-UX DESIGN',
      description:
        'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
      image: '/projects/project-3.jpg',
    },
    {
      title: 'Product Admin Dashboard',
      category: 'UI-UX DESIGN',
      description:
        'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
      image: '/projects/project-4.jpg',
    },
    {
      title: 'Product Admin Dashboard',
      category: 'UI-UX DESIGN',
      description:
        'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
      image: '/projects/project-5.jpg',
    },
    {
      title: 'Product Admin Dashboard',
      category: 'UI-UX DESIGN',
      description:
        'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
      image: '/projects/project-6.jpg',
    },
  ]

  return (
    <section id="projects" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 space-y-4 text-center"
        >
          <h2 className="text-foreground text-4xl leading-tight font-bold lg:text-5xl">
            Portfolio
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration.
          </p>
        </m.div>

        {/* Projects Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              isHighlighted={project.isHighlighted}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* More Projects Button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            color="primary"
            endContent={<ArrowRight size={20} />}
            className="bg-primary text-primary-foreground hover:bg-primary/90 group cursor-pointer px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <span className="mr-2">View All Projects</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </m.div>
      </div>
    </section>
  )
}
