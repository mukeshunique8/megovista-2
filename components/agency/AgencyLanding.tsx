'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Copyright,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Users,
  Briefcase,
} from 'lucide-react'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { FloatingActions } from '@/components/ui/FloatingActions'
import {
  companyContact,
  contactContent,
  footerContent,
  agencyCategories,
  agencyProjects,
  agencyTeam,
  agencyClients,
  agencyManifesto,
  agencyMarquee,
  ROUTES,
} from '@/src/content/megovista'
import { cn } from '@/lib/utils'

// ─── AGENCY PRIMITIVES ───────────────────────────────────────────────────────

export function ExecCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'exec-card group cursor-pointer border-b border-stone-300 dark:border-stone-800 pb-8 transition-colors hover:border-black dark:hover:border-white',
        className
      )}
    >
      {children}
    </div>
  )
}

export function ExecButton({
  children,
  active,
  onClick,
  className,
}: {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-5 sm:px-6 py-2 border font-sans-tight text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer select-none',
        active
          ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
          : 'bg-transparent text-stone-500 dark:text-stone-400 border-stone-300 dark:border-stone-800 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white',
        className
      )}
    >
      {children}
    </button>
  )
}

// ─── MAIN AGENCY COMPONENT ───────────────────────────────────────────────────

export function AgencyLanding() {
  const [activeTab, setActiveTab] = useState<'Selected Works' | 'Directorate' | 'Manifesto' | 'Contact & Advisory'>(
    'Selected Works'
  )
  const [activeFilter, setActiveFilter] = useState<string>('All Solutions')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: contactContent.form.serviceOptions[0],
    message: '',
  })

  const filteredProjects =
    activeFilter === 'All Solutions'
      ? agencyProjects
      : agencyProjects.filter((p) => p.category === activeFilter)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const navItems = [
    { label: 'Selected Works', id: 'Selected Works' },
    { label: 'Directorate', id: 'Directorate' },
    { label: 'Manifesto', id: 'Manifesto' },
    { label: 'Contact & Advisory', id: 'Contact & Advisory' },
  ] as const

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-[#0B0F19] text-stone-900 dark:text-stone-100 font-sans-tight selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
      {/* ─── MINIMALIST EXECUTIVE HEADER ───────────────────────────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 bg-stone-100/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-stone-300 dark:border-stone-800 transition-colors">
        <div className="flex justify-between items-center h-20 px-6 md:px-12">
          <div className="flex justify-between items-center w-full max-w-[2000px] mx-auto">
            {/* Branding */}
            <a
              href={ROUTES.home}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="relative w-10 h-10 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-lg shadow-sm group-hover:bg-red-600 dark:group-hover:bg-red-600 dark:group-hover:text-white transition-colors p-1.5">
                <Image
                  src="/megovista-emblem.png"
                  alt="Megovista Emblem"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain filter invert dark:invert-0"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tighter uppercase leading-none font-sans-tight text-stone-900 dark:text-stone-100">
                  {companyContact.shortName}
                </h1>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-bold block mt-1">
                  HR & Statutory Division
                </span>
              </div>
            </a>

            {/* Navigation Tabs */}
            <nav className="hidden lg:flex gap-1" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  data-tab={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    window.scrollTo({ top: 0, behavior: 'instant' })
                  }}
                  className={cn(
                    'px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all relative cursor-pointer',
                    activeTab === item.id
                      ? 'text-black dark:text-white'
                      : 'text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white'
                  )}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-black dark:bg-white"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Controls: Theme Toggle & Consultation Button */}
            <div className="flex items-center gap-4 sm:gap-6">
              <ThemeToggle />
              <button
                type="button"
                data-tab="Contact & Advisory"
                onClick={() => {
                  setActiveTab('Contact & Advisory')
                  window.scrollTo({ top: 0, behavior: 'instant' })
                }}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-stone-300 dark:border-stone-700 px-4 py-2 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer shadow-sm"
              >
                <span>{footerContent.consultationButton}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center justify-start overflow-x-auto px-6 py-2 border-t border-stone-200 dark:border-stone-800 gap-2 bg-stone-100 dark:bg-[#0B0F19]">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveTab(item.id)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={cn(
                'px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold whitespace-nowrap rounded border transition-colors',
                activeTab === item.id
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                  : 'bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-stone-800'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* ─── RUNNING TICKER MARQUEE ────────────────────────────────────────── */}
      <div className="w-full overflow-hidden bg-black dark:bg-[#070A11] text-white py-3.5 mt-20 border-t border-b border-stone-800 flex select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
          className="flex shrink-0 gap-12 sm:gap-16 text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] font-bold"
        >
          {[...Array(4)].map((_, groupIdx) => (
            <React.Fragment key={groupIdx}>
              {agencyMarquee.map((phrase, idx) => (
                <span key={`${groupIdx}-${idx}`} className="flex items-center gap-12 sm:gap-16 whitespace-nowrap">
                  <Copyright className="w-3 h-3 text-red-500" />
                  <span>{phrase}</span>
                  <span className="text-red-500 font-bold">+++</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ─── MAIN CONTENT AREA ─────────────────────────────────────────────── */}
      <main className="max-w-[2000px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-32 min-h-screen">
        <AnimatePresence mode="wait" initial={false}>
          {/* ─── TAB 1: SELECTED WORKS (SOLUTIONS & CASE MONOGRAPHS) ───────── */}
          {activeTab === 'Selected Works' && (
            <motion.div
              key="works"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Giant Headline */}
              <div className="mb-14 md:mb-20 max-w-5xl">
                <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400 mb-4">
                  Megovista Corporate Advisory · Chennai Headquarters
                </div>
                <h2 className="font-serif-display text-4xl sm:text-6xl md:text-8xl italic font-black text-black dark:text-white leading-[0.96] mb-7 tracking-tighter">
                  Statutory Governance. <br />
                  <span className="not-italic block tracking-tight">Engineered for Scale.</span>
                </h2>
                <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                  {agencyManifesto.lead}
                </p>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-2.5 mb-14 border-b border-stone-300 dark:border-stone-800 pb-6">
                {agencyCategories.map((cat) => (
                  <ExecButton
                    key={cat}
                    active={activeFilter === cat}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </ExecButton>
                ))}
              </div>

              {/* Asymmetric Brutalist Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {filteredProjects.map((proj, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx > 6 ? 0.1 : idx * 0.05 }}
                    key={proj.id}
                    className={proj.colSpan}
                  >
                    <ExecCard>
                      <div className="img-zoom-wrapper w-full h-[360px] sm:h-[480px] md:h-[620px] mb-6 bg-stone-200 dark:bg-stone-900 relative rounded-sm overflow-hidden border border-stone-200 dark:border-stone-800">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-black/80 dark:bg-white/90 text-white dark:text-black px-2.5 py-1 backdrop-blur-md">
                            {proj.id}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 pt-2">
                        <div className="flex-1">
                          <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-black italic tracking-tighter group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors mb-2 text-stone-900 dark:text-stone-100 leading-snug">
                            {proj.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans-tight mb-3.5 max-w-xl leading-relaxed">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                            <span>
                              Sector: <span className="text-black dark:text-white">{proj.client}</span>
                            </span>
                            <span className="w-1 h-1 bg-stone-400 dark:bg-stone-600 rounded-full" />
                            <span>{proj.category}</span>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                          <span className="text-xs font-bold uppercase tracking-widest border border-stone-300 dark:border-stone-700 px-2.5 py-1 bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                            {proj.year}
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            {proj.status}
                          </span>
                        </div>
                      </div>
                    </ExecCard>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="mt-20 text-center border-t border-stone-300 dark:border-stone-800 pt-16">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('Contact & Advisory')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="text-3xl sm:text-5xl md:text-7xl font-serif-display font-black italic hover:text-red-600 dark:hover:text-red-500 transition-colors tracking-tighter flex items-center justify-center gap-4 mx-auto group cursor-pointer text-stone-900 dark:text-stone-100"
                >
                  Initiate Statutory Scope{' '}
                  <ArrowUpRight className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 2: DIRECTORATE (EXECUTIVE LEADERSHIP & COUNSEL) ────────── */}
          {activeTab === 'Directorate' && (
            <motion.div
              key="directors"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-14 md:mb-20 max-w-5xl">
                <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400 mb-4">
                  Advisory Board & Practice Heads
                </div>
                <h2 className="font-serif-display text-4xl sm:text-6xl md:text-8xl italic font-black text-black dark:text-white leading-[0.96] mb-7 tracking-tighter">
                  The <br />
                  <span className="not-italic block tracking-tight">Directorate.</span>
                </h2>
                <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                  Decades of combined statutory trial experience, EPFO/ESIC department liaison, ISO certification audits, and labour law governance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agencyTeam.map((mem) => (
                  <div
                    key={mem.id}
                    className="group cursor-pointer border-b border-stone-300 dark:border-stone-800 pb-8"
                  >
                    <div className="w-full aspect-square mb-6 bg-stone-200 dark:bg-stone-900 overflow-hidden relative rounded-sm border border-stone-200 dark:border-stone-800">
                      <Image
                        src={mem.avatar}
                        alt={mem.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-black/80 text-white px-2 py-1 backdrop-blur-sm">
                          {mem.credentials}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold font-sans-tight tracking-tight mb-1 uppercase group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors text-stone-900 dark:text-stone-100">
                      {mem.name}
                    </h3>
                    <div className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
                      {mem.role}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans-tight leading-relaxed mb-4">
                      {mem.bio}
                    </p>
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 border-t border-stone-300 dark:border-stone-800 pt-3">
                      <span>Advisory Division</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:text-red-600 text-black dark:text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ─── TAB 3: MANIFESTO & GOVERNANCE PHILOSOPHY ───────────────────── */}
          {activeTab === 'Manifesto' && (
            <motion.div
              key="manifesto"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-7">
                  <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400 mb-4">
                    {agencyManifesto.eyebrow}
                  </div>
                  <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-black italic tracking-tighter mb-8 text-black dark:text-white leading-[0.96]">
                    Our <br />
                    <span className="not-italic">Philosophy.</span>
                  </h2>

                  <article className="prose prose-stone dark:prose-invert lg:prose-lg font-serif-display max-w-none text-stone-700 dark:text-stone-300 space-y-5">
                    {agencyManifesto.paragraphs.map((p, idx) => (
                      <p key={idx} className="font-medium leading-relaxed text-base sm:text-lg">
                        {p}
                      </p>
                    ))}
                  </article>

                  {/* Core Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-300 dark:border-stone-800">
                    {agencyManifesto.stats.map((st) => (
                      <div key={st.label}>
                        <div className="font-serif-display font-black text-3xl sm:text-4xl text-black dark:text-white mb-1">
                          {st.value}
                        </div>
                        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Industry Verticals */}
                  <div className="mt-16">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 border-b border-stone-300 dark:border-stone-800 pb-3">
                      {agencyManifesto.partnersHeading}
                    </h3>
                    <ul className="space-y-4">
                      {agencyClients.map((client) => (
                        <li
                          key={client.id}
                          className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 border-b border-stone-200 dark:border-stone-800 pb-3.5 hover:border-black dark:hover:border-white transition-colors group cursor-crosshair"
                        >
                          <div>
                            <span className="text-lg sm:text-xl font-black uppercase tracking-tight group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors text-stone-900 dark:text-stone-100 block">
                              {client.name}
                            </span>
                            <span className="text-xs text-stone-500 dark:text-stone-400 font-sans-tight">
                              {client.sector}
                            </span>
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 shrink-0">
                            {client.engagements}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Big Brutalist Graphic Card */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="bg-stone-200 dark:bg-stone-900 p-8 sm:p-14 flex flex-col items-center justify-center rounded-sm border border-stone-300 dark:border-stone-800 relative overflow-hidden aspect-[4/3] sm:aspect-square">
                    <div className="absolute top-6 left-6 font-mono text-xs font-bold uppercase tracking-widest text-stone-400">
                      EST. CHENNAI
                    </div>
                    <div className="absolute top-6 right-6 font-mono text-xs font-bold uppercase tracking-widest text-stone-400">
                      SEC 14B ZERO SHIELD
                    </div>
                    <h2 className="text-[9rem] sm:text-[13rem] font-serif-display font-black text-white dark:text-stone-800 hover:text-red-600 dark:hover:text-red-500 transition-colors cursor-crosshair select-none leading-none">
                      M.
                    </h2>
                    <div className="absolute bottom-6 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                      Megovista Operating System
                    </div>
                  </div>

                  <div className="p-6 bg-stone-50 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 rounded-sm">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-2">
                      Statutory Guarantee
                    </div>
                    <p className="font-sans-tight text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      Zero penal default damages. 100% pre-15th EPFO and ESIC filing protocol. Encrypted DSC governance and direct liaison with government inspectorates.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── TAB 4: CONTACT & STATUTORY ADVISORY ────────────────────────── */}
          {activeTab === 'Contact & Advisory' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-14 md:mb-20 max-w-5xl">
                <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400 mb-4">
                  Confidential Consultation
                </div>
                <h2 className="font-serif-display text-4xl sm:text-6xl md:text-8xl italic font-black text-black dark:text-white leading-[0.96] mb-7 tracking-tighter">
                  Initiate <br />
                  <span className="not-italic block tracking-tight">Governance.</span>
                </h2>
                <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                  Schedule an in-person or virtual consultation with our Chennai practice heads to audit your exposure and structure your compliance operations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Direct Inquiries & Office Map */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* WhatsApp Quick Action */}
                  <a
                    href={companyContact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 border border-stone-300 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 hover:border-black dark:hover:border-white transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-sans-tight font-bold text-sm uppercase tracking-wider text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                        {contactContent.ui.whatsAppCta}
                      </div>
                      <div className="font-mono text-xs text-stone-500 dark:text-stone-400 mt-1">
                        {companyContact.phone}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black dark:text-white" />
                  </a>

                  {/* Headquarters Details */}
                  <div className="border border-stone-300 dark:border-stone-800 p-6 bg-stone-50 dark:bg-stone-900 space-y-4">
                    <div>
                      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                        {contactContent.ui.headquartersLabel}
                      </div>
                      <div className="font-sans-tight text-sm font-semibold text-stone-900 dark:text-stone-100 leading-snug">
                        {companyContact.address}
                      </div>
                      <a
                        href={companyContact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-mono text-xs text-red-600 dark:text-red-400 hover:underline mt-1 font-bold uppercase tracking-wider"
                      >
                        {contactContent.ui.openInGoogleMaps}
                      </a>
                    </div>

                    <div className="border-t border-stone-200 dark:border-stone-800 pt-3">
                      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                        {contactContent.ui.directPhoneLabel}
                      </div>
                      <a
                        href={`tel:${companyContact.phoneRaw}`}
                        className="font-mono text-sm font-bold text-stone-900 dark:text-stone-100 hover:text-red-600 transition-colors"
                      >
                        {companyContact.phone}
                      </a>
                    </div>

                    <div className="border-t border-stone-200 dark:border-stone-800 pt-3">
                      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                        {contactContent.ui.emailInquiriesLabel}
                      </div>
                      <a
                        href={`mailto:${companyContact.email}`}
                        className="font-mono text-sm font-bold text-stone-900 dark:text-stone-100 hover:text-red-600 transition-colors"
                      >
                        {companyContact.email}
                      </a>
                    </div>

                    <div className="border-t border-stone-200 dark:border-stone-800 pt-3">
                      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                        {contactContent.ui.operatingHoursLabel}
                      </div>
                      <div className="font-sans-tight text-xs text-stone-600 dark:text-stone-400">
                        {companyContact.workingHours}
                      </div>
                    </div>
                  </div>

                  {/* Standard Google Maps Embed Iframe */}
                  <div className="w-full h-60 border border-stone-300 dark:border-stone-800 overflow-hidden bg-stone-200 dark:bg-stone-900">
                    <iframe
                      title="Megovista Chennai Headquarters Map"
                      src="https://maps.google.com/maps?q=No.+25/11,+Jamal+Sowcar+Street,+Old+Washermenpet,+Chennai+-+600021&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0 filter contrast-[1.05]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Right Column: Clean Brutalist Inquiry Form */}
                <div className="lg:col-span-7 border border-stone-300 dark:border-stone-800 p-8 sm:p-10 bg-stone-50 dark:bg-stone-900">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-14 h-14 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="font-serif-display font-black text-3xl italic text-black dark:text-white mb-3">
                        {contactContent.ui.successTitle}
                      </h3>
                      <p className="font-sans-tight text-sm text-stone-600 dark:text-stone-400 max-w-md mx-auto leading-relaxed mb-6">
                        {contactContent.ui.successMessage}
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2.5 border border-black dark:border-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                      >
                        {contactContent.ui.resetButton}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                            {contactContent.form.nameLabel} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Anand Kumar"
                            className="w-full px-4 py-3 bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                            {contactContent.form.emailLabel} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="anand@company.com"
                            className="w-full px-4 py-3 bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                            {contactContent.form.phoneLabel} *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                            {contactContent.form.serviceLabel}
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors cursor-pointer"
                          >
                            {contactContent.form.serviceOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                          {contactContent.form.messageLabel}
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Briefly describe your team size, statutory notice, or compliance audit requirements..."
                          className="w-full px-4 py-3 bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-sans-tight font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <Send className="w-4 h-4" />
                        <span>{contactContent.form.submitLabel}</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ─── MINIMALIST FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-[#070A11] px-6 md:px-12 py-12 transition-colors">
        <div className="max-w-[2000px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif-display font-black text-2xl tracking-tight text-black dark:text-white">
                {companyContact.shortName}
              </span>
              <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
                / {companyContact.tagline}
              </span>
            </div>
            <p className="font-sans-tight text-xs text-stone-500 dark:text-stone-400 mt-2 max-w-md">
              {footerContent.bio}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <a href={`tel:${companyContact.phoneRaw}`} className="hover:text-black dark:hover:text-white transition-colors">
              {companyContact.phone}
            </a>
            <span>•</span>
            <a href={`mailto:${companyContact.email}`} className="hover:text-black dark:hover:text-white transition-colors">
              {companyContact.email}
            </a>
            <span>•</span>
            <span>Chennai, Tamil Nadu</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} {companyContact.name}</span>
          </div>
        </div>
      </footer>

      {/* ─── STICKY FLOATING ACTIONS ───────────────────────────────────────── */}
      <FloatingActions />
    </div>
  )
}
