# Nextjs Nextra Starter

[![Deploy](https://img.shields.io/badge/passing-black?style=flat&logo=Vercel&label=Vercel&color=3bb92c&labelColor=black)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments)
[![GitHub Workflow Status (branch)](https://img.shields.io/badge/passing-black?style=flat&label=build&color=3bb92c)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments/Production)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/nextjs-nextra-starter?color=466fe8)](https://github.com/pdsuwwz/nextjs-nextra-starter/blob/main/LICENSE)

⚡️ 快速模板 Starter Template - React v19 + Next.js + Nextra (v4) + TypeScript + TailwindCSS (v4) + Shadcn UI

[🚀 Live Demo 在线体验](https://nextjs-nextra-starter-green.vercel.app)

## 🚀 更新说明

- **Tailwind CSS v4 升级**：全面升级至 Tailwind CSS v4，优化性能并引入新特性。
- **Nextra v4 重构**：升级至 Nextra v4，提升文档生成效率和开发体验。

👉 [点击查看详细升级说明](https://nextjs-nextra-starter-green.vercel.app/zh/upgrade)

## 🎉 Features

- ⚡️ **Next.js + TypeScript**: 高效的 React 框架和类型安全支持
- 🎨 **Tailwind CSS (v4)**: 原子化 CSS, 快速构建自定义、响应式界面 UI
- 🧩 **Shadcn UI**: 高度可定制的 UI 组件集合，无需安装额外依赖
- 📚 **Nextra v4**: 基于 Next.js 的静态站点生成器，专为文档而优化
- 🛠️ **ESLint**: 统一编码风格和最佳实践
- ⛅ **轻量化设计**: 精简项目设置，专注于内容编写

## 前置条件

- React 19.x
- Node >= 18.12.x
- Pnpm 9.x
- **VS Code 插件 `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**

## 运行效果

![image](https://github.com/user-attachments/assets/b28a58c5-91c3-4cbe-b047-1e56c5fcb270)
![image](https://github.com/user-attachments/assets/7f4ade20-8364-4e25-a5fd-73e42ec7118c)
![image](https://github.com/user-attachments/assets/a0a07f3f-a457-4521-a45f-4c0f970044f6)

## 安装和运行

- 安装依赖

```bash
pnpm i
```

- 本地开发

```bash
pnpm dev
```

接着用浏览器打开 http://localhost:8000 即可访问服务

## 使用 Shadcn UI 组件

本项目已集成 [Shadcn UI](https://ui.shadcn.com), 按照以下步骤安装/编辑组件并使用:

### Shadcn 结构初始化

首次执行 `pnpm dlx shadcn@latest init` 命令初始化 `Shadcn UI` 基本项目结构（如果尚未初始化）

💡 注意

> 该初始化命令用于创建 `Shadcn UI` 的基本项目结构
>
> **本项目已完成初始化，无需再次运行此命令**

### 组件安装

1. 使用 `Shadcn CLI` 添加组件:

   ```bash
   pnpm dlx shadcn@latest add <组件名>
   ```

   如添加 `<Alert />` 组件，执行以下命令即可，[详见文档](https://ui.shadcn.com/docs/components/alert#installation)

   ```bash
   pnpm dlx shadcn@latest add alert
   ```

2. 使用组件

```tsx
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Home() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
```

3. 自定义组件样式（可选）

`Shadcn UI` 组件通常已提供了流行的默认样式和功能，能满足大多数需求，若确实需要进行自定义定制，可编辑相应的组件文件，如：

打开 [`src/components/ui/alert.tsx`](src/components/ui/alert.tsx) 文件来修改 `Alert` 组件的样式

> 注意：在大多数情况下，`Shadcn UI` 提供的默认样式已经足够满足需求，无需进行额外修改

## 🌹 支持

如果你喜欢这个项目或发现有用，可以点右上角 [`Star`](https://github.com/pdsuwwz/nextjs-nextra-starter) 支持一下，你的支持是我们不断改进的动力，感谢！ ^\_^

## 🌟 相关项目

以下是一些开发者和团队正在使用、参考或受本项目启发的项目：

| 项目名                                  | 简介                                                           |
| --------------------------------------- | -------------------------------------------------------------- |
| [面试宝典](https://www.codecrack.cn/zh) | 一个免费且深入的八股文网站，帮助开发者提升技术能力并应对面试。 |

### 📢 社区贡献

💡 如果您的项目也在使用或借鉴了本项目，我们诚挚欢迎您：

- 通过提交 [Issue](https://github.com/pdsuwwz/nextjs-nextra-starter/issues) 分享您的项目链接
- 提交 Pull Request (PR) 将您的项目添加到列表中

## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)
