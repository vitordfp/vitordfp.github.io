'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  const Component = onClick ? motion.button : motion.div

  return (
    <Component
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={cn(
        'relative p-6 bg-dark-900/50 border border-dark-800/50 rounded-xl',
        'backdrop-blur-sm transition-all duration-300',
        hover && 'hover:border-cyber-500/30 hover:bg-dark-900/80 hover:shadow-[0_0_30px_rgba(0,255,224,0.1)]',
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyber-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      {children}
    </Component>
  )
}

// Blog post card
interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readingTime: number
  tags: string[]
  slug: string
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  date,
  readingTime,
  tags,
  slug,
  featured,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'relative p-6 bg-dark-900/50 border border-dark-800/50 rounded-xl h-full',
          'backdrop-blur-sm transition-all duration-300',
          'hover:border-cyber-500/30 hover:bg-dark-900/80 hover:shadow-[0_0_30px_rgba(0,255,224,0.1)]',
          featured && 'ring-1 ring-cyber-500/20'
        )}
      >
        {featured && (
          <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent" />
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-mono bg-cyber-500/10 text-cyber-500 rounded-full border border-cyber-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyber-500 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-dark-400 text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-dark-500 font-mono">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span>{readingTime} min read</span>
        </div>

        {/* Arrow indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.svg
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="w-5 h-5 text-cyber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </div>
      </motion.article>
    </Link>
  )
}

// Project card
interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  status: 'completed' | 'in-progress' | 'planned'
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
  status,
}: ProjectCardProps) {
  const statusColors = {
    completed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'in-progress': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    planned: 'bg-dark-500/20 text-dark-400 border-dark-500/30',
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative p-6 bg-dark-900/50 border border-dark-800/50 rounded-xl h-full backdrop-blur-sm transition-all duration-300 hover:border-cyber-500/30 hover:bg-dark-900/80 hover:shadow-[0_0_30px_rgba(0,255,224,0.1)] group"
    >
      {/* Status badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={cn(
            'px-2.5 py-0.5 text-xs font-mono rounded-full border capitalize',
            statusColors[status]
          )}
        >
          {status.replace('-', ' ')}
        </span>
        <div className="flex space-x-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-dark-800/50 border border-dark-700/50 hover:border-cyber-500/50 transition-colors"
              aria-label="View on GitHub"
            >
              <svg className="w-4 h-4 text-dark-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-dark-800/50 border border-dark-700/50 hover:border-cyber-500/50 transition-colors"
              aria-label="View project"
            >
              <svg className="w-4 h-4 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyber-500 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-dark-400 text-sm mb-4 line-clamp-3">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-mono bg-dark-800/50 text-dark-300 rounded border border-dark-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

