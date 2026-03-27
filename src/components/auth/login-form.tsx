'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderOne } from '@/components/ui/loader'
import { Label } from '@/components/ui/label'
import { useLocale } from '@/hooks'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const STORAGE_KEY = 'auth:userEmail'

type ErrorType = 'invalidEmail' | 'passwordRequired' | 'storage' | null

export default function LoginForm() {
  const { currentLocale, t } = useLocale()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<ErrorType>(null)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPageLoading(false)
    }, 700)

    return () => window.clearTimeout(timer)
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    if (submitLoading || googleLoading) {
      return
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('invalidEmail')
      return
    }

    if (!password) {
      setError('passwordRequired')
      return
    }

    try {
      setSubmitLoading(true)
      window.localStorage.setItem(STORAGE_KEY, email)
      toast.success(t('auth.success'))
      window.dispatchEvent(new Event('auth:changed'))
      window.setTimeout(() => {
        router.replace(`/${currentLocale}`)
        setSubmitLoading(false)
      }, 1200)
    } catch {
      setSubmitLoading(false)
      setError('storage')
    }
  }

  const onGoogleLogin = () => {
    if (googleLoading || submitLoading) {
      return
    }
    setError(null)
    setGoogleLoading(true)

    // TODO: replace with real Google OAuth when backend is available.
    window.setTimeout(() => {
      try {
        const googleEmail = 'jane.doe@gmail.com'
        window.localStorage.setItem(STORAGE_KEY, googleEmail)
        toast.success(t('auth.success'))
        window.dispatchEvent(new Event('auth:changed'))
        window.setTimeout(() => {
          router.replace(`/${currentLocale}`)
        }, 600)
      } catch {
        setError('storage')
      } finally {
        setGoogleLoading(false)
      }
    }, 900)
  }

  const errorMessage = useMemo(() => {
    if (!error) {
      return null
    }

    if (error === 'invalidEmail') {
      return t('auth.invalidEmail')
    }

    if (error === 'passwordRequired') {
      return t('auth.passwordRequired')
    }

    return t('auth.storageError')
  }, [error, t])

  if (pageLoading) {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <LoaderOne />
          <span>{t('auth.loading')}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full flex-col gap-5 px-4 py-6 sm:max-w-md sm:py-10">
      <div className="space-y-2 text-center">
        <p className="text-base font-medium text-foreground/70">
          {t('auth.brand')}
        </p>
        <h1 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
          {t('auth.welcome')}
        </h1>
      </div>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">{t('auth.email')}</Label>
          <Input
            id="email"
            type="email"
            value={email}
            placeholder={t('auth.emailPlaceholder')}
            className="h-11 rounded-full bg-muted/70"
            onChange={(event) => {
              setEmail(event.target.value)
              if (error) {
                setError(null)
              }
            }}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">{t('auth.password')}</Label>
          <Input
            id="password"
            type="password"
            value={password}
            placeholder={t('auth.passwordPlaceholder')}
            className="h-11 rounded-full bg-muted/70"
            onChange={(event) => {
              setPassword(event.target.value)
              if (error) {
                setError(null)
              }
            }}
            required
          />
        </div>
        {errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
        <Button
          type="submit"
          className="h-10 w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={submitLoading || googleLoading}
          aria-busy={submitLoading}
        >
          {submitLoading ? t('auth.googleLoading') : t('auth.submit')}
        </Button>
      </form>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        <span className="text-center">{t('auth.or')}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <Button
        type="button"
        variant="outline"
        className="h-10 w-full rounded-md"
        onClick={onGoogleLogin}
        disabled={googleLoading || submitLoading}
        aria-busy={googleLoading}
      >
        {googleLoading ? t('auth.googleLoading') : t('auth.google')}
      </Button>
      <Button
        type="button"
        variant="ghost"
        className="h-9 w-full rounded-md text-muted-foreground"
        onClick={() => {
          router.push(`/${currentLocale}`)
        }}
      >
        {t('auth.backHome')}
      </Button>
    </div>
  )
}
