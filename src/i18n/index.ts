import en from './en'
import zh from './zh'

export const i18nConfig = Object.freeze({
  en,
  zh,
})

export type I18nLangKeys = keyof typeof i18nConfig

// 获取所有语言对象的联合类型
export type AllLocales = typeof i18nConfig[I18nLangKeys]

// 获取所有可能的键
export type LocaleKeys = keyof AllLocales
