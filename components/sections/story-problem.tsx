'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, ShieldCheck, XCircle, CheckCircle, ArrowRight } from 'lucide-react'

export function StoryProblem() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07090e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="luxury-badge mb-4">
            <span>The Reality of Indian Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why 84% of growing companies face{' '}
            <span className="text-rose-400">statutory penalties</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            India has over 40+ central and state labour legislations. Managing compliance with disconnected local vendors creates unseen blind spots until a regulatory notice arrives.
          </p>
        </div>

        {/* Contrast Grid: Fragmented Chaos vs Megovista Operating System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: The Old Fragile Model */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-rose-950/[0.1] border border-rose-500/20 p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>The Traditional Fragmented Model</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Disconnected vendors with zero single accountability.
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                A local accountant handles GST, a freelance consultant handles PF filings, HR calculates salary on spreadsheets, and no one monitors POSH or Labour Act mandatory registers.
              </p>

              <div className="space-y-3.5">
                {[
                  { title: 'Delayed ECR Filings', desc: 'Section 14B penalties & 7Q interest levied at 12% p.a.' },
                  { title: 'Unseeded UANs & KYC Failures', desc: 'Blocked employee claims leading to attrition and disputes' },
                  { title: 'Omitted POSH Committee', desc: 'Statutory non-compliance fines up to ₹50,000 & license cancellation' },
                  { title: 'Vendor Ledger Mismatches', desc: 'Blocked Input Tax Credit (ITC) locking critical working capital' },
                  { title: 'Director Personal Liability', desc: 'Summons and notices served directly to enterprise leadership' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs p-3 rounded-xl bg-white/[0.02] border border-rose-500/10">
                    <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-rose-200 block">{item.title}</span>
                      <span className="text-slate-400 text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-500/20 text-xs text-rose-300 font-mono flex items-center justify-between">
              <span>Average Risk: ₹2L - ₹25L in penal damages</span>
              <span className="text-rose-400 font-bold">High Exposure</span>
            </div>
          </motion.div>

          {/* Right: The Megovista Unified Operating System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-emerald-950/[0.12] border border-emerald-500/30 p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.08)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The Megovista Integrated Model</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Single institutional back office with guaranteed accuracy.
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                All 11 statutory and HR pillars managed through one synchronized operations calendar. Zero late filings, zero penalty record, and complete board-level transparency.
              </p>

              <div className="space-y-3.5">
                {[
                  { title: '100% Pre-deadline ECR Remittance', desc: 'Autonomous ECR preparation and portal filing before the 15th' },
                  { title: '100% Clean KYC & Active UAN Mapping', desc: 'Seamless day-one onboarding and hassle-free claim approvals' },
                  { title: 'Turnkey POSH Governance', desc: 'Mandatory ICC constitution, external member seat, & annual report' },
                  { title: 'Reconciled GSTN Portals', desc: 'Zero ITC leakage with synchronized monthly GSTR-1 & 3B filings' },
                  { title: 'Institutional Certification Pathway', desc: 'ISO 9001, ISMS 27001, and CMMI audit readiness built in' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs p-3 rounded-xl bg-white/[0.03] border border-emerald-500/20">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">{item.title}</span>
                      <span className="text-slate-400 text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20 text-xs text-emerald-400 font-mono flex items-center justify-between">
              <span>Historical Track Record: Zero Penalties</span>
              <a href="#contact" className="text-emerald-300 hover:text-white font-bold flex items-center gap-1">
                Audit Your Exposure <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

