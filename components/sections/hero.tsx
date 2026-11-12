'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Marquee } from '@/src/components/motion'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { HeroCockpit } from '@/components/sections/HeroCockpit'
import { NAV_LINKS, MARQUEE_WORDS, ROUTES } from '@/src/content/megovista'

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="home" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-main)] bg-dot-grid overflow-hidden transition-colors duration-200">
      {/* ─── STICKY NAV ROW ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-primary)]/90 border-b border-black/5 dark:border-white/5 transition-all">
        <div className="section-container py-5 lg:py-6 flex items-center justify-between">
          {/* Logo: Megovista Emblem + Megovista */}
          <a href={ROUTES.home} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#0C0B14] border border-white/10 flex items-center justify-center p-1 group-hover:scale-105 transition-transform shadow-md">
              <Image
                src="/megovista-emblem.png"
                alt="Megovista Emblem"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-[var(--text-main)]">
              Megovista
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FFB800] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href={ROUTES.contact}
              className="px-6 py-2.5 rounded-full bg-[#F4EFE6] text-[#0C0B14] font-display font-semibold text-sm hover:bg-[#FFB800] transition-all transform hover:-translate-y-0.5 shadow-sm border border-[#0C0B14]/10"
            >
              Start a conversation
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-main)] hover:text-[#FFB800] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[73px] inset-x-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 z-40 px-6 py-8 flex flex-col gap-5 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-semibold text-[var(--text-main)] hover:text-[#FFB800]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3.5 rounded-full bg-[#FFB800] text-[#0C0B14] font-bold text-sm shadow-md"
              >
                Start a conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── HERO MAIN CONTENT ─────────────────────────────────────────── */}
      <div className="section-container pt-12 lg:pt-20 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Eyebrow + 4-line H1 + Paragraph + Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.14em] text-[#D97706] dark:text-[#FFB800] font-bold mb-6">
            PEOPLE. CONNECT. GROW.
          </div>

          <h1 className="flex flex-col tracking-[-0.05em] leading-[0.92] select-none">
            <span className="font-display font-bold text-[var(--text-main)] text-[clamp(52px,7.6vw,114px)] block">
              Compliance
            </span>
            <span className="font-serif italic font-normal text-[#D97706] dark:text-[#FFB800] text-[clamp(60px,8.8vw,128px)] block -mt-1 sm:-mt-2">
              simplified.
            </span>
            <span className="font-display font-bold text-[var(--text-main)] text-[clamp(52px,7.6vw,114px)] block">
              Growth
            </span>
            <span className="font-display font-bold text-[#FF5A36] text-[clamp(52px,7.6vw,114px)] block">
              assured.
            </span>
          </h1>

          <p className="font-display text-base sm:text-lg text-[var(--text-muted)] max-w-xl font-normal leading-relaxed mt-6 mb-8">
            India&apos;s premier partner in HR operations, statutory compliance (PF, ESI, GST, Labour Laws) and organisational certification (ISO, ISMS, CMMI) — so you can operate with unshakeable confidence and zero penalties.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[#FF5A36] text-[#0C0B14] font-display font-bold text-base hover:bg-[#ff7252] transition-transform hover:-translate-y-0.5 text-center shadow-lg"
            >
              Start with an audit →
            </a>
            <a
              href="#story"
              className="px-8 py-4 rounded-full border border-[var(--text-main)]/40 text-[var(--text-main)] font-display font-bold text-base hover:bg-black/5 dark:hover:bg-white/10 transition-all text-center"
            >
              Read our story
            </a>
          </div>
        </div>

        {/* Right Column: High-value Interactive Statutory Cockpit */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[440px] sm:min-h-[540px]">
          <HeroCockpit />
        </div>
      </div>

      {/* ─── ROTATED −2° GOLD MARQUEE BAND ─────────────────────────────── */}
      <div className="relative w-full overflow-hidden my-10 lg:my-14">
        <div className="w-[110%] -ml-[5%] py-5 sm:py-6 bg-[#FFB800] text-[#0C0B14] -rotate-2 shadow-2xl flex items-center">
          <Marquee duration={35} className="w-full">
            {MARQUEE_WORDS.map((w, i) => (
              <span
                key={i}
                className="flex items-center gap-6 font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0C0B14]"
              >
                <span>{w}</span>
                <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#0C0B14] inline-block" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* ─── 4 METRICS ROW ─────────────────────────────────────────────── */}
      <div className="section-container pt-10 lg:pt-14 pb-16 lg:pb-24 border-t border-black/10 dark:border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { num: '100%', text: 'statutory filing accuracy across EPFO, ESIC & GST portals' },
            { num: 'Zero', text: 'late-penalty default record since inception' },
            { num: '11+', text: 'regulatory and certification solutions' },
            { num: '500+', text: 'headcount we scale with — from your first 10 hires' },
          ].map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="font-serif italic font-normal text-5xl sm:text-6xl lg:text-7xl text-[var(--text-main)] leading-none mb-3">
                {m.num}
              </div>
              <p className="font-display text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-[220px]">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
