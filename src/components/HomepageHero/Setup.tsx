import Link from 'next/link'
import { FlipWords } from '@/components/ui/flip-words'
import { Button } from '@/components/ui/button'
import styles from '@/components/HomepageHero/SetupHero.module.scss'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'


interface Props {
}
export function SetupHero(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.tilesBackground}></div>
      <div className={styles.tilesGradient}></div>
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href="https://github.com/pdsuwwz/nextjs-nextra-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            轻量级、开箱即用 🎉
          </a>
        </div>
        <h1 className={styles.headline}>
          <MotionWrapperFlash>
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
        <div className={styles.subtitle}>
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
          {' '}
          with Next.js, Tailwind CSS, and Shadcn UI
        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="group max-sm:w-[100%]"
            >
              <Link
                href="/introduction"
              >
                Get Started
                <span className="w-[20px] pl-[6px] transition-all group-hover:pl-[10px]">→</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group max-sm:w-[100%]"
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
