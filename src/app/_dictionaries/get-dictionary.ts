import type Zh from '@/i18n/zh'
import 'server-only'

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('@/i18n/en'),
  zh: () => import('@/i18n/zh'),
} as const satisfies Record<string, () => Promise<{ default: typeof Zh }>>

export const getDictionary = async (
  locale: keyof typeof dictionaries,
): Promise<typeof Zh> => (await dictionaries[locale]()).default

export const getDirection = (locale: keyof typeof dictionaries) => {
  switch (locale) {
    case 'en':
    case 'zh':
    default:
      return 'ltr' as const
  }
}
