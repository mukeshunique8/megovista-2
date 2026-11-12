'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Check } from 'lucide-react'
import { blueprintPhases } from '@/src/content/megovista'
import { HoverLift } from '@/src/components/motion'

export function Blueprint() {
  const spineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ['start 80%', 'end 80%'],
  })

  const spineScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="blueprint" className="w-full bg-[var(--bg-primary)] text-[var(--text-main)] section-padding overflow-hidden transition-colors duration-200">
      <div className="section-container">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#D97706] dark:text-[#FFB800] font-bold mb-3">
            CHAPTER 04 — THE MEGOVISTA BLUEPRINT
          </div>
          <h2 className="font-display font-bold text-[var(--text-main)] text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.95]">
            From audit to{' '}
            <span className="font-serif italic font-normal text-[#FF5A36] text-[1.12em]">
              autopilot,
            </span>{' '}
            in four phases.
          </h2>
          <p className="mt-4 font-display text-base sm:text-lg text-[var(--text-muted)] font-medium max-w-xl leading-relaxed">
            Diagnose. Align. Run every month without penalties. Then certify and keep advising.
          </p>
        </motion.div>

        {/* ─── DESKTOP ZIG-ZAG TIMELINE WITH CENTER SPINE ───────────────── */}
        <div ref={spineRef} className="relative hidden lg:block my-14">
          {/* Vertical Center Spine */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[2.5px] -translate-x-1/2 bg-[var(--text-main)]/15" />
          <motion.div
            style={{ scaleY: spineScale, transformOrigin: 'top' }}
            className="absolute left-1/2 top-4 bottom-4 w-[2.5px] -translate-x-1/2 bg-[#FFB800]"
          />

          <div className="space-y-36">
            {blueprintPhases.map((phase, idx) => {
              const isEven = idx % 2 === 0 // Even (0, 2): Content Left, Numeral Right; Odd (1, 3): Numeral Left, Content Right

              return (
                <div
                  key={phase.number}
                  className="relative grid grid-cols-12 gap-12 items-center"
                >
                  {/* Center Node Pin on the Spine */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.1 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FFB800] border-[2.5px] border-[#0C0B14] flex items-center justify-center shadow-md">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5A36]" />
                    </div>
                  </motion.div>

                  {/* Left Column (5 of 12 cols) */}
                  <motion.div
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                    className={`col-span-5 ${isEven ? 'pr-6' : 'order-1 pl-6'}`}
                  >
                    {isEven ? (
                      /* Phase Card */
                      <HoverLift>
                        <div className="rounded-[28px] bg-white dark:bg-[#1C1A30] text-[#1D1D1F] dark:text-[#F4EFE6] p-8 sm:p-10 border border-black/10 dark:border-white/10 shadow-xl dark:shadow-2xl transition-colors">
                          <div className="inline-block px-3.5 py-1 rounded-full bg-[#FFB800] text-[#0C0B14] font-mono text-xs font-bold mb-4 shadow-sm">
                            {phase.timeframe}
                          </div>
                          <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1D1D1F] dark:text-white tracking-tight mb-2 leading-tight">
                            {phase.title}
                          </h3>
                          <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[#6E6E73] dark:text-[#B3AFC9] mb-3">
                            {phase.tagline}
                          </div>
                          <p className="font-display text-sm sm:text-base text-[#48484A] dark:text-[#D1CEE0] font-medium leading-relaxed mb-6">
                            {phase.description}
                          </p>

                          <div className="border-t border-black/10 dark:border-white/10 space-y-2.5 pt-4">
                            {phase.checklist.map((item: string, dIdx: number) => (
                              <div
                                key={dIdx}
                                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-[#F4EFE6] py-1 border-b border-black/5 dark:border-white/5 last:border-none"
                              >
                                <Check className="w-4 h-4 stroke-[3] text-[#FFB800] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </HoverLift>
                    ) : (
                      /* Giant Outline Numeral */
                      <div className="flex items-center justify-center">
                        <span
                          className="font-serif italic font-light text-[220px] sm:text-[260px] leading-none select-none text-[#0C0B14] dark:text-[#F4EFE6] opacity-35 dark:opacity-50 hover:opacity-90 hover:text-[#FFB800] transition-all duration-300 hover:scale-105"
                          style={{
                            WebkitTextFillColor: 'transparent',
                            WebkitTextStroke: '2.5px currentColor',
                          }}
                        >
                          {phase.number}
                        </span>
                      </div>
                    )}
                  </motion.div>

                  {/* Center Spacer Column (2 of 12 cols) */}
                  <div className="col-span-2" />

                  {/* Right Column (5 of 12 cols) */}
                  <motion.div
                    initial={{ opacity: 0, x: 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                    className={`col-span-5 ${isEven ? 'pl-6' : 'order-2 pr-6'}`}
                  >
                    {isEven ? (
                      /* Giant Outline Numeral */
                      <div className="flex items-center justify-center">
                        <span
                          className="font-serif italic font-light text-[220px] sm:text-[260px] leading-none select-none text-[#0C0B14] dark:text-[#F4EFE6] opacity-35 dark:opacity-50 hover:opacity-90 hover:text-[#FFB800] transition-all duration-300 hover:scale-105"
                          style={{
                            WebkitTextFillColor: 'transparent',
                            WebkitTextStroke: '2.5px currentColor',
                          }}
                        >
                          {phase.number}
                        </span>
                      </div>
                    ) : (
                      /* Phase Card */
                      <HoverLift>
                        <div className="rounded-[28px] bg-white dark:bg-[#1C1A30] text-[#1D1D1F] dark:text-[#F4EFE6] p-8 sm:p-10 border border-black/10 dark:border-white/10 shadow-xl dark:shadow-2xl transition-colors">
                          <div className="inline-block px-3.5 py-1 rounded-full bg-[#FFB800] text-[#0C0B14] font-mono text-xs font-bold mb-4 shadow-sm">
                            {phase.timeframe}
                          </div>
                          <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1D1D1F] dark:text-white tracking-tight mb-2 leading-tight">
                            {phase.title}
                          </h3>
                          <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[#6E6E73] dark:text-[#B3AFC9] mb-3">
                            {phase.tagline}
                          </div>
                          <p className="font-display text-sm sm:text-base text-[#48484A] dark:text-[#D1CEE0] font-medium leading-relaxed mb-6">
                            {phase.description}
                          </p>

                          <div className="border-t border-black/10 dark:border-white/10 space-y-2.5 pt-4">
                            {phase.checklist.map((item: string, dIdx: number) => (
                              <div
                                key={dIdx}
                                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-[#F4EFE6] py-1 border-b border-black/5 dark:border-white/5 last:border-none"
                              >
                                <Check className="w-4 h-4 stroke-[3] text-[#FFB800] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </HoverLift>
                    )}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ─── MOBILE BLUEPRINT ───────────────────────────────────────────── */}
        <div className="lg:hidden relative pl-8 border-l-2 border-[#FFB800]/40 space-y-10 my-8">
          {blueprintPhases.map((phase, idx) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative"
            >
              {/* Dot on Spine */}
              <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-[#FFB800] border-2 border-[#0C0B14] flex items-center justify-center shadow-md">
                <div className="w-2 h-2 rounded-full bg-[#FF5A36]" />
              </div>

              <div className="rounded-[24px] bg-white dark:bg-[#1C1A30] text-[#1D1D1F] dark:text-[#F4EFE6] p-6 border border-black/10 dark:border-white/10 shadow-lg dark:shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold px-3 py-0.5 rounded-full bg-[#FFB800] text-[#0C0B14]">
                    {phase.timeframe}
                  </span>
                  <span
                    className="font-serif italic font-light text-5xl leading-none select-none text-[#0C0B14] dark:text-[#F4EFE6] opacity-45 dark:opacity-65"
                    style={{
                      WebkitTextFillColor: 'transparent',
                      WebkitTextStroke: '1.5px currentColor',
                    }}
                  >
                    {phase.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#1D1D1F] dark:text-white mb-1">
                  {phase.title}
                </h3>
                <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#6E6E73] dark:text-[#B3AFC9] mb-3">
                  {phase.tagline}
                </div>
                <p className="font-display text-sm text-[#48484A] dark:text-[#D1CEE0] font-medium leading-relaxed mb-4">
                  {phase.description}
                </p>

                <div className="border-t border-black/10 dark:border-white/10 space-y-1.5 pt-3">
                  {phase.checklist.map((item: string, dIdx: number) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-xs font-semibold text-[#1D1D1F] dark:text-[#F4EFE6]"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3] text-[#FFB800] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
