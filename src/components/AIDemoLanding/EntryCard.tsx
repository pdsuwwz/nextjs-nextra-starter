'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/hooks'

export default function EntryCard() {
  const { currentLocale } = useLocale()
  const isZh = currentLocale === 'zh'

  return (
    <div className="relative z-2 mx-auto mt-8 w-full max-w-5xl px-6">
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/88 p-5 shadow-[0_16px_34px_-26px_rgba(15,23,42,0.75)] backdrop-blur-sm md:p-6 dark:border-slate-700/80 dark:bg-slate-900/75 dark:shadow-[0_20px_38px_-28px_rgba(0,0,0,0.9)]">
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#2563EB]/12 blur-3xl dark:bg-cyan-500/10" aria-hidden />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-44 w-44 rounded-full bg-[#22C55E]/10 blur-3xl dark:bg-emerald-400/10" aria-hidden />
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 dark:border-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" aria-hidden />
              AI Landing Reference
            </span>
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
              className="inline-flex w-full min-h-11 items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-[#2563EB] to-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_-18px_rgba(37,99,235,0.95)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_34px_-18px_rgba(37,99,235,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:from-blue-500 dark:to-cyan-500 dark:focus-visible:ring-cyan-400 md:w-auto"
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
