'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { companyContact } from '@/src/content/megovista'

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <aside aria-label="Quick actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Sticky WhatsApp Contact Button */}
      <a
        href={companyContact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="font-display font-semibold text-xs tracking-wide">
          WhatsApp
        </span>
      </a>

      {/* Sticky Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`pointer-events-auto w-11 h-11 rounded-full bg-[var(--bg-surface)] text-[var(--text-main)] border border-[var(--border-subtle)] shadow-xl hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </aside>
  )
}

