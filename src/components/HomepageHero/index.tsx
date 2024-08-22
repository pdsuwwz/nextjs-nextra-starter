import Marquee from 'react-fast-marquee'
import { useTheme } from 'nextra-theme-docs'
import { SetupHero } from './Setup'
import { Section } from './Section'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { cn } from '@/lib/utils'

import { PanelParticles } from '@/components/PanelParticles'
import { useLocale } from '@/hooks'

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
      className,
    )}
    >
    </div>
  )
}

export default function HomepageHero() {
  const { t } = useLocale()

  const featureList = t('featureList')

  const { resolvedTheme } = useTheme()

  return (
    <>
      <PanelParticles />
      <SetupHero />
      {/* <div className="relative top-[-18px] mb-[-10px] flex justify-center py-[0px] z-[2]">
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
      <div className="relative z-[1] pb-10 md:pb-[100px]">
        <Section
          title="Tech Stack"
        >
          <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px]">
            <Marquee
              pauseOnHover
              autoFill
              gradient
              direction="right"
              gradientColor="hsl(var(--background))"
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
          description="Provides a starter for Next.js with Nextra, featuring Tailwind CSS, Framer Motion, and Shadcn UI components."
        >
          <div className="flex justify-center w-full max-w-7xl">
            <HoverEffect items={featureList} />
          </div>
        </Section>
      </div>
    </>
  )
}
