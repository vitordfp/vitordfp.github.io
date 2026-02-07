'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal'
import { certifications } from '@/lib/stats'

const experience = [
  {
    role: 'Software Engineer',
    company: 'ARMIS Group',
    period: 'Jul 2024 — Present',
    type: 'Full-time',
    description:
      'Working on Microsoft security adoption projects. Building and maintaining SOC architectures, from standing up greenfield SOCs to managing established ones. Focus spans operations, detection engineering, and security automation across the Microsoft ecosystem.',
  },
  {
    role: 'Cloud Security Intern',
    company: 'ARMIS Group',
    period: 'Feb 2024 — Jun 2024',
    type: 'Internship',
    description:
      'Cloud Security project focused on securing a simulated organization using Microsoft Defender for Cloud Apps, Defender for Endpoint, Microsoft Sentinel, Intune, and Purview. Implemented security policies, conducted attack simulations, and performed GDPR compliance analysis.',
  },
]

const highlights = [
  {
    title: 'Competitive Athlete',
    description:
      '13 years of competitive kayaking, including national team camps and representing Portugal at Junior and U23 World Championships — 8th place finish. Retired in 2024 to focus on cybersecurity.',
  },
  {
    title: 'Board Member',
    description:
      'Centro de Recreio Popular de Arnelas — managing athlete registrations with the Portuguese Canoeing Federation and contributing to strategic and administrative decisions since 2023.',
  },
  {
    title: 'RobDroneGo',
    description:
      'Architected an indoor robotics fleet management prototype at ISEP — coordinating mobile robots across multi-building environments with path-planning, task-scheduling, and real-time simulation.',
  },
]

export function AboutContent() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              About
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-dark-400 text-lg leading-relaxed mb-6">
              I&apos;m Vitor Pinho, a Cybersecurity Engineer at ARMIS Group based in
              Portugal. Most of my work revolves around Microsoft security adoption
              projects — helping organizations build and operate their security
              infrastructure from the ground up.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-dark-400 text-lg leading-relaxed mb-6">
              I&apos;ve helped create and implement SOCs from scratch and maintained
              managed SOCs, working across the full stack of security operations — from
              day-to-day monitoring to improving detection engineering and automating
              workflows.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-dark-400 text-lg leading-relaxed">
              My path into security was shaped by years of competitive sport — 13 years
              of kayaking taught me discipline, resilience, and the value of deliberate
              practice. I believe the best security professionals are the ones who never
              stop being curious.
            </p>
          </ScrollReveal>
        </div>

        {/* Experience */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-white mb-8">Experience</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.role + exp.period} delay={0.1 * (i + 1)}>
                <div className="p-6 bg-dark-900/30 border border-dark-800/40 rounded-xl hover:border-dark-700/60 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-white font-medium">{exp.role}</h3>
                    <span className="text-xs text-dark-500 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-dark-400 text-sm mb-1">{exp.company}</p>
                  <span className="text-xs text-dark-600">{exp.type}</span>
                  {exp.description && (
                    <p className="text-dark-500 text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-white mb-8">Certifications</h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-3">
            {certifications.map((cert) => (
              <StaggerItem key={cert.id}>
                <div className="flex items-center justify-between p-4 bg-dark-900/30 border border-dark-800/40 rounded-xl hover:border-dark-700/60 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-dark-500 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">
                        {cert.name}
                      </p>
                      <p className="text-dark-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded-full ${
                      cert.status === 'obtained'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-dark-800/60 text-dark-500'
                    }`}
                  >
                    {cert.status === 'obtained'
                      ? 'Obtained'
                      : cert.status === 'in-progress'
                      ? 'In Progress'
                      : 'Planned'}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Other highlights */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-white mb-8">Beyond Security</h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-4">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6 bg-dark-900/30 border border-dark-800/40 rounded-xl hover:border-dark-700/60 transition-all duration-300">
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-dark-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Contact */}
        <ScrollReveal>
          <div className="max-w-3xl text-center p-8 bg-dark-900/30 border border-dark-800/40 rounded-xl">
            <p className="text-dark-400 mb-4">
              Want to connect or collaborate?
            </p>
            <a
              href="mailto:hello@vitorpinho.dev"
              className="inline-flex items-center text-sm text-dark-300 hover:text-white transition-colors duration-300"
            >
              hello@vitorpinho.dev
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
