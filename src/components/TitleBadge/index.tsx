'use client'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

interface Props {
  className?: string
  children?: ReactNode
}

export const TitleBadge = ({
  className,
  children = 'NEW',
}: Props) => {
  return (
    <motion.span
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className={clsx(
        'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
        'bg-[length:200%_100%]',
        'ml-[6px] py-[4px] px-[4.5px]',
        'font-semibold text-[11px] rounded-[6px]',
        'text-white',
        'leading-[1]',
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
