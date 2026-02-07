'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Shield, ExternalLink } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal'
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

export function BountyContent() {
  const categories = getStatsByCategory()
  const total = bugBountyStats.totalBugsFound

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bug Bounty
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-dark-400 text-lg leading-relaxed mb-4">
              Vulnerabilities found and reported through responsible disclosure
              programs. Every finding contributes to making the web a little safer.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-dark-500 text-base leading-relaxed">
              I believe in responsible disclosure — coordinating with vendors to
              fix issues before they can be exploited.
            </p>
          </ScrollReveal>
        </div>

        {/* Stats Overview */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal delay={0.2}>
            <div className="p-8 md:p-10 bg-dark-900/30 border border-dark-800/40 rounded-xl">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-6xl md:text-8xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={total} />
                </span>
                <span className="text-dark-500 text-lg">
                  {total === 1 ? 'vulnerability reported' : 'vulnerabilities reported'}
                </span>
              </div>

              {/* Severity breakdown */}
              <div className="flex gap-8 flex-wrap">
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
            </div>
          </ScrollReveal>
        </div>

        {/* Severity Legend */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-white mb-8">Severity Scale</h2>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'Critical', color: 'text-red-400', border: 'border-red-400/20', desc: 'Full system compromise' },
              { label: 'High', color: 'text-orange-400', border: 'border-orange-400/20', desc: 'Significant data exposure' },
              { label: 'Medium', color: 'text-amber-400', border: 'border-amber-400/20', desc: 'Limited impact vulnerability' },
              { label: 'Low', color: 'text-emerald-400', border: 'border-emerald-400/20', desc: 'Minor security issue' },
              { label: 'Informational', color: 'text-dark-400', border: 'border-dark-700/40', desc: 'Best practice improvement' },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className={`p-4 bg-dark-900/30 border ${item.border} rounded-xl`}>
                  <span className={`text-sm font-mono font-medium ${item.color}`}>
                    {item.label}
                  </span>
                  <p className="text-dark-600 text-xs mt-1">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Future Disclosures placeholder */}
        <div className="max-w-3xl">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-white mb-8">Disclosures</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="p-8 bg-dark-900/30 border border-dark-800/40 rounded-xl">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-dark-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-dark-400 text-sm mb-1">
                    Detailed write-ups will be shared here once vendors have patched
                    and given the green light for public disclosure.
                  </p>
                  <p className="text-dark-600 text-xs">
                    All findings follow responsible disclosure timelines.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
