'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { bugBountyStats, getStatsByCategory } from '@/lib/stats'

function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView || value === 0) {
      setDisplay(value)
      return
    }

    const steps = 40
    const increment = value / steps
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplay(value)
        clearInterval(interval)
      } else {
        setDisplay(Math.floor(current))
      }
    }, (duration * 1000) / steps)

    return () => clearInterval(interval)
  }, [isInView, value, duration])

  return <span ref={ref}>{display}</span>
}

export function StatsPreview() {
  const categories = getStatsByCategory()
  const total = bugBountyStats.totalBugsFound

  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-divider" />

      <div className="section-container pt-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Bug Bounty
            </h2>
            <p className="text-dark-500 text-sm mb-12">
              Vulnerabilities reported through responsible disclosure.
            </p>
          </ScrollReveal>

          {/* Main counter */}
          <ScrollReveal delay={0.1}>
            <div className="flex items-baseline gap-4 mb-12">
              <span className="text-6xl md:text-8xl font-bold text-white tabular-nums">
                <AnimatedCounter value={total} />
              </span>
              <span className="text-dark-500 text-lg">
                {total === 1 ? 'vulnerability reported' : 'vulnerabilities reported'}
              </span>
            </div>
          </ScrollReveal>

          {/* Severity breakdown */}
          <ScrollReveal delay={0.2}>
            <div className="flex gap-8 flex-wrap mb-10">
              {categories.map((cat) => (
                <div key={cat.label} className="flex items-center gap-2">
                  <span className={`text-sm font-mono tabular-nums ${cat.color}`}>
                    {cat.count}
                  </span>
                  <span className="text-dark-600 text-xs uppercase tracking-wider">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Link
              href="/bounty"
              className="inline-flex items-center text-sm text-dark-400 hover:text-white transition-colors duration-300 group"
            >
              View details
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
