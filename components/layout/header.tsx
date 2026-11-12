'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { MessageSquare, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react'

interface HeaderProps {
  whatsappUrl: string
}

const NAV_LINKS = [
  { name: 'Pillars', href: '#pillars' },
  { name: 'Calculator', href: '#calculator' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'FAQ', href: '#faq' },
]

export function Header({ whatsappUrl }: HeaderProps) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 20)
    })
  }, [scrollY])

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-[#0c1017]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                : 'bg-[#0c1017]/40 backdrop-blur-md border border-white/5'
            }`}
          >
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center overflow-hidden p-1.5 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/megovista-emblem.png"
                  alt="Megovista Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  Megovista
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-mono font-semibold">
                  Compliance OS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-full">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Zero Penalties Record</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-2 !px-4 !text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="btn-primary-emerald !py-2 !px-4 !text-xs group"
              >
                <span>Book Audit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden p-6 rounded-3xl bg-[#0c1017]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="h-px bg-white/10 my-2"></div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center !py-3"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Managing Partner</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary-emerald w-full justify-center !py-3"
              >
                <span>Start Forensic Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
