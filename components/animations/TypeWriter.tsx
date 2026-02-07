'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypeWriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  cursor?: boolean
  onComplete?: () => void
}

export function TypeWriter({
  text,
  delay = 0,
  speed = 50,
  className = '',
  cursor = true,
  onComplete,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
          setIsComplete(true)
          onComplete?.()
        }
      }, speed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, delay, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isComplete ? [1, 0] : 1 }}
          transition={isComplete ? { repeat: Infinity, duration: 0.8 } : {}}
          className="text-cyber-500"
        >
          ▊
        </motion.span>
      )}
    </span>
  )
}

// Multi-line typewriter effect
interface MultiLineTypeWriterProps {
  lines: string[]
  lineDelay?: number
  speed?: number
  className?: string
  lineClassName?: string
}

export function MultiLineTypeWriter({
  lines,
  lineDelay = 500,
  speed = 30,
  className = '',
  lineClassName = '',
}: MultiLineTypeWriterProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [completedLines, setCompletedLines] = useState<string[]>([])
  const [isTypingCurrent, setIsTypingCurrent] = useState(true)

  const handleLineComplete = () => {
    if (currentLineIndex < lines.length - 1) {
      setCompletedLines(prev => [...prev, lines[currentLineIndex]])
      setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
      }, lineDelay)
    } else {
      setIsTypingCurrent(false)
    }
  }

  return (
    <div className={className}>
      {completedLines.map((line, index) => (
        <div key={index} className={lineClassName}>
          {line}
        </div>
      ))}
      {currentLineIndex < lines.length && (
        <div className={lineClassName}>
          <TypeWriter
            text={lines[currentLineIndex]}
            speed={speed}
            cursor={isTypingCurrent || currentLineIndex === lines.length - 1}
            onComplete={handleLineComplete}
          />
        </div>
      )}
    </div>
  )
}

