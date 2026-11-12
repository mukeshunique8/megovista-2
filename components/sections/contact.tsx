'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Building,
  CheckCircle2,
} from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

interface ContactProps {
  whatsappUrl: string
}

export function Contact({ whatsappUrl }: ContactProps) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Guarantee */}
          <div className="lg:col-span-5">
            <div className="luxury-badge mb-4">
              <span>06 / Institutional Advisory Desk</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Protect Your Enterprise.{' '}
              <span className="gradient-text-emerald">Accelerate Your Scale.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              Whether you need a forensic statutory health check, zero-penalty monthly PF/ESI filings, or ISO 27001 accreditation — our leadership team is ready to evaluate your compliance architecture.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-4 mb-8">
              {/* WhatsApp Priority Card */}
              <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Instant Executive Channel
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  WhatsApp Managing Partner Directly
                </h4>
                <p className="text-xs text-slate-300 mb-4">
                  Connect with E. Gokulraj on WhatsApp for expedited statutory reviews and priority quotes.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center !text-xs !py-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp (+91 70104 13915)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 mt-3 text-[11px] text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Average response time: &lt; 15 minutes</span>
                </div>
              </div>

              {/* Direct Telephone */}
              <a
                href="tel:917010413915"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0c1017]/80 border border-white/5 hover:border-emerald-500/30 hover:bg-[#0f1522] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Direct Telephone Advisory
                  </span>
                  <span className="text-sm font-bold text-white font-mono">+91 70104 13915</span>
                </div>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:megovista@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0c1017]/80 border border-white/5 hover:border-emerald-500/30 hover:bg-[#0f1522] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Official Inquiries &amp; RFPs
                  </span>
                  <span className="text-sm font-bold text-white font-mono">megovista@gmail.com</span>
                </div>
              </a>
            </div>

            {/* Institutional Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {[
                'PAN-India Operations',
                'Zero Penalty SLA',
                'Strict Corporate NDA',
                'Senior Partner Direct Lead',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
