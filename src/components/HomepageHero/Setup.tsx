'use client'

import clsx from 'clsx'
import Link from 'next/link'
import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'

interface Props {
}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      <div className={styles.glowA} aria-hidden />
      <div className={styles.glowB} aria-hidden />
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href="https://github.com/pdsuwwz/nextjs-nextra-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('badgeTitle')}
          </a>
        </div>
        <h1 className={styles.headline}>
          <MotionWrapperFlash
            disabledAnimation={false}
            className="flex items-center"
          >
            <span className="icon-[emojione-v1--lightning-mood]"></span>
          </MotionWrapperFlash>
          {' '}
          Nextra
          {' '}
          <br className="sm:hidden"></br>
          {' '}
          Starter
          <br className="sm:hidden"></br>
          {' '}
          Template
        </h1>

        <Link
          href={`/${currentLocale}/upgrade`}
          className={clsx([
            'text-sm mt-3 inline-flex items-center rounded-xl px-3.5 py-1.5',
            'border border-blue-200/80 bg-blue-50/80 text-blue-700 shadow-[0_12px_22px_-18px_rgba(37,99,235,0.8)] backdrop-blur-sm',
            'dark:border-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-300 dark:shadow-[0_14px_24px_-20px_rgba(34,211,238,0.65)]',
            '[&>span]:font-semibold',
            'transition duration-300 hover:-translate-y-0.5',
          ])}
          dangerouslySetInnerHTML={{
            __html: t('featureSupport', {
              feature: `<span>Tailwind CSS v4, Nextra v4</span>`,
            }),
          }}
        />


        <div className={clsx([
          styles.subtitle,
          'text-neutral-500 dark:text-neutral-300',
        ])}
        >
          Template made
          {' '}
          <FlipWords
            words={[
              'Fast',
              'Simple',
              'Modern',
              'Flexible',
              'Easy',
              'Functional',
              'Efficient',
              'Scalable',
              'Reusable',
            ]}
          />
          <br />
          With
          {' '}
          <LinkPreview
            url="https://nextjs.org"
          >
            Next.js
          </LinkPreview>
          ,
          {' '}
          <LinkPreview
            url="https://tailwindcss.com"
          >
            Tailwind CSS
          </LinkPreview>
          , and
          {' '}
          <LinkPreview
            url="https://ui.shadcn.com"
          >
            Shadcn UI
          </LinkPreview>
          {', '}
          <LinkPreview
            url="https://ui.aceternity.com"
          >
            Aceternity UI
          </LinkPreview>
        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-semibold group rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-[0_16px_30px_-20px_rgba(37,99,235,0.9)] transition duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:text-white dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-400 dark:hover:to-cyan-400 dark:text-white dark:hover:text-white max-sm:w-[100%]"
            >
              <Link
                href={`/${currentLocale}/introduction`}
              >
                {t('getStarted')}
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold group rounded-xl border border-slate-300/80 bg-white/85 shadow-[0_12px_22px_-18px_rgba(15,23,42,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:bg-zinc-900 max-sm:w-[100%]"
            >
              <Link
                href="https://github.com/pdsuwwz/nextjs-nextra-starter"
                target="_blank"
              >
                Github
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
