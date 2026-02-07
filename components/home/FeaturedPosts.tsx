'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function FeaturedPosts() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-800/50 to-transparent" />

      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Blog
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 p-8 md:p-12 bg-dark-900/30 border border-dark-800/40 rounded-xl text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-dark-400 text-base mb-2">
                  Under development
                </p>
                <p className="text-dark-600 text-sm">
                  Writeups, research notes, and thoughts on security — coming soon.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
