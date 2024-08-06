import Link from 'next/link'
import { Button } from '@nextui-org/react'
import styles from '@/components/HomepageHero/SetupHero.module.scss'

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
          ⚡️ Nextra Starter Template
        </h1>
        <p className={styles.subtitle}>
          Next.js + Nextra + TypeScript + Tailwind CSS
        </p>
        <div className={styles.actions}>
          <Button
            color="primary"
            variant="shadow"
            size="lg"
            href="/introduction"
            className="group"
            as={Link}
          >
            Get Started
            <span className="w-[20px] transition-all group-hover:pl-[6px]">→</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
