'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Send, Download, ChevronRight, Copy } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:dorcohen285@gmail.com',
      value: 'dorcohen285@gmail.com',
      copy: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/dor-cohen-3ab878207',
      value: 'linkedin.com/in/dor-cohen-3ab878207',
      copy: false,
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/ThetcdDC',
      value: '@ThetcdDC',
      copy: true,
    },
  ]

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-phantom-bg pb-20">
      <div className="max-w-md mx-auto px-4">
        <div className="pt-8 pb-6">
          <h1 className="text-2xl font-semibold text-phantom-text mb-6">Contact Me</h1>

          <div className="space-y-2 mb-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="phantom-card-hover p-4 flex items-center justify-between group"
                  aria-label={`Contact via ${link.label}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-phantom-purple/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-phantom-purple" />
                    </div>
                    <div>
                      <p className="text-phantom-text font-medium text-sm">{link.label}</p>
                      <p className="text-xs text-phantom-text-secondary">{link.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {link.copy && (
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          handleCopy(link.value)
                        }}
                        className="p-2 hover:bg-phantom-border rounded-lg transition-colors"
                      >
                        {copied === link.value ? (
                          <span className="text-xs text-green-400">Copied</span>
                        ) : (
                          <Copy className="w-4 h-4 text-phantom-text-tertiary" />
                        )}
                      </button>
                    )}
                    <ChevronRight className="w-5 h-5 text-phantom-text-tertiary" />
                  </div>
                </motion.a>
              )
            })}
          </div>

          <div className="phantom-card p-4">
            <a
              href="/api/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full phantom-button py-3 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


