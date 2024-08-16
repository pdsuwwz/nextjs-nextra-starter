import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CustomFooter() {
  return (
    <div className="group text-zinc-600 dark:text-zinc-300/[0.8]">
      MIT Licensed | Copyright © 2020-
      { new Date().getFullYear() }
      {' '}
      <Link
        href="https://github.com/pdsuwwz"
        target="_blank"
        className={cn(
          'rounded-none',
          'hover:text-zinc-900 dark:text-zinc-300',
          'duration-200 border-b',
          'border-b-zinc-400/[0.6] hover:border-b-zinc-600',
          'dark:border-b-zinc-500 dark:hover:border-b-zinc-300',
        )}
      >
        Wisdom
      </Link>
      .
    </div>
  )
}
