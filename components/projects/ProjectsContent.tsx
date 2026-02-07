'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Folder } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal'
import { getAllProjects, Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectsContent() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projects
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-dark-400 text-lg">
              Things I&apos;ve built and contributed to.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* GitHub link */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16">
            <a
              href="https://github.com/vitorpinho-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-dark-400 hover:text-dark-200 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              More on GitHub
              <ExternalLink className="w-3 h-3 ml-1.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    completed: 'text-emerald-400',
    'in-progress': 'text-amber-400',
    planned: 'text-dark-500',
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group p-6 bg-dark-900/30 border border-dark-800/40 rounded-xl transition-all duration-300 hover:border-dark-700/60 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-white group-hover:text-dark-100 transition-colors">
            {project.title}
          </h3>
          <span
            className={cn(
              'text-xs font-mono capitalize',
              statusColors[project.status]
            )}
          >
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-dark-500 hover:text-dark-300 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-dark-500 hover:text-dark-300 transition-colors"
              aria-label="View project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-dark-500 text-sm mb-4 flex-grow leading-relaxed">
        {project.longDescription || project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-mono bg-dark-800/40 text-dark-400 rounded border border-dark-700/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
