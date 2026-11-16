'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CountUpProps {
  to: number
  from?: number
  direction?: 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  startWhen?: boolean
  separator?: string
  prefix?: string
  suffix?: string
}

export function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  prefix = '',
  suffix = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? to : from)
  const [displayValue, setDisplayValue] = useState<string>(
    `${prefix}${from.toLocaleString()}${suffix}`
  )

  const damping = 20 + 40 * (1 / duration)
  const stiffness = 100 * (1 / duration)

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  })

  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = `${prefix}${from.toLocaleString()}${suffix}`
    }
  }, [from, prefix, suffix])

  useEffect(() => {
    if (isInView && startWhen) {
      const timeout = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to)
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const formatted = Math.round(latest).toLocaleString()
      const finalStr = separator
        ? formatted.replace(/,/g, separator)
        : formatted
      setDisplayValue(`${prefix}${finalStr}${suffix}`)
    })

    return () => unsubscribe()
  }, [springValue, separator, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}

export default CountUp

