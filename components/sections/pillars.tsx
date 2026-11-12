'use client'

import { motion } from 'framer-motion'
import {
  WalletCards,
  ShieldCheck,
  Building2,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'

const PILLARS = [
  {
    number: '01',
    title: 'HR & Payroll Operations',
    tag: 'Workforce Engine',
    icon: WalletCards,
    headline: 'Flawless payroll calculations, tax structuring, and compliance.',
    description:
      'Timely, transparent remuneration built with automated statutory deductions. We handle your entire monthly salary register, payslip dispatch, and employee query resolution.',
    colorGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderColor: 'group-hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
    items: [
      { name: 'Monthly Payroll Verification', desc: 'Precise attendance, OT, loss of pay & variable pay calculations' },
      { name: 'Statutory Salary Structuring', desc: 'Basic, HRA, DA, PF, ESI, PT, and TDS tax-optimized breakup' },
      { name: 'Labour Act Mandates', desc: 'Minimum Wages, Payment of Wages, & Bonus Act adherence' },
      { name: 'POSH Training & Compliance', desc: 'Internal Complaints Committee (ICC) constitution & district reports' },
    ],
  },
  {
    number: '02',
    title: 'Statutory Social Security',
    tag: 'EPFO & ESIC Autopilot',
    icon: ShieldCheck,
    headline: 'Zero-penalty administration of central retirement and health safety nets.',
    description:
      'End-to-end management of EPFO and ESIC establishment codes. Monthly Electronic Challan cum Return (ECR) generation, direct portal filing, and frictionless employee claim settlements.',
    colorGradient: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    borderColor: 'group-hover:border-teal-500/40',
    iconColor: 'text-teal-400',
    items: [
      { name: 'EPFO & ESIC Registrations', desc: 'Establishment code procurement with zero departmental delays' },
      { name: 'Monthly ECR Preparation & Filing', desc: 'Pre-15th challan generation, ledger reconciliation, & remittances' },
      { name: 'Universal Account Numbers (UAN)', desc: 'Mass KYC seeding, Aadhaar mapping, & member profile activations' },
      { name: 'Statutory Claims Guidance', desc: 'Form 19, 10C, 31 withdrawal facilitation & dispute resolution' },
    ],
  },
  {
    number: '03',
    title: 'Registrations & Commercial Tax',
    tag: 'Entity Licences',
    icon: Building2,
    headline: 'State commercial licences, tax registrations, and digital credentials.',
    description:
      'Turnkey statutory standing for offices, branches, and facilities. From initial state Shops and Establishments licences to monthly GST reconciliations and Director Class 3 DSC tokens.',
    colorGradient: 'from-cyan-500/20 via-indigo-500/10 to-transparent',
    borderColor: 'group-hover:border-cyan-500/40',
    iconColor: 'text-cyan-400',
    items: [
      { name: 'Shops & Commercial License', desc: 'State establishment registration, timely renewals, & notice defenses' },
      { name: 'Udyam / MSME Certification', desc: 'Priority sector lending eligibility & statutory 45-day payment safety' },
      { name: 'GST Filings & Reconciliation', desc: 'Monthly GSTR-1, GSTR-3B filings, & Input Tax Credit (ITC) matching' },
      { name: 'Class 3 Digital Signatures (DSC)', desc: 'Cryptographic USB tokens with paperless director KYC procurement' },
    ],
  },
  {
    number: '04',
    title: 'Institutional Certifications',
    tag: 'Global Authority',
    icon: Award,
    headline: 'Internationally recognized audit frameworks for Tier-1 client readiness.',
    description:
      'Institutionalize your processes for Fortune 500 vendor qualifications and global security audits. Comprehensive gap assessment, documentation design, and lead-auditor coordination.',
    colorGradient: 'from-indigo-500/20 via-emerald-500/10 to-transparent',
    borderColor: 'group-hover:border-indigo-500/40',
    iconColor: 'text-indigo-400',
    items: [
      { name: 'ISO 9001:2015 (Quality)', desc: 'Standardized operational workflows, SOPs, & quality control' },
      { name: 'ISO 27001 (ISMS Data Security)', desc: 'Information security management framework for global enterprise contracts' },
      { name: 'CMMI Process Maturity', desc: 'Capability Maturity Model Integration appraisal gap roadmaps' },
      { name: 'Pre-Audit Advisory Support', desc: 'Internal audits, mock reviews, and zero-nonconformity assurance' },
    ],
  },
]

export function Pillars() {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="luxury-badge mb-4">
              <span>01 / The Core Operating Framework</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Four Pillars.{' '}
              <span className="gradient-text-emerald">One Institutional Back Office.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              We consolidate your fragmented compliance load under a single synchronized operating framework, eliminating cross-vendor friction and compliance liability.
            </p>
          </div>

          <a href="#solutions" className="btn-secondary-glass self-start md:self-auto group">
            <span>Explore All 11 Solutions</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group rounded-3xl bg-[#0c1017]/80 border border-white/10 p-8 sm:p-10 relative overflow-hidden transition-all duration-300 hover:bg-[#0f1522] ${pillar.borderColor} shadow-[0_20px_40px_rgba(0,0,0,0.5)]`}
              >
                {/* Ambient Top Glow */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${pillar.colorGradient} rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Ghost Background Number */}
                <span className="absolute bottom-2 right-4 text-8xl sm:text-9xl font-black text-white/[0.02] select-none pointer-events-none font-mono">
                  {pillar.number}
                </span>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                            Pillar {pillar.number}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-slate-300">
                        {pillar.tag}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-6">
                      {pillar.headline}
                    </p>

                    {/* Scope Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {pillar.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${pillar.iconColor} flex-shrink-0 mt-0.5`} />
                            <div>
                              <div className="text-xs font-bold text-white">{item.name}</div>
                              <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Autonomous Monthly Execution</span>
                    <a
                      href="#solutions"
                      className="font-bold text-white group-hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
