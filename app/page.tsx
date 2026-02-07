import { HeroSection } from '@/components/home/HeroSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { StatsPreview } from '@/components/home/StatsPreview'
import { FeaturedPosts } from '@/components/home/FeaturedPosts'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsPreview />
      <FeaturedPosts />
      <CTASection />
    </>
  )
}
