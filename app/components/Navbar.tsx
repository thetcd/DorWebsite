'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Wallet, History, Settings, User } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Wallet', icon: Wallet },
    { href: '/about', label: 'Profile', icon: User },
    { href: '/experience', label: 'History', icon: History },
    { href: '/contact', label: 'Settings', icon: Settings },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-phantom-card border-t border-phantom-border">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around h-16 px-2 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={`relative flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all ${
                  isActive
                    ? 'text-phantom-purple'
                    : 'text-phantom-text-tertiary hover:text-phantom-text-secondary'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-phantom-purple' : ''}`} />
                <span className={`text-xs font-medium ${isActive ? 'text-phantom-purple' : ''}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-phantom-purple"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}


