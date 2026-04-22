'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/hooks'

export default function EntryCard() {
  const { currentLocale } = useLocale()
  const isZh = currentLocale === 'zh'

  return (
    <div className="relative z-2 mx-auto mt-6 w-full max-w-5xl px-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6 dark:border-slate-700 dark:bg-slate-900/70">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-[1.75rem] md:leading-9 dark:text-slate-100">
              {isZh ? '参考案例：AI 产品落地页' : 'Reference: AI Product Landing Page'}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300">
              {isZh
                ? '这是一个专门设计的落地页参考页，用来展示此模板可实现的页面结构、文案节奏与响应式效果。'
                : 'A dedicated reference page showing what this starter can deliver: structure, copy rhythm, and responsive quality.'}
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {isZh ? '包含英文与中文两套内容，可直接用于产品演示。' : 'Includes both English and Chinese content for direct product demos.'}
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href={`/${currentLocale}/ai-demo`}
              className="inline-flex w-full min-h-11 items-center justify-center gap-1.5 rounded-md bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400 md:w-auto"
            >
              {isZh ? '打开参考页' : 'Open Reference Page'}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
