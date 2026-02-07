'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-dark-700 mb-6">
            404
          </h1>
          <p className="text-dark-400 mb-8">
            This page doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-sm text-dark-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
