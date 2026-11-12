'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'

interface OperationsProps {
  whatsappUrl: string
}

export function Operations({ whatsappUrl }: OperationsProps) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])

  return (
    <section id="operations" className="split-section dark-section" ref={sectionRef}>
      {/* Left — media column */}
      <div className="split-media-col" style={{ position: 'relative', overflow: 'visible' }}>
        <div style={{ overflow: 'hidden', borderRadius: 'inherit', height: '100%' }}>
          <motion.img
            src="/images/operations-dashboard.jpg"
            alt="Operations dashboard"
            className="full-bleed-media"
            style={{ y: imgY, scale: imgScale }}
          />
        </div>

        {/* Floating metric card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            bottom: 24,
            right: -20,
            zIndex: 10,
            background: 'rgba(7,11,22,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(199,255,38,0.25)',
            borderRadius: 16,
            padding: '16px 20px',
            minWidth: 180,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--primary)',
                display: 'inline-block',
                boxShadow: '0 0 8px var(--primary)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono-code)',
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--primary)',
                fontWeight: 700,
              }}
            >
              Zero Penalties
            </span>
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: 'var(--text-light)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Since Inception
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
            PF · ESI · GST · Labour
          </div>
        </motion.div>
      </div>

      {/* Right — content column */}
      <div className="split-content-col">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow dark-section">04 / Built for better operations</p>
          <h2 className="section-title">
            Clarity for every{' '}
            <span>compliance moment.</span>
          </h2>
          <p className="section-desc">
            From payroll cycles to statutory filings, our operations infrastructure keeps every
            compliance obligation on track — automated, accurate, and audit-ready at all times.
          </p>

          {/* Operation points */}
          <div className="operation-points">
            {[
              {
                n: '01',
                title: 'Automated Filing Calendars',
                desc: 'Never miss a deadline. Our compliance calendar tracks PF, ESI, GST, TDS, and labour filings with automated reminders and built-in buffers.',
              },
              {
                n: '02',
                title: 'Real-Time Compliance Dashboard',
                desc: 'Your personalised dashboard shows filing status, pending actions, and completed submissions — giving you complete visibility at a glance.',
              },
              {
                n: '03',
                title: 'Dedicated Compliance Manager',
                desc: 'A named compliance professional manages your account, responds to queries, and liaises directly with statutory authorities on your behalf.',
              },
            ].map((point, i) => (
              <motion.div
                key={point.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="operation-point"
              >
                <span className="operation-point-number">{point.n}</span>
                <div>
                  <h4 className="operation-point-title">{point.title}</h4>
                  <p className="operation-point-desc">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="cta-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare style={{ width: 18, height: 18 }} />
              Chat with Us
            </a>
            <a href="#contact" className="btn btn-outline-dark">
              Request a Demo
              <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
