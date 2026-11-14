'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react'
import { processContent, ROUTES } from '@/src/content/megovista'

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="w-full section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-primary mb-2.5"
          >
            {processContent.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[var(--text-main)] leading-tight mb-3"
          >
            {processContent.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="font-display text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal"
          >
            {processContent.subtitle}
          </motion.p>
        </div>

        {/* 4-Step Interactive Navigation Tabs on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {processContent.phases.map((phase, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={phase.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[var(--bg-surface)] border-primary shadow-md'
                    : 'bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-black/5 dark:bg-white/10 text-[var(--text-muted)]'
                    }`}
                  >
                    PHASE {phase.number}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{phase.timeframe}</span>
                  </span>
                </div>
                <div
                  className={`font-display font-bold text-sm sm:text-base leading-snug line-clamp-2 ${
                    isActive ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {phase.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Phase Detail Showcase Card */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-10 lg:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    PHASE {processContent.phases[activeStep].number}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    {processContent.phases[activeStep].timeframe}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[var(--text-main)] mb-2.5 leading-tight">
                  {processContent.phases[activeStep].title}
                </h3>

                <div className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-4">
                  {processContent.phases[activeStep].tagline}
                </div>

                <p className="font-display text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6 font-medium">
                  {processContent.phases[activeStep].description}
                </p>

                <div className="pt-2">
                  <a
                    href={ROUTES.contact}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-md group"
                  >
                    <span>{processContent.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Deliverables Checklist Box */}
              <div className="lg:col-span-5 rounded-2xl bg-[var(--bg-primary)] p-6 sm:p-8 border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>{processContent.deliverablesHeading}</span>
                </div>
                <div className="space-y-3.5">
                  {processContent.phases[activeStep].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-main)] font-medium">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
