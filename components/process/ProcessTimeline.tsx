'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  FileCheck,
  Sparkles,
} from 'lucide-react'
import { processContent, type BlueprintPhase } from '@/src/content/megovista'
import { ROUTES } from '@/src/constants/routes'

export function ProcessTimeline() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0)
  const phases = processContent.phases
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const el = sectionRefs.current[i]
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActivePhaseIndex(i)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToPhase = (index: number) => {
    const target = sectionRefs.current[index]
    if (target) {
      const yOffset = -110
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActivePhaseIndex(index)
    }
  }

  const activePhase = phases[activePhaseIndex] || phases[0]

  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-transparent blur-[140px] rounded-full dark:opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>{processContent.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] leading-[1.08] text-[var(--text-main)] font-sans-tight">
            {processContent.title}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed max-w-2xl mx-auto">
            {processContent.subtitle}
          </p>
        </div>

        {/* Sticky Scroll Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Pinned / Sticky Left Column (Pins on Desktop as you scroll) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-xl shadow-xl">
              {/* Active Milestone Telemetry */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                  ACTIVE PHASE {activePhase.number} / 04
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-black/5 dark:bg-white/10 text-[var(--text-muted)]">
                  <Clock className="w-3 h-3 text-violet-500" />
                  {activePhase.timeframe}
                </span>
              </div>

              {/* Phase Title & Tagline */}
              <div className="mt-5">
                <h3 className="text-2xl font-light tracking-tight text-[var(--text-main)] font-sans-tight">
                  {activePhase.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-violet-600 dark:text-violet-400">
                  {activePhase.tagline}
                </p>
              </div>

              {/* Milestone Nav Steppers */}
              <div className="mt-6 space-y-2 pt-6 border-t border-[var(--border-subtle)]">
                {phases.map((phase, idx) => {
                  const isActive = activePhaseIndex === idx
                  return (
                    <button
                      key={phase.number}
                      type="button"
                      onClick={() => scrollToPhase(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-blue-500/30'
                          : 'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-medium ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                              : 'bg-black/5 dark:bg-white/10 text-[var(--text-muted)]'
                          }`}
                        >
                          {phase.number}
                        </span>
                        <span
                          className={`text-xs sm:text-sm ${
                            isActive
                              ? 'font-medium text-[var(--text-main)]'
                              : 'font-light text-[var(--text-muted)]'
                          }`}
                        >
                          {phase.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        {phase.timeframe}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Direct CTA */}
              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
                <a
                  href={ROUTES.contact}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-medium tracking-wide bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-95 transition-all shadow-md cursor-pointer"
                >
                  <span>{processContent.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Stream of Rich Phase Cards */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            {phases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx
              return (
                <div
                  key={phase.number}
                  ref={(el) => {
                    sectionRefs.current[idx] = el
                  }}
                  className={`scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl border transition-all duration-500 ${
                    isActive
                      ? 'border-blue-500/50 bg-[var(--bg-surface)] shadow-2xl ring-1 ring-blue-500/20'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]/70'
                  }`}
                >
                  {/* Card Top Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white flex items-center justify-center text-sm font-mono font-medium shadow-sm">
                        {phase.number}
                      </span>
                      <div>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                          MILESTONE {phase.number}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-violet-500" />
                          {phase.timeframe}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-[var(--text-muted)]">
                      Megovista Standard
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6">
                    <h4 className="text-2xl sm:text-3xl font-light tracking-tight text-[var(--text-main)] font-sans-tight">
                      {phase.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-violet-600 dark:text-violet-400">
                      {phase.tagline}
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Key Deliverables Grid */}
                  <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-blue-500" />
                      {processContent.deliverablesHeading}
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-[var(--border-subtle)]/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[var(--text-main)] font-light leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Assurance */}
                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]/60 flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                      Section 14B / 7Q Risk Shielded
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Zero Penalty Protocol
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
