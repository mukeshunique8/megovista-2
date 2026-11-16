'use client'

import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface SplitTextProps extends HTMLMotionProps<'span'> {
  text: string
  className?: string
  delay?: number
  stagger?: number
  startDelay?: number
}

/**
 * SplitText - Letter-by-letter spring animation inspired by React Bits
 * Splits string by words and characters to ensure word wrapping stays intact
 */
export function SplitText({
  text,
  className = '',
  stagger = 0.03,
  startDelay = 0.1,
  ...rest
}: SplitTextProps) {
  const words = text.split(' ')

  return (
    <span className={`inline-block ${className}`} {...rest}>
      {words.map((word, wordIndex) => {
        const prevWordsChars = words
          .slice(0, wordIndex)
          .reduce((sum, w) => sum + w.length + 1, 0)

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => {
              const charTotalIndex = prevWordsChars + charIndex
              return (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.55,
                    delay: startDelay + charTotalIndex * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              )
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        )
      })}
    </span>
  )
}

export default SplitText

