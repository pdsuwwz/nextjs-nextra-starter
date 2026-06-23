# 功能地图

使用本文件快速判断 starter 已经实现了什么能力，以及每个能力对应的源码位置。

## 文档站

状态：偏生产可用的 starter 模式。

- 核心外壳：`src/app/[lang]/layout.tsx`。
- MDX 路由：`src/app/[lang]/[[...mdxPath]]/page.tsx`。
- 内容目录：`src/content/zh`、`src/content/en`。
- 导航 metadata：`src/content/**/_meta.tsx`。
- MDX 覆盖：`src/mdx-components.ts`。
- 能力：本地化 docs、Nextra search UI、TOC 文案、last updated 文案、GitHub project link、隐藏/full-layout 页面、默认代码复制。

## 首页

状态：可复用的营销/产品首页模式。

- 入口：`src/content/{zh,en}/index.mdx`。
- 主组件：`src/components/HomepageHero/index.tsx`。
- 支撑文件：`src/components/HomepageHero/Setup.tsx`、`Section.tsx`、`SetupHero.module.css`。
- 额外组件：`PanelParticles`、`ScrollProgressBar`、`EntryCard`、`HoverEffect`、`Accordion`、`Marquee`。
- 文案来源：`src/i18n/zh.ts` 和 `src/i18n/en.ts`。
- 能力：hero、技术栈 marquee、功能卡片、数据统计、使用场景、流程、FAQ 和 CTA。

## AI Demo Landing Page

状态：可复用 landing page 模式，但文案是 demo 特定内容。

- 入口：`src/content/{zh,en}/ai-demo.mdx`。
- 主组件：`src/components/AIDemoLanding/index.tsx`。
- 交互岛：`src/components/AIDemoLanding/interactions.tsx`。
- 入口卡片：`src/components/AIDemoLanding/EntryCard.tsx`。
- 文案类型和读取：`src/i18n/ai-demo.ts`。
- 能力：sticky top nav、hero、social proof、features、how-it-works、use cases、demo preview、testimonials、pricing、FAQ、final CTA 和 footer。

## 登录与 Auth 演示

状态：仅演示。生产前必须替换。

- 登录路由内容：`src/content/{zh,en}/login.mdx`。
- 页面级 Nextra 设置：`src/content/{zh,en}/_meta.tsx` 隐藏 nav/footer 并使用 full layout。
- 客户端 wrapper：`src/components/auth/login-form.client.tsx`。
- 表单：`src/components/auth/login-form.tsx`。
- 导航状态：`src/widgets/auth-button.tsx`。
- 移动端菜单注入：`src/widgets/mobile-menu-auth.tsx`。
- 状态模型：`localStorage` key `auth:userEmail` 加自定义浏览器事件 `auth:changed`。
- 演示行为：email/password 校验、假的 Google login、toast success、跳回本地化首页。

## 语言切换

状态：starter 模式，但升级 Nextra/Next 时要复查。

- 配置：`next.config.ts`。
- 字典：`src/i18n`。
- 服务端 helper：`src/hooks/useServerLocale.ts`。
- 客户端 helper：`src/hooks/useLocale.ts`。
- 切换组件：`src/widgets/locale-toggle.tsx`。
- 内容镜像：`src/content/zh` 和 `src/content/en`。
- 行为：在 `/zh` 和 `/en` 路径前缀之间切换，尽量保留滚动位置，并处理 Nextra banner 可见性边界情况。

## 主题切换

状态：可复用 starter 模式。

- Nextra theme 配置：`src/app/[lang]/layout.tsx` 中的 `nextThemes`。
- 组件：`src/widgets/theme-toggle.tsx`。
- 样式：`src/app/[lang]/styles/index.css` 中的 `@custom-variant dark`。
- 行为：通过 Nextra theme context 在 `light` 和 `dark` 间切换。

## UI 组件体系

状态：可复用 starter 模式。

- Shadcn 配置：`components.json`。
- UI primitives：`src/components/ui`。
- Radix 示例：accordion、hover card、separator、toggle。
- 图标：`lucide-react` 和 Iconify Tailwind classes。
- 样式 tokens：`src/app/[lang]/styles/index.css`。
- class merge 工具：`src/lib/utils.ts`。

## Search、Sitemap 与部署

状态：starter 模式，但生产配置需要补齐。

- Search UI：`src/app/[lang]/layout.tsx` 中的 Nextra `Search`。
- 静态搜索索引：`package.json` `postbuild` 中的 `pagefind`。
- Sitemap/robots：`next-sitemap.config.mjs`。
- 部署姿态：README 描述了 Vercel 和 Netlify 适配。
- 生产注意：设置 `SITE_URL`，检查 analytics ID，并确认部署目标需要 `public/_pagefind`。
