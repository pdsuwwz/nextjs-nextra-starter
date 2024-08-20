import { useCallback } from 'react'
import { useRouter } from 'nextra/hooks'

import type { AllLocales, I18nLangKeys, LocaleKeys } from '@/i18n'
import { i18nConfig } from '@/i18n'


export const useLocale = () => {
  const { locale, defaultLocale } = useRouter()
  const currentLocale = (locale || defaultLocale) as I18nLangKeys

  const t = useCallback(
    <K extends LocaleKeys>(key: K): AllLocales[K] => {
      return i18nConfig[currentLocale][key]
    },
    [currentLocale],
  )

  return {
    currentLocale,
    t,
  }
}
