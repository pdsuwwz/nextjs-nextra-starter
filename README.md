# Nextjs Nextra Starter

中文 | [English](README-en.md)

[![Deploy](https://img.shields.io/badge/passing-black?style=flat&logo=Netlify&label=Netlify&color=3bb92c&labelColor=black)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments)
[![GitHub Workflow Status (branch)](https://img.shields.io/badge/passing-black?style=flat&label=build&color=3bb92c)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments/Production)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/nextjs-nextra-starter?color=466fe8)](https://github.com/pdsuwwz/nextjs-nextra-starter/blob/main/LICENSE)

⚡️ 快速模板 Starter Template - React v19 + Next.js + Nextra (v4) + TypeScript + TailwindCSS (v4) + Shadcn UI

- [🚀 Live Demo 在线体验](https://nextjs-nextra.netlify.app/zh)
- [✨ 备用地址](https://nextjs-nextra-starter-green.vercel.app/zh)

## 🚀 更新说明

- **Tailwind CSS v4 升级**：全面升级至 Tailwind CSS v4，优化性能并引入新特性。
- **Nextra v4 重构**：升级至 Nextra v4，提升文档生成效率和开发体验。

👉 [点击查看详细升级说明](https://nextjs-nextra.netlify.app/zh/upgrade)

## 🎉 Features

- ⚡️ **Next.js + TypeScript**: 高效的 React 框架和类型安全支持
- 🎨 **Tailwind CSS (v4)**: 原子化 CSS, 快速构建自定义、响应式界面 UI
- 🧩 **Shadcn UI**: 高度可定制的 UI 组件集合，无需安装额外依赖
- 📚 **Nextra v4**: 基于 Next.js 的静态站点生成器，专为文档而优化
- 🛠️ **ESLint**: 统一编码风格和最佳实践
- ⛅ **轻量化设计**: 精简项目设置，专注于内容编写

## 前置条件

- React 19.x
- Node >= 20.x
- Pnpm 9.x
- **VS Code 插件 `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**

## 运行效果

![image](https://github.com/user-attachments/assets/f732afa6-5fce-4e4d-af1c-acadd1bf50e7)

![image](https://github.com/user-attachments/assets/5cac69dc-601a-41db-a3aa-d75bad6fc4be)

![image](https://github.com/user-attachments/assets/b655981c-7658-4bf4-a118-82cf96cb1d7a)

![image](https://github.com/user-attachments/assets/b69a5f77-2a76-45b3-8468-11bf8fb1de89)

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

> [!IMPORTANT]

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

## 🚨 免责声明

本模板作为技术方案参考提供，使用者需知悉以下风险及义务：

- **技术风险**：依赖框架（Next.js/Nextra/Tailwind CSS等）存在版本迭代风险，第三方组件（如 Shadcn UI）的行为规范以原始仓库为准，环境配置变更可能导致不可预见的构建异常
- **使用限制**：禁止用于违反开源协议或法律法规的场景，使用者需自行完成代码安全审查及生产环境验证
- **责任免除**：不承诺技术方案的业务适用性、安全性担保及定制支持，因使用/修改引发的直接或间接后果均由使用者自行承担

## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)
