'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = 'plaintext',
  filename,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.trim().split('\n')

  return (
    <div className={cn('relative group rounded-xl overflow-hidden', className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-dark-900 border-b border-dark-800">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-dark-500" />
          {filename ? (
            <span className="text-sm font-mono text-dark-400">{filename}</span>
          ) : (
            <span className="text-sm font-mono text-dark-500">{language}</span>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
          className={cn(
            'flex items-center space-x-1 px-2 py-1 rounded text-xs font-mono transition-colors',
            copied
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-dark-800 text-dark-400 hover:text-white hover:bg-dark-700'
          )}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto bg-dark-950 p-4">
        <pre className="font-mono text-sm">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right text-dark-600 select-none">
                    {index + 1}
                  </span>
                )}
                <span className="table-cell text-dark-200">{line || ' '}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}

// Terminal-style output
interface TerminalOutputProps {
  lines: Array<{
    type: 'command' | 'output' | 'comment'
    content: string
  }>
  title?: string
  className?: string
}

export function TerminalOutput({ lines, title = 'Terminal', className }: TerminalOutputProps) {
  return (
    <div className={cn('rounded-xl overflow-hidden border border-dark-800', className)}>
      {/* Terminal header */}
      <div className="flex items-center px-4 py-2 bg-dark-900 border-b border-dark-800">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-xs font-mono text-dark-500">{title}</span>
      </div>

      {/* Terminal content */}
      <div className="bg-dark-950 p-4 font-mono text-sm">
        {lines.map((line, index) => (
          <div key={index} className="mb-1 last:mb-0">
            {line.type === 'command' && (
              <div className="flex items-start">
                <span className="text-cyber-500 mr-2">$</span>
                <span className="text-dark-200">{line.content}</span>
              </div>
            )}
            {line.type === 'output' && (
              <div className="text-dark-400 pl-4">{line.content}</div>
            )}
            {line.type === 'comment' && (
              <div className="text-dark-600"># {line.content}</div>
            )}
          </div>
        ))}
        <div className="flex items-center mt-2">
          <span className="text-cyber-500 mr-2">$</span>
          <span className="animate-cursor-blink text-cyber-500">▊</span>
        </div>
      </div>
    </div>
  )
}

