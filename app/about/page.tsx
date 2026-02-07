import { Metadata } from 'next'
import { AboutContent } from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Cybersecurity Engineer at ARMIS Group. Former competitive kayaking athlete. Exploring the boundary between offensive and defensive security.',
  openGraph: {
    title: 'About | Vitor Pinho',
    description:
      'Cybersecurity Engineer at ARMIS Group. Former competitive kayaking athlete.',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
