'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  strength = 0.3,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * strength)
      y.set((e.clientY - centerY) * strength)
    }
    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [x, y, strength])

  const Tag = href ? 'a' : 'button'

  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <motion.div style={{ x: springX, y: springY }}>
        {href ? (
          <a href={href} className={className} onClick={onClick}>
            {children}
          </a>
        ) : (
          <button className={className} onClick={onClick}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  )
}

