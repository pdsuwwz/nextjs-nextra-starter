'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/hooks'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'auth:userEmail'

type AuthButtonProps = {
  className?: string
  showOnMobile?: boolean
}

export default function AuthButton({ className, showOnMobile }: AuthButtonProps) {
  const { currentLocale, t } = useLocale()
  const [email, setEmail] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const visibilityClass = showOnMobile ? '' : 'max-md:hidden'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const syncFromStorage = () => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        setEmail(stored)
      } catch {
        setEmail(null)
      }
    }

    window.addEventListener('storage', syncFromStorage)
    window.addEventListener('auth:changed', syncFromStorage as EventListener)

    return () => {
      window.removeEventListener('storage', syncFromStorage)
      window.removeEventListener('auth:changed', syncFromStorage as EventListener)
    }
  }, [])

  useEffect(() => {
    if (!mounted) {
      return
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      setEmail(stored)
    } catch {
      setEmail(null)
    }
  }, [mounted])

  const onLogout = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } finally {
      window.dispatchEvent(new Event('auth:changed'))
      setEmail(null)
    }
  }

  if (!mounted) {
    return (
      <div
        className={cn(
          visibilityClass,
          'flex items-center gap-2',
          className
        )}
      >
        <span className="h-3 w-10 rounded-sm bg-foreground/20 dark:bg-foreground/30 animate-pulse" aria-hidden="true" />
        <span className="h-3 w-6 rounded-sm bg-foreground/15 dark:bg-foreground/25 animate-pulse" aria-hidden="true" />
      </div>
    )
  }

  if (!email) {
    return (
      <Button
        asChild
        variant="outline"
        size="sm"
        className={cn(
          visibilityClass,
          showOnMobile && 'w-full justify-center',
          className
        )}
      >
        <Link href={`/${currentLocale}/login`}>
          {t('auth.login')}
        </Link>
      </Button>
    )
  }

  return (
    <div
      className={cn(
        visibilityClass,
        showOnMobile
          ? 'flex w-full flex-col items-start gap-2'
          : 'inline-flex items-center gap-2',
        className
      )}
    >
      <span className="text-sm text-foreground/80">{email}</span>
      <Button
        variant="outline"
        size="sm"
        className={cn(showOnMobile && 'w-full justify-center')}
        onClick={onLogout}
      >
        {t('auth.logout')}
      </Button>
    </div>
  )
}
