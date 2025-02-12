'use client'

import type { Variants } from 'framer-motion'
import { motion, useInView } from 'framer-motion'
import { memo, useRef } from 'react'

interface MotionWrapperFadeInProps {
  children: React.ReactNode
  className?: string
  noVertical?: boolean
  delay?: number
  viewTriggerOffset?: boolean
}

const fadeUpVariants: Variants = {
  initial: (noVertical: boolean) => ({
    opacity: 0,
    y: noVertical ? 0 : 24,
  }),
  animate: {
    opacity: 1,
    y: 0,
  },
}

export const MotionWrapperFadeIn = memo(({
  children,
  className,
  noVertical = false,
  delay = 0,
  viewTriggerOffset = false,
}: MotionWrapperFadeInProps) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: viewTriggerOffset ? '-100px' : '0px',
  })

  return (
    <motion.div
      animate={inView ? 'animate' : 'initial'}
      className={className}
      initial="initial"
      ref={ref}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      variants={fadeUpVariants}
      custom={noVertical}
    >
      {children}
    </motion.div>
  )
})
