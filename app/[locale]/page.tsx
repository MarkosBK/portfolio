import Hero from '@/components/sections/Hero/Hero'
import About from '@/components/sections/About/About'
import WorkProcess from '@/components/sections/WorkProcess/WorkProcess'
import Projects from '@/components/sections/Projects/Projects'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { Mail, Github, ExternalLink } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Work Process Section */}
        <WorkProcess />

        {/* Skills Section */}
        <section id="skills" className="bg-secondary/5 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 space-y-4 text-center">
              <h2 className="text-foreground mb-4 text-4xl leading-tight font-bold tracking-tight lg:text-5xl">
                Technical Skills
                <span className="text-primary mt-2 block text-2xl font-medium lg:text-3xl">
                  Technologies I Master
                </span>
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-7">
                A comprehensive toolkit for building modern, scalable web applications
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Frontend Skills */}
              <div className="bg-background/50 border-border hover:shadow-tech-lg hover:border-primary/20 group cursor-default rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <h3 className="text-foreground group-hover:text-primary mb-6 text-xl font-semibold transition-colors">
                  Frontend
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: 'React/Next.js', level: '95%' },
                    { skill: 'TypeScript', level: '90%' },
                    { skill: 'Tailwind CSS', level: '95%' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-medium">{item.skill}</span>
                        <span className="text-primary font-semibold">{item.level}</span>
                      </div>
                      <div className="bg-secondary/20 h-2 w-full overflow-hidden rounded-full">
                        <div
                          className="from-primary to-accent h-full rounded-full bg-gradient-to-r transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: item.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-background/50 border-border hover:shadow-tech-lg hover:border-primary/20 group cursor-default rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <h3 className="text-foreground group-hover:text-primary mb-6 text-xl font-semibold transition-colors">
                  Backend
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: 'Node.js', level: '85%' },
                    { skill: 'Express.js', level: '80%' },
                    { skill: 'PostgreSQL', level: '75%' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-medium">{item.skill}</span>
                        <span className="text-primary font-semibold">{item.level}</span>
                      </div>
                      <div className="bg-secondary/20 h-2 w-full overflow-hidden rounded-full">
                        <div
                          className="from-primary to-accent h-full rounded-full bg-gradient-to-r transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: item.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Skills */}
              <div className="bg-background/50 border-border hover:shadow-tech-lg hover:border-primary/20 group cursor-default rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <h3 className="text-foreground group-hover:text-primary mb-6 text-xl font-semibold transition-colors">
                  Mobile
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: 'React Native', level: '80%' },
                    { skill: 'Expo', level: '75%' },
                    { skill: 'Cross-platform', level: '85%' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-medium">{item.skill}</span>
                        <span className="text-primary font-semibold">{item.level}</span>
                      </div>
                      <div className="bg-secondary/20 h-2 w-full overflow-hidden rounded-full">
                        <div
                          className="from-primary to-accent h-full rounded-full bg-gradient-to-r transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: item.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Skills */}
              <div className="bg-background/50 border-border hover:shadow-tech-lg hover:border-primary/20 group cursor-default rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <h3 className="text-foreground group-hover:text-primary mb-6 text-xl font-semibold transition-colors">
                  Tools
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: 'Git/GitHub', level: '90%' },
                    { skill: 'AWS', level: '70%' },
                    { skill: 'Docker', level: '65%' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-medium">{item.skill}</span>
                        <span className="text-primary font-semibold">{item.level}</span>
                      </div>
                      <div className="bg-secondary/20 h-2 w-full overflow-hidden rounded-full">
                        <div
                          className="from-primary to-accent h-full rounded-full bg-gradient-to-r transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: item.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="bg-secondary/5 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mb-16 space-y-6">
              <h2 className="text-foreground mb-4 text-4xl leading-tight font-bold tracking-tight lg:text-5xl">
                Let's Work Together
                <span className="text-primary mt-2 block text-2xl font-medium lg:text-3xl">
                  Ready for Your Next Project
                </span>
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-7">
                Ready for new challenges and interesting projects. If you have a project idea or
                vacancy I can help with, I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="mailto:contact@basilio-marcos.dev"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group border-primary inline-flex min-w-[240px] cursor-pointer items-center justify-center gap-3 rounded-xl border-2 px-8 py-4 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Mail size={20} className="transition-transform group-hover:animate-bounce" />
                <span>Send Email</span>
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="https://github.com/basilio-marcos"
                target="_blank"
                rel="noopener noreferrer"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group bg-background inline-flex min-w-[240px] cursor-pointer items-center justify-center gap-3 rounded-xl border-2 px-8 py-4 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Github size={20} className="transition-transform group-hover:rotate-12" />
                <span>View GitHub</span>
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Additional contact info */}
            <div className="border-border/50 mt-16 border-t pt-8">
              <p className="text-muted-foreground text-center">
                <span className="font-medium">Available for:</span> Full-time positions, freelance
                projects, and consulting
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
