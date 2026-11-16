'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from 'lucide-react'
import { contactContent } from '@/src/content/megovista'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: contactContent.form.serviceOptions[0],
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300 border-t border-[var(--border-subtle)]"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-gradient-to-tl from-blue-600/10 via-violet-600/10 to-transparent blur-[120px] rounded-full dark:opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>{contactContent.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] leading-[1.08] text-[var(--text-main)] font-sans-tight">
            {contactContent.title}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed max-w-2xl mx-auto">
            {contactContent.subtitle}
          </p>
        </div>

        {/* Split Layout: Contact Info Card (Left) + Interactive Consultation Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Headquarters Details & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-xl shadow-lg">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 block mb-2">
                {contactContent.ui.headquartersLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[var(--text-main)] font-sans-tight">
                {contactContent.headquarters.city}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                {contactContent.headquarters.address}
              </p>

              <div className="mt-4">
                <a
                  href={contactContent.headquarters.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{contactContent.ui.openInGoogleMaps}</span>
                </a>
              </div>

              {/* Direct Channels List */}
              <div className="mt-8 space-y-4 pt-6 border-t border-[var(--border-subtle)]">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block font-light">
                      {contactContent.ui.directPhoneLabel}
                    </span>
                    <a
                      href={`tel:${contactContent.headquarters.phone}`}
                      className="text-sm font-medium text-[var(--text-main)] hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {contactContent.headquarters.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block font-light">
                      {contactContent.ui.emailInquiriesLabel}
                    </span>
                    <a
                      href={`mailto:${contactContent.headquarters.email}`}
                      className="text-sm font-medium text-[var(--text-main)] hover:text-violet-600 dark:hover:text-violet-400"
                    >
                      {contactContent.headquarters.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 text-[var(--text-muted)] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block font-light">
                      {contactContent.ui.operatingHoursLabel}
                    </span>
                    <span className="text-xs text-[var(--text-main)] font-light">
                      {contactContent.headquarters.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
              <a
                href={contactContent.headquarters.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{contactContent.ui.whatsAppCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: High-End Consultation Request Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-xl shadow-lg">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-5 border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-light tracking-tight text-[var(--text-main)] font-sans-tight">
                    {contactContent.ui.successTitle}
                  </h4>
                  <p className="mt-3 text-sm text-[var(--text-muted)] font-light max-w-md mx-auto leading-relaxed">
                    {contactContent.ui.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2.5 rounded-full text-xs font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-black/5 dark:hover:bg-white/5 text-[var(--text-main)] transition-colors cursor-pointer"
                  >
                    {contactContent.ui.resetButton}
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                        {contactContent.form.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/[0.02] dark:bg-white/[0.03] text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                        placeholder="e.g. Anand Kumar"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                        {contactContent.form.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/[0.02] dark:bg-white/[0.03] text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                        placeholder="anand@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                        {contactContent.form.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/[0.02] dark:bg-white/[0.03] text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                        {contactContent.form.serviceLabel}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/[0.02] dark:bg-white/[0.03] text-sm text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all cursor-pointer"
                      >
                        {contactContent.form.serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[var(--bg-surface)] text-[var(--text-main)]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-main)] mb-1.5">
                      {contactContent.form.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/[0.02] dark:bg-white/[0.03] text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all resize-none"
                      placeholder="Current team size, existing consultant status, or upcoming statutory deadlines..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-xs sm:text-sm font-medium tracking-wide shadow-md hover:opacity-95 transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{contactContent.form.submitLabel}</span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

