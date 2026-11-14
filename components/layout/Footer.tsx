'use client'

import React from 'react'
import Image from 'next/image'
import { Phone, MessageCircle, ArrowUp, Mail, MapPin } from 'lucide-react'
import { companyContact, NAV_LINKS, ROUTES, footerContent } from '@/src/content/megovista'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="w-full bg-[var(--bg-surface)] text-[var(--text-main)] border-t border-[var(--border-subtle)] pt-16 pb-28 md:pb-16 transition-colors duration-200">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[var(--border-subtle)]">
            {/* Col 1: Brand & Bio (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-start">
              <a href={ROUTES.home} className="flex items-center gap-3 group mb-4">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center p-1.5 shadow-sm">
                  <Image
                    src="/megovista-emblem.png"
                    alt="Megovista Emblem"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-xl tracking-tight text-[var(--text-main)] block leading-tight">
                    {companyContact.name}
                  </span>
                  <span className="font-mono text-xs tracking-wider uppercase text-[var(--text-muted)] block">
                    {companyContact.tagline}
                  </span>
                </div>
              </a>
              <p className="font-display text-sm text-[var(--text-muted)] leading-relaxed max-w-sm font-medium mb-6">
                {footerContent.bio}
              </p>
              <div className="font-mono text-xs text-[var(--text-muted)]">
                {footerContent.operatingHoursLabel}: {companyContact.workingHours}
              </div>
            </div>

            {/* Col 2: Navigation Links (3 cols) */}
            <div className="md:col-span-3">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
                {footerContent.navigationHeading}
              </div>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-display text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Direct Contact (4 cols) */}
            <div className="md:col-span-4">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
                {footerContent.inquiriesHeading}
              </div>
              <div className="space-y-3 font-display text-sm font-medium text-[var(--text-muted)]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{companyContact.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href={`tel:${companyContact.phoneRaw}`} className="hover:text-[var(--text-main)] transition-colors">
                    {companyContact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href={`mailto:${companyContact.email}`} className="hover:text-[var(--text-main)] transition-colors">
                    {companyContact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-[var(--text-muted)] text-center sm:text-left">
              © {new Date().getFullYear()} {companyContact.name}. {footerContent.allRightsReserved}
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <span>{footerContent.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
