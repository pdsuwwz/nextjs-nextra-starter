import en from './en'
import zh from './zh'

export const i18nConfig = Object.freeze({
  en,
  zh,
})

export type I18nLangKeys = keyof typeof i18nConfig
export interface I18nLangAsyncProps {
  lang: I18nLangKeys
}

// 获取所有语言对象的联合类型
export type AllLocales = typeof i18nConfig[I18nLangKeys]


type DeepKeys<T> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? `${K & string | number}.${DeepKeys<T[K]>}`
    : `${K & string | number}`
}[keyof T & (string | number)]


export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

// 获取所有可能的键
export type LocaleKeys = NestedKeyOf<AllLocales>


type DeepObject = Record<string, any>

// 类型提取给定路径上值的类型
export type PathValue<T, P extends string>
  = P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? PathValue<T[Key], Rest>
      : never
    : P extends keyof T
      ? T[P]
      : never

// 获取嵌套值
export function getNestedValue<T extends DeepObject, K extends string>(obj: T, path: K): PathValue<T, K> {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj) as PathValue<T, K>
}


// 插入值表达式
export function interpolateString(template: string, context: Record<string, any>): string {
  return template.replace(/\{\{\s*(\w+(\.\w+)*)\s*\}\}/g, (_, path) => {
    const value = getNestedValue(context, path.trim())
    return value !== undefined ? value : `{{${path.trim()}}}`
  })
}
