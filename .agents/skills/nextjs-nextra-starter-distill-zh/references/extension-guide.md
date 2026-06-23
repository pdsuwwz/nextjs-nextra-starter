# 二次开发指南

在当前仓库继续开发时使用本文件。编辑前始终检查当前源码。

## 新增 Docs 页面

需要检查/编辑：

- `src/content/zh/docs`
- `src/content/en/docs`
- 最近的 `_meta.tsx`

顺序：

1. 在每个支持语言下新增 `.mdx` 页面。
2. 新增或更新对应 `_meta.tsx` 记录。
3. 只有页面需要交互或复用 UI 时才抽 React 组件。
4. 运行 `pnpm lint`；如果改了路由或 metadata，运行 `pnpm build`。

常见错误：

- 只加了一个语言版本。
- 忘记 `_meta.tsx`，导致页面存在但不可导航。
- 把可复用 UI 文案写进 MDX，而不是 `src/i18n`。

## 新增顶层页面

需要检查/编辑：

- `src/content/zh`
- `src/content/en`
- `src/content/{lang}/_meta.tsx`
- 可选的 `src/components` 组件目录

顺序：

1. 创建本地化 MDX 入口。
2. 在 `_meta.tsx` 中配置可见性和布局。
3. 对 full-screen 产品页，设置 `theme.layout: 'full'`，并决定 `toc`、`navbar`、`footer` 和 `timestamp`。
4. 在 `src/components/<FeatureName>` 中构建 UI，再从 MDX 渲染。

涉及静态参数或 metadata 时，用 `pnpm build` 验证。

## 新增或重命名语言

需要检查/编辑：

- `next.config.ts`
- `src/i18n/index.ts`
- `src/i18n/<lang>.ts`
- `src/app/_dictionaries/get-dictionary.ts`
- `src/app/[lang]/layout.tsx`
- `src/widgets/locale-toggle.tsx`
- `src/content/<lang>`

顺序：

1. 在 Next config 中加入 locale。
2. 新增字典文件，并从 `i18nConfig` 导出。
3. 在 `get-dictionary.ts` 中加入动态导入。
4. 镜像 MDX 内容和 `_meta.tsx`。
5. 更新 Nextra `Layout` 的 `i18n` 选项。
6. 如果语言超过两个，把双语 toggle 改成菜单。

常见错误：

- `LocaleToggle` 仍硬编码只支持 `/zh` 和 `/en`。
- 缺少 typed `t()` 调用需要的字典 key。

## 新增 Landing Page Section

需要检查/编辑：

- `src/components/HomepageHero/index.tsx` 或 `src/components/AIDemoLanding/index.tsx`
- `src/i18n/zh.ts`
- `src/i18n/en.ts`
- 如果修改 AI demo 文案结构，还要改 `src/i18n/ai-demo.ts`

顺序：

1. 在两个字典中添加文案字段。
2. 必要时更新 TypeScript copy shape。
3. 在现有页面组件附近新增小 section component。
4. 保持响应式布局和 dark mode classes。
5. 运行 `pnpm lint`。

常见错误：

- 只更新一个语言。
- 在组件里硬编码产品文案。
- 新增视觉模式和现有 token 系统冲突。

## 替换演示 Auth

需要检查/编辑：

- `src/components/auth/login-form.tsx`
- `src/components/auth/login-form.client.tsx`
- `src/widgets/auth-button.tsx`
- `src/widgets/mobile-menu-auth.tsx`
- `src/content/{zh,en}/login.mdx`
- `src/i18n/{zh,en}.ts`

顺序：

1. 选择真实 auth provider/session 模型。
2. 用真实 login/logout 调用替换 `localStorage` 写入。
3. 用 provider state、cookies 或 server revalidation 替换 `auth:changed`。
4. 围绕真实网络行为重做 loading/error states。
5. 如有需要，在服务端保护路由。

验证应包含 lint、build 和手动登录/登出检查。

## 定制品牌、主题、导航、页脚与 Metadata

需要检查/编辑：

- `src/app/[lang]/layout.tsx`
- `src/components/CustomFooter/index.tsx`
- `src/app/[lang]/styles/index.css`
- `src/i18n/{zh,en}.ts`
- `public/img/favicon.svg`
- `next-sitemap.config.mjs`

顺序：

1. 更新 metadata base、title、description、favicon 和 canonical 行为。
2. 通过字典更新 shell 文案。
3. 调整 CSS variables 和 token 值。
4. 更新 footer links 和 repository references。
5. 为 sitemap 设置 `SITE_URL`。

常见错误：

- 留下 demo URL 或 analytics ID。
- 改掉 Shadcn 组件依赖的 token 名。

## 新增 Shadcn、Radix 或 Aceternity 组件

需要检查/编辑：

- `components.json`
- `src/components/ui`
- `src/lib/utils.ts`
- 目标功能组件

顺序：

1. 使用 `components.json` 中已有 aliases。
2. 把 primitives 放在 `src/components/ui`。
3. 保持样式和现有 tokens 一致。
4. 有合适 lucide 图标时优先用 lucide；品牌/技术栈图标可沿用现有 Iconify class 模式。
5. 运行 `pnpm lint`。

## 更新 Search、Sitemap 或部署配置

需要检查/编辑：

- `package.json`
- `next-sitemap.config.mjs`
- `src/app/[lang]/layout.tsx`
- 部署平台配置

顺序：

1. 确认 `pagefind` 输出是否需要进入部署产物。
2. 设置生产 `SITE_URL`。
3. 检查本地化路由输出。
4. 如果部署输出变化，运行 `pnpm build` 覆盖 `postbuild`。
