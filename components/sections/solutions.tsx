'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react'

interface SolutionsProps {
  whatsappUrl: string
}

const CATEGORIES = [
  'All Solutions',
  'HR & Payroll',
  'Social Security',
  'Tax & Finance',
  'Certifications',
  'Workplace Safety & Licencing',
]

const SOLUTIONS = [
  {
    number: '01',
    title: 'Payroll Processing & CTC Architecture',
    category: 'HR & Payroll',
    description:
      'Timely, accurate payroll is essential to employee trust. We support end-to-end payroll processing with statutory compliance built in, ensuring your employees are paid correctly and on time, every cycle.',
    scope: [
      'Monthly attendance, OT, and salary ledger calculation',
      'Salary structuring & tax optimization (CTC breakdown)',
      'Statutory deductions calculation (PF, ESI, PT, TDS)',
      'Automated payslip generation & executive reports',
    ],
  },
  {
    number: '02',
    title: 'PF & ESI Social Security Compliance',
    category: 'Social Security',
    description:
      'Comprehensive administration of statutory social security benefits, ensuring seamless establishment registration, timely monthly remittances, and zero penalty default record.',
    scope: [
      'EPFO & ESIC establishment code registrations',
      'Monthly ECR file preparation & direct portal filing',
      'UAN generation, KYC seeding, & Aadhaar linking',
      'Employee statutory claim guidance (Form 19, 10C, 31)',
    ],
  },
  {
    number: '03',
    title: 'GST Registration & Return Filing',
    category: 'Tax & Finance',
    description:
      'End-to-end Goods and Services Tax compliance for commercial establishments, from initial state registration to accurate monthly GSTR-1 and GSTR-3B filings without ITC leakage.',
    scope: [
      'New GST registration & multi-state amendment',
      'Monthly GSTR-1 outward supply & GSTR-3B filings',
      'Vendor ITC reconciliation & 2B ledger audits',
      'Annual GSTR-9 return filing & audit support',
    ],
  },
  {
    number: '04',
    title: 'Labour Act Compliance & Statutory Registers',
    category: 'Workplace Safety & Licencing',
    description:
      'Thorough management of statutory registers, licences, and filings across central and state labour legislations, completely eliminating penalty exposures and notice risks.',
    scope: [
      'Maintenance of 16+ mandatory statutory registers',
      'Contract Labour (Regulation & Abolition) Act compliance',
      'Minimum Wages & Payment of Wages adherence',
      'Maternity Benefit & Payment of Gratuity compliance',
    ],
  },
  {
    number: '05',
    title: 'ISO 9001, ISMS 27001 & CMMI Advisory',
    category: 'Certifications',
    description:
      'Internationally recognized quality and information security management systems implementation, preparing your enterprise for global tier-1 enterprise and Fortune 500 client audits.',
    scope: [
      'ISO 9001:2015 Quality Management System (QMS)',
      'ISO 27001 Information Security Management (ISMS)',
      'CMMI process maturity gap assessment & roadmap',
      'Pre-audit documentation, internal audit & lead auditor support',
    ],
  },
  {
    number: '06',
    title: 'POSH Training & ICC Committee Compliance',
    category: 'Workplace Safety & Licencing',
    description:
      'Complete compliance under the Prevention of Sexual Harassment (POSH) Act 2013, creating an inclusive, legally compliant, and respectful workplace culture for teams of 10+ staff.',
    scope: [
      'Internal Complaints Committee (ICC) legal constitution',
      'Appointment of mandatory External Member & advisor',
      'Interactive employee sensitisation workshops',
      'Statutory Annual POSH Report filing with District Officer',
    ],
  },
  {
    number: '07',
    title: 'Shops & Establishments & MSME / Udyam',
    category: 'Workplace Safety & Licencing',
    description:
      'Turnkey commercial entity registration under state Shops and Commercial Establishments legislation, along with central Udyam / MSME priority status.',
    scope: [
      'State Shops & Commercial Establishments license',
      'Udyam / MSME registration for priority credit benefits',
      'Periodic license renewals & statutory notice response',
      'Mandatory display certificates & hours compliance',
    ],
  },
  {
    number: '08',
    title: 'Digital Signature Certificates (Class 3 DSC)',
    category: 'Tax & Finance',
    description:
      'Procurement, verification, and issuance of Class 3 Digital Signature Certificates for company directors, authorized signatories, MCA filings, and tax submissions.',
    scope: [
      'Class 3 DSC with secure USB cryptographic token',
      'Director / Signatory paperless KYC verification',
      'MCA, EPFO, ESIC & GST portal DSC mapping',
      'Timely renewal alerts before statutory token expiry',
    ],
  },
  {
    number: '09',
    title: 'HR Documentation & Policy Architecture',
    category: 'HR & Payroll',
    description:
      'Legally vetted, culture-centric human resource policies, employment contracts, non-disclosure agreements, and employee handbooks tailored for high-growth enterprises.',
    scope: [
      'Custom Employee Handbook & Code of Conduct',
      'Employment contracts, offer letters, & IP/NDA deeds',
      'Performance Appraisal & Promotion governance framework',
      'Separation, Full & Final (F&F) settlement protocols',
    ],
  },
  {
    number: '10',
    title: 'Recruitment & Structured Onboarding',
    category: 'HR & Payroll',
    description:
      'Targeted talent acquisition and structured employee onboarding that aligns prospective candidates with operational culture, statutory background checks, and KYC verification.',
    scope: [
      'Role profiling & targeted talent pipeline sourcing',
      'Candidate technical & cultural competency screening',
      'Structured day-one employee onboarding kit',
      'Pre-employment KYC & background verification',
    ],
  },
  {
    number: '11',
    title: 'Executive HR Consulting & Risk Advisory',
    category: 'HR & Payroll',
    description:
      'Strategic executive counsel for leadership teams navigating rapid headcount expansion, restructuring, M&A due diligence, or multi-state statutory transitions.',
    scope: [
      'Workforce compensation & benefits benchmarking',
      'Forensic statutory risk exposure diagnostic review',
      'HR tech stack & portal integration advisory',
      'Direct consultation with Managing Partner',
    ],
  },
]

export function Solutions({ whatsappUrl }: SolutionsProps) {
  const [activeCategory, setActiveCategory] = useState('All Solutions')

  const filtered =
    activeCategory === 'All Solutions'
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => s.category === activeCategory)

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[#090d15] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="luxury-badge mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>02 / The Institutional Solutions Directory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Eleven Turnkey Solutions.{' '}
            <span className="gradient-text-emerald">Clear In-Scope Execution.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore our end-to-end statutory services. Every engagement comes with clear deliverables, dedicated account leadership, and our zero-penalty filing commitment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)] scale-105'
                  : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((sol) => (
              <motion.div
                layout
                key={sol.number}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group rounded-3xl bg-[#0c1017]/90 border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#0f1522] transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      Solution {sol.number}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {sol.scope.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquiry Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">PAN-India Execution</span>
                  <a
                    href={`https://wa.me/917010413915?text=${encodeURIComponent(
                      `Hello Megovista, I would like to inquire about Solution ${sol.number}: ${sol.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
