import Marquee from 'react-fast-marquee'
import { useTheme } from 'nextra-theme-docs'
import { SetupHero } from './Setup'
import { Section } from './Section'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { cn } from '@/lib/utils'

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
  const featureList = [
    {
      title: '先进的技术栈',
      description: '高效的 React 框架和类型安全支持，使用 Next.js、TypeScript、TypeScript、和 Shadcn UI 打造现代化应用',
    },
    {
      title: 'Tailwind CSS & Iconify 图标集',
      description: '原子化 CSS, 集成 Tailwind CSS 和 Iconify 图标集，轻松实现高效设计、响应式界面 UI',
    },
    {
      title: '暗黑模式',
      description: '支持暗黑模式，提供更好的夜间使用体验',
    },
    {
      title: '代码规范',
      description: '遵循最佳实践的代码规范，结合 ESLint 进行代码质量检查与一致性维护',
    },
    {
      title: '丰富组件 & 支持自由扩展',
      description: '提供丰富的预置组件，并支持灵活的自定义扩展',
    },
    {
      title: '轻量化设计',
      description: '采用轻量化设计，精简项目设置，专注于内容编写',
    },
  ]

  const { resolvedTheme } = useTheme()

  return (
    <>
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
      <div className="pt-[20px] pb-[100px]">
        <Section
          title="Tech Stack"
        >
          <div className="flex justify-center w-full max-w-7xl h-[160px]">
            <Marquee
              pauseOnHover
              autoFill
              gradient
              gradientColor={
                resolvedTheme === 'dark' ? 'black' : 'white'
              }
              direction="right"
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
