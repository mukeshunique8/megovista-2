'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Briefcase, MapPin, Award, Quote } from 'lucide-react'
import { aboutContent } from '@/src/content/megovista'

const ICONS_MAP = {
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase,
  MapPin: MapPin,
  Award: Award,
}

export function AboutSection() {
  return (
    <section id="about" className="w-full section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-200">
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
            {aboutContent.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[var(--text-main)] leading-tight mb-3"
          >
            {aboutContent.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="font-display text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal"
          >
            {aboutContent.subtitle}
          </motion.p>
        </div>

        {/* Split Grid: Left Leadership & Corporate Photo, Right 4 Trust Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Leadership & Corporate Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Image Frame from Unsplash */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-black/10 border border-[var(--border-subtle)] shadow-xl">
              <Image
                src={aboutContent.image}
                alt="Megovista Corporate Advisory Leadership"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter brightness-[0.97]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="font-display font-bold text-lg leading-tight">
                  {aboutContent.leadership.name}
                </div>
                <div className="font-mono text-xs text-blue-200">
                  {aboutContent.leadership.role} • {aboutContent.leadership.organization}
                </div>
              </div>
            </div>

            {/* Leadership Quote Callout */}
            <div className="rounded-2xl bg-[var(--bg-surface)] p-6 sm:p-7 border border-[var(--border-subtle)] shadow-sm relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="font-display italic text-sm sm:text-base text-[var(--text-main)] leading-relaxed mb-4">
                &ldquo;{aboutContent.leadership.quote}&rdquo;
              </p>
              <div className="font-mono text-xs text-[var(--text-muted)] font-medium">
                {aboutContent.leadership.credentials}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Foundational Trust Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {aboutContent.pillars.map((pillar, idx) => {
              const IconComponent = ICONS_MAP[pillar.icon as keyof typeof ICONS_MAP] || ShieldCheck
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                  className="rounded-2xl bg-[var(--bg-surface)] p-6 sm:p-7 border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[var(--text-main)] mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-display text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

