'use client'

import { motion } from 'framer-motion'
import {
  Search,
  SlidersHorizontal,
  RefreshCw,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const PHASES = [
  {
    phase: 'Phase 01',
    timeframe: 'Days 1 – 3',
    title: 'Diagnostic Forensic Audit',
    icon: Search,
    subtitle: 'Comprehensive exposure scorecard & penalty heatmap',
    details: [
      'Historical EPFO & ESIC remittance forensic review',
      'Section 14B damages & Section 7Q interest exposure mapping',
      'Statutory register reconciliation across all operating states',
      'Executive rectification blueprint presented to leadership',
    ],
  },
  {
    phase: 'Phase 02',
    timeframe: 'Days 4 – 10',
    title: 'Portal Alignment & KYC Cleansing',
    icon: SlidersHorizontal,
    subtitle: 'Re-architecture of statutory portals and registers',
    details: [
      'Mass UAN generation & 100% Aadhaar/bank KYC seeding',
      'EPFO, ESIC, MCA, and GST portal profile synchronization',
      'Salary restructuring and tax deduction alignment',
      'POSH Internal Complaints Committee (ICC) formal constitution',
    ],
  },
  {
    phase: 'Phase 03',
    timeframe: 'Monthly Cycles (Pre-15th & 20th)',
    title: 'Autonomous Monthly Operations',
    icon: RefreshCw,
    subtitle: 'Zero-penalty execution on autopilot',
    details: [
      'Monthly payroll run with payslip dispatch & tax withholding',
      'EPFO ECR generation and portal filing prior to the 15th',
      'ESIC challan generation and online remittance confirmation',
      'Monthly GSTR-1, GSTR-3B filings & ITC ledger matching',
    ],
  },
  {
    phase: 'Phase 04',
    timeframe: 'Ongoing & Milestones',
    title: 'Institutional Certification & Scale',
    icon: Award,
    subtitle: 'Tier-1 client readiness and enterprise governance',
    details: [
      'ISO 9001 (Quality) & ISO 27001 (ISMS) audit facilitation',
      'CMMI process maturity gap reviews for enterprise bids',
      'Statutory compliance renewals and labour notice defenses',
      'Continuous executive counsel with Megovista Managing Partner',
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="luxury-badge mb-4">
            <span>03 / The Megovista Deployment Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From Forensic Audit to Autopilot{' '}
            <span className="gradient-text-emerald">in Four Structured Phases.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A battle-tested onboarding pathway: we diagnose past liabilities, cleanse your statutory ledgers, automate monthly filings, and prepare your enterprise for global certifications.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHASES.map((p, idx) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-[#0c1017]/90 border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/30 hover:bg-[#0e1420] transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative"
              >
                {/* Connecting accent */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-white/5 border border-white/10 text-slate-300">
                    {p.timeframe}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase tracking-widest block mb-1">
                    {p.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {p.subtitle}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {p.details.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center justify-between">
                  <span>Guaranteed SLA</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl bg-white/[0.02] border border-white/5 p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs font-mono text-slate-300">
              Zero historical client penalties recorded across 1,000+ monthly filings.
            </span>
          </div>

          <a href="#contact" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors">
            <span>Schedule Phase 1 Diagnostic Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

