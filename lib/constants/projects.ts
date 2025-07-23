export interface Project {
  id: string
  title: string
  category: 'current' | 'previous' | 'personal' | 'first'
  tech: string[]
  confidential: boolean
  duration?: string
  highlights?: string[]
  note?: string
  github?: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'ovogene-catalog',
    title: 'Ovogene Catalog',
    category: 'current',
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'HeroUI', 'AWS'],
    confidential: false,
    highlights: [
      'Multi-tenant архітектура',
      'Система інтернаціоналізації',
      'Складна система фільтрів та пошуку',
      'Адаптивний дизайн',
      'AWS інтеграція'
    ],
    image: '/images/projects/ovogene-placeholder.jpg'
  },
  {
    id: 'dobbi',
    title: 'Dobbi Laundry',
    category: 'current',
    tech: ['Next.js', 'React Native', 'Expo', 'TypeScript'],
    confidential: true,
    highlights: [
      'Cross-platform розробка',
      'React Native з Expo',
      'Інтеграція платіжних систем'
    ]
  },
  {
    id: 'driveme-ecosystem',
    title: 'DriveMe Ecosystem',
    category: 'previous',
    tech: ['Quasar', 'Vue.js', 'Capacitor', 'Vuetify'],
    confidential: true,
    highlights: [
      '3 бренди в одній кодовій базі',
      'Vue.js та Quasar Framework',
      'Cross-platform мобільні додатки',
      'Складна бізнес-логіка'
    ]
  },
  {
    id: 'swan-admin',
    title: 'SWAN Trading Platform',
    category: 'previous',
    tech: ['React Admin', 'React.js', 'TypeScript'],
    confidential: true,
    highlights: [
      'React Admin framework',
      'Складні форми та валідація',
      'Управління великими даними'
    ]
  },
  {
    id: 'mijnzetel',
    title: 'MijnZetel Politics',
    category: 'personal',
    tech: ['Expo', 'React Native', 'Cross-platform'],
    confidential: false,
    note: 'Перший самостійний проект - є можливості для покращень',
    highlights: [
      'React Native розробка',
      'Перший самостійний проект',
      'Досвід роботи з новинним контентом'
    ],
    github: 'https://github.com/basilio-marcos/mijnzetel',
    image: '/images/projects/mijnzetel-placeholder.jpg'
  },
  {
    id: 'chartertickets',
    title: 'CharterTickets',
    category: 'first',
    tech: ['PHP', 'Yii2 Framework'],
    duration: '10 месяцев',
    confidential: false,
    highlights: [
      'PHP та Yii2 Framework',
      'Перший комерційний досвід',
      'Інтеграція з API авіакомпаній'
    ],
    image: '/images/projects/chartertickets-placeholder.jpg'
  }
]

export const getProjectsByCategory = (category?: string) => {
  if (!category || category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id)
} 