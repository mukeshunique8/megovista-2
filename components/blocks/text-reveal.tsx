'use client'

import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  splitBy?: 'word' | 'char'
  animateFrom?: 'bottom' | 'top' | 'blur'
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  duration = 0.7,
  stagger = 0.06,
  splitBy = 'word',
  animateFrom = 'bottom',
}: TextRevealProps) {
  const units = splitBy === 'word' ? text.split(' ') : text.split('')

  const getInitial = () => {
    if (animateFrom === 'blur') return { opacity: 0, filter: 'blur(10px)', y: 20 }
    if (animateFrom === 'top') return { opacity: 0, y: -30 }
    return { opacity: 0, y: 50 }
  }

  const getAnimate = () => {
    if (animateFrom === 'blur') return { opacity: 1, filter: 'blur(0px)', y: 0 }
    return { opacity: 1, y: 0 }
  }

  return (
    <span
      className={className}
      style={{ display: 'inline', overflow: 'hidden' }}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={getInitial()}
            whileInView={getAnimate()}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {unit}
            {splitBy === 'word' && i < units.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

