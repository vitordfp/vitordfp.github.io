'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function BlogPageContent() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        <div className="max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 p-12 bg-dark-900/30 border border-dark-800/40 rounded-xl text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-dark-400 text-lg mb-2">Under development</p>
                <p className="text-dark-600 text-sm">
                  Writeups, research notes, and thoughts on security — coming
                  soon.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
