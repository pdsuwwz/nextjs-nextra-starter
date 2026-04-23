'use client'

import { useMemo, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import type { Plan } from '@/i18n/ai-demo'

type BillingCycle = 'monthly' | 'yearly'

type InteractiveDemoProps = {
  lang: string
  ctaText: string
}

type InteractivePricingProps = {
  lang: string
  plans: Plan[]
}

type Scenario = {
  key: string
  label: string
  summary: string
  metrics: Array<{ label: string, value: string }>
}

function getDemoScenarios(lang: string): Scenario[] {
  if (lang === 'zh') {
    return [
      {
        key: 'support',
        label: '客服分诊',
        summary: '自动分类工单、提取摘要，并分发给对应处理人。',
        metrics: [
          { label: '平均首响时间', value: '-38%' },
          { label: '自动分发准确率', value: '96%' },
          { label: '人工预处理耗时', value: '-4.2h/周' },
        ],
      },
      {
        key: 'reporting',
        label: '周报生成',
        summary: '定时汇总核心指标，自动输出可执行周报结论。',
        metrics: [
          { label: '周报产出时间', value: '-72%' },
          { label: '数据同步时效', value: 'T+0' },
          { label: '跨团队对齐效率', value: '+2.1x' },
        ],
      },
      {
        key: 'launch',
        label: '上线协同',
        summary: '自动推进素材、审批与发布清单，降低上线遗漏。',
        metrics: [
          { label: '发布延期率', value: '-29%' },
          { label: '清单遗漏项', value: '-64%' },
          { label: '协作往返沟通', value: '-31%' },
        ],
      },
    ]
  }

  return [
    {
      key: 'support',
      label: 'Support Triage',
      summary: 'Classify tickets, generate summaries, and route to the right owner automatically.',
      metrics: [
        { label: 'First response time', value: '-38%' },
        { label: 'Auto-routing accuracy', value: '96%' },
        { label: 'Manual prep time', value: '-4.2h/week' },
      ],
    },
    {
      key: 'reporting',
      label: 'Weekly Reporting',
      summary: 'Collect key metrics on schedule and draft action-ready weekly reports.',
      metrics: [
        { label: 'Reporting time', value: '-72%' },
        { label: 'Data freshness', value: 'T+0' },
        { label: 'Team alignment speed', value: '+2.1x' },
      ],
    },
    {
      key: 'launch',
      label: 'Launch Ops',
      summary: 'Coordinate assets, approvals, and checklists with fewer missed steps.',
      metrics: [
        { label: 'Launch delay rate', value: '-29%' },
        { label: 'Checklist misses', value: '-64%' },
        { label: 'Back-and-forth handoffs', value: '-31%' },
      ],
    },
  ]
}

function parsePriceNumber(price: string): number | null {
  const match = price.match(/\d+(?:\.\d+)?/)
  if (!match) {
    return null
  }
  return Number(match[0])
}

function formatPlanPrice(price: string, cycle: BillingCycle, lang: string): string {
  if (price === 'Custom' || price === '定制') {
    return price
  }

  const value = parsePriceNumber(price)
  if (value === null) {
    return price
  }

  const isDollar = price.includes('$')
  const isYuan = price.includes('¥')
  const prefix = isDollar ? '$' : isYuan ? '¥' : ''

  if (cycle === 'monthly') {
    return lang === 'zh' ? `${prefix}${value}/月` : `${prefix}${value}/mo`
  }

  const yearly = Math.round(value * 10)
  return lang === 'zh' ? `${prefix}${yearly}/年` : `${prefix}${yearly}/yr`
}

export function InteractiveDemoPanel({ lang, ctaText }: InteractiveDemoProps) {
  const scenarios = useMemo(() => getDemoScenarios(lang), [lang])
  const [activeKey, setActiveKey] = useState(scenarios[0]?.key ?? 'support')

  const activeScenario = scenarios.find(item => item.key === activeKey) ?? scenarios[0]
  if (!activeScenario) {
    return null
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_14px_40px_-24px_rgba(37,99,235,0.5)] backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-900/80 dark:shadow-[0_16px_44px_-30px_rgba(34,197,94,0.42)] sm:p-5">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#2563EB]/12 blur-2xl motion-safe:animate-pulse dark:bg-[#22C55E]/10" aria-hidden />
      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label={lang === 'zh' ? '场景切换' : 'Scenario switcher'}>
        {scenarios.map(scenario => (
          <button
            key={scenario.key}
            type="button"
            role="tab"
            aria-selected={activeScenario.key === scenario.key}
            className={[
              'rounded-xl border px-3 py-1.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-900',
              activeScenario.key === scenario.key
                ? 'border-[#2563EB]/40 bg-gradient-to-r from-blue-50 to-blue-100/70 text-[#1D4ED8] shadow-[0_10px_22px_-20px_rgba(37,99,235,0.9)] dark:border-[#60A5FA]/40 dark:bg-[#1E3A8A]/25 dark:text-[#93C5FD]'
                : 'border-slate-300/80 bg-white/85 text-slate-700 hover:border-slate-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900',
            ].join(' ')}
            onClick={() => setActiveKey(scenario.key)}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-zinc-700/80 dark:bg-zinc-950/70">
        <p className="text-sm text-slate-700 dark:text-zinc-300">{activeScenario.summary}</p>
        <ul className="mt-4 space-y-2">
          {activeScenario.metrics.map(metric => (
            <li key={metric.label} className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2 text-sm shadow-[0_10px_20px_-22px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-22px_rgba(37,99,235,0.5)] motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-900/85">
              <span className="text-slate-600 dark:text-zinc-400">{metric.label}</span>
              <span className="font-semibold text-slate-900 dark:text-zinc-100">{metric.value}</span>
            </li>
          ))}
        </ul>
        <a
          href="#pricing"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_26px_-18px_rgba(37,99,235,0.95)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-18px_rgba(37,99,235,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-900"
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}

export function InteractivePricingCards({ lang, plans }: InteractivePricingProps) {
  const [cycle, setCycle] = useState<BillingCycle>('monthly')

  return (
    <>
      <div className="mb-5 inline-flex rounded-xl border border-slate-300/80 bg-white/85 p-1 shadow-[0_10px_18px_-18px_rgba(15,23,42,0.75)] dark:border-zinc-700/80 dark:bg-zinc-900/75" role="group" aria-label={lang === 'zh' ? '计费周期' : 'Billing cycle'}>
        <button
          type="button"
          onClick={() => setCycle('monthly')}
          className={[
            'rounded-lg px-3 py-1.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-900',
            cycle === 'monthly' ? 'bg-slate-100 text-slate-900 dark:bg-zinc-800 dark:text-zinc-100' : 'text-slate-600 hover:bg-slate-50 dark:text-zinc-400 dark:hover:bg-zinc-800',
          ].join(' ')}
          aria-pressed={cycle === 'monthly'}
        >
          {lang === 'zh' ? '月付' : 'Monthly'}
        </button>
        <button
          type="button"
          onClick={() => setCycle('yearly')}
          className={[
            'rounded-lg px-3 py-1.5 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-900',
            cycle === 'yearly' ? 'bg-slate-100 text-slate-900 dark:bg-zinc-800 dark:text-zinc-100' : 'text-slate-600 hover:bg-slate-50 dark:text-zinc-400 dark:hover:bg-zinc-800',
          ].join(' ')}
          aria-pressed={cycle === 'yearly'}
        >
          {lang === 'zh' ? '年付（约 2 个月优惠）' : 'Yearly (approx. 2 months free)'}
        </button>
      </div>

      <ul className="grid gap-4 lg:grid-cols-3">
        {plans.map(plan => (
          <li
            key={plan.name}
            className={[
              'relative overflow-hidden rounded-2xl border bg-white/90 p-5 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.75)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-28px_rgba(37,99,235,0.5)] motion-reduce:transition-none dark:bg-zinc-900/75 dark:shadow-[0_16px_32px_-28px_rgba(0,0,0,0.85)]',
              plan.highlight ? 'border-[#2563EB]/45 dark:border-[#60A5FA]/45' : 'border-slate-200/80 dark:border-zinc-700/80',
            ].join(' ')}
          >
            {plan.highlight && (
              <span className="mb-3 inline-flex rounded-full border border-[#2563EB]/25 bg-[#2563EB]/10 px-2.5 py-1 text-xs font-semibold text-[#1D4ED8] dark:border-[#60A5FA]/30 dark:bg-[#60A5FA]/15 dark:text-[#93C5FD]">
                {lang === 'zh' ? '推荐方案' : 'Most Popular'}
              </span>
            )}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#2563EB]/10 blur-3xl dark:bg-[#22C55E]/10" aria-hidden />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">{plan.name}</h3>
            <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-zinc-100">{formatPlanPrice(plan.price, cycle, lang)}</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-zinc-300">{plan.description}</p>
            <ul className="mt-4 space-y-2">
              {plan.points.map(point => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#22C55E]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="#final-cta"
              className={[
                'mt-5 inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-900',
                plan.highlight
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-[0_14px_26px_-18px_rgba(37,99,235,0.95)] hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-18px_rgba(37,99,235,0.9)]'
                  : 'border border-slate-300/80 bg-white/80 text-slate-800 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-900',
              ].join(' ')}
            >
              {plan.cta}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
