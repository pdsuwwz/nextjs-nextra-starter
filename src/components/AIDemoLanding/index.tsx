'use client'

import type { ReactNode } from 'react'
import { Bot, CheckCircle2, FileText, GaugeCircle, Layers, ShieldCheck, Sparkles, WandSparkles } from 'lucide-react'
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

const panelClass = 'rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_14px_40px_-24px_rgba(37,99,235,0.5)] backdrop-blur-sm dark:border-zinc-700/70 dark:bg-zinc-900/80 dark:shadow-[0_16px_44px_-30px_rgba(34,197,94,0.42)]'
const primaryCtaClass = 'inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_26px_-18px_rgba(37,99,235,0.95)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_32px_-18px_rgba(37,99,235,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950'
const softCardClass = 'rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-22px_rgba(37,99,235,0.45)] motion-reduce:transition-none dark:border-zinc-700/80 dark:bg-zinc-900/75 dark:shadow-[0_16px_30px_-26px_rgba(0,0,0,0.8)]'

function Section({ id, title, children, compact }: SectionProps) {
  return (
    <section id={id} className={compact ? 'py-12' : 'py-16 sm:py-20'} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-zinc-100">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

function FeatureIcon({ index }: { index: number }) {
  const icons = [WandSparkles, Bot, Layers, ShieldCheck, GaugeCircle, FileText]
  const Icon = icons[index] ?? CheckCircle2
  return <Icon className="h-5 w-5 text-[#2563EB] dark:text-[#60A5FA]" aria-hidden />
}

function TopNav({ copy }: { copy: LandingCopy }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="inline-flex items-center gap-2 text-base font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:text-zinc-100 dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950">
          <span className="inline-flex h-2.5 w-2.5 animate-[heartbeat_3.4s_ease-in-out_infinite] rounded-full bg-[#22C55E]" aria-hidden />
          {copy.nav.product}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
          <a
            href="#demo"
            className="rounded-xl border border-slate-300/80 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:border-slate-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950"
          >
            {copy.nav.tryDemo}
          </a>
          <a
            href="#final-cta"
            className="hidden rounded-xl border border-slate-300/80 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:border-slate-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 sm:inline-flex dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950"
          >
            {copy.nav.bookCall}
          </a>
          <a href="#pricing" className={primaryCtaClass}>
            {copy.nav.startTrial}
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero({ copy }: { copy: LandingCopy }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(150deg,#eff6ff_0%,#ffffff_46%,#ecfdf5_100%)] py-16 sm:py-20 dark:border-zinc-800/80 dark:bg-[linear-gradient(150deg,#0f172a_0%,#111827_45%,#0b1322_100%)]"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute -top-24 left-[12%] h-64 w-64 rounded-full bg-[#2563EB]/20 blur-3xl motion-safe:animate-pulse dark:bg-[#38BDF8]/18" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 right-[8%] h-72 w-72 rounded-full bg-[#22C55E]/18 blur-3xl motion-safe:animate-pulse dark:bg-[#34D399]/15" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:px-8">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-white/70 px-3 py-1 text-xs font-medium text-[#1E3A8A] backdrop-blur dark:border-[#60A5FA]/25 dark:bg-zinc-900/60 dark:text-[#93C5FD]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            AI Workflow Assistant for Lean Teams
          </div>
          <h1 id="hero-title" className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-zinc-100">
            {copy.hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 sm:text-lg dark:text-zinc-300">
            {copy.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className={primaryCtaClass}>
              {copy.hero.tryDemo}
            </a>
            <a href="#final-cta" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300/80 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_10px_20px_-18px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950">
              {copy.hero.bookCall}
            </a>
          </div>
          <p className="mt-3 text-sm font-medium text-slate-600 dark:text-zinc-400">{copy.hero.trust}</p>
        </div>

        <div className={`${panelClass} relative overflow-hidden p-5 sm:p-6`}>
          <div className="absolute -right-10 -top-10 h-32 w-32 animate-[spin_18s_linear_infinite] rounded-full border border-[#2563EB]/20" aria-hidden />
          <div className="rounded-xl border border-slate-200/80 bg-white/80 p-4 dark:border-zinc-700/80 dark:bg-zinc-950/80">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">Pipeline Health</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/80 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                Live
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-zinc-300">
              <div className="rounded-lg border border-slate-200/70 bg-white/85 p-3 dark:border-zinc-700 dark:bg-zinc-900/80">
                <div className="mb-1.5 flex items-center justify-between">
                  <span>Lead triage</span>
                  <span className="font-semibold text-[#22C55E]">98% success</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-200 dark:bg-zinc-700">
                  <div className="h-1.5 w-[88%] rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] motion-safe:animate-pulse" />
                </div>
              </div>
              <div className="rounded-lg border border-slate-200/70 bg-white/85 p-3 dark:border-zinc-700 dark:bg-zinc-900/80">
                <div className="flex items-center justify-between">
                  <span>Onboarding emails</span>
                  <span className="font-semibold text-[#22C55E]">4 min avg</span>
                </div>
              </div>
              <div className="rounded-lg border border-slate-200/70 bg-white/85 p-3 dark:border-zinc-700 dark:bg-zinc-900/80">
                <div className="flex items-center justify-between">
                  <span>Weekly report</span>
                  <span className="font-semibold text-[#22C55E]">Auto-generated</span>
                </div>
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
      <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <ul className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="Customer logos">
          {copy.socialProof.logos.map(logo => (
            <li key={logo} className={`${softCardClass} flex min-h-[86px] items-center justify-center px-4 text-center text-sm font-semibold text-slate-700 dark:text-zinc-200`}>
              {logo}
            </li>
          ))}
        </ul>
        <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" aria-label="Key metrics">
          {copy.socialProof.stats.map(stat => (
            <li key={stat.label} className={`${softCardClass} min-h-[118px]`}>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">{stat.label}</p>
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
          <li key={feature.title} className={`${softCardClass} relative overflow-hidden`}>
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[#2563EB]/10 blur-2xl dark:bg-[#22C55E]/10" aria-hidden />
            <div className="mb-4 inline-flex rounded-xl border border-slate-200/80 bg-slate-50/90 p-2.5 dark:border-zinc-700 dark:bg-zinc-950/80">
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
        {copy.steps.map((step, index) => (
          <li key={step.title} className={softCardClass}>
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#2563EB]/12 px-2 text-xs font-semibold text-[#1D4ED8] dark:bg-[#60A5FA]/20 dark:text-[#93C5FD]">
              {index + 1}
            </span>
            <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-zinc-100">{step.title}</h3>
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
          <li key={useCase.title} className={softCardClass}>
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
        <div className={panelClass + ' p-5 sm:p-6'}>
          <p className="text-base leading-7 text-slate-700 dark:text-zinc-300">{copy.demoDescription}</p>
          <a href="#pricing" className={`${primaryCtaClass} mt-6`}>
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
          <li key={item.name} className={softCardClass}>
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
      <Accordion type="single" collapsible className={`${panelClass} px-5`}>
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
    <section
      id="final-cta"
      className="relative overflow-hidden border-y border-slate-200/80 bg-[linear-gradient(150deg,#eff6ff_0%,#ffffff_46%,#ecfdf5_100%)] py-16 dark:border-zinc-800/80 dark:bg-[linear-gradient(150deg,#0f172a_0%,#111827_45%,#0b1322_100%)]"
      aria-labelledby="final-cta-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#2563EB]/20 blur-3xl motion-safe:animate-pulse dark:bg-[#34D399]/12" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="final-cta-title" className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-zinc-100">
          {copy.finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-zinc-300">
          {copy.finalCta.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#top" className={primaryCtaClass}>
            {copy.finalCta.primary}
          </a>
          <a href={`mailto:${copy.footer.contactEmail}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300/80 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_10px_20px_-18px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950">
            {copy.finalCta.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer({ copy }: { copy: LandingCopy }) {
  return (
    <footer className="py-10" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-zinc-400">
        <p>
          {copy.footer.productName}
          {' · '}
          {copy.footer.copyright}
        </p>
        <p>
          {copy.footer.contactTitle}
          {': '}
          <a className="font-medium text-slate-700 transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:text-zinc-300 dark:hover:text-[#60A5FA] dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950" href={`mailto:${copy.footer.contactEmail}`}>
            {copy.footer.contactEmail}
          </a>
          {' · '}
          <a className="font-medium text-slate-700 transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 dark:text-zinc-300 dark:hover:text-[#60A5FA] dark:focus-visible:ring-[#60A5FA] dark:focus-visible:ring-offset-zinc-950" href={`tel:${copy.footer.contactPhone.replace(/\s+/g, '')}`}>
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
