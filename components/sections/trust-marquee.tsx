'use client'

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from 'framer-motion'

interface PortalItem {
  name: string
  abbr: string
  desc: string
}

const portals: PortalItem[] = [
  { name: 'EPFO Portal', abbr: 'EPFO', desc: 'Employee Provident Fund' },
  { name: 'ESIC Portal', abbr: 'ESIC', desc: 'Employee State Insurance' },
  { name: 'GSTN API', abbr: 'GST', desc: 'Goods & Services Tax Network' },
  { name: 'MCA21', abbr: 'MCA', desc: 'Ministry of Corporate Affairs' },
  { name: 'Udyam Portal', abbr: 'MSME', desc: 'MSME / Udyam Registration' },
  { name: 'Shram Suvidha', abbr: 'SS', desc: 'Labour Compliance Portal' },
  { name: 'Income Tax Portal', abbr: 'TDS', desc: 'TDS & Tax Filings' },
  { name: 'PT Department', abbr: 'PT', desc: 'Professional Tax Compliance' },
]

function MarqueeTrack({
  items,
  speed,
}: {
  items: PortalItem[]
  speed: number
}) {
  const baseX = useMotionValue(0)

  useAnimationFrame((_, delta) => {
    baseX.set(baseX.get() - (delta / 1000) * speed)
  })

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)
  const doubled = [...items, ...items]

  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        style={{
          x,
          display: 'flex',
          gap: '16px',
          width: 'max-content',
          padding: '8px 0',
        }}
      >
        {doubled.map((portal, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 24px',
              border: '1px solid var(--border-dark)',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.02)',
              cursor: 'default',
              flexShrink: 0,
              transition: 'all 0.2s ease',
            }}
          >
            {/* Abbr badge */}
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'rgba(199,255,38,0.1)',
                border: '1px solid rgba(199,255,38,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 9,
                fontWeight: 800,
                fontFamily: 'var(--font-mono-code)',
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                flexShrink: 0,
              }}
            >
              {portal.abbr}
            </span>
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--text-light)',
                  lineHeight: 1.2,
                }}
              >
                {portal.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--text-muted)',
                  marginTop: 2,
                }}
              >
                {portal.desc}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function TrustMarquee() {
  return (
    <section
      style={{
        background: 'var(--bg-dark-soft)',
        padding: '48px 0',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginBottom: '32px',
          padding: '0 clamp(20px, 5vw, 64px)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono-code)',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 8,
          }}
        >
          Integrated with India&apos;s statutory ecosystem
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Directly connected to India&apos;s official compliance and social security portals
        </p>
      </motion.div>

      {/* Marquee track — faded edges via mask */}
      <div style={{ position: 'relative' }}>
        {/* Left fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: 'linear-gradient(to right, var(--bg-dark-soft), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: 'linear-gradient(to left, var(--bg-dark-soft), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* The moving track */}
        <MarqueeTrack items={portals} speed={35} />
      </div>
    </section>
  )
}
