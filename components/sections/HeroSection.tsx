'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { heroContent } from '@/src/content/megovista'

export function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="section-container relative z-10">
        {/* 50/50 Balanced Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column (50%): Headline, Narrative & Actions */}
          <div className="flex flex-col items-start">
            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary shadow-sm mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] font-bold tracking-wide uppercase">
                {heroContent.badge}
              </span>
            </motion.div>

            {/* Main Headline - Refined Elegant Size */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--text-main)] leading-[1.12] mb-5"
            >
              {heroContent.titlePrimary}{' '}
              <span className="text-primary font-semibold">
                {heroContent.titleAccent}
              </span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="font-display text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-xl mb-7 font-normal"
            >
              {heroContent.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href={heroContent.ctaPrimary.href}
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>{heroContent.ctaPrimary.label}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={heroContent.ctaSecondary.href}
                className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground border border-[var(--border-subtle)] font-display font-semibold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{heroContent.ctaSecondary.label}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (50%): Clean Full-Half Width Corporate HR Portal Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-xl bg-[var(--bg-surface)]">
              <Image
                src={heroContent.image}
                alt="Megovista Modern HR & Statutory Compliance Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 lg:mt-16 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-7 shadow-sm"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-subtle)]">
            {heroContent.metrics.map((metric, idx) => (
              <div
                key={metric.value}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? 'pt-5 lg:pt-0 lg:pl-6' : ''
                }`}
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-primary mb-1 tracking-tight">
                  {metric.value}
                </div>
                <div className="font-display text-xs text-[var(--text-muted)] font-medium leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
