import { Metadata } from 'next'
import { BountyContent } from '@/components/bounty/BountyContent'

export const metadata: Metadata = {
  title: 'Bug Bounty',
  description:
    'Bug bounty findings and responsible disclosure.',
  openGraph: {
    title: 'Bug Bounty | Vitor Pinho',
    description:
      'Bug bounty findings and responsible disclosure.',
  },
}

export default function BountyPage() {
  return <BountyContent />
}
