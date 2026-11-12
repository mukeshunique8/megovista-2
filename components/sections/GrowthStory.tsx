'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion'
import {
  growthTimelineMilestones as MILESTONES,
  type GrowthTimelineMilestone as Milestone,
} from '@/src/content/megovista'

// Smooth cubic Bezier spline passing precisely through (130,400), (375,310), (620,240), (865,170), (1110,120)
const SVG_PATH =
  'M 50 440 C 75 428, 100 412, 130 400 C 210 370, 295 335, 375 310 C 455 285, 540 260, 620 240 C 700 220, 785 190, 865 170 C 945 150, 1030 132, 1110 120 C 1140 115, 1165 110, 1190 105'

const THRESHOLDS = [0.06, 0.24, 0.44, 0.64, 0.82]

// ── Milestone Dot Component (SVG) ──
function MilestoneDot({
  milestone,
  progress,
  threshold,
}: {
  milestone: Milestone
  progress: MotionValue<number>
  threshold: number
}) {
  const scale = useTransform(progress, [threshold - 0.04, threshold], [0.3, 1])
  const glowOpacity = useTransform(progress, [threshold - 0.02, threshold + 0.04], [0, 0.45])
  const activeDotFill = useTransform(
    progress,
    [threshold - 0.02, threshold],
    ['#9E9A8F', '#FF5A36']
  )

  return (
    <g>
      {/* Outer Pulse Glow */}
      <motion.circle
        cx={milestone.x}
        cy={milestone.y}
        r="22"
        fill="#FF5A36"
        style={{ opacity: glowOpacity }}
      />
      {/* Outer Rim Circle */}
      <motion.circle
        cx={milestone.x}
        cy={milestone.y}
        r="14"
        fill="#F4EFE6"
        className="dark:fill-[#12111D]"
        stroke="#0C0B14"
        strokeWidth="3.5"
        style={{ scale }}
      />
      {/* Inner Active Center Dot */}
      <motion.circle
        cx={milestone.x}
        cy={milestone.y}
        r="5.5"
        style={{ fill: activeDotFill, scale }}
      />
    </g>
  )
}

// ── Milestone Card with Seamless Attached Connector Stem (HTML) ──
function MilestoneCard({
  milestone,
  progress,
  threshold,
}: {
  milestone: Milestone
  progress: MotionValue<number>
  threshold: number
}) {
  const isTop = milestone.placement === 'top'

  // Animate opacity, scale and position when scroll progress reaches milestone threshold
  const opacity = useTransform(progress, [threshold - 0.04, threshold + 0.02], [0, 1])
  const scale = useTransform(progress, [threshold - 0.04, threshold + 0.02], [0.86, 1])
  const y = useTransform(
    progress,
    [threshold - 0.04, threshold + 0.02],
    isTop ? [-20, 0] : [20, 0]
  )
  const stemScaleY = useTransform(progress, [threshold - 0.03, threshold], [0, 1])

  return (
    <div className="relative">
      {/* ── Vertical Connector Stem (Directly attaches Dot to Card) ── */}
      <motion.div
        style={{
          scaleY: stemScaleY,
          transformOrigin: isTop ? 'bottom' : 'top',
        }}
        className={`absolute left-1/2 -translate-x-1/2 ${
          isTop ? 'bottom-0' : 'top-0'
        } w-[2px] h-[34px] border-l-2 border-dashed border-[#0C0B14] dark:border-[#F4EFE6]/70 pointer-events-none`}
      />

      {/* ── Anchor Node at Card Edge ── */}
      <motion.div
        style={{ opacity }}
        className={`absolute left-1/2 -translate-x-1/2 ${
          isTop ? 'bottom-[31px]' : 'top-[31px]'
        } w-2 h-2 rounded-full bg-[#FF5A36] z-30 pointer-events-none shadow-sm`}
      />

      {/* ── Milestone Card Box ── */}
      <motion.div
        style={{
          opacity,
          scale,
          y,
        }}
        className={`absolute left-1/2 -translate-x-1/2 ${
          isTop ? 'bottom-[34px]' : 'top-[34px]'
        } w-[230px]`}
      >
        <div className="p-4 sm:p-5 rounded-[20px] bg-[#0C0B14] dark:bg-[#1A1828] text-[#F4EFE6] shadow-2xl border border-white/10 hover:border-[#FFB800]/50 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] font-bold tracking-wider text-[#FFB800] uppercase">
              {milestone.stage}
            </span>
            <span className="font-mono text-[9px] font-bold text-[#B3AFC9] uppercase px-2 py-0.5 rounded-full bg-white/10">
              {isTop ? 'Step ↑ Above' : 'Step ↓ Below'}
            </span>
          </div>
          <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1 leading-snug">
            {milestone.title}
          </h4>
          <p className="font-display text-[11px] sm:text-xs text-[#D1CEE0] leading-relaxed">
            {milestone.desc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

// ── Milestone Step Badge in Footer Bar ──
function StepIndicator({
  stage,
  progress,
  threshold,
}: {
  stage: string
  progress: MotionValue<number>
  threshold: number
}) {
  const active = useTransform(progress, [threshold - 0.02, threshold], [0.35, 1])
  const color = useTransform(
    progress,
    [threshold - 0.02, threshold],
    ['#7A7690', '#FF5A36']
  )

  return (
    <motion.span
      style={{ opacity: active, color }}
      className="font-mono text-[10px] tracking-wider uppercase font-semibold transition-colors"
    >
      {stage}
    </motion.span>
  )
}

export function GrowthStory() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Pin section while scrolling through a tall 300vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Silky smooth spring for the line scrub and card reveal
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  })

  // Map progress so that the line reaches the 5th milestone by 0.85, leaving comfortable reading buffer
  const lineProgress = useTransform(smoothProgress, [0, 0.85], [0, 1])

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full bg-[#F4EFE6] dark:bg-[#12111D] text-[#0C0B14] dark:text-[#F4EFE6] lg:h-[300vh] transition-colors duration-200"
    >
      {/* ─── DESKTOP PINNED VIEWPORT (STICKY SCROLLYTELLING) ─────────────── */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full flex-col justify-between py-10 px-8 xl:px-14 overflow-hidden">
        {/* Header: Headline at left, intro at right */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#5A5670] dark:text-[#A9A6BE] font-semibold mb-2">
                CHAPTER 01 — THE STORY
              </div>
              <h2 className="font-display font-bold text-[#0C0B14] dark:text-white text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] leading-[1]">
                Every company starts with a{' '}
                <span className="font-serif italic font-normal text-[#FF5A36]">
                  first hire.
                </span>
              </h2>
            </div>
            <div className="col-span-5">
              <p className="font-display text-sm sm:text-base text-[#3B3750] dark:text-[#D1CEE0] leading-relaxed">
                Hire ten, and the law changes. Hire twenty, and it changes again. Megovista stands beside you at every statutory threshold, so growth never outruns compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Center Canvas: Exact 1240x540 Aspect Ratio Coordinate Space */}
        <div className="relative w-full max-w-[1240px] mx-auto aspect-[1240/540] max-h-[520px] select-none my-auto">
          {/* SVG Growth Curve & Connected Milestone Dots */}
          <svg
            viewBox="0 0 1240 540"
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            fill="none"
          >
            {/* Background Base Pale Track */}
            <path
              d={SVG_PATH}
              stroke="#E2DCD1"
              className="dark:stroke-[#2E2B45]"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Scroll-animated Vermilion Progress Line */}
            <motion.path
              d={SVG_PATH}
              stroke="#FF5A36"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ pathLength: lineProgress }}
            />

            {/* 5 Milestone Dots */}
            {MILESTONES.map((m, idx) => (
              <MilestoneDot
                key={idx}
                milestone={m}
                progress={smoothProgress}
                threshold={THRESHOLDS[idx]}
              />
            ))}
          </svg>

          {/* 5 Zig-Zag Cards with Attached Connector Stems (Equidistant & Non-overlapping) */}
          {MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className="absolute z-20 pointer-events-auto"
              style={{
                left: `${(m.x / 1240) * 100}%`,
                top: `${(m.y / 540) * 100}%`,
              }}
            >
              <MilestoneCard
                milestone={m}
                progress={smoothProgress}
                threshold={THRESHOLDS[idx]}
              />
            </div>
          ))}
        </div>

        {/* Bottom Status Bar: Progress Indicator & Milestone Steps */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#7A7690] dark:text-[#A9A6BE] border-t border-[#0C0B14]/10 dark:border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
            <span className="uppercase tracking-wider">Statutory Escalation Timeline • Scroll to Advance</span>
          </div>
          <div className="flex items-center gap-4">
            {MILESTONES.map((m, idx) => (
              <StepIndicator
                key={idx}
                stage={m.stage}
                progress={smoothProgress}
                threshold={THRESHOLDS[idx]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ─── MOBILE VERTICAL TIMELINE FALLBACK ──────────────────────────── */}
      <div className="lg:hidden section-container py-16">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#5A5670] dark:text-[#A9A6BE] font-semibold mb-3">
            CHAPTER 01 — THE STORY
          </div>
          <h2 className="font-display font-bold text-[#0C0B14] dark:text-white text-4xl sm:text-5xl tracking-[-0.04em] leading-[1] mb-4">
            Every company starts with a{' '}
            <span className="font-serif italic font-normal text-[#FF5A36]">
              first hire.
            </span>
          </h2>
          <p className="font-display text-sm sm:text-base text-[#3B3750] dark:text-[#D1CEE0] leading-relaxed">
            Hire ten, and the law changes. Hire twenty, and it changes again. Megovista stands beside you at every statutory threshold, so growth never outruns compliance.
          </p>
        </div>

        <div className="relative pl-8 border-l-2 border-[#FF5A36] space-y-8 my-8">
          {MILESTONES.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative"
            >
              {/* Dot on the spine */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#F4EFE6] dark:bg-[#12111D] border-4 border-[#0C0B14] dark:border-[#F4EFE6]" />

              <div className="p-6 rounded-[22px] bg-[#0C0B14] dark:bg-[#1A1828] text-[#F4EFE6] shadow-md border border-white/10">
                <span className="font-mono text-xs font-bold tracking-wider text-[#FFB800] uppercase block mb-2">
                  {m.stage}
                </span>
                <h4 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                  {m.title}
                </h4>
                <p className="font-display text-sm text-[#D1CEE0] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
