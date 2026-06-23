# 架构说明

这个仓库是一个 Next.js 16 + Nextra 4 启动模板，面向多语言文档站、产品落地页和轻量 auth 演示。整体围绕本地化 App Router 路由和镜像 MDX 内容树组织。

## 运行时与工具链

- `package.json` 声明 Next.js 16、React 19、Nextra 4、Tailwind CSS 4、TypeScript、Shadcn UI/Radix primitives、Iconify、motion 相关库、`next-sitemap` 和 `pagefind`。
- `pnpm dev` 执行 `next dev --turbopack -p 8000`。
- `pnpm build` 执行 `next build`。
- `postbuild` 执行 `next-sitemap` 和 `pagefind --site .next/server/app --output-path public/_pagefind`。
- 运行环境预期为 Node 20+ 和 pnpm 9+。

## Next 与 Nextra 配置

- `next.config.ts` 使用 `createWithNextra` 包装 Next 配置。
- Nextra 选项包括 `defaultShowCopyCode: true` 和 `unstable_shouldAddLocaleToLinks: true`。
- Next `i18n` 声明 `zh` 和 `en`，默认语言是 `zh`。
- `images.unoptimized: true` 简化静态部署场景。
- `sassOptions.silenceDeprecations` 用于降低 legacy Sass API 的弃用噪声。

## App Router 外壳

- `src/app/[lang]/layout.tsx` 是主要的本地化 Nextra 外壳。
- 它读取 `params.lang`，通过 `getDictionary(lang)` 加载字典，通过 `getPageMap(lang)` 加载 Nextra page map。
- 它组合 `nextra-theme-docs` 的 `Layout`、`Navbar`、`Banner`、`Search`、`Footer` 和 `LastUpdated`。
- 它配置 `i18n`、`toc`、`feedback`、`docsRepositoryBase`、`nextThemes`，以及自定义导航、页脚和横幅。
- `ThirdPartyScripts` 和全局 `Toaster` 挂载在 body 中。

## MDX 路由

- `src/app/[lang]/[[...mdxPath]]/page.tsx` 是 Nextra MDX 的 catch-all 页面路由。
- `generateStaticParamsFor('mdxPath')` 提供静态参数。
- `importPage(params.mdxPath, params.lang)` 加载本地化 MDX 内容、TOC、metadata 和 source code。
- `useMDXComponents().wrapper` 提供 Nextra wrapper。
- `generateMetadata` 直接使用 MDX 页面导出的 metadata。

## 内容与导航

- `src/content/zh` 和 `src/content/en` 镜像保存本地化 MDX 内容。
- `_meta.tsx` 文件定义 Nextra 导航记录和页面级主题行为。
- 顶层页面包含隐藏的 full-layout 页面，例如首页、`ai-demo` 和 `login`，也包含可见 docs 和 upgrade 页面。
- `src/mdx-components.ts` 扩展 Nextra MDX components，并用 `Pre` 和 `withIcons` 定制代码块。

## i18n 系统

- `src/i18n/index.ts` 导出 `i18nConfig`、语言 key 类型、嵌套 key 类型、路径查找和插值方法。
- `src/i18n/zh.ts` 与 `src/i18n/en.ts` 存放 UI 文案。
- `src/i18n/ai-demo.ts` 从同一套字典中约束并读取 AI landing page 文案。
- `src/hooks/useServerLocale.ts` 提供服务端 typed translation。
- `src/hooks/useLocale.ts` 基于 `useParams` 提供客户端 typed translation。
- `src/app/_dictionaries/get-dictionary.ts` 动态导入字典并返回文本方向。

## UI 与产品页面

- `src/components/HomepageHero` 实现首页体验。
- `src/components/AIDemoLanding` 实现 AI SaaS landing page 和交互岛。
- `src/components/auth` 实现登录演示。
- `src/widgets` 扩展 Nextra 导航，包含语言、主题、auth 和移动端 auth 控制。
- `src/components/ui` 保存 Shadcn/Radix 风格的 primitives。
- `src/components/CustomFooter`、`TitleBadge`、`ScrollProgressBar`、`PanelParticles` 和 `MotionWrapper` 提供可复用展示组件。

## 样式体系

- `src/app/[lang]/styles/index.css` 导入 Tailwind CSS 4、Nextra docs 样式、Tailwind plugins、Iconify 和 typography。
- 该文件定义 design tokens、dark mode variant、Shadcn 兼容 CSS variables、Nextra overrides 和 base styles。
- `src/app/[lang]/styles/overrides.css` 保存少量全局覆盖。
- `components.json` 指向 `src/app/[lang]/styles/index.css`，配置 Shadcn aliases，并注册 Aceternity registry。

## 外部集成点

- `next-sitemap.config.mjs` 生成 sitemap 和 robots，使用 `SITE_URL` 或 `https://example.com`。
- `src/app/[lang]/_components/ThirdPartyScripts.tsx` 在客户端注入 Google Analytics 和百度统计。
- 这些集成在生产部署前都需要重新检查。
