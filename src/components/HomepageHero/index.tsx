import { SetupHero } from './Setup'
import { Section } from './Section'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'

export default function HomepageHero() {
  return (
    <>
      <SetupHero />
      <div className="relative top-[-18px] mb-[-10px] flex justify-center py-[0px] z-[2]">
        <MotionWrapperFlash disabledHover>
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
        </MotionWrapperFlash>
      </div>
      <div className="pt-[20px] pb-[100px]">
        <Section
          title="Features"
          description="Provides a starter for Next.js with Nextra, featuring Tailwind CSS, Framer Motion, and Radix UI components."
        >
          <div className="flex justify-center w-full border border-primary max-w-[90rem] py-[100px]">
            🚧 待完善
          </div>
        </Section>
        <Section
          title="Tech Stack"
          description="Uses Next.js, React, Tailwind CSS, TypeScript, and ESLint for development."
        >
          <div className="flex justify-center w-full border border-primary max-w-[90rem] py-[100px]">
            🚧 待完善
          </div>
        </Section>
      </div>
    </>
  )
}
