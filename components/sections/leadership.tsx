'use client'

import { motion } from 'framer-motion'
import { MessageSquare, ArrowRight, ShieldCheck, HeartHandshake, Compass, Sprout } from 'lucide-react'

interface LeadershipProps {
  whatsappUrl: string
}

export function Leadership({ whatsappUrl }: LeadershipProps) {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background radial lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="luxury-badge mb-4">
            <span>04 / Institutional Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built on Integrity.{' '}
            <span className="gradient-text-emerald">Led by Expertise.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Megovista is guided by a commitment to workforce dignity, statutory transparency, and long-term enterprise sustainability.
          </p>
        </div>

        {/* Executive Split Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Executive Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-emerald-500/20 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="rounded-[22px] bg-[#0c1017] overflow-hidden relative aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="/team/team.png"
                  alt="E. Gokulraj - Managing Partner, Megovista HR Solutions"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/30 to-transparent"></div>

                {/* Overlay details */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                      Managing Partner
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">E. Gokulraj</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Senior Advisor — Statutory Operations &amp; Organizational Certifications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision & Core Operating Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Quote Box */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-8 relative">
              <span className="text-5xl font-serif text-emerald-400/20 absolute top-4 left-6 select-none pointer-events-none">
                “
              </span>
              <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed relative z-10 pl-6">
                “Great businesses are built by great people. Connect with purpose, lead with vision, and grow together.”
              </blockquote>
              <div className="mt-4 pl-6 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                — Managing Partner&apos;s Creed
              </div>
            </div>

            {/* Three Institutional Principles */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: HeartHandshake,
                  title: 'People First',
                  desc: 'Putting employee wellbeing, fair statutory deductions, safety nets, and ethical workplace culture at the center of enterprise decisions.',
                },
                {
                  icon: Compass,
                  title: 'Connect with Purpose',
                  desc: 'Bridging the regulatory gap between enterprise leadership, statutory departments, and employees with zero ambiguity.',
                },
                {
                  icon: Sprout,
                  title: 'Grow Together',
                  desc: 'Structuring institutional frameworks that give founders and CFOs the freedom to scale headcounts without legal liabilities.',
                },
              ].map((val, idx) => {
                const Icon = val.icon
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0c1017]/80 border border-white/5 hover:border-emerald-500/20 transition-colors flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{val.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/917010413915?text=Hello%20Mr.%20Gokulraj%2C%20I%20would%20like%20to%20connect%20regarding%20Megovista%20statutory%20compliance%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !text-xs !py-3 !px-6"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Managing Partner Directly</span>
              </a>

              <a href="#contact" className="btn-secondary-glass !text-xs !py-3 !px-6">
                <span>Request Executive Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
