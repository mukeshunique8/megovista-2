'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { NAV_LINKS, ROUTES, companyContact, footerContent } from '@/src/content/megovista'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[var(--bg-primary)]/85 border-b border-[var(--border-subtle)] transition-colors duration-200">
      <div className="section-container py-4 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href={ROUTES.home} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
            <Image
              src="/megovista-emblem.png"
              alt="Megovista Emblem"
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[var(--text-main)] block leading-tight">
              {companyContact.shortName}
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--text-muted)] block">
              HR Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Controls: Theme Toggle & Consultation CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={ROUTES.contact}
            className="px-5 py-2.5 rounded-full bg-[var(--text-main)] text-[var(--bg-primary)] font-display font-semibold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm group"
          >
            <span>{footerContent.consultationButton}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Controls: Theme Toggle & Drawer Trigger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-main)] hover:text-primary transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-6 flex flex-col gap-4 shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-base font-semibold text-[var(--text-main)] hover:text-primary py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <a
                href={ROUTES.contact}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[var(--text-main)] text-[var(--bg-primary)] font-display font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>{footerContent.consultationButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
