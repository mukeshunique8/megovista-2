'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { MagicBento } from '@/components/reactbits/MagicBento'
import { servicesContent } from '@/src/content/megovista'

export function EnterpriseBento() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' || theme === 'dark' : true

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full transition-colors duration-300">
      {/* ─── SECTION HEADER ─── */}
      <div className="mb-12 sm:mb-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 dark:bg-blue-500/15 text-xs font-mono font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
          <span>{servicesContent.eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.035em] leading-[1.08] text-[var(--text-main)] font-sans-tight mb-4"
        >
          Precision Architecture. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-sky-300 dark:via-blue-300 dark:to-violet-400 font-light">
            Engineered for Scale.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed max-w-2xl"
        >
          {servicesContent.subtitle}
        </motion.p>
      </div>

      {/* ─── REACT BITS MAGIC BENTO CONTAINER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="w-full"
      >
        <MagicBento
          theme={isDark ? 'dark' : 'light'}
          glowColor={isDark ? 'rgba(59, 130, 246, 0.85)' : 'rgba(29, 78, 216, 0.75)'}
          columns={4}
          rowHeight={230}
          gap={14}
          radius={22}
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={320}
          enableTilt={true}
          clickEffect={true}
          className="w-full"
        />
      </motion.div>
    </section>
  )
}

export default EnterpriseBento

