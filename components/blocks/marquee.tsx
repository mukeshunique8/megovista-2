'use client'

import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

function MarqueeTrack({ items, speed = 40, direction = 'left', className = '' }: MarqueeProps) {
  const baseX = useMotionValue(0)
  const time = useRef(0)

  useAnimationFrame((t, delta) => {
    time.current = t
    const moveBy = direction === 'left' ? -(delta / 1000) * speed : (delta / 1000) * speed
    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)

  const doubled = [...items, ...items]

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        style={{ x, display: 'flex', gap: '14px', width: 'max-content' }}
        className={className}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-pill">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function InfiniteMarquee({ items, speed, direction, className }: MarqueeProps) {
  return (
    <MarqueeTrack items={items} speed={speed} direction={direction} className={className} />
  )
}

