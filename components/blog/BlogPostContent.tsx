'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, Copy, Check, Share2, Twitter, Linkedin } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import { Post } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { CodeBlock } from '@/components/ui/CodeBlock'

interface BlogPostContentProps {
  post: Post
}

// Custom MDX components
const mdxComponents = {
  pre: ({ children, ...props }: any) => {
    // Extract code from pre > code structure
    const codeElement = children?.props?.children || ''
    const className = children?.props?.className || ''
    const language = className.replace('language-', '') || 'plaintext'
    
    return (
      <CodeBlock
        code={typeof codeElement === 'string' ? codeElement : ''}
        language={language}
        className="my-6"
      />
    )
  },
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-xl font-bold text-white mt-8 mb-3 scroll-mt-24" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-dark-300 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-dark-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-dark-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-dark-300" {...props}>
      {children}
    </li>
  ),
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="text-cyber-500 hover:text-cyber-400 underline underline-offset-4 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-cyber-500 pl-4 my-6 italic text-dark-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: any) => (
    <code
      className="px-1.5 py-0.5 bg-cyber-500/10 text-cyber-500 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [copied, setCopied] = useState(false)
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])

  // Extract headings for table of contents
  useEffect(() => {
    const extractedHeadings: typeof headings = []
    const regex = /^(#{2,3})\s+(.+)$/gm
    let match

    while ((match = regex.exec(post.content)) !== null) {
      const level = match[1].length
      const text = match[2]
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
      
      extractedHeadings.push({ id, text, level })
    }

    setHeadings(extractedHeadings)
  }, [post.content])

  const copyLink = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''
  const shareTitle = encodeURIComponent(post.frontmatter.title)

  return (
    <article className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center font-mono text-sm text-dark-400 hover:text-cyber-500 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Main content */}
          <div className="min-w-0">
            {/* Header */}
            <header className="mb-12">
              <ScrollReveal>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.frontmatter.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="px-3 py-1 text-xs font-mono bg-cyber-500/10 text-cyber-500 rounded-full border border-cyber-500/20 hover:bg-cyber-500/20 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.frontmatter.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-xl text-dark-400 mb-6">
                  {post.frontmatter.excerpt}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 font-mono">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.frontmatter.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readingTime} min read
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {post.frontmatter.author}
                  </div>
                </div>
              </ScrollReveal>
            </header>

            {/* Content */}
            <ScrollReveal delay={0.4}>
              <div className="prose prose-lg prose-invert prose-cyber max-w-none">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug, rehypeHighlight],
                    },
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Share section */}
            <ScrollReveal delay={0.5}>
              <div className="mt-16 pt-8 border-t border-dark-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-dark-400">Enjoyed this post? Share it!</p>
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyLink}
                      className="flex items-center gap-2 px-4 py-2 bg-dark-900/50 border border-dark-800/50 rounded-lg text-sm text-dark-300 hover:border-cyber-500/50 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy link
                        </>
                      )}
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-900/50 border border-dark-800/50 rounded-lg text-dark-300 hover:border-cyber-500/50 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-900/50 border border-dark-800/50 rounded-lg text-dark-300 hover:border-cyber-500/50 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Table of contents */}
              {headings.length > 0 && (
                <ScrollReveal delay={0.3}>
                  <div className="p-6 bg-dark-900/50 border border-dark-800/50 rounded-xl">
                    <h3 className="font-mono text-sm text-white mb-4">On this page</h3>
                    <nav className="space-y-2">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className={`block text-sm text-dark-400 hover:text-cyber-500 transition-colors ${
                            heading.level === 3 ? 'pl-4' : ''
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}

