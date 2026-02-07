'use client'

import { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/animations/PageTransition'

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-dark-950 noise-overlay">
      <Navbar />
      <PageTransition>
        <main className="relative z-10">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
}
