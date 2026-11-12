'use client'

import React from 'react'
import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'
import { companyContact, NAV_LINKS } from '@/src/content/megovista'

export function SiteFooter() {
  return (
    <>
      <footer className="w-full bg-[var(--bg-primary)] text-[var(--text-main)] border-t border-black/10 dark:border-white/10 py-10 pb-28 md:pb-10 transition-colors duration-200">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline with Real Megovista Emblem */}
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#0C0B14] border border-white/10 flex items-center justify-center p-1 shadow-md">
              <Image
                src="/megovista-emblem.png"
                alt="Megovista Emblem"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-display font-bold text-base text-[var(--text-main)] tracking-tight">
                Megovista HR Solutions
              </div>
              <div className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
                {companyContact.tagline}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="font-mono text-xs text-[var(--text-muted)] opacity-75 text-center md:text-right">
            © {new Date().getFullYear()} Megovista HR Solutions. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ─── STICKY MOBILE CALL / WHATSAPP BAR ─────────────────────────── */}
      <div className="fixed bottom-5 left-4 right-4 z-50 md:hidden flex justify-center pointer-events-none">
        <div className="w-full max-w-sm bg-[#0C0B14]/95 backdrop-blur-md border border-white/15 p-1.5 rounded-full shadow-2xl flex items-center gap-2 pointer-events-auto">
          <a
            href={`tel:${companyContact.phoneRaw}`}
            className="flex-1 py-3 px-4 text-center rounded-full text-xs font-bold text-[#F4EFE6] bg-[#0C0B14]/70 hover:bg-[#0C0B14] transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#B9A8FF]" />
            <span>Call</span>
          </a>

          <a
            href={companyContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 text-center rounded-full text-xs font-bold text-[#0C0B14] bg-[#FFB800] hover:bg-[#ffa800] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#0C0B14]" />
            <span>WhatsApp us</span>
          </a>
        </div>
      </div>
    </>
  )
}
