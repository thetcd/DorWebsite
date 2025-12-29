'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, GraduationCap, Rocket, Users, ArrowDownRight, Copy, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [copied, setCopied] = useState(false)

  const handleAssetClick = (assetName: string) => {
    alert(`Viewing details for ${assetName}`)
  }

  const handleTransactionClick = (tx: any) => {
    alert(`Transaction details:\nType: ${tx.type}\nAmount: ${tx.amount} ${tx.token}\nTime: ${tx.time}`)
  }

  const assets = [
    {
      icon: Rocket,
      name: 'SeaSwap',
      symbol: 'DEX Aggregator',
      balance: 'Active',
      value: '2025',
      change: 'Product Development & Strategy',
      positive: true,
    },
    {
      icon: Briefcase,
      name: 'Utila',
      symbol: 'QA',
      balance: 'QA Engineer',
      value: '2023–2025',
      change: 'Web / Mobile / Extension / API',
      positive: true,
    },
    {
      icon: GraduationCap,
      name: 'Tel Aviv University',
      symbol: 'BA',
      balance: 'Economics & Business',
      value: '2022–2025',
      change: 'Education',
      positive: true,
    },
    {
      icon: Users,
      name: 'EmeraldDAO',
      symbol: 'DAO',
      balance: 'Co-Founder',
      value: '2020–2021',
      change: 'DAO / Governance',
      positive: true,
    },
  ]

  const transactions = [
    { type: 'update', amount: 'SeaSwap', token: 'Co-Founder', time: '2025', icon: ArrowDownRight },
    { type: 'update', amount: 'Utila', token: 'QA Engineer', time: '2023–2025', icon: ArrowDownRight },
    { type: 'education', amount: 'Tel Aviv University', token: 'BA Economics & Business', time: '2022–2025', icon: ArrowDownRight },
    { type: 'historical', amount: 'EmeraldDAO', token: 'DAO Governance', time: '2020–2021', icon: ArrowDownRight },
  ]

  const totalBalance = balanceVisible ? '2020–Present' : '••••••••'
  const address = 'Dor1...C0h3n'

  return (
    <div className="min-h-screen bg-phantom-bg pb-20">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="pt-8 pb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-phantom-text">Wallet</h1>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('Dor1...C0h3n')
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              className="phantom-card p-2 hover:bg-phantom-border transition-colors"
              title="Copy address"
              aria-label="Copy address"
            >
              {copied ? (
                <span className="text-xs text-green-400">Copied!</span>
              ) : (
                <Copy className="w-5 h-5 text-phantom-text-secondary" />
              )}
            </button>
          </div>
          
          {/* Address */}
          <div className="flex items-center justify-center mb-6">
            <div className="phantom-card px-4 py-2 rounded-full">
              <span className="text-sm text-phantom-text-secondary font-mono">{address}</span>
            </div>
          </div>

          {/* Balance Display */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-sm text-phantom-text-secondary">Web3 Tenure</p>
              <button
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="p-1 hover:bg-phantom-card rounded transition-colors"
                aria-label={balanceVisible ? 'Hide tenure' : 'Show tenure'}
              >
                {balanceVisible ? (
                  <EyeOff className="w-4 h-4 text-phantom-text-secondary" />
                ) : (
                  <Eye className="w-4 h-4 text-phantom-text-secondary" />
                )}
              </button>
            </div>
            <h2 className="text-4xl font-semibold text-phantom-text mb-1">{totalBalance}</h2>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <Link
              href="/contact"
              className="flex-1 phantom-button py-3 text-sm font-semibold text-center"
              aria-label="Contact"
            >
              Contact
            </Link>
            <Link
              href="/experience"
              className="flex-1 phantom-button-secondary py-3 text-sm font-medium text-center"
              aria-label="History"
            >
              History
            </Link>
            <a
              href="/api/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 phantom-button-secondary py-3 text-sm font-medium text-center"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Assets List */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-phantom-text mb-4">Assets</h3>
          <div className="space-y-2">
            {assets.map((asset, index) => {
              const Icon = asset.icon
              return (
                <motion.div
                  key={asset.symbol}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleAssetClick(asset.name)}
                  className="phantom-card-hover p-4 cursor-pointer"
                  aria-label={`View ${asset.name} details`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-phantom-purple/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-phantom-purple" />
                      </div>
                      <div>
                        <p className="text-phantom-text font-medium">{asset.name}</p>
                        <p className="text-xs text-phantom-text-tertiary">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-phantom-text font-medium text-sm">{asset.value}</p>
                      <div className="flex items-center gap-1 justify-end">
                        <p className="text-xs text-phantom-text-tertiary">
                          {asset.change}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-semibold text-phantom-text mb-4">Recent Activity</h3>
          <div className="space-y-2">
            {transactions.map((tx, index) => {
              const Icon = tx.icon
              const isSend = tx.type === 'send'
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (assets.length + index) * 0.05 }}
                  onClick={() => handleTransactionClick(tx)}
                  className="phantom-card p-4 cursor-pointer hover:bg-phantom-border transition-colors"
                  aria-label={`View transaction details for ${tx.amount}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isSend ? 'bg-red-500/20' : 'bg-green-500/20'
                      }`}>
                        <Icon className={`w-5 h-5 ${isSend ? 'text-red-400' : 'text-green-400'}`} />
                      </div>
                      <div>
                        <p className="text-phantom-text font-medium capitalize">{tx.type}</p>
                        <p className="text-xs text-phantom-text-tertiary">{tx.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-phantom-text font-medium">{tx.amount}</p>
                      <p className="text-xs text-phantom-text-tertiary">{tx.token}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}


