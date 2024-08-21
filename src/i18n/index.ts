import en from './en'
import zh from './zh'

export const i18nConfig = Object.freeze({
  en,
  zh,
})

export type I18nLangKeys = keyof typeof i18nConfig

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


// 获取嵌套值
export function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj)
}

// 插入值表达式
export function interpolateString(template: string, context: Record<string, any>): string {
  return template.replace(/\{\{(\w+(\.\w+)*)\}\}/g, (_, path) => {
    const value = getNestedValue(context, path)
    return value !== undefined ? value : `{{${path}}}`
  })
}
