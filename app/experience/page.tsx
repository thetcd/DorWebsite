'use client'

import { motion } from 'framer-motion'
import { Briefcase, Rocket, GraduationCap, Users, Shield, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react'

export default function Experience() {
  const transactions = [
    {
      type: 'work',
      icon: Rocket,
      title: 'SeaSwap',
      subtitle: 'Co-Founder',
      amount: '2025–Present',
      time: '2025–Present',
      positive: true,
      details: [
        'Leading product development, business strategy, and go-to-market execution for a DEX aggregator',
        'Managing MVP development and coordinating partnerships, community growth, and marketing efforts',
        'Conducting user research and defining product–market fit within the DeFi and Layer-2 ecosystem',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Utila',
      subtitle: 'QA Engineer',
      amount: '2023–2025',
      time: '2023–2025',
      positive: true,
      details: [
        'First QA hire; created test plans, workflows, and documentation',
        'Tested web, mobile, Chrome extension, and API flows',
        'Tested dozens of blockchain and exchange integrations & major core features',
        'Served as the bridge between product and engineering',
      ],
    },
    {
      type: 'work',
      icon: Users,
      title: 'EmeraldDAO',
      subtitle: 'Co-Founder',
      amount: '2020–2021',
      time: '2020–2021',
      positive: true,
      details: [
        'Built one of the first DAOs on Cardano',
        'Created governance design and proposal workflow',
        'Managed a community of 400+ members',
      ],
    },
    {
      type: 'military',
      icon: Shield,
      title: 'Israeli Defense Forces',
      subtitle: 'Combatant',
      amount: '2018–2020',
      time: '2018–2020',
      positive: true,
      details: [
        'Combatant in the Air Force (2018–2019)',
        'Combatant on a Navy battleship (2019–2020)',
      ],
    },
    {
      type: 'volunteer',
      icon: Users,
      title: 'Bnei HaMoshavim',
      subtitle: 'Volunteer Work',
      amount: '2014–2017',
      time: '2014–2017',
      positive: true,
      details: [
        'Organized youth programs',
        'Led teams and event logistics',
      ],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Tel Aviv University',
      subtitle: 'BA Economics & Business Administration',
      amount: 'Graduated',
      time: '2022–2025',
      positive: true,
      details: [
        'Bachelor\'s degree in Economics & Business Administration (2022–2025)',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-phantom-bg pb-20">
      <div className="max-w-md mx-auto px-4">
        <div className="pt-8 pb-6">
          <h1 className="text-2xl font-semibold text-phantom-text mb-6">History</h1>

          <div className="space-y-2">
            {transactions.map((tx, index) => {
              const Icon = tx.icon
              const TransactionIcon = tx.positive ? ArrowDownRight : ArrowUpRight
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="phantom-card p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tx.type === 'work' ? 'bg-phantom-purple/20' : 
                        tx.type === 'military' ? 'bg-blue-500/20' :
                        tx.type === 'volunteer' ? 'bg-green-500/20' :
                        'bg-yellow-500/20'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          tx.type === 'work' ? 'text-phantom-purple' : 
                          tx.type === 'military' ? 'text-blue-400' :
                          tx.type === 'volunteer' ? 'text-green-400' :
                          'text-yellow-400'
                        }`} />
                      </div>
                      <div>
                        <p className="text-phantom-text font-semibold">{tx.title}</p>
                        <p className="text-xs text-phantom-text-secondary">{tx.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center gap-1 justify-end mb-1 ${
                        tx.positive ? 'text-green-400' : 'text-red-400'
                      }`}>
                        <TransactionIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{tx.amount}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end text-phantom-text-tertiary">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{tx.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-13 space-y-1">
                    {tx.details.map((detail, idx) => (
                      <p key={idx} className="text-xs text-phantom-text-secondary">
                        • {detail}
                      </p>
                    ))}
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


