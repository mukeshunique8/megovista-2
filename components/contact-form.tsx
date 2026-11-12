'use client'

import { useActionState, useRef, useEffect, useState } from 'react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { CheckCircle2, Send, AlertCircle, Sparkles } from 'lucide-react'

const initialState: ContactState = { status: 'idle', message: '' }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div className="rounded-3xl bg-emerald-950/20 border border-emerald-500/40 p-8 sm:p-12 text-center backdrop-blur-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-extrabold text-white mb-2">Advisory Brief Dispatched</h4>
        <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
          {state.message || 'Our senior compliance team has received your brief and will review your statutory structure within 24 business hours.'}
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Lead Partner Assigned</span>
        </div>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-3xl bg-[#0c1017]/95 border border-white/10 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <h3 className="text-2xl font-extrabold text-white tracking-tight">Submit Advisory Brief</h3>
          <p className="text-xs text-slate-400 mt-1">Direct review by senior compliance partners</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Strict NDA Protection</span>
        </div>
      </div>

      {state.status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-3">
          <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Name and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Full Name <span className="text-emerald-400">*</span>
            </label>
            <input
              name="fullName"
              required
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            {state.errors?.fullName && (
              <span className="text-[11px] text-rose-400 mt-1 block">{state.errors.fullName}</span>
            )}
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Company / Entity Name
            </label>
            <input
              name="company"
              placeholder="e.g. Acme Tech Solutions Pvt Ltd"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Phone and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Mobile / WhatsApp Number
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            {state.errors?.phone && (
              <span className="text-[11px] text-rose-400 mt-1 block">{state.errors.phone}</span>
            )}
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Work Email Address <span className="text-emerald-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="rahul@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            {state.errors?.email && (
              <span className="text-[11px] text-rose-400 mt-1 block">{state.errors.email}</span>
            )}
          </div>
        </div>

        {/* Service Category */}
        <div>
          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Primary Area of Inquiry
          </label>
          <select
            name="service"
            className="w-full px-4 py-3 rounded-xl bg-[#080b11] border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          >
            <option value="">Select Compliance Requirement</option>
            <option value="Turnkey HR & Payroll Outsourcing">Turnkey HR &amp; Payroll Outsourcing</option>
            <option value="PF & ESI Social Security Registration / Filings">PF &amp; ESI Social Security Registration / Filings</option>
            <option value="GST Registration & Monthly Return Filing">GST Registration &amp; Monthly Return Filing</option>
            <option value="Labour Act Compliance & Statutory Registers">Labour Act Compliance &amp; Statutory Registers</option>
            <option value="ISO 9001 / ISO 27001 (ISMS) / CMMI Certification">ISO 9001 / ISO 27001 (ISMS) / CMMI Certification</option>
            <option value="POSH Act 2013 Compliance & ICC Setup">POSH Act 2013 Compliance &amp; ICC Setup</option>
            <option value="Diagnostic Statutory Health Audit">Diagnostic Statutory Health Audit</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Brief Requirement / Current Headcount <span className="text-emerald-400">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us your current headcount, existing setup, challenges with notices/filings, or target certification deadlines..."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
          />
          {state.errors?.message && (
            <span className="text-[11px] text-rose-400 mt-1 block">{state.errors.message}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="btn-primary-emerald w-full !py-4 text-base font-bold shadow-[0_0_30px_rgba(16,185,129,0.4)] cursor-pointer mt-4"
        >
          {pending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Submitting to Compliance Desk...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>Submit Statutory Brief</span>
              <Send className="w-4 h-4" />
            </span>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400 mt-3 font-mono">
          Average response time: &lt; 24 business hours • Free initial risk assessment
        </p>
      </div>
    </form>
  )
}
