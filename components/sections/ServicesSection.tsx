'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { servicesContent, ROUTES } from '@/src/content/megovista'

export function ServicesSection() {
  return (
    <section id="services" className="w-full section-padding bg-[var(--bg-primary)] transition-colors duration-200">
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
            {servicesContent.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[var(--text-main)] leading-tight mb-3"
          >
            {servicesContent.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="font-display text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal"
          >
            {servicesContent.subtitle}
          </motion.p>
        </div>

        {/* 4 Pillars Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesContent.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              className="rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Pillar Image Frame with Subtle Zoom on Hover */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-black/10">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Number Badge & Highlight Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
                    PILLAR {pillar.number}
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-sm">
                    {pillar.highlight}
                  </span>
                </div>

                {/* Subtitle / Tagline over Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-xs tracking-wider uppercase text-white font-semibold drop-shadow-sm">
                    {pillar.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-main)] mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-display text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5 font-normal">
                    {pillar.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-[var(--border-subtle)] pt-5 space-y-3">
                    <div className="font-mono text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                      {servicesContent.deliverablesLabel}
                    </div>
                    {pillar.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-main)] font-medium">
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <a
                    href={ROUTES.contact}
                    className="inline-flex items-center gap-2 font-display font-semibold text-xs sm:text-sm text-primary hover:text-accent transition-colors group/link"
                  >
                    <span>{servicesContent.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
