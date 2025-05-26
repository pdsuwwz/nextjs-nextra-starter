'use client'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Alert = ({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) => {
  const itemRef = React.useRef<HTMLDivElement>(null)
  return (
    <div
      ref={itemRef}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}
Alert.displayName = 'Alert'

const AlertTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  const itemRef = React.useRef<HTMLParagraphElement>(null)

  return (
    <h5
      ref={itemRef}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
}
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  const itemRef = React.useRef<HTMLParagraphElement>(null)

  return (
    <div
      ref={itemRef}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
}
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
