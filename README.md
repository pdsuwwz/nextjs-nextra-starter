<p style="text-align:center;" align="center"><a href="https://github.com/pdsuwwz/nextjs-nextra-starter"><picture align="center">
  <source media="(prefers-color-scheme: dark)" srcset="https://i.stardots.io/wisdom/1745917125609.png"  width="100%" align="center" style="margin-bottom:20px;">
  <source media="(prefers-color-scheme: light)" srcset="https://i.stardots.io/wisdom/1745917153483.png" width="100%" align="center" style="margin-bottom:20px;">
  <img alt="color mode" src="https://i.stardots.io/wisdom/1745917153483.png" width="100%" align="center" style="margin-bottom:20px;">
</picture></a><br /><br /></p>

# Nextjs Nextra Starter

中文 | [English](README-en.md)

[![Deploy](https://img.shields.io/badge/passing-black?style=flat&logo=Netlify&label=Netlify&color=3bb92c&labelColor=black)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments)
[![GitHub Workflow Status (branch)](https://img.shields.io/badge/passing-black?style=flat&label=build&color=3bb92c)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments/Production)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/nextjs-nextra-starter?color=466fe8)](https://github.com/pdsuwwz/nextjs-nextra-starter/blob/main/LICENSE)

🔥 面向独立开发者与小团队的 Next.js 16 启动模板：集成 Tailwind CSS 4、React 19、Nextra 4、TypeScript、Shadcn UI、Radix UI、Aceternity UI、Sass、ESLint 9、Iconify 与 i18n 多语言。覆盖 Blog、Docs、AI SaaS Landing Page 等核心场景，支持响应式布局、暗黑模式、登录页与前端鉴权示例，兼顾快速起步与长期可维护性，支持 Vercel / Netlify 部署。

- [🚀 Live Demo 在线体验](https://nextjs-nextra.netlify.app/zh)
- [🤖 AI Demo 落地页](https://nextjs-nextra.netlify.app/zh/ai-demo)
- [✨ 备用地址1](https://nextjs-nextra-starter-green.vercel.app/zh)
- [✨ 备用地址2](https://nextra.likemashang.com/zh)

## 🛠️ 项目维护承诺

<div align="center">

<table>
  <tr>
    <td><strong>🔄 持续更新</strong><br/>不定期更新依赖和功能</td>
    <td><strong>🐛 快速响应</strong><br/>平均 2 小时内回复 Issue</td>
  </tr>
  <tr>
    <td><strong>💎 精心打磨</strong><br/>花费 100+ 小时完善模板细节</td>
    <td><strong>🛡️ 稳定可靠</strong><br/>确保每个功能都充分测试</td>
  </tr>
</table>

</div>

<div align="center">

<img src="https://media.giphy.com/media/a5viI92PAF89q/giphy.gif" width="400"/>

💝 **如果你感受到了这份用心，请用 Star ⭐ 给予支持**

</div>

## 🚀 更新说明

- **Tailwind CSS v4 升级**：全面升级至 Tailwind CSS v4，优化性能并引入新特性。
- **Nextra v4 重构**：升级至 Nextra v4，提升文档生成效率和开发体验。

👉 [点击查看详细升级说明](https://nextjs-nextra.netlify.app/zh/upgrade)

## 🎉 Features

- ⚡️ **Next.js 16 + React 19 + TypeScript**：现代前端核心栈，类型安全与开发效率兼顾
- 🎨 **Tailwind CSS v4 + Sass**：支持原子化样式与工程化样式组织，快速构建响应式 UI
- 📚 **Nextra v4（内容驱动）**：适合文档站、知识库、博客等内容型项目
- 🧩 **Shadcn UI + Radix UI + Aceternity UI**：可组合、可扩展的组件体系，便于快速搭建产品页面
- 🌍 **i18n 多语言国际化**：中英文内容组织与路由支持，适配多语言产品站点
- 🌙 **暗黑模式 + 响应式设计**：覆盖桌面端与移动端体验，支持主题切换
- 🔐 **登录页与前端鉴权示例**：提供基础鉴权流程参考，便于业务快速接入
- 🖼️ **Iconify 图标集支持**：统一图标方案，降低图标接入成本
- 🛠️ **ESLint v9 规范化**：统一代码风格与质量约束，适合团队协作
- 🚀 **部署友好**：开箱支持 Vercel / Netlify 部署

## 🎯 适用场景

- 个人博客（Blog Starter Template）
- 技术文档与产品文档站（Docs Site）
- AI 产品官网与营销落地页（AI SaaS Landing Page）
- 个人项目主页与小团队产品展示站

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

🎉 **成功运行了？** 如果你喜欢这个模板的简洁配置，别忘了鼓励一下：

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=flat&logo=github)](https://github.com/pdsuwwz/nextjs-nextra-starter)

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

## 🐱 说句心里话

<div align="center">

如果你看到这里还没有点 Star, 那我只能说...

<img src="https://media.giphy.com/media/l0HlKrB02QY0f1mbm/giphy.gif" width="500"/>

**求求了，给个 Star 吧！** 🥺👉👈

我的 Star 数量还不如我的 Bug 数量多 😭

<a href="https://github.com/pdsuwwz/nextjs-nextra-starter">
<img src="https://img.shields.io/badge/%E8%89%AF%E5%BF%83%E5%8F%91%E7%8E%B0-%E8%B5%8F%E4%B8%AAStar%20%E2%AD%90%EF%B8%8F%EF%B8%8F-orange?style=for-the-badge&logo=github&logoColor=white" alt="给个Star"/>
</a>

</div>

## 🌟 相关项目

以下是一些开发者和团队正在使用、参考或受本项目启发的项目：

| 项目名                                                              | 简介                                                                                                   |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [ClaudeCode101 中文教程](https://www.claudecode101.com/zh)          | 面向中文用户的 Claude Code AI 编程助手教程网站，汇集官方最佳实践与社区经验，助你高效掌握 AI 编程技能。 |
| [EdgeOne Saas 模板](https://github.com/TencentEdgeOne/saas-starter) | [腾讯云官方模板：助你快速构建并部署下一款 SaaS 应用](https://saas-starter-docs.edgeone.app/zh)         |
| [Talking Web3](https://talkingweb3.io/zh)                           | 一个 Web3 项目出圈加速器，致力于打造卓越的Web3项目。                                                   |
| [面试宝典](https://www.codecrack.cn/zh)                             | 一个免费且深入的八股文网站，帮助开发者提升技术能力并应对面试。                                         |

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
