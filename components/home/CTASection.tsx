'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const links = [
  { icon: Github, href: 'https://github.com/vitordfp', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vitorpinho', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@vitorpinho.dev', label: 'Email' },
]

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-800/50 to-transparent" />

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get in touch
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-dark-400 text-base mb-10 max-w-lg mx-auto">
              Interested in security collaboration, have a question, or just want
              to connect — I&apos;d be happy to hear from you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-dark-900/40 border border-dark-800/40 hover:border-dark-700/60 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-dark-400 hover:text-dark-300 transition-colors" />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
