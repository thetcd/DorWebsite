import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import ClientPageTransition from './components/ClientPageTransition'
import NavigationProgress from './components/NavigationProgress'
import { Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

export const metadata: Metadata = {
  title: 'Dor Cohen — Web3 & Fintech Professional',
  description: 'Web3 and fintech professional with experience across QA, product, and business development. Co-founded SeaSwap and EmeraldDAO. Passionate about decentralized innovation.',
  keywords: ['Web3', 'Blockchain', 'DeFi', 'Crypto', 'Product Development', 'QA', 'Dor Cohen'],
  authors: [{ name: 'Dor Cohen' }],
  openGraph: {
    title: 'Dor Cohen — Web3 & Fintech Professional',
    description: 'Web3 and fintech professional with experience across QA, product, and business development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dor Cohen — Web3 & Fintech Professional',
    description: 'Web3 and fintech professional with experience across QA, product, and business development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationProgress />
        <Suspense fallback={<LoadingSpinner />}>
          <ClientPageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </ClientPageTransition>
        </Suspense>
        <Navbar />
      </body>
    </html>
  )
}


