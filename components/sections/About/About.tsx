'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@heroui/react'
import { Download, ExternalLink, Github, Linkedin, Instagram, Facebook } from 'lucide-react'
import { m } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('about')

  const socialLinks = [
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700',
      href: 'https://facebook.com',
      icon: <Facebook size={20} className="text-white" />,
    },
    {
      name: 'GitHub',
      color: 'bg-gray-800 hover:bg-gray-900',
      href: 'https://github.com',
      icon: <Github size={20} className="text-white" />,
    },
    {
      name: 'Instagram',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      href: 'https://instagram.com',
      icon: <Instagram size={20} className="text-white" />,
    },
    {
      name: 'LinkedIn',
      color: 'bg-blue-700 hover:bg-blue-800',
      href: 'https://linkedin.com',
      icon: <Linkedin size={20} className="text-white" />,
    },
  ]

  return (
    <section id="about" className="bg-secondary/20 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side - Image & Social */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="hover:shadow-tech-xl shadow-tech-lg relative overflow-hidden rounded-2xl transition-all duration-300">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/workplace.webp"
                  alt="Basilio Marcos - Full-Stack Web Developer"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Social Media Floating Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-background/95 shadow-tech-lg hover:shadow-tech-xl absolute -right-4 -bottom-4 rounded-xl border p-5 backdrop-blur-md transition-all duration-300"
            >
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <m.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className={`h-12 w-12 ${social.color} flex cursor-pointer items-center justify-center rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </m.a>
                ))}
              </div>
            </m.div>
          </m.div>

          {/* Right Side - Content */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-foreground text-4xl leading-tight font-bold lg:text-5xl">
                Full-Stack Developer
                <span className="text-primary mt-2 block text-3xl lg:text-4xl">
                  With 5+ Years Experience
                </span>
              </h2>

              <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                <p className="text-foreground/90 text-xl font-medium">
                  Building modern web applications with passion for clean code and exceptional user
                  experiences.
                </p>
                <p>
                  I specialize in creating scalable web solutions using React, Next.js, and
                  TypeScript. My remote-first approach allows me to work efficiently with teams
                  across different time zones while delivering high-quality results.
                </p>
                <p>
                  From concept to deployment, I handle the full development lifecycle - frontend
                  interfaces, backend APIs, database design, and cloud infrastructure. Every project
                  is an opportunity to learn and implement the latest technologies.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                color="primary"
                endContent={<ExternalLink size={18} />}
                className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer px-8 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                View My Work
              </Button>

              <Button
                size="lg"
                variant="bordered"
                color="primary"
                startContent={<Download size={18} />}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer border-2 px-6 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Download CV
              </Button>
            </div>

            {/* Experience Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-border grid grid-cols-2 gap-8 border-t pt-8 lg:grid-cols-4"
            >
              <div className="cursor-default text-center transition-transform duration-200 hover:scale-105">
                <div className="text-foreground mb-2 text-3xl font-bold">23</div>
                <div className="text-muted-foreground text-sm font-medium">Years Old</div>
              </div>
              <div className="cursor-default text-center transition-transform duration-200 hover:scale-105">
                <div className="text-foreground mb-2 text-3xl font-bold">5+</div>
                <div className="text-muted-foreground text-sm font-medium">Years Experience</div>
              </div>
              <div className="cursor-default text-center transition-transform duration-200 hover:scale-105">
                <div className="text-foreground mb-2 text-3xl font-bold">Remote</div>
                <div className="text-muted-foreground text-sm font-medium">Work Style</div>
              </div>
              <div className="cursor-default text-center transition-transform duration-200 hover:scale-105">
                <div className="text-foreground mb-2 text-3xl font-bold">50+</div>
                <div className="text-muted-foreground text-sm font-medium">Projects</div>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
