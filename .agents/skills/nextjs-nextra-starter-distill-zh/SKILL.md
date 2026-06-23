---
name: nextjs-nextra-starter-distill-zh
description: 蒸馏并应用当前仓库的 Next.js Nextra 启动模板架构、已实现功能、二次开发扩展点与迁移模式。适用于理解本项目、继续二次开发、修改 docs/landing/i18n/theme/auth/UI 行为，或把这些 Next.js 16 + Nextra 4 + Tailwind CSS 4 模式复用到其他项目。
---

# Next.js Nextra Starter 蒸馏

使用这个项目内 Skill 来理解、扩展或选择性迁移 `nextjs-nextra-starter` 的实现。reference 文件是蒸馏后的指南；做结论或改代码前，仍然要读取当前源码，因为仓库可能已经变化。

## Reference 路由

- 架构、模块边界、文件职责：读取 `references/architecture.md`。
- 功能清单、产品能力、实现状态：读取 `references/feature-map.md`。
- 复用实现模式、改造已有模式：读取 `references/implementation-patterns.md`。
- 在本仓库继续二次开发：读取 `references/extension-guide.md`。
- 把模式迁移到其他项目：读取 `references/migration-notes.md`。

只读取当前任务需要的 reference。跨边界任务可以组合读取，例如新增多语言 landing section 时同时读取实现模式和二开指南。

## 工作流

1. 先判断用户目标是理解、扩展、迁移还是审查。
2. 读取对应 reference。
3. 按 reference 中的源码路径检查当前实现。
4. 除非用户明确要求替换，否则保留 Nextra、语言、主题和 MDX 的集成点。
5. 当前 auth 流程默认视为前端演示；只有仓库已加入真实后端/session 后才按生产鉴权处理。
6. 涉及运行时行为时，使用最窄有效验证命令，通常是 `pnpm lint` 或 `pnpm build`。

## 注意事项

- 这个 starter 组合了文档站、产品落地页、i18n、主题控制和 UI primitives，不要当成普通 Next.js app 处理。
- `src/content/zh` 和 `src/content/en` 是内容源；`src/i18n` 存放 React 组件复用的 UI 文案。
- `_meta.tsx` 控制 Nextra 导航和页面级布局行为。
- 一些 client widget 会适配 Nextra 渲染出的 DOM；升级 Nextra 时要重新检查选择器。
- 不要把演示 auth、占位 analytics、静态 metadata 或示例产品文案直接复制到生产环境。
