'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus, ShieldCheck, ArrowRight } from 'lucide-react'

const COMPARISON_ROWS = [
  {
    feature: 'Statutory Filing Accuracy Guarantee',
    megovista: '100% Pre-deadline with Zero Penalty Record',
    traditional: 'Manual; frequent late fees & interest',
    inhouse: 'High dependency on single person; leave risk',
  },
  {
    feature: 'Turnkey POSH Act 2013 Compliance',
    megovista: 'Full ICC Constitution + External Member Seat',
    traditional: 'Not supported; requires separate lawyer',
    inhouse: 'Often overlooked or non-compliant',
  },
  {
    feature: 'EPFO & ESIC KYC / UAN Cleansing',
    megovista: 'End-to-End Mass Seeding & Claim Support',
    traditional: 'Basic filing only; employees left stranded',
    inhouse: 'Manual back-and-forth with portals',
  },
  {
    feature: 'Institutional Certifications (ISO / CMMI)',
    megovista: 'Integrated Advisory & Audit Preparation',
    traditional: 'Not supported',
    inhouse: 'High cost external consultants required',
  },
  {
    feature: 'Notice & Inspection Defense Support',
    megovista: 'Direct Legal & Statutory Department Response',
    traditional: 'Additional billing per notice',
    inhouse: 'Requires external labour advocate',
  },
  {
    feature: 'Single Point of Executive Accountability',
    megovista: 'Yes (Direct Managing Partner & Lead Manager)',
    traditional: 'Fragmented across multiple uncoordinated vendors',
    inhouse: 'Single HR generalist overwhelmed by routine tasks',
  },
  {
    feature: 'Cost Efficiency for 20 - 500 Headcount',
    megovista: 'Predictable institutional flat monthly retainer',
    traditional: 'Unpredictable fees, penalties & compounding charges',
    inhouse: '₹6L - ₹18L/yr internal team salary + software overhead',
  },
]

export function Comparison() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#090d15] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="luxury-badge mb-4">
            <span>Executive Decision Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How Megovista Compares to{' '}
            <span className="gradient-text-emerald">Traditional Alternatives</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Why leading Indian enterprises transition away from fragmented local brokers and overwhelmed in-house teams.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#0c1017]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-sm font-mono font-bold uppercase tracking-wider text-slate-400 w-1/3">
                  Capability / Governance
                </th>
                <th className="p-6 text-sm font-bold text-white bg-emerald-500/10 border-x border-emerald-500/20 w-1/3">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-base text-white">Megovista OS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 uppercase">
                      Recommended
                    </span>
                  </div>
                </th>
                <th className="p-6 text-sm font-semibold text-slate-400 w-1/6">
                  Traditional CAs / Freelance Brokers
                </th>
                <th className="p-6 text-sm font-semibold text-slate-400 w-1/6">
                  In-House Generalist
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="p-6 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="p-6 bg-emerald-500/[0.04] border-x border-emerald-500/20 font-bold text-emerald-300">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{row.megovista}</span>
                    </div>
                  </td>
                  <td className="p-6 text-slate-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-6 text-slate-400">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{row.inhouse}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA below table */}
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary-emerald !text-xs !py-3 !px-8 group">
            <span>Upgrade to Megovista Institutional Operating Model</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

