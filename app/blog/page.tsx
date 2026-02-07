import { Metadata } from 'next'
import { BlogPageContent } from '@/components/blog/BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writeups, research notes, and thoughts on security — coming soon.',
  openGraph: {
    title: 'Blog | Vitor Pinho',
    description:
      'Writeups, research notes, and thoughts on security — coming soon.',
  },
}

export default function BlogPage() {
  return <BlogPageContent />
}
