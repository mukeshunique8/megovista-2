'use client'

import React from 'react'
import {
  Building2,
  Laptop,
  HeartPulse,
  ShoppingBag,
  Landmark,
  UtensilsCrossed,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'
import { agencyClients, agencyManifesto, MARQUEE_WORDS } from '@/src/content/megovista'
import { CountUp } from '@/components/reactbits/CountUp'
import { Marquee } from '@/components/reactbits/Marquee'
import { SpotlightCard } from '@/components/reactbits/SpotlightCard'

const SECTOR_ICONS: Record<string, React.ElementType> = {
  CL_01: Building2,
  CL_02: Laptop,
  CL_03: HeartPulse,
  CL_04: ShoppingBag,
  CL_05: Landmark,
  CL_06: UtensilsCrossed,
}

export function IndustrySectors() {
  return (
    <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-violet-500" />
            <span>{agencyManifesto.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] leading-[1.08] text-[var(--text-main)] font-sans-tight">
            {agencyManifesto.titlePrimary}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-[#BAE6FD] dark:via-[#93C5FD] dark:to-[#DDD6FE]">
              {agencyManifesto.titleAccent}
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed max-w-2xl mx-auto">
            {agencyManifesto.lead}
          </p>
        </div>

        {/* 4 Key Statistics Metrics with React Bits CountUp */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {/* Stat 1: 100% */}
          <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-center transition-transform hover:-translate-y-1 duration-300 shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 font-sans-tight">
              <CountUp to={100} suffix="%" duration={2} />
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] font-light">
              {agencyManifesto.stats[0]?.label || 'Statutory Filing Accuracy'}
            </p>
          </div>

          {/* Stat 2: Zero Defaults */}
          <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-center transition-transform hover:-translate-y-1 duration-300 shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 font-sans-tight">
              Zero
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] font-light">
              {agencyManifesto.stats[1]?.label || 'Penalty Default Rate'}
            </p>
          </div>

          {/* Stat 3: 11+ Frameworks */}
          <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-center transition-transform hover:-translate-y-1 duration-300 shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 font-sans-tight">
              <CountUp to={11} suffix="+" duration={1.8} />
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] font-light">
              {agencyManifesto.stats[2]?.label || 'Turnkey Regulatory Frameworks'}
            </p>
          </div>

          {/* Stat 4: 500+ Workforce Scale */}
          <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-center transition-transform hover:-translate-y-1 duration-300 shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 font-sans-tight">
              <CountUp to={500} suffix="+" duration={2.4} />
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] font-light">
              {agencyManifesto.stats[3]?.label || 'Workforce Scale Supported'}
            </p>
          </div>
        </div>

        {/* React Bits Infinite Marquee with Edge Fade Mask */}
        <div className="mb-16 sm:mb-20">
          <Marquee items={MARQUEE_WORDS} speed={32} pauseOnHover={true} />
        </div>

        {/* Key Industry Verticals Governed Cards (React Bits Spotlight Cards) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[var(--text-main)] font-sans-tight">
                {agencyManifesto.partnersHeading}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light mt-1">
                Mission-critical compliance frameworks tailored to high-liability sectors.
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              6 Active Industry Sectors
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencyClients.map((client) => {
              const IconComponent = SECTOR_ICONS[client.id] || Building2
              return (
                <SpotlightCard
                  key={client.id}
                  spotlightColor="rgba(99, 102, 241, 0.15)"
                  className="p-6 sm:p-7 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Top Bar with Icon & Status Pill */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-2xs">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          {client.status}
                        </span>
                      </div>

                      {/* Title & Sector Description */}
                      <h4 className="text-base sm:text-lg font-medium text-[var(--text-main)]">
                        {client.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-[var(--text-muted)] font-light leading-relaxed">
                        {client.sector}
                      </p>
                    </div>

                    {/* Scope Footer */}
                    <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                      <p className="text-xs font-mono text-[var(--text-muted)]">
                        <span className="text-[var(--text-main)] font-medium">Scope:</span>{' '}
                        {client.engagements}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustrySectors
