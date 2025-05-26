'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'nextra-theme-docs'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/hooks'

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme()
  const { t } = useLocale()

  return (
    <div className="flex justify-start max-sm:justify-center gap-6 py-6">
      <div className="flex flex-col items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setTheme('light')}
          aria-label={t('themeSwitcher.lightAria')}
        >
          <Sun className="h-[1.5rem] w-[1.5rem]" />
        </Button>
        <span className="text-sm text-muted-foreground">{ t('themeSwitcher.light') }</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setTheme('dark')}
          aria-label={t('themeSwitcher.darkAria')}
        >
          <Moon className="h-[1.5rem] w-[1.5rem]" />
        </Button>
        <span className="text-sm text-muted-foreground">{ t('themeSwitcher.dark') }</span>
      </div>
    </div>
  )
}
