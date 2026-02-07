export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  link?: string
  github?: string
  featured?: boolean
  status: 'completed' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
  {
    id: 'robdronego',
    title: 'RobDroneGo',
    description: 'Indoor robotics fleet management prototype for coordinating mobile robots across multi-building campus environments.',
    longDescription: 'Architected & implemented a software-only fleet management platform to coordinate "robisep" mobile robots across multi-building, multi-floor campus environments. Built device-management modules, task-scheduling interfaces, map ingestion & path-planning engines, and a real-time simulation layer.',
    technologies: ['Software Architecture', 'Path Planning', 'Real-time Simulation', 'Fleet Management'],
    featured: true,
    status: 'completed',
  },
  {
    id: 'personal-blog',
    title: 'Personal Blog & Portfolio',
    description: 'This website — a minimalist personal space built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/vitorpinho-dev/personalblog',
    featured: false,
    status: 'in-progress',
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(project => project.status === status)
}
