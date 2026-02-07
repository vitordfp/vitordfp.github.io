import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LayoutWrapper } from '@/components/layout/LayoutWrapper'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vitorpinho.dev'),
  title: {
    default: 'Vitor Pinho — Cybersecurity Engineer',
    template: '%s | Vitor Pinho',
  },
  description:
    'Cybersecurity Engineer. Exploring the boundary between offensive and defensive security.',
  keywords: [
    'cybersecurity',
    'security engineer',
    'cloud security',
    'vulnerability research',
    'bug bounty',
    'vitor pinho',
  ],
  authors: [{ name: 'Vitor Pinho' }],
  creator: 'Vitor Pinho',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vitorpinho.dev',
    siteName: 'Vitor Pinho',
    title: 'Vitor Pinho — Cybersecurity Engineer',
    description:
      'Cybersecurity Engineer. Exploring the boundary between offensive and defensive security.',
  },
  twitter: {
    card: 'summary',
    title: 'Vitor Pinho — Cybersecurity Engineer',
    description:
      'Cybersecurity Engineer. Exploring the boundary between offensive and defensive security.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
