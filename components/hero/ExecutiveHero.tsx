'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import { SplitText } from '@/components/reactbits/SplitText'
import { GradientWaves } from '@/components/reactbits/GradientWaves'
import { heroContent } from '@/src/content/megovista'

export function ExecutiveHero() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' || theme === 'dark' : true

  return (
    <section id="home" className="relative h-[calc(100dvh-5rem)] min-h-[480px] max-h-[calc(100dvh-5rem)] w-full overflow-hidden flex flex-col justify-between pt-6 sm:pt-10 lg:pt-14 pb-8 sm:pb-12 lg:pb-14 px-6 sm:px-12 lg:px-20 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300">
      {/* ─── REACT BITS GRADIENT WAVES (DYNAMIC WEBGL BEHIND HERO) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Layer 1: The Interactive WebGL GradientWaves shader */}
        <GradientWaves
          horizonColor={isDark ? '#0A0F1D' : '#E2E8F0'}
          waveColor={isDark ? '#1D4ED8' : '#3B82F6'}
          crestColor={isDark ? '#8B5CF6' : '#7C3AED'}
          backgroundColor="transparent"
          lightMode={!isDark}
          speed={0.32}
          amplitude={2.6}
          waveScale={0.55}
          waveRatio={0.9}
          swell={28}
          turbulence={18}
          tilt={65}
          zoom={1.05}
          height={5.2}
          fogDepth={16}
          relief={0.95}
          sheen={0.4}
          brightness={isDark ? 1.05 : 0.9}
          opacity={isDark ? 0.75 : 0.45}
          grain={0.12}
          quality="medium"
          mouseInteraction={true}
          parallaxStrength={0.25}
          mouseStrength={0.45}
          className="w-full h-full"
        />

        {/* Layer 2: Ethereal Aurora Glow ensuring rich Royal Blue & Violet ambience */}
        <div className="absolute bottom-[-15%] left-[-20%] right-[-20%] h-[75%] rounded-[100%] bg-gradient-to-t from-blue-600/20 via-blue-500/10 to-transparent dark:from-[#1D4ED8]/55 dark:via-[#2563EB]/35 blur-[90px] sm:blur-[130px] opacity-80 dark:opacity-90 pointer-events-none" />

        <div className="absolute bottom-[-12%] left-[-10%] w-[75%] h-[65%] rounded-full bg-violet-600/15 dark:bg-[#7C3AED]/35 blur-[100px] sm:blur-[140px] opacity-75 dark:opacity-85 pointer-events-none" />

        {/* Layer 3: Dark Mode Ambient Vignette on Upper Screen for Contrast */}
        <div className="absolute inset-0 dark:bg-radial dark:from-transparent dark:via-black/10 dark:to-black/55 pointer-events-none" />
      </div>

      {/* ─── TOP LEFT: REFINED LIGHT TYPOGRAPHY DISPLAY HEADLINE ─── */}
      <div className="relative z-10 max-w-5xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-light tracking-[-0.035em] leading-[1.06] text-[var(--text-main)] font-sans-tight">
          {/* Line 1: Crisp text, Refined Light Weight */}
          <SplitText
            text={heroContent.titlePrimary}
            stagger={0.024}
            startDelay={0.1}
            className="block text-[var(--text-main)] font-light"
          />

          {/* Line 2: Soft Gradient (Blue to Violet) */}
          <span className="block mt-0.5 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-[#BAE6FD] dark:via-[#93C5FD] dark:to-[#DDD6FE] font-light">
            <SplitText
              text={heroContent.titleAccent}
              stagger={0.028}
              startDelay={0.6}
              className="inline-block"
            />
          </span>
        </h1>
      </div>

      {/* ─── BOTTOM RIGHT: SUBTITLE COPY & TRANSLUCENT GLASS PILL BUTTON ─── */}
      <div className="relative z-10 flex flex-col items-start sm:items-end text-left sm:text-left ml-auto max-w-xs sm:max-w-sm md:max-w-md space-y-3.5 sm:space-y-4">
        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.75 }}
          className="text-xs sm:text-sm md:text-[0.95rem] text-[var(--text-muted)] font-light leading-relaxed line-clamp-3 sm:line-clamp-none"
        >
          {heroContent.description}
        </motion.p>

        {/* Dual Theme Glass Pill Button with Circle Arrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="pt-0.5"
        >
          <a
            href={heroContent.ctaSecondary.href}
            className="group inline-flex items-center gap-3 pl-1.5 pr-5 sm:pr-6 py-1 sm:py-1.5 rounded-full border border-[var(--border-subtle)] dark:border-white/25 bg-[var(--bg-surface)]/80 dark:bg-white/10 hover:bg-[var(--bg-surface)] dark:hover:bg-white/15 backdrop-blur-md text-[var(--text-main)] dark:text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            {/* Circular Badge with Arrow (Theme Adaptive) */}
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--primary)] text-white dark:bg-white dark:text-black flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 shadow-xs">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white dark:text-black stroke-[2.2]" />
            </span>
            <span>{heroContent.ctaSecondary.label}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ExecutiveHero
