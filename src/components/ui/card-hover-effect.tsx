'use client'

import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'


export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'relative rounded-2xl h-full w-full p-4 overflow-hidden',
        'border duration-200',
        'bg-neutral-50 dark:bg-neutral-800',
        'border-neutral-200/[0.5] dark:border-white/[0.1]',
        'group-hover:border-neutral-300/[0.6] dark:group-hover:border-primary/[0.8]',
        className,
      )}
    >
      <div className="relative">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardIcon = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn(
      'flex justify-center items-center',
      'rounded-[6px]',
      'text-zinc-600 dark:text-zinc-200',
      'size-[48px] mb-[20px] bg-red-200',
      'text-[24px]',
      'bg-[#e3e3e5] dark:bg-[#1e1e20]',
      'transition-all duration-300 dark:group-hover:text-primary',
      className,
    )}
    >
      {children}
    </div>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn(
      'text-zinc-600 dark:text-zinc-200',
      'font-bold tracking-wide mt-4',
      className,
    )}
    >
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'mt-8 tracking-wide leading-relaxed text-sm',
        'text-zinc-500 dark:text-zinc-300/[0.8]',
        className,
      )}
    >
      {children}
    </p>
  )
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link?: string
    icon: ReactNode
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[10px]',
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="z-[-1] absolute inset-0 h-full w-full bg-neutral-200/[0.3] dark:bg-neutral-500/[0.5] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  )
}
