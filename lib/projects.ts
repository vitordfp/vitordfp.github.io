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
    id: 'focus-tracker',
    title: 'Focus Tracker',
    description: 'A productivity tracking desktop app that uses the webcam to detect whether you\'re looking at the screen and monitors active application usage to measure focus time.',
    longDescription: 'Built a desktop productivity tracker that combines webcam-based gaze detection with system-level application monitoring. Uses computer vision to determine screen attention and classifies running applications as productive or distracting, generating daily focus reports and trends. Designed as a personal tool for optimizing deep work sessions.',
    technologies: ['Tauri', 'Rust', 'TypeScript', 'React', 'MediaPipe'],
    featured: true,
    status: 'completed',
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
