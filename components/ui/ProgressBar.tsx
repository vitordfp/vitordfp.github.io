'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  max: number
  label?: string
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  className?: string
  color?: 'cyber' | 'emerald' | 'amber' | 'red'
}

const colors = {
  cyber: 'bg-cyber-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
}

const glowColors = {
  cyber: 'shadow-[0_0_10px_rgba(0,255,224,0.5)]',
  emerald: 'shadow-[0_0_10px_rgba(16,185,129,0.5)]',
  amber: 'shadow-[0_0_10px_rgba(245,158,11,0.5)]',
  red: 'shadow-[0_0_10px_rgba(239,68,68,0.5)]',
}

const sizes = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

export function ProgressBar({
  value,
  max,
  label,
  showValue = true,
  size = 'md',
  animated = true,
  className,
  color = 'cyber',
}: ProgressBarProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const percentage = Math.round((value / max) * 100)

  useEffect(() => {
    if (!animated || !isInView) return

    const duration = 1500
    const steps = 60
    const increment = percentage / steps
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= percentage) {
        setDisplayValue(percentage)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.round(current))
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [animated, isInView, percentage])

  return (
    <div ref={ref} className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm text-dark-300">{label}</span>
          )}
          {showValue && (
            <span className="text-sm font-mono text-dark-400">
              {value}/{max}
              <span className="text-dark-600 ml-1">({animated ? displayValue : percentage}%)</span>
            </span>
          )}
        </div>
      )}
      <div className={cn('w-full bg-dark-800 rounded-full overflow-hidden', sizes[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: animated ? 1.5 : 0, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'h-full rounded-full transition-shadow duration-300',
            colors[color],
            percentage > 0 && glowColors[color]
          )}
        />
      </div>
    </div>
  )
}

// Circular progress indicator
interface CircularProgressProps {
  value: number
  max: number
  size?: number
  strokeWidth?: number
  label?: string
  showValue?: boolean
  color?: 'cyber' | 'emerald' | 'amber'
  className?: string
}

export function CircularProgress({
  value,
  max,
  size = 120,
  strokeWidth = 8,
  label,
  showValue = true,
  color = 'cyber',
  className,
}: CircularProgressProps) {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const percentage = Math.round((value / max) * 100)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI

  const strokeColors = {
    cyber: '#00FFE0',
    emerald: '#10B981',
    amber: '#F59E0B',
  }

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <svg
        ref={ref}
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
          className="text-dark-800"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={strokeColors[color]}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={
            isInView
              ? { strokeDashoffset: circumference - (percentage / 100) * circumference }
              : { strokeDashoffset: circumference }
          }
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            filter: `drop-shadow(0 0 6px ${strokeColors[color]}50)`,
          }}
        />
      </svg>
      {showValue && (
        <div className="absolute flex flex-col items-center justify-center" style={{ width: size, height: size }}>
          <span className="text-2xl font-bold text-white">{percentage}%</span>
          {label && <span className="text-xs text-dark-400">{label}</span>}
        </div>
      )}
    </div>
  )
}

