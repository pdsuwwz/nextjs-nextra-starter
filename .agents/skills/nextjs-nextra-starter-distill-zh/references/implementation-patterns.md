# 实现模式

当需要复用或修改本 starter 的实现模式时使用本文件。改动前要读取引用到的源码。

## 本地化路由与内容镜像

- `next.config.ts` 声明 `locales: ['zh', 'en']` 和 `defaultLocale: 'zh'`。
- App Router 段 `src/app/[lang]` 让语言显式进入路由。
- MDX 内容镜像保存在 `src/content/zh` 和 `src/content/en`。
- Nextra 配置 `unstable_shouldAddLocaleToLinks: true`，让生成链接保留语言上下文。
- 新增页面时，除非页面刻意只支持单语言，否则要为每个语言创建对应 MDX 和 `_meta.tsx` 记录。

## Typed Dictionary 访问

- `src/i18n/index.ts` 把 `zh` 和 `en` 字典组合为 `i18nConfig`。
- `NestedKeyOf`、`PathValue` 等类型生成 typed dotted keys。
- `getNestedValue` 在运行时解析嵌套路径。
- `interpolateString` 根据 context 替换 `{{path}}` 占位符。
- `useServerLocale(lang)` 为服务端组件返回 `{ currentLocale, t }`。
- `useLocale()` 在客户端读取 `params.lang` 并返回 memoized `t`。

模式规则：React 组件复用的 UI 文案放入字典；长文内容放入 `src/content/{lang}` 的 MDX。

## Nextra 外壳组合

- `src/app/[lang]/layout.tsx` 组合 Nextra docs shell，而不是只使用默认行为。
- `CustomBanner`、`CustomNavbar` 和 `CustomFooter` 让 shell 文案本地化。
- `Search` 接收本地化 placeholder、empty、error 和 loading 文案。
- `Layout` 接收 `pageMap`、`i18n`、`toc`、`lastUpdated`、`footer`、`navbar` 和 `nextThemes`。
- `NavbarExtras` 注入到 `Navbar` 中，添加项目特定控制。

模式规则：优先通过 Nextra component props 扩展 shell；只有 Nextra 没有对应插槽时才使用 DOM selector。

## MDX 导入与渲染

- `src/app/[lang]/[[...mdxPath]]/page.tsx` 使用 `generateStaticParamsFor('mdxPath')`。
- `importPage(params.mdxPath, params.lang)` 加载本地化页面模块。
- `generateMetadata` 返回 MDX 页面 metadata。
- `useMDXComponents().wrapper` 提供 Nextra wrapper。
- `src/mdx-components.ts` 是 MDX components 覆盖的中心点。

模式规则：保持路由逻辑很薄。复杂页面体验放到 React 组件里，再从 MDX 入口调用。

## 页面级 Nextra Metadata

- `_meta.tsx` 文件使用 `MetaRecord`。
- 隐藏页面使用 `display: 'hidden'`。
- landing/login 页面使用 `theme.layout: 'full'`。
- 页面级控制包括 `copyPage`、`timestamp`、`toc`、`navbar` 和 `footer`。
- title 可以是 React node，例如 upgrade 页面使用 `TitleBadge`。

模式规则：导航和页面 chrome 决策放到 `_meta.tsx`，不要在组件里重复写 shell 条件。

## 导航扩展 Widgets

- `src/widgets/navbar-extras.tsx` 组合语言、主题、auth 和移动端 auth widgets。
- `LocaleToggle` 改写本地化路径并保留滚动位置。
- `ThemeToggle` 使用 `nextra-theme-docs` 的 `useTheme`。
- `AuthButton` 根据浏览器 storage 显示登录/登出状态。
- `MobileMenuAuth` 通过 portal 注入 Nextra mobile nav，因为 Nextra mobile menu 没有直接暴露组件插槽。

模式规则：依赖浏览器 API 的 widget 保持小型且 client-only。

## Auth 演示状态

- `src/components/auth/login-form.tsx` 把 `auth:userEmail` 写入 `localStorage`。
- `src/widgets/auth-button.tsx` 读取同一个 key，并监听 `storage` 和 `auth:changed`。
- 组件等 mounted 后再展示用户态，避免 hydration mismatch。
- 假 Google login 使用 timeout 和硬编码 email 模拟。

模式规则：这只是 UI 流程演示。生产前替换为真实 session storage、server actions、cookies、OAuth 或 auth provider SDK。

## 样式与 UI Primitives

- `src/app/[lang]/styles/index.css` 导入 Tailwind CSS 4 和 Nextra 样式。
- Tailwind plugins 通过 `@plugin` 声明，包括 Iconify 和 typography。
- `@theme` 和 CSS variables 提供 Shadcn 兼容 tokens。
- `@custom-variant dark` 让 dark mode 跟随 `.dark` class。
- Nextra overrides 放在全局样式附近。
- `components.json` 定义 Shadcn aliases 和 Aceternity registry。

模式规则：除非同步更新所有消费组件，否则不要改 Shadcn primitives 依赖的 token 名。
