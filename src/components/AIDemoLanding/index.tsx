'use client'

import type { ReactNode } from 'react'
import { Bot, CheckCircle2, FileText, GaugeCircle, Layers, ShieldCheck, WandSparkles } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useLocale } from '@/hooks'
import { getLandingCopy, type LandingCopy } from '@/i18n/ai-demo'
import { InteractiveDemoPanel, InteractivePricingCards } from './interactions'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
  compact?: boolean
}

function Section({ id, title, children, compact }: SectionProps) {
  return (
    <section id={id} className={compact ? 'py-10' : 'py-14'} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-zinc-100">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}

function FeatureIcon({ index }: { index: number }) {
  const icons = [WandSparkles, Bot, Layers, ShieldCheck, GaugeCircle, FileText]
  const Icon = icons[index] ?? CheckCircle2
  return <Icon className="h-5 w-5 text-[#2563EB] dark:text-blue-400" aria-hidden />
}

function TopNav({ copy }: { copy: LandingCopy }) {
  return (
    <header className="border-b border-slate-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-base font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:text-zinc-100 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
          {copy.nav.product}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
          <a
            href="#demo"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950"
          >
            {copy.nav.tryDemo}
          </a>
          <a
            href="#final-cta"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950"
          >
            {copy.nav.bookCall}
          </a>
          <a
            href="#pricing"
            className="rounded-md bg-[#2563EB] px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950"
          >
            {copy.nav.startTrial}
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero({ copy }: { copy: LandingCopy }) {
  return (
    <section id="top" className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
        <div>
          <h1 id="hero-title" className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-zinc-100">
            {copy.hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 sm:text-lg dark:text-zinc-300">
            {copy.hero.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#demo" className="rounded-md bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
              {copy.hero.tryDemo}
            </a>
            <a href="#final-cta" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
              {copy.hero.bookCall}
            </a>
          </div>
          <a href="#pricing" className="mt-4 inline-flex rounded-md px-2 py-1 text-sm font-semibold text-[#2563EB] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:text-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
            {copy.hero.startTrial}
          </a>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">{copy.hero.trust}</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-700 dark:bg-zinc-900">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <p className="text-sm font-medium text-slate-800 dark:text-zinc-200">Pipeline Health</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-zinc-300">
              <div className="flex items-center justify-between">
                <span>Lead triage</span>
                <span className="font-semibold text-[#22C55E]">98% success</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Onboarding emails</span>
                <span className="font-semibold text-[#22C55E]">4 min avg</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Weekly report</span>
                <span className="font-semibold text-[#22C55E]">Auto-generated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof({ copy }: { copy: LandingCopy }) {
  return (
    <Section id="social-proof" title={copy.socialProofTitle} compact>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ul className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" aria-label="Customer logos">
          {copy.socialProof.logos.map(logo => (
            <li key={logo} className="flex min-h-14 items-center justify-center rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {logo}
            </li>
          ))}
        </ul>
        <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" aria-label="Key metrics">
          {copy.socialProof.stats.map((stat, index) => (
            <li key={stat.label} className={index === 0 ? 'min-h-[110px] rounded-md border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900' : 'min-h-[92px] rounded-md border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900'}>
              <p className="text-2xl font-semibold text-slate-900 dark:text-zinc-100">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-zinc-400">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function Features({ copy }: { copy: LandingCopy }) {
  return (
    <Section id="features" title={copy.featureTitle}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.features.map((feature, index) => (
          <li key={feature.title} className="rounded-md border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
            <div className="mb-3 inline-flex rounded-md border border-slate-200 bg-slate-50 p-2 dark:border-zinc-700 dark:bg-zinc-950">
              <FeatureIcon index={index} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-zinc-300">{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function HowItWorks({ copy }: { copy: LandingCopy }) {
  return (
    <Section id="how-it-works" title={copy.howItWorksTitle}>
      <ol className="grid gap-4 md:grid-cols-3">
        {copy.steps.map(step => (
          <li key={step.title} className="rounded-md border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
            <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-zinc-300">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function UseCases({ copy }: { copy: LandingCopy }) {
  return (
    <Section id="use-cases" title={copy.useCasesTitle}>
      <ul className="grid gap-4 md:grid-cols-3">
        {copy.useCases.map(useCase => (
          <li key={useCase.title} className="rounded-md border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
            <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">{useCase.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-zinc-300">{useCase.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function DemoPreview({ copy, lang }: { copy: LandingCopy, lang: string }) {
  return (
    <Section id="demo" title={copy.demoTitle}>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <InteractiveDemoPanel lang={lang} ctaText={copy.hero.startTrial} />
        <div>
          <p className="text-base leading-7 text-slate-700 dark:text-zinc-300">{copy.demoDescription}</p>
          <a href="#pricing" className="mt-5 inline-flex rounded-md bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
            {copy.hero.startTrial}
          </a>
        </div>
      </div>
    </Section>
  )
}

function Testimonials({ copy }: { copy: LandingCopy }) {
  return (
    <Section id="testimonials" title={copy.testimonialsTitle} compact>
      <ul className="grid gap-4 md:grid-cols-2">
        {copy.testimonials.map(item => (
          <li key={item.name} className="rounded-md border border-slate-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
            <blockquote className="text-base leading-7 text-slate-700 dark:text-zinc-300">“{item.quote}”</blockquote>
            <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-zinc-100">{item.name}</p>
            <p className="text-sm text-slate-600 dark:text-zinc-400">{item.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Pricing({ copy, lang }: { copy: LandingCopy, lang: string }) {
  return (
    <Section id="pricing" title={copy.pricingTitle}>
      <p className="mb-6 text-sm text-slate-600 dark:text-zinc-400">{copy.pricingSubtitle}</p>
      <InteractivePricingCards lang={lang} plans={copy.plans} />
    </Section>
  )
}

function FAQ({ copy }: { copy: LandingCopy }) {
  return (
    <Section id="faq" title={copy.faqTitle}>
      <Accordion type="single" collapsible className="rounded-md border border-slate-200 bg-white px-4 dark:border-zinc-700 dark:bg-zinc-900">
        {copy.faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium text-slate-900 dark:text-zinc-100">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-7 text-slate-700 dark:text-zinc-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}

function FinalCta({ copy }: { copy: LandingCopy }) {
  return (
    <section id="final-cta" className="border-y border-slate-200 bg-slate-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/50" aria-labelledby="final-cta-title">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="final-cta-title" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-zinc-100">
          {copy.finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-zinc-300">
          {copy.finalCta.description}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="#top" className="rounded-md bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
            {copy.finalCta.primary}
          </a>
          <a href={`mailto:${copy.footer.contactEmail}`} className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
            {copy.finalCta.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer({ copy }: { copy: LandingCopy }) {
  return (
    <footer className="py-8" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-zinc-400">
        <p>
          {copy.footer.productName}
          {' · '}
          {copy.footer.copyright}
        </p>
        <p>
          {copy.footer.contactTitle}
          {': '}
          <a className="font-medium text-slate-700 hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:text-zinc-300 dark:hover:text-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950" href={`mailto:${copy.footer.contactEmail}`}>
            {copy.footer.contactEmail}
          </a>
          {' · '}
          <a className="font-medium text-slate-700 hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:text-zinc-300 dark:hover:text-blue-400 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950" href={`tel:${copy.footer.contactPhone.replace(/\s+/g, '')}`}>
            {copy.footer.contactPhone}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default function AIDemoLanding() {
  const { currentLocale } = useLocale()
  const copy = getLandingCopy(currentLocale)

  return (
    <main className="relative left-1/2 w-dvw -translate-x-1/2 overflow-x-clip bg-white text-slate-900 dark:bg-zinc-950 dark:text-zinc-100">
      <TopNav copy={copy} />
      <Hero copy={copy} />
      <SocialProof copy={copy} />
      <Features copy={copy} />
      <HowItWorks copy={copy} />
      <UseCases copy={copy} />
      <DemoPreview copy={copy} lang={currentLocale} />
      <Testimonials copy={copy} />
      <Pricing copy={copy} lang={currentLocale} />
      <FAQ copy={copy} />
      <FinalCta copy={copy} />
      <Footer copy={copy} />
    </main>
  )
}
