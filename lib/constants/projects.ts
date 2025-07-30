import projectsData from '@/lib/data/projects.json'

export interface Project {
  id: string
  title: string
  category: 'current' | 'previous' | 'personal' | 'first'
  tech: string[]
  confidential: boolean
  description: string
  role: string
  duration?: string
  highlights?: string[]
  note?: string
  github?: string
  demo?: string
  image?: string
}

export const projects: Project[] = projectsData as Project[]

export const getProjectsByCategory = (category?: string) => {
  if (!category || category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id)
}
