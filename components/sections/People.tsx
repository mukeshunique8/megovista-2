'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  leadership,
  valuesList,
  whyChooseAdvantages,
  tickerWords,
  missionItems,
} from '@/src/content/megovista'
import {
  MorphingBlob,
  SpinBadge,
  Marquee,
  HoverLift,
} from '@/src/components/motion'

// Data imported from constants: tickerWords, missionItems

export function People() {
  return (
    <div id="people" className="w-full">
      {/* ─── BAND 1: LEADERSHIP (LILAC BACKGROUND) ───────────────────────── */}
      <section className="w-full bg-[#B9A8FF] text-[#0C0B14] section-padding overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
            {/* Left: Arch-shaped Portrait with Vermilion Blob & Rotating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="lg:col-span-5 flex justify-center relative"
            >
              {/* Offset Vermilion Morphing Blob */}
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-[280px] sm:w-[380px] h-[340px] sm:h-[440px] pointer-events-none z-0">
                <MorphingBlob
                  color="#FF5A36"
                  className="w-full h-full opacity-90 shadow-xl"
                />
              </div>

              {/* Arch Portrait Container */}
              <div
                style={{ borderRadius: '190px 190px 24px 24px' }}
                className="relative z-10 w-[270px] sm:w-[350px] h-[360px] sm:h-[460px] bg-white border-2 border-dashed border-[#0C0B14]/40 overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-6"
              >
                <img
                  src="/team/team.png"
                  alt="E. Gokulraj - Managing Partner"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="relative z-0 pointer-events-none">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#0C0B14]/60 block mb-1">
                    PORTRAIT
                  </span>
                  <div className="font-serif italic text-2xl text-[#0C0B14] mb-1">
                    E. Gokulraj
                  </div>
                  <span className="font-mono text-[9px] text-[#0C0B14]/50">
                    Place /team/team.png here
                  </span>
                </div>
              </div>

              {/* Rotating Circular Badge at bottom-right */}
              <div className="absolute -bottom-6 right-2 sm:-right-4 z-20">
                <SpinBadge
                  size={135}
                  text="E. GOKULRAJ · MANAGING PARTNER · MEGOVISTA ·"
                  textColor="#FFB800"
                  className="bg-[#0C0B14] rounded-full shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right: Quote in Serif Italic, Name, Title, Pill */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#0C0B14] font-semibold mb-4 opacity-75">
                CHAPTER 05 — THE PEOPLE
              </div>

              <blockquote className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-[58px] leading-[1.08] tracking-tight text-[#0C0B14] mb-8">
                “{leadership.quote}”
              </blockquote>

              <div className="space-y-3">
                <div className="font-display font-bold text-2xl text-[#0C0B14]">
                  {leadership.name}
                </div>
                <div className="font-display text-sm font-semibold text-[#1E1B2E]">
                  {leadership.role}, {leadership.organization}
                </div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#0C0B14] text-[#FFB800] font-mono text-xs uppercase tracking-wider font-semibold shadow-md">
                  {leadership.credentials}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Three Dark Ink Cards: gap-4 (16px) with Staggered Scroll In-View Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leadership.pillars.map((p, idx) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <HoverLift>
                  <div className="p-8 rounded-[28px] bg-[#0C0B14] text-[#F4EFE6] min-h-[240px] flex flex-col justify-between shadow-2xl">
                    <span className="font-serif italic text-4xl text-[#FFB800] leading-none">
                      {p.number}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-xl text-[#F4EFE6] mb-2 leading-snug">
                        {p.title}
                      </h4>
                      <p className="font-display text-xs sm:text-sm text-[#B3AFC9] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </HoverLift>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BAND 2: VALUES TICKER (130PX WORDS) ─────────────────────────── */}
      <div className="w-full bg-[#0C0B14] py-10 lg:py-14 border-y border-white/5 overflow-hidden select-none">
        <Marquee duration={50}>
          {tickerWords.map((item, idx) => (
            <span key={idx} className="flex items-center gap-10 sm:gap-14 whitespace-nowrap">
              {item.style === 'serif-fill' ? (
                <span className="font-serif italic font-normal text-6xl sm:text-8xl lg:text-[130px] text-[#F4EFE6] leading-none">
                  {item.word}
                </span>
              ) : (
                <span
                  style={{
                    WebkitTextStroke: '2px #F4EFE6',
                    color: 'transparent',
                  }}
                  className="font-display font-extrabold text-6xl sm:text-8xl lg:text-[130px] leading-none uppercase tracking-tight"
                >
                  {item.word}
                </span>
              )}
              {/* Vermilion separator dot */}
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FF5A36] shrink-0" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ─── BAND 3: VISION / VALUES / MISSION ───────────────────────────── */}
      <section className="w-full bg-[var(--bg-primary)] text-[var(--text-main)] section-padding transition-colors duration-200">
        <div className="section-container">
          {/* Eyebrow & Big Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="max-w-4xl mb-16 lg:mb-20"
          >
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#D97706] dark:text-[#FFB800] font-bold mb-4">
              CHAPTER 06 — WHY WE EXIST
            </div>
            <h2 className="font-display font-bold text-[var(--text-main)] text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight">
              To be India&apos;s most trusted partner in human resources, statutory compliance and organisational certification, enabling businesses to operate with{' '}
              <span className="font-serif italic font-normal text-[#D97706] dark:text-[#FFB800]">
                confidence, integrity and sustained growth.
              </span>
            </h2>
          </motion.div>

          {/* 5 Value Cards in a row with Staggered Scroll In-View Reveal */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20 lg:mb-24">
            {valuesList.map((val, idx) => (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <HoverLift>
                  <div className="p-6 rounded-[24px] bg-white dark:bg-[#1C1A30] text-[#1D1D1F] dark:text-[#F4EFE6] border border-black/10 dark:border-white/10 flex flex-col justify-between min-h-[240px] shadow-lg">
                    <span className="font-mono text-[10px] font-bold text-[#5A5670] dark:text-[#B3AFC9] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 w-fit">
                      {val.number}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-1.5 leading-snug text-[#1D1D1F] dark:text-white">
                        {val.title}
                      </h4>
                      <p className="font-display text-xs text-[#5A5670] dark:text-[#B3AFC9] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </HoverLift>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-10 border-t border-black/10 dark:border-white/10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
              className="lg:col-span-4"
            >
              <h3 className="font-display font-bold text-4xl sm:text-5xl text-[var(--text-main)] tracking-tight">
                Our{' '}
                <span className="font-serif italic font-normal text-[#FF5A36]">
                  mission
                </span>
              </h3>
            </motion.div>

            <div className="lg:col-span-8 space-y-3">
              {missionItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                  className="flex items-start gap-6 py-3.5 border-b border-black/10 dark:border-white/10 last:border-none"
                >
                  <span className="font-mono text-xs text-[#D97706] dark:text-[#FFB800] font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="font-display text-sm sm:text-base text-[var(--text-main)] font-medium leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── BAND 4: PHOTO SLOT ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-20 lg:mt-24 w-full rounded-[28px] border border-dashed border-black/20 dark:border-white/20 p-8 lg:p-14 relative overflow-hidden bg-white dark:bg-[#141224] text-[#1D1D1F] dark:text-white flex items-center justify-between min-h-[220px] shadow-lg"
          >
            {/* Floating Left Orange Circle */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FF5A36] shrink-0 shadow-lg"
            />

            <div className="text-center px-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6E6E73] dark:text-[#B3AFC9] block mb-2">
                PHOTO SLOT · 1312 × 420
              </span>
              <h4 className="font-serif italic text-2xl sm:text-4xl text-[#1D1D1F] dark:text-white mb-1">
                The Megovista team at work, Chennai
              </h4>
              <p className="font-display text-xs text-[#6E6E73] dark:text-[#B3AFC9]">
                Drop in a real office or client-meeting photograph here
              </p>
            </div>

            {/* Floating Right Gold Outline Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#FFB800] shrink-0"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── BAND 5: ADVANTAGES (CREAM BACKGROUND, 3X2 GRID) ──────────────── */}
      <section className="w-full bg-[#F4EFE6] text-[#0C0B14] section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="max-w-3xl mb-14 lg:mb-18"
          >
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#5A5670] font-semibold mb-3">
              CHAPTER 07 — THE ADVANTAGE
            </div>
            <h2 className="font-display font-bold text-[#0C0B14] text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.95]">
              Why ambitious enterprises{' '}
              <span className="font-serif italic font-normal text-[#FF5A36] text-[1.12em] block sm:inline">
                trust us.
              </span>
            </h2>
          </motion.div>

          {/* 3x2 Grid with Staggered Scroll In-View Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseAdvantages.map((adv, idx) => {
              const getBgClass = () => {
                switch (adv.bg) {
                  case 'ink':
                    return 'bg-[#0C0B14] text-[#F4EFE6]'
                  case 'lilac':
                    return 'bg-[#B9A8FF] text-[#0C0B14]'
                  case 'lime':
                    return 'bg-[#FFB800] text-[#0C0B14]'
                  case 'vermilion':
                    return 'bg-[#FF5A36] text-[#0C0B14]'
                  case 'white':
                    return 'bg-[#FFFFFF] text-[#0C0B14] border border-[#0C0B14]/15'
                  default:
                    return 'bg-[#0C0B14] text-[#F4EFE6]'
                }
              }

              return (
                <motion.div
                  key={adv.number}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <HoverLift>
                    <div
                      className={`p-8 rounded-[28px] min-h-[280px] flex flex-col justify-between shadow-xl ${getBgClass()}`}
                    >
                      <span className="font-serif italic text-4xl sm:text-5xl leading-none">
                        {adv.number}
                      </span>
                      <div>
                        <h4 className="font-display font-bold text-xl sm:text-2xl mb-2 leading-tight">
                          {adv.title}
                        </h4>
                        <p className="font-display text-xs sm:text-sm opacity-85 leading-relaxed font-medium">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  </HoverLift>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
