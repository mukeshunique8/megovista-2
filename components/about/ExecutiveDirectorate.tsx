'use client'

import React from 'react'
import Image from 'next/image'
import { ShieldCheck, Briefcase, MapPin, Award, Quote, Users, CheckCircle2, Sparkles } from 'lucide-react'
import { aboutContent, agencyTeam } from '@/src/content/megovista'
import { SpotlightCard } from '@/components/reactbits/SpotlightCard'

const PILLAR_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  Briefcase,
  MapPin,
  Award,
}

export function ExecutiveDirectorate() {
  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300 border-t border-[var(--border-subtle)]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span>{aboutContent.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] leading-[1.08] text-[var(--text-main)] font-sans-tight">
            {aboutContent.title}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed max-w-2xl mx-auto">
            {aboutContent.subtitle}
          </p>
        </div>

        {/* 4 Trust & Governance Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {aboutContent.pillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[pillar.icon] || ShieldCheck
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(124, 58, 237, 0.15)"
                className="p-6 sm:p-7 flex flex-col justify-between hover:border-violet-500/40"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-violet-600/10 dark:bg-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-[var(--text-main)] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </SpotlightCard>
            )
          })}
        </div>

        {/* Leadership Quote Banner with Right Image (team.png) */}
        <div className="mb-24 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14 relative">
            {/* Ambient Background Aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
            />

            {/* Left Column: Quote Narrative & Credentials */}
            <div className="lg:col-span-7 relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Quote className="w-6 h-6" />
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-[1.25] text-[var(--text-main)] font-sans-tight">
                &ldquo;{aboutContent.leadership.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-medium text-[var(--text-main)]">
                    {aboutContent.leadership.name}
                  </h4>
                  <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mt-0.5">
                    {aboutContent.leadership.role} · {aboutContent.leadership.organization}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                    {aboutContent.leadership.credentials}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium border border-blue-500/20 self-start sm:self-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founding Vision</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Portrait Image (/team/team.png) */}
            <div className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl bg-gradient-to-b from-blue-950/20 via-black/10 to-black/30 dark:bg-black/40 group">
                {/* Glow behind photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                <Image
                  src="/team/team.png"
                  alt={aboutContent.leadership.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                  <span className="text-xs font-mono tracking-widest uppercase text-sky-300 block">
                    Statutory Specialist
                  </span>
                  <span className="text-base font-medium block">
                    {aboutContent.leadership.name}
                  </span>
                  <span className="text-[11px] text-white/70 font-light block">
                    {aboutContent.leadership.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Directorate Profiles (3 Members) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[var(--text-main)] font-sans-tight">
                Executive Directorate
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light mt-1">
                Direct statutory, legal, and operational leadership behind every Megovista engagement.
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Chennai Headquarters
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {agencyTeam.map((member) => (
              <SpotlightCard
                key={member.id}
                spotlightColor="rgba(59, 130, 246, 0.15)"
                className="p-6 sm:p-7 flex flex-col justify-between hover:border-blue-500/40"
              >
                <div>
                  {/* Emblem / Avatar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative w-14 h-14 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-[var(--border-subtle)] overflow-hidden flex items-center justify-center p-2">
                      <Image
                        src="/megovista-emblem.png"
                        alt={member.name}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/5 dark:bg-white/10 text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      Active
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h4 className="text-lg font-medium text-[var(--text-main)]">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                    {member.credentials}
                  </p>

                  {/* Bio */}
                  <p className="mt-4 text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                  <span>Megovista Directorate</span>
                  <span className="font-mono text-blue-600 dark:text-blue-400">Chennai HQ</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExecutiveDirectorate
