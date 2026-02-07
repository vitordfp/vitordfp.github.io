'use client'

import { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/animations/PageTransition'

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-dark-950 noise-overlay">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="ambient-orb w-[500px] h-[500px] bg-cyber-500/[0.02] top-[10%] -left-[10%]"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="ambient-orb w-[400px] h-[400px] bg-purple-500/[0.015] top-[60%] right-[-5%]"
          style={{ animationDelay: '7s' }}
        />
        <div
          className="ambient-orb w-[300px] h-[300px] bg-blue-500/[0.012] top-[30%] left-[50%]"
          style={{ animationDelay: '14s' }}
        />
      </div>

      {/* Subtle grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

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
