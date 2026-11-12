'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!inView || started) return
    setStarted(true)
    const node = ref.current
    if (!node) return

    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        node.textContent = prefix + value.toFixed(decimals) + suffix
      },
    })

    return () => controls.stop()
  }, [inView, from, to, duration, prefix, suffix, decimals, started])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {from}
      {suffix}
    </span>
  )
}

