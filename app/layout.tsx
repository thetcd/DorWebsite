import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import ClientPageTransition from './components/ClientPageTransition'
import NavigationProgress from './components/NavigationProgress'
import { Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

export const metadata: Metadata = {
  metadataBase: new URL('https://dor-cohen.com'),
  title: {
    default: 'Dor Cohen — MPC Wallet Expert & Web3 Professional',
    template: '%s | Dor Cohen',
  },
  description: 'MPC wallet specialist with 2+ years at Utila and ForDeFi. Expertise in institutional custody, multi-chain integrations, and Web3 infrastructure. Co-founded SeaSwap and EmeraldDAO.',
  keywords: ['MPC Wallet', 'Web3', 'Blockchain', 'DeFi', 'Crypto', 'Customer Success', 'QA', 'ForDeFi', 'Utila', 'Dor Cohen', 'Multi-Party Computation', 'Custody Solutions', 'Institutional Crypto'],
  authors: [{ name: 'Dor Cohen' }],
  creator: 'Dor Cohen',
  publisher: 'Dor Cohen',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dor-cohen.com',
    title: 'Dor Cohen — MPC Wallet Expert & Web3 Professional',
    description: 'MPC wallet specialist with expertise in institutional custody and multi-chain integrations. 2+ years at ForDeFi and Utila.',
    siteName: 'Dor Cohen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dor Cohen — MPC Wallet Expert & Web3 Professional',
    description: 'MPC wallet specialist with expertise in institutional custody and multi-chain integrations. 2+ years at ForDeFi and Utila.',
    creator: '@ThetcdDC',
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


