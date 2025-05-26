'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { ChevronDown } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'


const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => {
  const itemRef = React.useRef<React.ComponentRef<typeof AccordionPrimitive.Item>>(null)

  return (
    <AccordionPrimitive.Item
      ref={itemRef}
      className={cn(
        'border-b',
        className,
      )}
      {...props}
    />
  )
}
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => {
  const itemRef = React.useRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>>(null)
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={itemRef}
        className={cn(
          'flex flex-1 items-center justify-between py-7 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          'text-[18px] font-bold',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => {
  const itemRef = React.useRef<React.ComponentRef<typeof AccordionPrimitive.Content>>(null)

  return (
    <AccordionPrimitive.Content
      ref={itemRef}
      className={cn(
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        'text-[16px]',
      )}
      {...props}
    >
      <div className={cn('pb-6 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
