'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  className?: string
  disabledAnimation?: boolean
  disabledHover?: boolean
  children: ReactNode
}

export const MotionWrapperFlash: React.FC<Props> = (props) => {
  const {
    disabledAnimation = true,
    disabledHover = false,
    children,
    className,
  } = props

  if (disabledAnimation) {
    return children
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}

      whileHover={
        !disabledHover
          ? {
              scale: 1.1,
              rotate: 10,
              transition: { duration: 0.3 },
            }
          : {}
      }
      transition={{
        duration: 0.6,
        ease: [0.2, 0.8, 0.6, 1],
        scale: {
          type: 'spring',
          stiffness: 260,
        },
        rotate: {
          type: 'spring',
          stiffness: 150,
        },
        color: {
          duration: 0.3,
        },
      }}
    >
      {children}
    </motion.span>
  )
}
