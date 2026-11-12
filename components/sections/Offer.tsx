'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fourPillars, elevenSolutions } from '@/src/content/megovista'
import { HoverLift } from '@/src/components/motion'

// SVG Illustrations for the 4 Pillar Cards
function PillarIllustration({ type }: { type: string }) {
  if (type === 'payroll') {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
        <circle cx="65" cy="45" r="22" fill="#0C0B14" />
        <circle cx="105" cy="45" r="22" fill="#FF5A36" />
        <circle cx="145" cy="45" r="22" fill="#FFB800" />
        <rect x="40" y="80" width="120" height="65" rx="10" fill="#0C0B14" />
        <line x1="55" y1="100" x2="110" y2="100" stroke="#F4EFE6" strokeWidth="3" strokeLinecap="round" />
        <line x1="55" y1="114" x2="140" y2="114" stroke="#F4EFE6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <line x1="55" y1="128" x2="95" y2="128" stroke="#F4EFE6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
        <circle cx="45" cy="115" r="8" fill="none" stroke="#0C0B14" strokeWidth="3" />
        <circle cx="155" cy="45" r="7" fill="#FF5A36" />
        <path
          d="M 100 25 L 145 48 C 145 95, 100 130, 100 140 C 100 130, 55 95, 55 48 Z"
          fill="#0C0B14"
        />
        <path
          d="M 82 82 L 96 96 L 122 70"
          stroke="#FFB800"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'certificate') {
    return (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
        <rect x="50" y="25" width="100" height="95" rx="10" fill="#0C0B14" />
        <line x1="68" y1="48" x2="120" y2="48" stroke="#F4EFE6" strokeWidth="3" strokeLinecap="round" />
        <line x1="68" y1="64" x2="132" y2="64" stroke="#F4EFE6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <line x1="68" y1="78" x2="110" y2="78" stroke="#F4EFE6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="132" cy="110" r="18" fill="#FFB800" stroke="#0C0B14" strokeWidth="3" />
        <path d="M 124 110 L 130 116 L 140 105" stroke="#0C0B14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
        <circle
          cx="100"
          cy="80"
          r="48"
          stroke="#0C0B14"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
        <circle cx="100" cy="80" r="32" fill="#0C0B14" />
        <polygon
          points="100,64 104,74 115,75 107,82 109,92 100,87 91,92 93,82 85,75 96,74"
          fill="#FFB800"
        />
      </svg>
    </div>
  )
}

// Exact 11 solutions bento layout matching D3
const BENTO_CONFIG = [
  // Row 1: 1 col, 1 col, 2 cols
  { bg: 'bg-[#FF5A36] text-[#0C0B14]', colSpan: 'col-span-1', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
  { bg: 'bg-[#0C0B14] text-[#F4EFE6] border border-white/10', colSpan: 'col-span-1', numColor: 'text-[#F4EFE6]', pillBg: 'bg-white/10 text-[#B3AFC9]' },
  { bg: 'bg-[#B9A8FF] text-[#0C0B14]', colSpan: 'col-span-1 sm:col-span-2', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
  // Row 2: 1 col, 1 col, 2 cols
  { bg: 'bg-[#F4EFE6] text-[#0C0B14] border border-black/10', colSpan: 'col-span-1', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
  { bg: 'bg-[#FFB800] text-[#0C0B14]', colSpan: 'col-span-1', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
  { bg: 'bg-[#0C0B14] text-[#F4EFE6] border border-white/10', colSpan: 'col-span-1 sm:col-span-2', numColor: 'text-[#F4EFE6]', pillBg: 'bg-white/10 text-[#B3AFC9]' },
  // Row 3: 1 col, 1 col, 1 col, 1 col
  { bg: 'bg-[#B9A8FF] text-[#0C0B14]', colSpan: 'col-span-1', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
  { bg: 'bg-[#FF5A36] text-[#0C0B14]', colSpan: 'col-span-1', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
  { bg: 'bg-[#0C0B14] text-[#F4EFE6] border border-white/10', colSpan: 'col-span-1', numColor: 'text-[#F4EFE6]', pillBg: 'bg-white/10 text-[#B3AFC9]' },
  { bg: 'bg-[#F4EFE6] text-[#0C0B14] border border-black/10', colSpan: 'col-span-1', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
  // Row 4: 2 cols, (CTA is remaining 2 cols)
  { bg: 'bg-[#FFB800] text-[#0C0B14]', colSpan: 'col-span-1 sm:col-span-2', numColor: 'text-[#0C0B14]', pillBg: 'bg-black/10 text-[#0C0B14]' },
]

export function Offer() {
  const getPillarBg = (color: string) => {
    switch (color) {
      case 'cream':
        return 'bg-[#F4EFE6] text-[#0C0B14] border border-black/10'
      case 'lilac':
        return 'bg-[#B9A8FF] text-[#0C0B14]'
      case 'vermilion':
        return 'bg-[#FF5A36] text-[#0C0B14]'
      case 'lime':
        return 'bg-[#FFB800] text-[#0C0B14]'
      default:
        return 'bg-[#1C1A30] text-[#F4EFE6]'
    }
  }

  return (
    <section id="offer" className="w-full bg-[var(--bg-primary)] text-[var(--text-main)] section-padding overflow-hidden transition-colors duration-200">
      <div className="section-container">
        {/* ─── PART A: FOUR PILLARS ─────────────────────────────────────── */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-18"
          >
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#D97706] dark:text-[#FFB800] font-bold mb-3">
                CHAPTER 02 — WHAT WE DO
              </div>
              <h2 className="font-display font-bold text-[var(--text-main)] text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.95]">
                Four pillars.{' '}
                <span className="font-serif italic font-normal text-[#B9A8FF] text-[1.12em] block sm:inline">
                  One roof.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-display text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                From statutory PF/ESI filings to ISO certification and payroll, we carry your entire back-office regulatory load.
              </p>
            </div>
          </motion.div>

          {/* 4 Pillar Cards with Staggered Scroll In-View Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fourPillars.map((p, idx) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <HoverLift>
                  <div
                    className={`rounded-[28px] p-7 flex flex-col justify-between min-h-[540px] ${getPillarBg(
                      p.color
                    )} shadow-2xl`}
                  >
                    <div>
                      {/* Top 160px SVG Illustration */}
                      <div className="w-full h-[160px] sm:h-[180px] mb-6 flex items-center justify-center">
                        <PillarIllustration type={p.illustration} />
                      </div>

                      {/* Label & Title */}
                      <span className="font-mono text-xs font-bold tracking-[0.14em] uppercase opacity-75 block mb-1">
                        {p.label}
                      </span>
                      <h3 className="font-display font-bold text-2xl tracking-tight leading-tight mb-2">
                        {p.title}
                      </h3>
                      <p className="font-display text-xs sm:text-sm opacity-85 leading-relaxed mb-6 font-medium">
                        {p.blurb}
                      </p>
                    </div>

                    {/* Bordered Service List */}
                    <div className="space-y-2 pt-4 border-t border-black/15">
                      {p.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-center justify-between text-xs py-1.5 border-b border-black/10 last:border-none"
                        >
                          <span className="font-semibold">{item.name}</span>
                          {item.tag && (
                            <span className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-black text-white">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverLift>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── PART B: ELEVEN SOLUTIONS BENTO GRID ───────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="mb-14 lg:mb-18"
          >
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#FF5A36] font-semibold mb-3">
              CHAPTER 03 — ELEVEN SOLUTIONS
            </div>
            <h2 className="font-display font-bold text-[var(--text-main)] text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.95]">
              Pick your{' '}
              <span className="font-serif italic font-normal text-[#FF5A36] text-[1.12em]">
                problem.
              </span>{' '}
              We bring the answer.
            </h2>
          </motion.div>

          {/* 4-Column Bento Grid with Staggered Scroll In-View Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {elevenSolutions.map((sol, idx) => {
              const cfg = BENTO_CONFIG[idx] || BENTO_CONFIG[0]
              return (
                <motion.div
                  key={sol.number}
                  className={cfg.colSpan}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: (idx % 4) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <HoverLift>
                    <div
                      className={`rounded-[28px] p-7 flex flex-col justify-between min-h-[280px] shadow-lg ${cfg.bg}`}
                    >
                      <div>
                        {/* Top row: Big Serif Number + Category Pill */}
                        <div className="flex items-start justify-between mb-4">
                          <span
                            className={`font-serif italic text-4xl sm:text-5xl font-normal leading-none ${cfg.numColor}`}
                          >
                            {sol.number}
                          </span>
                          <span
                            className={`font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${cfg.pillBg}`}
                          >
                            {sol.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-display font-bold text-lg sm:text-xl tracking-tight mb-4 leading-snug">
                          {sol.title}
                        </h4>

                        {/* Scope Bullets */}
                        <div className="space-y-1.5 pt-3 border-t border-black/10 dark:border-white/10">
                          {sol.bullets.slice(0, 3).map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs opacity-85">
                              <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 mt-1.5 opacity-60" />
                              <span className="leading-tight font-medium">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </HoverLift>
                </motion.div>
              )
            })}

            {/* 12th CTA Tile: 2 columns wide */}
            <motion.div
              className="col-span-1 sm:col-span-2"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <HoverLift>
                <div className="rounded-[28px] bg-[#0C0B14] text-[#F4EFE6] p-7 sm:p-8 border border-white/15 flex flex-col justify-between min-h-[280px] shadow-2xl">
                  <div>
                    <span className="text-3xl text-[#FF5A36] block mb-4">→</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4EFE6] leading-snug max-w-md">
                      Not sure where to start? Begin with Phase 01 of the Megovista Blueprint: a diagnostic HR &amp; statutory audit.
                    </h3>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5A36] text-[#0C0B14] font-display font-bold text-sm hover:bg-[#ff7252] transition-transform hover:scale-105 shadow-lg"
                    >
                      Book the audit →
                    </a>
                  </div>
                </div>
              </HoverLift>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
