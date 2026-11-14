'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import { contactContent, companyContact } from '@/src/content/megovista'

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: contactContent.form.serviceOptions[0],
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="w-full section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-primary mb-2.5"
          >
            {contactContent.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[var(--text-main)] leading-tight mb-3"
          >
            {contactContent.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="font-display text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal"
          >
            {contactContent.subtitle}
          </motion.p>
        </div>

        {/* Split Grid: Left Direct Channels & Map, Right Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Location */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Quick Action WhatsApp Card */}
            <a
              href={companyContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#25D366]/50 text-[var(--text-main)] font-display transition-all hover:shadow-md flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[#25D366] transition-colors">
                    {contactContent.ui.whatsAppCta}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                    {companyContact.phone}
                  </div>
                </div>
              </div>
              <span className="text-sm text-[var(--text-muted)] group-hover:text-[var(--text-main)] group-hover:translate-x-1 transition-all">→</span>
            </a>

            {/* Contact Details Box */}
            <div className="rounded-2xl bg-[var(--bg-surface)] p-5 sm:p-6 border border-[var(--border-subtle)] shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display text-xs font-semibold text-[var(--text-muted)]">
                    {contactContent.ui.headquartersLabel}
                  </div>
                  <div className="font-display text-xs sm:text-sm font-medium text-[var(--text-main)] mt-0.5 leading-snug">
                    {companyContact.address}
                  </div>
                  <a
                    href={companyContact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-medium text-primary hover:underline mt-1"
                  >
                    {contactContent.ui.openInGoogleMaps}
                  </a>
                </div>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-3.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display text-xs font-semibold text-[var(--text-muted)]">
                    {contactContent.ui.directPhoneLabel}
                  </div>
                  <a
                    href={`tel:${companyContact.phoneRaw}`}
                    className="font-display text-xs sm:text-sm font-medium text-[var(--text-main)] hover:text-primary transition-colors mt-0.5 block"
                  >
                    {companyContact.phone}
                  </a>
                </div>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-3.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display text-xs font-semibold text-[var(--text-muted)]">
                    {contactContent.ui.emailInquiriesLabel}
                  </div>
                  <a
                    href={`mailto:${companyContact.email}`}
                    className="font-display text-xs sm:text-sm font-medium text-[var(--text-main)] hover:text-primary transition-colors mt-0.5 block"
                  >
                    {companyContact.email}
                  </a>
                </div>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-3.5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display text-xs font-semibold text-[var(--text-muted)]">
                    {contactContent.ui.operatingHoursLabel}
                  </div>
                  <div className="font-display text-xs sm:text-sm font-medium text-[var(--text-main)] mt-0.5">
                    {companyContact.workingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Google Maps Embed Iframe */}
            <div className="rounded-2xl overflow-hidden border border-[var(--border-subtle)] h-56 w-full shadow-sm bg-[var(--bg-surface)]">
              <iframe
                title="Megovista Chennai Headquarters Map"
                src="https://maps.google.com/maps?q=No.+25/11,+Jamal+Sowcar+Street,+Old+Washermenpet,+Chennai+-+600021&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Clean Interactive Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[var(--bg-surface)] p-6 sm:p-8 border border-[var(--border-subtle)] shadow-sm">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-main)] mb-2">
                  {contactContent.ui.successTitle}
                </h3>
                <p className="font-display text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed mb-6 font-normal">
                  {contactContent.ui.successMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-full border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  {contactContent.ui.resetButton}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-1.5">
                      {contactContent.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-1.5">
                      {contactContent.form.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-1.5">
                      {contactContent.form.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block font-display text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-1.5">
                      {contactContent.form.serviceLabel}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                      {contactContent.form.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / Team Size */}
                <div>
                  <label className="block font-display text-xs sm:text-sm font-semibold text-[var(--text-main)] mb-1.5">
                    {contactContent.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your team headcount or specific compliance concerns..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{contactContent.form.submitLabel}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
