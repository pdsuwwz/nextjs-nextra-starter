'use client'

import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import EntryCard from '@/components/AIDemoLanding/EntryCard'
import { PanelParticles } from '@/components/PanelParticles'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useLocale } from '@/hooks'
import { cn } from '@/lib/utils'
import { Section } from './Section'

import { SetupHero } from './Setup'

export const StackItem = ({
  className,
}: {
  className: string
},
) => {
  return (
    <div className={cn(
      'mx-6 size-[50px]',
      'text-neutral-800 dark:text-neutral-100',
      'transition-all duration-300 transform opacity-75',
      'hover:scale-125 hover:opacity-100',
      className,
    )}
    >
    </div>
  )
}

export default function HomepageHero() {
  const { t, currentLocale } = useLocale()

  const featureList = t('featureList')
  const faqs = t('faqs')
  const homeEnhance = t('homeEnhance') as {
    quickStatsTitle: string
    quickStatsDesc: string
    quickStats: Array<{ value: string, label: string }>
    useCasesTitle: string
    useCases: Array<{ title: string, description: string, tag: string }>
    flowTitle: string
    flow: Array<{ title: string, description: string }>
    ctaTitle: string
    ctaDescription: string
    ctaPrimary: string
    ctaSecondary: string
  }
  const processedFeatureList = useMemo(() => {
    const icons = [
      'icon-[material-symbols--rocket-launch-outline]',
      'icon-[icon-park-outline--international]',
      'icon-[nonicons--typescript-16]',
      'icon-[carbon--face-satisfied] hover:icon-[carbon--face-wink]',
      'icon-[teenyicons--tailwind-outline]',
      'icon-[tabler--calendar-code]',
      'icon-[carbon--color-palette]',
      'icon-[carbon--ibm-cloud-transit-gateway]',
      'icon-[carbon--flash]',
    ]
    return featureList.map((item, index) => {
      return {
        ...item,
        icon: <span className={icons[index] || icons[0]}></span>,
      }
    })
  }, [featureList])

  return (
    <>
      <ScrollProgressBar />
      <PanelParticles />
      <SetupHero />
      <EntryCard />
      {/* <div className="relative top-[-18px] mb-[-10px] flex justify-center py-[0px] z-2">
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[150px] h-[40px] flex flex-col items-center gap-[20px]"
        >
          <img
            className="dark:invert"
            src="/next.svg"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
      </div> */}
      <div className="relative z-1 pb-10 md:pb-[100px]">
        <Section
          title="Tech Stack"
          titleProps={{
            disabledAnimation: false,
          }}
        >
          <div className="flex justify-center w-full max-w-7xl h-[96px] my-[30px] rounded-2xl bg-transparent px-3">
            <Marquee
              pauseOnHover
              autoFill
              gradient
              direction="right"
              gradientColor="var(--background)"
              speed={60}
            >
              <StackItem className="icon-[akar-icons--nextjs-fill]" />
              <StackItem className="icon-[simple-icons--react]" />
              <StackItem className="icon-[simple-icons--tailwindcss]" />
              <StackItem className="icon-[teenyicons--framer-outline]" />
              <StackItem className="icon-[simple-icons--shadcnui]" />
              <StackItem className="icon-[simple-icons--typescript]" />
              <StackItem className="icon-[fa6-brands--sass]" />
              <StackItem className="icon-[teenyicons--eslint-outline]" />
              <StackItem className="icon-[simple-icons--postcss]" />
              <StackItem className="icon-[simple-icons--nextra]" />
              <StackItem className="icon-[line-md--iconify1]" />
            </Marquee>
          </div>
        </Section>
        <Section
          title="Features"
          description={t('featuresDesc')}
        >
          <div className="flex justify-center w-full max-w-7xl">
            <HoverEffect items={processedFeatureList} />
          </div>
        </Section>
        <Section
          title={homeEnhance.quickStatsTitle}
          description={homeEnhance.quickStatsDesc}
          className="pt-8 md:pt-14"
        >
          <div className="w-full max-w-6xl">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 border-b border-slate-200 pb-9 dark:border-zinc-700">
              {homeEnhance.quickStats.map(item => (
                <li key={item.label} className="w-full max-w-[240px] text-center sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                  <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-zinc-400">{item.label}</p>
                </li>
              ))}
            </ul>

            <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
              <article className="mx-auto w-full max-w-[28rem]">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-zinc-400">{homeEnhance.useCasesTitle}</p>
                <ul className="mt-4 space-y-5">
                  {homeEnhance.useCases.map(item => (
                    <li key={item.title}>
                      <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-cyan-500/12 dark:text-cyan-300">
                        {item.tag}
                      </span>
                      <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-zinc-100">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-zinc-300">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="mx-auto w-full max-w-[28rem]">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-zinc-400">{homeEnhance.flowTitle}</p>
                <ol className="relative mx-auto mt-4 max-w-md space-y-7 before:absolute before:bottom-2 before:left-1/2 before:top-2 before:z-0 before:w-px before:-translate-x-1/2 before:bg-blue-200 before:content-[''] dark:before:bg-cyan-500/40">
                  {homeEnhance.flow.map((item, index) => (
                    <li key={item.title} className="relative z-10 text-center">
                      <span
                        className="absolute left-1/2 top-0 inline-flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700 dark:bg-cyan-500/20 dark:text-cyan-300"
                        aria-hidden
                      >
                        {index + 1}
                      </span>
                      <h3 className="inline-block bg-background px-3 pt-9 text-base font-semibold text-slate-900 dark:text-zinc-100">{item.title.replace(/^\d+\.\s*/, '')}</h3>
                      <p className="mx-auto mt-1 max-w-xs bg-background px-2 text-sm leading-6 text-slate-700 dark:text-zinc-300">{item.description}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </div>

            <div className="mt-16 pt-2 text-center">
              <p className="text-base font-semibold text-slate-900 dark:text-zinc-100">{homeEnhance.ctaDescription}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <a
                  href={`/${currentLocale}/ai-demo`}
                  className="inline-flex min-h-10 items-center rounded-xl bg-linear-to-r from-[#2563EB] to-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white"
                >
                  {homeEnhance.ctaPrimary}
                </a>
                <a
                  href={`/${currentLocale}/introduction`}
                  className="inline-flex min-h-10 items-center rounded-xl border border-slate-300/80 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  {homeEnhance.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section
          title="Frequently Asked Questions"
          tallPaddingY
        >
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-5xl px-5"
          >
            {
              faqs.map((faqItem, index) => (
                <AccordionItem
                  value={faqItem.question}
                  key={index}
                >
                  <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                  <AccordionContent>
                    {faqItem.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </Section>
      </div>
    </>
  )
}
