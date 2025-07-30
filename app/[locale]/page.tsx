'use client'

import Hero from '@/components/sections/Hero/Hero'
import About from '@/components/sections/About/About'
import Journey from '@/components/sections/Journey'
import WorkProcess from '@/components/sections/WorkProcess/WorkProcess'
import Projects from '@/components/sections/Projects/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { useScrollReset } from '@/lib/utils/useScrollReset'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export default function HomePage() {
  useScrollReset()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        <AnimatedSection>
          <About />
        </AnimatedSection>

        <AnimatedSection>
          <Projects />
        </AnimatedSection>

        <AnimatedSection>
          <Journey />
        </AnimatedSection>

        <AnimatedSection>
          <WorkProcess />
        </AnimatedSection>

        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
