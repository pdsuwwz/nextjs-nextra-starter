import { SetupHero } from './Setup'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'

export default function HomepageHero() {
  return (
    <>
      <SetupHero />
      <div className="relative top-[-118px] mb-[-118px] flex justify-center py-[100px] z-[2]">
        <MotionWrapperFlash disabledHover>
          <a
            href="https://nextjs.org"
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
        </MotionWrapperFlash>
      </div>
      <div className="h-[1000px] flex justify-center">
        🚧 待完善
      </div>
    </>
  )
}
