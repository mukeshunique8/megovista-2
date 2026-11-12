'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  ShieldAlert,
  ShieldCheck,
  Check,
  AlertCircle,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react'

interface TierData {
  range: string
  label: string
  minHeadcount: number
  maxHeadcount: number
  summary: string
  mandatoryActs: {
    name: string
    reason: string
    penaltyIfMissed: string
    isNewTrigger?: boolean
  }[]
  certificationsRecommended: string[]
}

const TIERS: TierData[] = [
  {
    range: '1 – 9',
    label: 'Early Commercial Stage',
    minHeadcount: 1,
    maxHeadcount: 9,
    summary: 'Focus is on initial commercial incorporation, state shops license, and tax registrations.',
    mandatoryActs: [
      {
        name: 'State Shops & Commercial Establishments Act',
        reason: 'Mandatory commercial premises license from day one',
        penaltyIfMissed: 'Business premises seal & daily recurring fines',
      },
      {
        name: 'GST Registration & Regular Filings',
        reason: 'Mandatory for interstate commerce and threshold turnover',
        penaltyIfMissed: 'Cancellation of GSTIN, 100% tax penalty on revenue',
      },
      {
        name: 'Professional Tax (PT) Employer Registration',
        reason: 'State revenue deduction from salary rolls',
        penaltyIfMissed: 'Interest & monthly penalty on arrears',
      },
      {
        name: 'MSME / Udyam Registration',
        reason: 'Collateral-free credit priority & 45-day payment statutory shield',
        penaltyIfMissed: 'Loss of statutory recovery protections',
      },
    ],
    certificationsRecommended: ['ISO 9001:2015 (Foundational QMS)', 'Class 3 DSC Encryption'],
  },
  {
    range: '10 – 19',
    label: 'Headcount Threshold 1',
    minHeadcount: 10,
    maxHeadcount: 19,
    summary: 'POSH Act 2013 becomes strictly mandatory by Indian law once reaching 10 team members.',
    mandatoryActs: [
      {
        name: 'POSH Act 2013 (Internal Complaints Committee)',
        reason: 'MANDATORY by law: Constitution of ICC with independent External Member',
        penaltyIfMissed: '₹50,000 fine & immediate cancellation of trade licenses',
        isNewTrigger: true,
      },
      {
        name: 'Payment of Wages & Minimum Wages Acts',
        reason: 'Mandatory statutory registers and timely wage disbursal before 7th/10th',
        penaltyIfMissed: 'Labour commissioner summons & wage claims',
      },
      {
        name: 'State Shops & Establishments Compliance',
        reason: 'Overtime tracking, national holidays display, leave registers',
        penaltyIfMissed: 'Labour inspection compounding fees',
      },
      {
        name: 'GST & TDS Statutory Withholding',
        reason: 'Monthly Form 24Q TDS filing & GSTR-1/3B reconciliation',
        penaltyIfMissed: 'Late fee ₹200/day + interest under Section 234E',
      },
    ],
    certificationsRecommended: ['ISO 9001 (Quality)', 'ISO 27001 (Data Protection)'],
  },
  {
    range: '20 – 49',
    label: 'Headcount Threshold 2 (EPFO Mandate)',
    minHeadcount: 20,
    maxHeadcount: 49,
    summary: 'EPFO Act 1952 triggers automatically. PF registration and monthly ECR filing becomes a criminal statutory duty.',
    mandatoryActs: [
      {
        name: 'Employees’ Provident Funds Act (EPFO 1952)',
        reason: 'MANDATORY: 12% employer + 12% employee contribution before 15th every month',
        penaltyIfMissed: 'Section 14B damages (up to 100%) + Section 7Q interest (12% p.a.)',
        isNewTrigger: true,
      },
      {
        name: 'Employees’ State Insurance Act (ESIC 1948)',
        reason: 'Mandatory social security for employees earning ≤ ₹21,000/month',
        penaltyIfMissed: 'Recovery of employer arrears with 12% interest & prosecution',
        isNewTrigger: true,
      },
      {
        name: 'POSH Act 2013 Statutory Annual Filing',
        reason: 'Filing mandatory Annual POSH Report with District Magistrate / Officer',
        penaltyIfMissed: 'Non-filing penalty & corporate governance default',
      },
      {
        name: 'Equal Remuneration & Maternity Benefit Acts',
        reason: 'Mandatory female employee benefits (26 weeks paid leave) & equal pay registers',
        penaltyIfMissed: 'Imprisonment up to 1 year & fine under Section 21',
      },
    ],
    certificationsRecommended: ['ISO 9001 QMS', 'ISO 27001 ISMS', 'CMMI Maturity Level 3 Gap Audit'],
  },
  {
    range: '50 – 99',
    label: 'Mid-Market Scale',
    minHeadcount: 50,
    maxHeadcount: 99,
    summary: 'Standing Orders, Gratuity provisions, and multi-state compliance registers require continuous governance.',
    mandatoryActs: [
      {
        name: 'Payment of Gratuity Act 1972',
        reason: 'Mandatory statutory gratuity liability creation for 5+ years service',
        penaltyIfMissed: 'Imprisonment up to 2 years + recovery of gratuity dues',
      },
      {
        name: 'Mandatory Creche & Welfare Provisions',
        reason: 'Mandatory crèche facility required for establishments with 50+ staff',
        penaltyIfMissed: 'Labour inspection stop-work notices',
        isNewTrigger: true,
      },
      {
        name: 'EPFO & ESIC Multi-Portal ECR Filings',
        reason: 'Continuous monthly challan matching and KYC seeding across all states',
        penaltyIfMissed: 'Revenue recovery warrants issued against company accounts',
      },
      {
        name: 'Contract Labour (Regulation & Abolition) Act',
        reason: 'Mandatory registration for engaging 20+ contract workers / vendors',
        penaltyIfMissed: 'Cancellation of contractor licences & penal fines',
      },
    ],
    certificationsRecommended: ['ISO 27001 (Tier-1 Client Audits)', 'CMMI Dev/SVC Level 3', 'POSH External Audit'],
  },
  {
    range: '100+',
    label: 'Institutional Enterprise',
    minHeadcount: 100,
    maxHeadcount: 1000,
    summary: 'Enterprise tier requiring dedicated statutory governance, industrial relations, and tier-1 institutional audits.',
    mandatoryActs: [
      {
        name: 'Industrial Employment (Standing Orders) Act',
        reason: 'Mandatory certified standing orders governing terms of employment',
        penaltyIfMissed: 'Quashing of termination orders & labour tribunal disputes',
        isNewTrigger: true,
      },
      {
        name: 'Institutional ISO 27001 ISMS & SOC 2 Readiness',
        reason: 'Required by global tier-1 enterprise and US/EU client contracts',
        penaltyIfMissed: 'Loss of enterprise RFPs and vendor qualification',
      },
      {
        name: 'Full Central & State Statutory Registers',
        reason: 'Maintenance of 16+ mandatory registers (Form A, B, C, D, Form XVII, etc.)',
        penaltyIfMissed: 'Inspection prosecution under respective labour laws',
      },
      {
        name: 'Comprehensive Forensic Payroll Audit',
        reason: 'Monthly CTC structuring, tax deductions, and executive compensations',
        penaltyIfMissed: 'Income tax TDS defaults & executive compensation scrutiny',
      },
    ],
    certificationsRecommended: ['CMMI Level 3/5', 'ISO 27001:2022', 'ISO 9001:2015', 'ISMS Global Audit'],
  },
]

export function ComplianceCalculator() {
  const [selectedIdx, setSelectedIdx] = useState(2) // Default to 20-49 (sweet spot)
  const current = TIERS[selectedIdx]

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-[#090d15]">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="luxury-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Check what statutory acts{' '}
            <span className="gradient-text-emerald">apply to your company</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Select your current or planned headcount. The simulator automatically evaluates Indian statutory law triggers and maps out your mandatory obligations.
          </p>
        </div>

        {/* Headcount Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {TIERS.map((tier, idx) => {
            const isSelected = selectedIdx === idx
            return (
              <button
                key={tier.range}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-white/[0.03] text-slate-300 border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.06]'
                }`}
              >
                <Users className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-emerald-400'}`} />
                <span>{tier.range} Employees</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Tier Analysis Dashboard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.range}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto rounded-3xl bg-[#0c1017]/90 border border-white/10 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Headcount Tier: {current.range} Employees
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">{current.label}</h3>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">{current.summary}</p>
              </div>

              <a
                href={`https://wa.me/917010413915?text=${encodeURIComponent(
                  `Hello Megovista, our headcount is currently ${current.range} employees. We would like to run a statutory compliance check and quote.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !text-xs !py-2.5 !px-5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quote for {current.range} Staff</span>
              </a>
            </div>

            {/* Mandatory Acts Grid */}
            <div className="mt-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">
                Mandatory Indian Statutory Laws Triggered
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.mandatoryActs.map((act, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border transition-all ${
                      act.isNewTrigger
                        ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                        : 'bg-white/[0.02] border-white/5'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {act.isNewTrigger ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-emerald-500 text-slate-950">
                            Critical Mandate
                          </span>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        )}
                        <h5 className="text-sm font-bold text-white">{act.name}</h5>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-2 leading-relaxed">{act.reason}</p>

                    <div className="flex items-center gap-1.5 text-[11px] text-rose-300/90 font-mono bg-rose-950/30 px-2.5 py-1 rounded-lg border border-rose-500/10">
                      <AlertCircle className="w-3 h-3 text-rose-400 flex-shrink-0" />
                      <span>Penalty risk: {act.penaltyIfMissed}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Institutional Certifications & CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 font-mono block mb-2">
                  Recommended Maturity Frameworks &amp; Audits:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.certificationsRecommended.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#contact" className="btn-primary-emerald !text-xs !py-3 !px-6 group">
                <span>Engage Turnkey Compliance</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

