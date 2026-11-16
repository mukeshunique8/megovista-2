'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react'
import { faqContent } from '@/src/content/megovista'
import { ROUTES } from '@/src/constants/routes'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300 border-t border-[var(--border-subtle)]"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-violet-500" />
            <span>{faqContent.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] leading-[1.08] text-[var(--text-main)] font-sans-tight">
            {faqContent.title}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed max-w-2xl mx-auto">
            {faqContent.subtitle}
          </p>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-4">
          {faqContent.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500/40 bg-[var(--bg-surface)] shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 hover:bg-[var(--bg-surface)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-medium shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                          : 'bg-black/5 dark:bg-white/10 text-[var(--text-muted)]'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-medium text-[var(--text-main)]">
                      {item.q}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-[var(--text-muted)] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm md:text-base text-[var(--text-muted)] font-light leading-relaxed border-t border-[var(--border-subtle)]/60 pl-16">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light">
            Have a custom compliance query?{' '}
            <a
              href={ROUTES.contact}
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5" />
              Speak with our statutory advisory team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FaqSection

