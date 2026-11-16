'use client'

import React from 'react'

interface MarqueeProps {
  items: readonly string[] | string[]
  speed?: number // seconds per cycle
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  items = [],
  speed = 28,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  // Duplicate for seamless 50% translation loop
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3 ${
        pauseOnHover ? 'group' : ''
      } ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={`flex w-max items-center gap-6 animate-marquee ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
        style={
          {
            '--marquee-duration': `${speed}s`,
            animationDirection: direction === 'left' ? 'normal' : 'reverse',
          } as React.CSSProperties
        }
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 shrink-0 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 shrink-0" />
            <span className="text-xs sm:text-sm font-mono tracking-wider text-[var(--text-main)] uppercase whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
