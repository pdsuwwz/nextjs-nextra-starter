# 迁移注意事项

当你想把本 starter 的模式借到其他项目时使用本文件。

## 适合直接复用的部分

- 来自 `next.config.ts`、`src/app/[lang]/layout.tsx` 和 `src/app/[lang]/[[...mdxPath]]/page.tsx` 的 Nextra App Router 接法。
- `src/content/{lang}` 下的本地化 MDX 内容镜像。
- `src/i18n/index.ts`、`useServerLocale` 和 `useLocale` 中的 typed dictionary 访问。
- 通过 `Layout`、`Navbar`、`Banner`、`Search`、`Footer`、`pageMap` 和 `_meta.tsx` 定制 Nextra shell 的方式。
- Tailwind CSS 4 token setup 和 Shadcn 兼容 CSS variables。
- `components.json` 与 `src/components/ui` 中的 Shadcn aliases 和 UI primitive 组织方式。

## 需要谨慎适配的部分

- `src/widgets/locale-toggle.tsx` 硬编码了双语言，并导入 `next/dist/client/add-base-path` 这个 Next 内部路径。
- `src/widgets/mobile-menu-auth.tsx` 依赖 Nextra mobile nav 的 DOM selector。
- Landing page sections 带有项目特定视觉选择和产品文案。
- `src/app/[lang]/styles/index.css` 中的 Nextra override class 可能随 Nextra markup 改动而失效。
- Iconify class names 依赖 Tailwind Iconify plugin 和已安装的 icon sets。
- `ThirdPartyScripts` 中的 analytics ID 是项目特定配置。

## 生产前必须替换的部分

- `localStorage` auth state 和 `auth:userEmail` key。
- 用作 auth 同步机制的 `auth:changed` custom event。
- 假 Google login 和硬编码 demo email。
- 静态 metadata、canonical URL、repo links、footer links 和 demo product copy。
- `next-sitemap.config.mjs` 中的 `SITE_URL` fallback。
- Google Analytics 和百度统计 ID，除非它们属于新项目。

## 版本约束

- Next.js 16。
- React 19。
- Nextra 4 与 `nextra-theme-docs` 4。
- Tailwind CSS 4，使用 CSS-based configuration。
- Node 20+。
- pnpm 9+。

把这些模式应用到更旧或更新的大版本前，应先检查上游迁移指南。

## 跨项目迁移 Checklist

1. 先决定目标 app 是否需要 docs、landing pages，或两者都需要。
2. 先迁移 Nextra config 和 MDX route。
3. 只有需要多语言路由时，再加入本地化 App Router segment 和内容镜像。
4. 决定 UI 文案归属后，再迁移 dictionary helpers。
5. 迁移全局样式和 Shadcn tokens，然后验证 dark mode。
6. 分步迁移 shell customization：navbar、banner、search、footer，再到 widgets。
7. 用目标项目真实 auth 系统重建 auth。
8. 替换 metadata、analytics、sitemap URL 和 product copy。
9. 运行 lint/build，并手动检查本地化导航、主题切换、搜索和 MDX 渲染。
