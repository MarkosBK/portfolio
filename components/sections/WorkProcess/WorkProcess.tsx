'use client'

import { useTranslations } from 'next-intl'
import { m } from 'framer-motion'
import { Search, Palette, Code, Rocket } from 'lucide-react'

interface ProcessCardProps {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  isHighlighted?: boolean
  delay?: number
}

const ProcessCard = ({
  number,
  title,
  description,
  icon,
  isHighlighted = false,
  delay = 0,
}: ProcessCardProps) => (
  <m.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`relative cursor-pointer rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
      isHighlighted
        ? 'bg-background border-primary/20 shadow-tech-xl hover:shadow-tech-2xl scale-105 border'
        : 'bg-background/60 border-border hover:shadow-tech-lg hover:border-primary/10 border backdrop-blur-sm'
    }`}
  >
    {/* Icon */}
    <div
      className={`mb-6 inline-flex rounded-lg p-5 transition-all duration-200 ${
        isHighlighted
          ? 'bg-primary text-primary-foreground shadow-lg'
          : 'bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground'
      }`}
    >
      {icon}
    </div>

    {/* Content */}
    <div className="space-y-4">
      <h3
        className={`text-xl font-semibold transition-colors ${
          isHighlighted ? 'text-foreground' : 'text-foreground hover:text-primary'
        }`}
      >
        {number}. {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-6">{description}</p>
    </div>

    {/* Highlight indicator */}
    {isHighlighted && (
      <div className="bg-primary absolute top-0 left-0 h-full w-1 rounded-l-xl shadow-lg" />
    )}

    {/* Hover glow effect */}
    <div className="from-primary/5 absolute inset-0 rounded-xl bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
  </m.div>
)

export default function WorkProcess() {
  const processSteps = [
    {
      number: '1',
      title: 'Discovery & Planning',
      description:
        'Understanding requirements, analyzing user needs, and creating a comprehensive project roadmap with clear milestones and deliverables.',
      icon: <Search size={24} />,
      isHighlighted: true,
    },
    {
      number: '2',
      title: 'Design & Architecture',
      description:
        'Creating wireframes, user interfaces, and system architecture. Choosing the right technology stack for optimal performance.',
      icon: <Palette size={24} />,
    },
    {
      number: '3',
      title: 'Development',
      description:
        'Writing clean, maintainable code following best practices. Regular testing and code reviews to ensure quality.',
      icon: <Code size={24} />,
    },
    {
      number: '4',
      title: 'Deploy & Optimize',
      description:
        'Deploying to production, performance optimization, monitoring, and providing ongoing support and maintenance.',
      icon: <Rocket size={24} />,
    },
  ]

  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-foreground text-4xl leading-tight font-bold lg:text-5xl">
                My Development
                <span className="text-primary block">Process</span>
              </h2>

              <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                <p className="text-foreground/90 text-xl font-medium">
                  A structured approach to delivering exceptional web solutions.
                </p>
                <p>
                  Every successful project starts with understanding the problem. I follow a proven
                  methodology that ensures efficient development, clear communication, and
                  outstanding results.
                </p>
                <p>
                  From initial concept to final deployment, each phase is carefully planned and
                  executed with attention to detail, scalability, and user experience.
                </p>
              </div>
            </div>

            {/* Process Benefits */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-foreground text-xl font-semibold">Why This Approach Works:</h3>
              <ul className="space-y-3">
                {[
                  'Clear timeline and expectations from day one',
                  'Regular updates and transparent communication',
                  'Quality assurance at every development stage',
                  'Scalable solutions built for future growth',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          </m.div>

          {/* Right Side - Process Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isHighlighted={step.isHighlighted}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
