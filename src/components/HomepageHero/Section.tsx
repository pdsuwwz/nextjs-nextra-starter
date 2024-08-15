import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'

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
      'flex flex-col items-center justify-center',
      className,
    )}
    >
      <MotionWrapperFlash disabledHover>
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
        {
          description
          && (
            <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-center font-normal">
              { description }
            </h2>
          )
        }
      </MotionWrapperFlash>
      {children}
    </section>
  )
}
