import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { MotionWrapperFadeIn, MotionWrapperFlash } from '@/components/MotionWrapper'

interface Props {
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}

export const Section = (props: Props) => {
  const { className, title, description, children } = props
  return (
    <section className={cn(
      'flex flex-col items-center justify-center px-6',
      className,
    )}
    >
      <MotionWrapperFlash>
        <h2 className={cn(
          'relative',
          'text-center font-semibold',
          'bg-clip-text text-transparent bg-gradient-to-b',
          'text-3xl md:text-5xl md:leading-tight pt-4',
          'from-neutral-700 to-black',
          'dark:from-neutral-800 dark:to-white',
        )}
        >
          <span>{ title }</span>
        </h2>
      </MotionWrapperFlash>
      <MotionWrapperFadeIn>
        {
          description
          && (
            <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-center font-normal text-zinc-600 dark:text-zinc-400">
              { description }
            </h2>
          )
        }
      </MotionWrapperFadeIn>
      {children}
    </section>
  )
}
