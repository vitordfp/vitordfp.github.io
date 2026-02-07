'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-800/50 to-transparent" />

      <div className="section-container">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-dark-400 text-lg md:text-xl leading-relaxed mb-6">
              Cybersecurity Engineer at{' '}
              <span className="text-white">ARMIS</span>, where I work on
              securing cloud infrastructure and building resilient systems.
              Previously explored cloud security through Microsoft Defender,
              Sentinel, and Intune.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-dark-400 text-lg md:text-xl leading-relaxed mb-6">
              Before cybersecurity, I spent{' '}
              <span className="text-white">13 years</span> as a competitive
              kayaking athlete — representing Portugal at Junior and U23 World
              Championships. The discipline and perseverance from high-performance
              sport shaped how I approach every challenge.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-dark-500 text-base leading-relaxed mb-10">
              Microsoft SC-200 certified. Exploring the boundary between
              offensive and defensive security.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Link
              href="/about"
              className="inline-flex items-center text-sm text-dark-400 hover:text-white transition-colors group"
            >
              More about me
              <motion.span
                className="ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
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
