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
    <div className="rounded-md border border-slate-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label={lang === 'zh' ? '场景切换' : 'Scenario switcher'}>
        {scenarios.map(scenario => (
          <button
            key={scenario.key}
            type="button"
            role="tab"
            aria-selected={activeScenario.key === scenario.key}
            className={[
              'rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-900',
              activeScenario.key === scenario.key
                ? 'border-[#2563EB] bg-blue-50 text-[#1D4ED8] dark:border-blue-500 dark:bg-blue-500/15 dark:text-blue-300'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800',
            ].join(' ')}
            onClick={() => setActiveKey(scenario.key)}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <p className="text-sm text-slate-700 dark:text-zinc-300">{activeScenario.summary}</p>
        <ul className="mt-4 space-y-2">
          {activeScenario.metrics.map(metric => (
            <li key={metric.label} className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900">
              <span className="text-slate-600 dark:text-zinc-400">{metric.label}</span>
              <span className="font-semibold text-slate-900 dark:text-zinc-100">{metric.value}</span>
            </li>
          ))}
        </ul>
        <a
          href="#pricing"
          className="mt-4 inline-flex rounded-md bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-900"
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
      <div className="mb-5 inline-flex rounded-md border border-slate-300 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900" role="group" aria-label={lang === 'zh' ? '计费周期' : 'Billing cycle'}>
        <button
          type="button"
          onClick={() => setCycle('monthly')}
          className={[
            'rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-900',
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
            'rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-900',
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
              'rounded-md border bg-white p-5 dark:bg-zinc-900',
              plan.highlight ? 'border-[#2563EB] dark:border-blue-500' : 'border-slate-200 dark:border-zinc-700',
            ].join(' ')}
          >
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
                'mt-5 inline-flex rounded-md px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-900',
                plan.highlight
                  ? 'bg-[#2563EB] text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400'
                  : 'border border-slate-300 text-slate-800 hover:bg-slate-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800',
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
