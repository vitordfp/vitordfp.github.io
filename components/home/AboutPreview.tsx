'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-divider" />

      <div className="section-container pt-16">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-dark-400 text-lg md:text-xl leading-relaxed mb-6">
              Cybersecurity Engineer at{' '}
              <span className="text-white">ARMIS</span>, focused on{' '}
              <span className="text-white">Microsoft security adoption</span> projects.
              I&apos;ve built SOC architectures from scratch, maintained managed SOCs,
              and worked across the full spectrum — from operations to detection
              engineering and automation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-dark-400 text-lg md:text-xl leading-relaxed mb-6">
              Before cybersecurity, I spent{' '}
              <span className="text-white">13 years</span> as a competitive
              kayaking athlete — representing Portugal at World Championships.
              The discipline from high-performance sport shaped how I approach
              every challenge.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-dark-500 text-base leading-relaxed mb-10">
              SC-200 certified. SC-100 and SC-401 in the pipeline.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Link
              href="/about"
              className="inline-flex items-center text-sm text-dark-400 hover:text-white transition-colors duration-300 group"
            >
              More about me
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
