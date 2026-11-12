'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, HelpCircle, MessageSquare } from 'lucide-react'

const FAQS = [
  {
    q: 'At what exact headcount does EPFO and ESIC become legally mandatory?',
    a: 'Under the Employees’ Provident Funds and Miscellaneous Provisions Act 1952, EPFO registration is strictly mandatory once an establishment reaches 20 employees (including contract staff in certain categories). Voluntary registration is also permitted below 20. ESIC is mandatory at 10 or 20 employees (depending on state rules) for workers earning up to ₹21,000/month. Megovista manages code procurement, monthly ECR generation, and portal filings.',
  },
  {
    q: 'What is POSH compliance and why are notices being sent to tech startups and SMBs?',
    a: 'The POSH Act 2013 mandates that ANY entity with 10 or more employees must constitute a formal Internal Complaints Committee (ICC) headed by a senior woman employee and including an independent External Member. Failure to constitute the ICC or submit the mandatory statutory Annual Report attracts fines of ₹50,000, repeat compounding, and potential cancellation of trade licences.',
  },
  {
    q: 'What are the consequences of late monthly ECR filing (after the 15th)?',
    a: 'EPFO levies Section 14B penal damages (ranging from 5% to 25% or up to 100% of arrears depending on delay period) along with Section 7Q mandatory interest at 12% per annum. More critically, department recovery officers have the power to freeze commercial bank accounts and issue warrants. Megovista operates on a strict pre-15th protocol with a 100% historical on-time record.',
  },
  {
    q: 'Can Megovista manage workforce compliance across multiple Indian states?',
    a: 'Yes. For companies with offices, retail stores, or remote teams across Delhi, Karnataka, Maharashtra, Tamil Nadu, Telangana, and other states, Megovista establishes state sub-codes for PF/ESI, tracks state-specific Professional Tax (PT), and complies with local Shops and Commercial Establishments rules.',
  },
  {
    q: 'How does ISO 9001 and ISO 27001 (ISMS) help us win Tier-1 and global clients?',
    a: 'Enterprise RFPs (especially from Fortune 500, US/EU, or BFSI clients) require vendor security and process maturity guarantees. ISO 27001 verifies that your data security, employee access policies, and NDAs meet international tier-1 standards. Megovista conducts the full gap analysis, documentation, internal audits, and coordinates the accredited registrar review.',
  },
  {
    q: 'How does Megovista transition our accounts if we currently use a local CA or broker?',
    a: 'We execute a smooth, non-disruptive 10-day handover. Our team performs a forensic audit on day 1 to identify past portal mismatches, reconciles KYC data, updates DSC tokens, and establishes a master operations calendar with your finance/HR team. Your operations never miss a filing date during transition.',
  },
]

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="luxury-badge mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>05 / Common Statutory Queries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked{' '}
            <span className="gradient-text-emerald">Statutory Questions</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Clear answers to the compliance and governance questions most frequently asked by Indian founders, CFOs, and HR directors.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0c1017]/80 border border-white/5 overflow-hidden transition-colors hover:border-white/15"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'text-slate-400'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* WhatsApp prompt */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <p className="text-sm text-slate-300 mb-4">
            Have a specific statutory inquiry regarding your headcount or a notice received?
          </p>
          <a
            href="https://wa.me/917010413915?text=Hello%20Megovista%2C%20I%20have%20a%20specific%20statutory%20compliance%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !text-xs !py-3 !px-6"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Managing Partner Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
