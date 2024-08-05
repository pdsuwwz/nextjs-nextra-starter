import Image from 'next/image'
import { SetupHero } from './Setup'

export default function HomepageHero() {
  return (
    <>
      <SetupHero />
      <div className="relative top-[-118px] mb-[-118px] flex justify-center py-[100px] z-[2]">
        <a
          href="https://github.com/pdsuwwz/nextjs-nextra-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[150px] h-[100px] flex flex-col items-center gap-[20px]"
        >
          <img
            className="dark:invert"
            src="/next.svg"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
      </div>
      <div>232323</div>
    </>
  )
}
