export interface Skill {
  name: string
  level: number
  experience: string
  icon?: string
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      {
        name: 'React/Next.js',
        level: 95,
        experience: '5 years',
        icon: 'react'
      },
      {
        name: 'TypeScript',
        level: 90,
        experience: '4 years',
        icon: 'typescript'
      },
      {
        name: 'Vue.js/Quasar',
        level: 85,
        experience: '3 years',
        icon: 'vue'
      },
      {
        name: 'Tailwind CSS',
        level: 90,
        experience: '3 years',
        icon: 'tailwind'
      },
      {
        name: 'JavaScript (ES6+)',
        level: 92,
        experience: '5 years',
        icon: 'javascript'
      },
      {
        name: 'HTML5/CSS3',
        level: 95,
        experience: '5 years',
        icon: 'html'
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      {
        name: 'Node.js',
        level: 85,
        experience: '4 years',
        icon: 'nodejs'
      },
      {
        name: 'Prisma/Database Design',
        level: 80,
        experience: '3 years',
        icon: 'database'
      },
      {
        name: 'API Design (REST/GraphQL)',
        level: 85,
        experience: '4 years',
        icon: 'api'
      },
      {
        name: 'PostgreSQL/MySQL',
        level: 75,
        experience: '3 years',
        icon: 'database'
      },
      {
        name: 'PHP/Yii2',
        level: 70,
        experience: '2 years',
        icon: 'php'
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile',
    skills: [
      {
        name: 'React Native/Expo',
        level: 80,
        experience: '2 years',
        icon: 'mobile'
      },
      {
        name: 'Cross-platform Development',
        level: 82,
        experience: '2 years',
        icon: 'mobile'
      },
      {
        name: 'Capacitor',
        level: 75,
        experience: '1 year',
        icon: 'mobile'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    skills: [
      {
        name: 'Git/GitHub',
        level: 90,
        experience: '5 years',
        icon: 'git'
      },
      {
        name: 'AWS Services',
        level: 75,
        experience: '2 years',
        icon: 'aws'
      },
      {
        name: 'Docker',
        level: 70,
        experience: '2 years',
        icon: 'docker'
      },
      {
        name: 'Vercel/Netlify',
        level: 85,
        experience: '3 years',
        icon: 'vercel'
      },
      {
        name: 'ESLint/Prettier',
        level: 88,
        experience: '4 years',
        icon: 'eslint'
      },
      {
        name: 'Webpack/Vite',
        level: 75,
        experience: '3 years',
        icon: 'webpack'
      }
    ]
  }
]

export const getAllSkills = () => {
  return skillCategories.flatMap(category => 
    category.skills.map(skill => ({ 
      ...skill, 
      category: category.name 
    }))
  )
}

export const getSkillsByCategory = (categoryId: string) => {
  const category = skillCategories.find(cat => cat.id === categoryId)
  return category?.skills || []
}

export const getTopSkills = (limit: number = 6) => {
  return getAllSkills()
    .sort((a, b) => b.level - a.level)
    .slice(0, limit)
} 