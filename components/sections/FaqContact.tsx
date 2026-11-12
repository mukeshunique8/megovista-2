'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { companyContact, faqs } from '@/src/content/megovista'
import { HoverLift } from '@/src/components/motion'
import { MapCN } from '@/components/ui/map'

export function FaqContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <>
      {/* ─── SECTION 6A: FAQ ───────────────────────────────────────────── */}
      <section id="faq" className="w-full bg-[var(--bg-primary)] text-[var(--text-main)] section-padding border-t border-black/10 dark:border-white/10 transition-colors duration-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Sticky Left Column with In-View Animation */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#D97706] dark:text-[#FFB800] font-bold mb-4">
                CHAPTER 08 — QUESTIONS
              </div>
              <h2 className="font-display font-bold text-[var(--text-main)] text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.95] mb-6">
                Straight
                <br />
                <span className="font-serif italic font-normal text-[#B9A8FF]">
                  answers.
                </span>
              </h2>
              <p className="font-display text-base sm:text-lg text-[var(--text-muted)] font-normal max-w-sm leading-relaxed">
                The six things founders ask us before they hand over their compliance.
              </p>
            </motion.div>

            {/* Accordion Right Column: Staggered Scroll In-View Reveal */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                    onClick={() => toggleAccordion(idx)}
                    className={`cursor-pointer transition-colors duration-200 shadow-md ${
                      isOpen
                        ? 'rounded-[28px] p-8 bg-[#FFB800] text-[#0C0B14]'
                        : 'rounded-[24px] px-8 py-6 bg-white dark:bg-[#1C1A30] text-[#1D1D1F] dark:text-[#F4EFE6] border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-[#24213d]'
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between text-left gap-4 select-none focus:outline-none"
                    >
                      <span
                        className={`font-display font-bold text-base sm:text-xl leading-snug ${
                          isOpen
                            ? 'text-[#0C0B14]'
                            : 'text-[#1D1D1F] dark:text-[#F4EFE6]'
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-2xl font-light leading-none ${
                          isOpen
                            ? 'text-[#0C0B14]'
                            : 'text-[#6E6E73] dark:text-[#B3AFC9]'
                        }`}
                      >
                        {isOpen ? '✕' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm sm:text-base leading-relaxed text-[#0C0B14] font-medium mt-3 font-display">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6B: CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="w-full bg-[#FF5A36] text-[#0C0B14] section-padding relative overflow-hidden">
        {/* Decorative Concentric Outline Circles Top-Right */}
        <svg
          className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[550px] h-[550px] sm:w-[850px] sm:h-[850px] pointer-events-none opacity-20"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="200" stroke="#0C0B14" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="350" stroke="#0C0B14" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="500" stroke="#0C0B14" strokeWidth="1.5" />
        </svg>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-end">
            {/* Left Column: Big Headline, Buttons, Hairline & Details */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="lg:col-span-7"
            >
              <h2 className="font-display font-bold text-[#0C0B14] text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.95] mb-8 lg:mb-12">
                Let&apos;s make
                <br />
                compliance{' '}
                <span className="font-serif italic font-normal text-[#F4EFE6]">
                  the
                </span>
                <br />
                <span className="font-serif italic font-normal text-[#F4EFE6]">
                  easy part.
                </span>
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 lg:mb-14">
                <a
                  href={companyContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4.5 rounded-full bg-[#0C0B14] text-[#F4EFE6] font-display font-bold text-base hover:bg-[#1C1A30] transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl text-center"
                >
                  Chat on WhatsApp →
                </a>

                <a
                  href={`tel:${companyContact.phoneRaw}`}
                  className="px-8 py-4.5 rounded-full border-2 border-[#0C0B14] text-[#0C0B14] font-display font-bold text-base hover:bg-[#0C0B14] hover:text-[#F4EFE6] transition-all text-center"
                >
                  {companyContact.phone}
                </a>
              </div>

              {/* Divider & Contact Info Columns */}
              <div className="w-full border-t border-[#0C0B14]/25 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#0C0B14]/75 font-semibold block mb-2">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${companyContact.email}`}
                    className="font-display font-bold text-xl sm:text-2xl text-[#0C0B14] hover:underline underline-offset-4"
                  >
                    {companyContact.email}
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#0C0B14]/75 font-semibold block mb-2">
                    OFFICE HOURS
                  </span>
                  <div className="font-display font-bold text-lg sm:text-xl text-[#0C0B14] leading-snug">
                    Monday – Saturday
                    <br />
                    <span className="text-base font-semibold text-[#0C0B14]/85">
                      9:30 AM – 6:30 PM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Stylized Headquarters Map Card contained inside section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 32 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              className="lg:col-span-5"
            >
              <HoverLift>
                <a
                  href={companyContact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[28px] bg-[#0C0B14] p-8 text-[#F4EFE6] border border-white/10 shadow-2xl group transition-all"
                >
                  {/* Interactive MapCN View */}
                  <div className="w-full h-56 sm:h-64 rounded-[20px] bg-[#141224] relative overflow-hidden mb-6 border border-white/10 shadow-inner">
                    <MapCN className="w-full h-full" markerTitle="Megovista HQ · Chennai" />
                  </div>

                  {/* Address Content */}
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB800] font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
                    HEADQUARTERS · CHENNAI
                  </div>

                  <p className="font-display text-sm sm:text-base text-[#F4EFE6] font-medium leading-relaxed mb-4 group-hover:text-white transition-colors">
                    {companyContact.address}, {companyContact.state}, India
                  </p>

                  <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#FFB800] font-semibold group-hover:underline">
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </HoverLift>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
