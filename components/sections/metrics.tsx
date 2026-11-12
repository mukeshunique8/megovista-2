'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/blocks/animated-counter'

const metrics = [
  {
    value: 500,
    suffix: '+',
    label: 'Employees Managed',
    sublabel: 'Active workforce under compliance',
  },
  {
    value: 11,
    suffix: '',
    label: 'Services Under One Roof',
    sublabel: 'From payroll to ISO certification',
  },
  {
    value: 0,
    suffix: '',
    label: 'Penalty Defaults',
    sublabel: 'Zero-penalty track record since inception',
    isZero: true,
  },
  {
    value: 100,
    suffix: '%',
    label: 'Filing Accuracy Rate',
    sublabel: 'Across EPFO, ESIC & GST portals',
  },
]

export function Metrics() {
  return (
    <section
      style={{
        background: 'var(--bg-dark)',
        color: 'var(--text-light)',
        padding: 'clamp(72px, 9vw, 112px) clamp(20px, 5vw, 64px)',
        borderTop: '1px solid var(--border-dark)',
      }}
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginBottom: 'clamp(48px, 6vw, 72px)',
          fontFamily: 'var(--font-mono-code)',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--primary)',
        }}
      >
        By the numbers
      </motion.p>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(20px, 4vw, 48px)',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center' }}
          >
            {/* Number */}
            <div
              style={{
                fontSize: 'clamp(48px, 5vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-0.05em',
                lineHeight: 1,
                color: 'var(--primary)',
                marginBottom: 12,
              }}
            >
              {m.isZero ? (
                <span>Zero</span>
              ) : (
                <AnimatedCounter to={m.value} suffix={m.suffix} duration={2} />
              )}
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: 'var(--text-light)',
                marginBottom: 6,
                letterSpacing: '-0.02em',
              }}
            >
              {m.label}
            </div>

            {/* Sublabel */}
            <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {m.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
