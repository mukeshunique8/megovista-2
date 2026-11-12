'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { HoverLift } from '@/src/components/motion'

type TabType = 'health' | 'filings' | 'certs'

export function HeroCockpit() {
  const [activeTab, setActiveTab] = useState<TabType>('health')

  return (
    <div className="relative w-full max-w-[500px] select-none">
      {/* Ambient background glow & offset vermilion card layer */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF5A36]/30 via-[#FFB800]/20 to-[#B9A8FF]/20 rounded-[36px] sm:rounded-[44px] blur-xl opacity-70 pointer-events-none" />

      {/* Main Cockpit Container */}
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#141224] dark:bg-[#141224] border-2 border-[#FF5A36]/40 shadow-2xl p-6 sm:p-7 text-[#F4EFE6] overflow-hidden">
        {/* Top Header Row: Live Engine Status + Tab Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB800] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB800]" />
            </span>
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[#FFB800]">
              STATUTORY ENGINE
            </span>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('health')}
              className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase transition-all ${
                activeTab === 'health'
                  ? 'bg-[#FF5A36] text-[#0C0B14] shadow-sm'
                  : 'text-[#B3AFC9] hover:text-white'
              }`}
            >
              Health
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('filings')}
              className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase transition-all ${
                activeTab === 'filings'
                  ? 'bg-[#FF5A36] text-[#0C0B14] shadow-sm'
                  : 'text-[#B3AFC9] hover:text-white'
              }`}
            >
              Filings
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('certs')}
              className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase transition-all ${
                activeTab === 'certs'
                  ? 'bg-[#FF5A36] text-[#0C0B14] shadow-sm'
                  : 'text-[#B3AFC9] hover:text-white'
              }`}
            >
              Certs
            </button>
          </div>
        </div>

        {/* Tab 1: Live Health Score & Core Telemetry Modules */}
        <AnimatePresence initial={false} mode="wait">
          {activeTab === 'health' && (
            <motion.div
              key="health"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              {/* Central Gauge & Metrics Bar */}
              <div className="rounded-[24px] bg-gradient-to-r from-[#1C1A30] to-[#252244] p-5 border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Circular Score Gauge */}
                  <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255, 184, 0, 0.15)"
                        strokeWidth="3.5"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke="#FFB800"
                        strokeWidth="3.5"
                        strokeDasharray="99.8, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-xs text-[#FFB800]">
                      99.8%
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#B3AFC9]">
                      STATUTORY HEALTH
                    </div>
                    <div className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                      Zero Penalties Active
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#FFB800] font-medium mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>EPFO, ESIC &amp; GST Validated</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-serif italic text-3xl font-normal text-[#FF5A36] leading-none block">
                    100%
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#B3AFC9]">
                    On-Time ECR
                  </span>
                </div>
              </div>

              {/* 4 Interactive Live Telemetry Modules in a 2x2 grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Module 1: PF & ESI */}
                <HoverLift>
                  <div className="p-3.5 rounded-[20px] bg-[#1C1A30]/80 border border-white/5 hover:border-[#FFB800]/40 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#FFB800] uppercase">
                        PF &amp; ESIC
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                    </div>
                    <div className="font-display font-bold text-sm leading-snug mb-0.5 text-white">
                      482 UANs Active
                    </div>
                    <div className="font-display text-[11px] text-[#B3AFC9]">
                      ECR challans filed
                    </div>
                  </div>
                </HoverLift>

                {/* Module 2: GST Returns */}
                <HoverLift>
                  <div className="p-3.5 rounded-[20px] bg-[#1C1A30]/80 border border-white/5 hover:border-[#FF5A36]/40 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#FF5A36] uppercase">
                        GST RETURN
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
                    </div>
                    <div className="font-display font-bold text-sm leading-snug mb-0.5 text-white">
                      GSTR-3B Reconciled
                    </div>
                    <div className="font-display text-[11px] text-[#B3AFC9]">
                      2B ITC 100% Matched
                    </div>
                  </div>
                </HoverLift>

                {/* Module 3: Payroll Ledger */}
                <HoverLift>
                  <div className="p-3.5 rounded-[20px] bg-[#1C1A30]/80 border border-white/5 hover:border-[#B9A8FF]/40 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#B9A8FF] uppercase">
                        PAYROLL DISBURSED
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9A8FF]" />
                    </div>
                    <div className="font-display font-bold text-sm leading-snug mb-0.5 text-white">
                      1st of Every Month
                    </div>
                    <div className="font-display text-[11px] text-[#B3AFC9]">
                      TDS &amp; Payslips Sent
                    </div>
                  </div>
                </HoverLift>

                {/* Module 4: Audit & Certifications */}
                <HoverLift>
                  <div className="p-3.5 rounded-[20px] bg-[#1C1A30]/80 border border-white/5 hover:border-[#FFB800]/40 transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#FFB800] uppercase">
                        GOVERNANCE
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                    </div>
                    <div className="font-display font-bold text-sm leading-snug mb-0.5 text-white">
                      ISO 9001 Certified
                    </div>
                    <div className="font-display text-[11px] text-[#B3AFC9]">
                      ISMS 27001 + ICC
                    </div>
                  </div>
                </HoverLift>
              </div>

              {/* Bottom Live Regulatory Strip */}
              <div className="p-2.5 rounded-full bg-black/40 border border-white/10 flex items-center justify-between px-4 text-[11px]">
                <span className="font-mono text-[#FFB800] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>NEXT ECR FILING</span>
                </span>
                <span className="font-display font-semibold text-white">
                  Before 15th · Reconciled
                </span>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Filing Calendar View */}
          {activeTab === 'filings' && (
            <motion.div
              key="filings"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-3"
            >
              <div className="p-4 rounded-[20px] bg-[#1C1A30] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FFB800] text-[#0C0B14] flex items-center justify-center shrink-0 font-bold text-xs">
                  15th
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-sm text-white">
                    EPFO &amp; ESIC Monthly Contribution
                  </div>
                  <div className="font-display text-xs text-[#B3AFC9]">
                    ECR file generated, validated with KYC Aadhaar UAN ledger.
                  </div>
                  <span className="inline-block mt-2 font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#FFB800]/20 text-[#FFB800]">
                    Auto-Filed · Guaranteed Zero Penalty
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-[20px] bg-[#1C1A30] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FF5A36] text-[#0C0B14] flex items-center justify-center shrink-0 font-bold text-xs">
                  20th
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-sm text-white">
                    GSTR-3B Monthly Return Filing
                  </div>
                  <div className="font-display text-xs text-[#B3AFC9]">
                    Complete sales/purchase ledger matching and 2B ITC verification.
                  </div>
                  <span className="inline-block mt-2 font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#FF5A36]/20 text-[#FF5A36]">
                    Reconciled &amp; Ready
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Certifications & Governance */}
          {activeTab === 'certs' && (
            <motion.div
              key="certs"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-3"
            >
              <div className="p-3.5 rounded-[20px] bg-[#1C1A30] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white">ISO 9001 (Quality Management)</div>
                  <div className="font-display text-xs text-[#B3AFC9]">
                    Process audit &amp; accredited seal
                  </div>
                </div>
                <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FFB800] text-[#0C0B14]">
                  ACTIVE
                </span>
              </div>

              <div className="p-3.5 rounded-[20px] bg-[#1C1A30] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white">ISO 27001 (ISMS Security)</div>
                  <div className="font-display text-xs text-[#B3AFC9]">
                    Enterprise data safety verified
                  </div>
                </div>
                <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#B9A8FF] text-[#0C0B14]">
                  TIER-1
                </span>
              </div>

              <div className="p-3.5 rounded-[20px] bg-[#1C1A30] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white">POSH Act (ICC Governance)</div>
                  <div className="font-display text-xs text-[#B3AFC9]">
                    Committee constituted &amp; Annual Report
                  </div>
                </div>
                <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FF5A36] text-[#0C0B14]">
                  COMPLIANT
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Pill Badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -left-4 z-20 px-4 py-2 rounded-full bg-[#0C0B14] text-[#FFB800] border border-white/15 shadow-2xl font-mono text-[11px] font-bold flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
        <span>ZERO PENALTIES GUARANTEED</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -top-3 -right-3 z-20 px-3.5 py-1.5 rounded-full bg-[#FF5A36] text-[#0C0B14] shadow-xl font-mono text-[10px] font-bold"
      >
        TIER-1 AUDIT READY
      </motion.div>
    </div>
  )
}
