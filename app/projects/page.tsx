import { Metadata } from 'next'
import { ProjectsContent } from '@/components/projects/ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects and contributions by Vitor Pinho.',
  openGraph: {
    title: 'Projects | Vitor Pinho',
    description: 'Projects and contributions by Vitor Pinho.',
  },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
