'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const CUBIC_EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1]

// 1. Reveal: graceful entrance that never hides content if JS or observer delays
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: CUBIC_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 2. WordRise: headline lines with upward slide
export function WordRise({
  lines,
  className = '',
}: {
  lines: React.ReactNode[]
  className?: string
}) {
  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden block leading-[0.95]">
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.05 + idx * 0.1,
              ease: CUBIC_EASE,
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

// 3. Marquee: duplicate the list once; translate 0 → -50% linear infinite
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  pauseOnHover = true,
  className = '',
}: {
  children: React.ReactNode
  duration?: number
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
}) {
  return (
    <div className={`overflow-hidden flex select-none ${className}`}>
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
        className="flex shrink-0 items-center gap-6"
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

// 4. Pulse: ring scales 1 → 2.4, opacity 0.7 → 0, 2.4s ease-out infinite
export function PulseRing({
  size = 140,
  color = 'var(--primary)',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        position: 'absolute',
      }}
      animate={{
        scale: [1, 2.2],
        opacity: [0.7, 0],
      }}
      transition={{
        duration: 2.4,
        ease: 'easeOut',
        repeat: Infinity,
      }}
      className={`pointer-events-none ${className}`}
    />
  )
}

// 5. Blob: border-radius morphs
export function MorphingBlob({
  color = 'var(--primary)',
  className = '',
  style,
}: {
  color?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      style={{
        backgroundColor: color,
        ...style,
      }}
      animate={{
        borderRadius: [
          '42% 58% 63% 37% / 45% 40% 60% 55%',
          '58% 42% 37% 63% / 55% 60% 40% 45%',
          '42% 58% 63% 37% / 45% 40% 60% 55%',
        ],
      }}
      transition={{
        duration: 12,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className={className}
    />
  )
}

// 6. Float: smooth floating loop
export function Float({
  children,
  duration = 6,
  delay = 0,
  y = -16,
  className = '',
}: {
  children: React.ReactNode
  duration?: number
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      animate={{ y: [0, y, 0] }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 7. HoverLift: on hover y: -10, rotate: -1deg
export function HoverLift({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: -0.5 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 8. SpinBadge: SVG textPath on a circle, rotates 24s linear infinite
export function SpinBadge({
  text = 'ZERO PENALTIES · 100% ACCURACY · ON-TIME FILING ·',
  size = 140,
  textColor = '#F4EFE6',
  className = '',
}: {
  text?: string
  size?: number
  textColor?: string
  className?: string
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center shrink-0 ${className}`}
    >
      {/* Center solid primary dot */}
      <div className="w-3.5 h-3.5 rounded-full bg-primary z-10 shadow-sm" />

      {/* Rotating circular text */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full overflow-visible"
      >
        <defs>
          <path
            id="spinCircle"
            d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>
        <text
          fill={textColor}
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="0.14em"
          fontFamily="var(--font-mono)"
        >
          <textPath href="#spinCircle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>
    </div>
  )
}
