import type { ReactNode } from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import LocaleToggle from '@/widgets/locale-toggle'
import ThemeToggle from '@/widgets/theme-toggle'
import Link from 'next/link'

const UnderlineLink = ({
  link,
  label,
  underlineByDefault = false,
}: {
  label: ReactNode | string
  link: string
  underlineByDefault?: boolean
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        'flex items-center rounded-none border border-transparent',
        'hover:text-zinc-900 dark:text-zinc-300',
        'duration-200',
        'hover:border-b-zinc-600',
        'dark:hover:border-b-zinc-300',
        underlineByDefault
          ? `border-b border-b-zinc-400/[0.3] dark:border-b-zinc-500`
          : 'hover:border-b',
      )}
    >
      { label }
    </Link>
  )
}

export function CustomFooter() {
  return (
    <footer className="pb-[env(safe-area-inset-bottom)]">
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-800 pt-5 max-sm:pt-10"></hr>
      <div className={cn(
        'flex justify-center items-center gap-[2px] pb-5',
        'max-sm:flex-col max-sm:gap-5 max-sm:pb-10',
        'tracking-wide text-[15px] text-center group',
        'text-gray-500/[0.8] dark:text-zinc-300/[0.8]',
      )}
      >
        <UnderlineLink
          link="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          label="CC BY-NC-SA 4.0"
          underlineByDefault
        />

        <div className="flex items-center gap-[2px]">
          <span className="pl-[4px]">
            Copyright ©
            {' '}
            { new Date().getFullYear() }
          </span>
          <UnderlineLink
            link="https://github.com/pdsuwwz"
            label="Wisdom"
          />
        </div>

        <Separator
          orientation="vertical"
          className="max-sm:hidden h-5 mx-2"
        />
        <div className="flex justify-center h-5 items-center space-x-2 text-sm">
          <ThemeToggle />
          <Separator orientation="vertical" />
          <LocaleToggle />
        </div>

      </div>
    </footer>
  )
}
