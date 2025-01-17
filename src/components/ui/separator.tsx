import { cn } from '@/lib/utils'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import * as React from 'react'

const Separator = (
  {
    className,
    orientation = 'horizontal',
    decorative = true,
    ...props
  }: React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
) => {
  const itemRef = React.useRef<React.ComponentRef<typeof SeparatorPrimitive.Root>>(null)

  return (
    <SeparatorPrimitive.Root
      ref={itemRef}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  )
}
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
