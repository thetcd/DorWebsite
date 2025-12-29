'use client'

import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-phantom-bg">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-12 h-12 rounded-full border-4 border-phantom-border border-t-phantom-purple"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-sm text-phantom-text-secondary">Loading...</p>
      </div>
    </div>
  )
}

