import { useCallback } from 'react'
import { useRouter } from 'nextra/hooks'

import type { I18nLangKeys, LocaleKeys } from '@/i18n'
import { getNestedValue, i18nConfig, interpolateString } from '@/i18n'


export const useLocale = () => {
  const { locale, defaultLocale } = useRouter()
  const currentLocale = (locale || defaultLocale) as I18nLangKeys

  const t = useCallback(
    <K extends LocaleKeys>(key: K, withData: Record<string, any> = {}): string => {
      const template = getNestedValue(i18nConfig[currentLocale], key)
      if (typeof template === 'string') {
        return interpolateString(template, withData)
      }
      return template || key
    },
    [currentLocale],
  )

  return {
    currentLocale,
    t,
  }
}
