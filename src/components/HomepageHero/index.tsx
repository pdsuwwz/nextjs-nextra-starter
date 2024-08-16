import { SetupHero } from './Setup'
import { Section } from './Section'
import { HoverEffect } from '@/components/ui/card-hover-effect'

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
          title="Features"
          description="Provides a starter for Next.js with Nextra, featuring Tailwind CSS, Framer Motion, and Radix UI components."
        >
          <div className="flex justify-center w-full max-w-7xl">
            <HoverEffect items={featureList} />
          </div>
        </Section>
        <Section
          title="Tech Stack"
          description="Uses Next.js, React, Tailwind CSS, TypeScript, and ESLint for development."
        >
          <div className="flex justify-center w-full border border-primary max-w-5xl py-[100px]">
            🚧 待完善
          </div>
        </Section>
      </div>
    </>
  )
}
