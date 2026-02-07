'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Rocket, Code, TrendingUp, Zap, Database, BarChart3, Users, FlaskConical, ChevronRight, Wallet, Globe, Search, FileText, Settings, Palette, Shield } from 'lucide-react'
import Image from 'next/image'
import profilePic from '@/public/pfp.jpg'

export default function About() {
  const timelineItems = [
    {
      title: 'ForDeFi',
      subtitle: 'Customer Success Engineer',
      description: 'Supporting institutional MPC wallet customers; leveraging data analysis to scale support operations and improve efficiency',
      icon: Briefcase,
      date: '2026–Present',
    },
    {
      title: 'SeaSwap',
      subtitle: 'Co-Founder',
      description: 'Leading product development, business strategy, and go-to-market execution for a DEX aggregator',
      icon: Rocket,
      date: '2025–2025',
    },
    {
      title: 'Utila',
      subtitle: 'QA Engineer',
      description: 'First QA hire; tested MPC wallet infrastructure across web, mobile, extension, and API; validated 50+ blockchain integrations',
      icon: Briefcase,
      date: '2023–2025',
    },
    {
      title: 'EmeraldDAO',
      subtitle: 'Co-Founder',
      description: 'Founded one of the first DAOs on Cardano; designed governance and grew a 400+ member community',
      icon: Users,
      date: '2020–2021',
    },
    {
      title: 'Israeli Defense Forces',
      subtitle: 'Combatant',
      description: 'Air Force (2018–2019) and Navy battleship (2019–2020)',
      icon: Shield,
      date: '2018–2020',
    },
    {
      title: 'Tel Aviv University',
      subtitle: 'BA Economics & Business Administration',
      description: 'Bachelor’s degree in Economics & Business Administration',
      icon: GraduationCap,
      date: '2022–2025',
    },
    {
      title: 'Bnei HaMoshavim',
      subtitle: 'Volunteer',
      description: 'Organized youth programs and events; led teams and managed logistics',
      icon: Users,
      date: '2014–2017',
    },
  ]

  const skills = [
    { icon: Wallet, label: 'Blockchain integrations' },
    { icon: Globe, label: 'Web3 wallets & DEX' },
    { icon: Search, label: 'On-chain analysis' },
    { icon: FileText, label: 'Product research' },
    { icon: BarChart3, label: 'Market analysis' },
    { icon: Database, label: 'Basic SQL' },
    { icon: Code, label: 'Basic Python' },
    { icon: Settings, label: 'Dev Tools' },
  ]

  const interests = [
    { icon: BarChart3, label: 'Data analysis' },
    { icon: TrendingUp, label: 'Economics' },
    { icon: Zap, label: 'Basketball' },
    { icon: Wallet, label: 'Investments' },
    { icon: FileText, label: 'Product strategy' },
    { icon: Globe, label: 'Web3' },
  ]

  return (
    <div className="min-h-screen bg-phantom-bg pb-20">
      <div className="max-w-md mx-auto px-4">
        <div className="pt-8 pb-6">
          <h1 className="text-2xl font-semibold text-phantom-text mb-6">Profile</h1>

          {/* Profile Header */}
          <div className="phantom-card p-6 mb-6 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
              <Image
                src={profilePic}
                alt="Dor Cohen"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-phantom-text mb-1">Dor Cohen</h2>
            <p className="text-sm text-phantom-text-secondary mb-4">MPC Wallet Expert & Web3 Professional</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs text-phantom-text-tertiary">Customer Success</span>
              <span className="text-phantom-text-tertiary">•</span>
              <span className="text-xs text-phantom-text-tertiary">QA & Product</span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="phantom-card p-4 mb-4">
            <h3 className="text-lg font-semibold text-phantom-text mb-3">About</h3>
            <p className="text-sm text-phantom-text-secondary leading-relaxed mb-3">
              Web3 professional with experience across QA, customer success, and product development. Co-founded SeaSwap (DEX aggregator) and EmeraldDAO (one of the first Cardano DAOs), gaining hands-on experience in blockchain integrations, product design, and ecosystem growth.
            </p>
            <p className="text-sm text-phantom-text-secondary leading-relaxed">
              Specialized in MPC wallet solutions through 2+ years at Utila and ForDeFi, testing and supporting multi-chain integrations across 50+ blockchain networks. Data-oriented approach to organizing workflows, analyzing patterns, and improving operational efficiency.
            </p>
          </div>

          {/* Skills */}
          <div className="phantom-card p-4 mb-4">
            <h3 className="text-lg font-semibold text-phantom-text mb-3">Skills</h3>
            <div className="space-y-2 mb-4">
              <p className="text-xs text-phantom-text-secondary">MPC wallet solutions (testing & supporting custody workflows)</p>
              <p className="text-xs text-phantom-text-secondary">Multi-chain integrations (EVM, BTC, Solana, TON, 50+ networks)</p>
              <p className="text-xs text-phantom-text-secondary">Institutional Web3 workflows & compliance tools (Chainalysis, TRM Labs)</p>
              <p className="text-xs text-phantom-text-secondary">On-chain analysis & transaction testing</p>
              <p className="text-xs text-phantom-text-secondary">Customer success & technical support</p>
              <p className="text-xs text-phantom-text-secondary">Product research, QA, and data analysis</p>
              <p className="text-xs text-phantom-text-secondary">SQL, Python, API testing (Postman, Swagger)</p>
              <p className="text-xs text-phantom-text-secondary">Jira, GitHub, Figma, Datadog, DevTools, MongoDB, Notion, HubSpot, Snowflake</p>
            </div>
          </div>

          {/* Interests */}
          <div className="phantom-card p-4 mb-4">
            <h3 className="text-lg font-semibold text-phantom-text mb-3">Interests</h3>
            <div className="grid grid-cols-3 gap-3">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-xl bg-phantom-border flex items-center justify-center">
                      <Icon className="w-6 h-6 text-phantom-purple" />
                    </div>
                    <p className="text-xs text-phantom-text-secondary text-center">{interest.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="phantom-card p-4 mb-4">
            <h3 className="text-lg font-semibold text-phantom-text mb-4">Experience</h3>
            <div className="space-y-4">
              {timelineItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-3 pb-4 border-b border-phantom-border last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-phantom-purple/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-phantom-purple" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h4 className="text-phantom-text font-semibold text-sm">{item.title}</h4>
                          <p className="text-xs text-phantom-text-secondary">{item.subtitle}</p>
                        </div>
                        <span className="text-xs text-phantom-text-tertiary">{item.date}</span>
                      </div>
                      <p className="text-xs text-phantom-text-secondary mt-1">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Education & Programs */}
          <div className="phantom-card p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-phantom-text">Education</h3>
              <ChevronRight className="w-5 h-5 text-phantom-text-tertiary" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-phantom-text font-medium text-sm">Tel Aviv University</p>
                <p className="text-xs text-phantom-text-secondary">BA Economics & Business Administration (2022–2025)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


