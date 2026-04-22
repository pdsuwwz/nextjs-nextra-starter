<p style="text-align:center;" align="center"><a href="https://github.com/pdsuwwz/nextjs-nextra-starter"><picture align="center">
  <source media="(prefers-color-scheme: dark)" srcset="https://i.stardots.io/wisdom/1745917125609.png"  width="100%" align="center" style="margin-bottom:20px;">
  <source media="(prefers-color-scheme: light)" srcset="https://i.stardots.io/wisdom/1745917153483.png" width="100%" align="center" style="margin-bottom:20px;">
  <img alt="color mode" src="https://i.stardots.io/wisdom/1745917153483.png" width="100%" align="center" style="margin-bottom:20px;">
</picture></a><br /><br /></p>

# Nextjs Nextra Starter

English | [中文](README.md)

[![Deploy](https://img.shields.io/badge/passing-black?style=flat&logo=Netlify&label=Netlify&color=3bb92c&labelColor=black)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments)
[![GitHub Workflow Status (branch)](https://img.shields.io/badge/passing-black?style=flat&label=build&color=3bb92c)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments/Production)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/nextjs-nextra-starter?color=466fe8)](https://github.com/pdsuwwz/nextjs-nextra-starter/blob/main/LICENSE)

🔥 A Next.js 16 starter for indie developers and small teams: Tailwind CSS 4, React 19, Nextra 4, TypeScript, Shadcn UI, Radix UI, Aceternity UI, Sass, ESLint 9, Iconify, and i18n multilingual support. Built for Blog, Docs, and AI SaaS landing pages with responsive layout, dark mode, login page, and frontend auth examples. Deploy-ready for Vercel and Netlify.

- [🚀 Live Demo](https://nextjs-nextra.netlify.app/en)
- [🤖 AI Demo Landing Page](https://nextjs-nextra.netlify.app/en/ai-demo)
- [✨ Alternative address 1](https://nextjs-nextra-starter-green.vercel.app/en)
- [✨ Alternative address 2](https://nextra.likemashang.com/en)

## 🛠️ Maintenance Commitment

<div align="center">

<table>
  <tr>
    <td><strong>🔄 Continuous update</strong><br/>Dependency and features are updated irregularly</td>
    <td><strong>🐛 Fast Response</strong><br/>Reply within 2 hours on average Issue</td>
  </tr>
  <tr>
    <td><strong>💎 Elaboration</strong><br/>Spend 100+ hours to perfect template details</td>
    <td><strong>🛡️ Stable and Reliable</strong><br/>Ensure that each function is fully tested</td>
  </tr>
</table>

</div>

<div align="center">

<img src="https://media.giphy.com/media/a5viI92PAF89q/giphy.gif" width="400"/>

💝 **If you appreciate this effort, please show your support with a ⭐ Star.**

</div>

## 🚀 What's New

- **Tailwind CSS v4 Upgrade**: Fully upgraded to Tailwind CSS v4, optimizing performance and introducing new features.
- **Nextra v4 Refactoring**: Upgraded to Nextra v4, enhancing document generation efficiency and development experience.

👉 [Click to view detailed upgrade notes](https://nextjs-nextra.netlify.app/en/upgrade)

## 🎉 Features

- ⚡️ **Next.js 16 + React 19 + TypeScript**: Modern core stack with strong type safety and developer productivity
- 🎨 **Tailwind CSS v4 + Sass**: Utility-first styling with scalable style organization
- 📚 **Nextra v4 (content-driven)**: Great fit for docs, knowledge bases, and blogs
- 🧩 **Shadcn UI + Radix UI + Aceternity UI**: Composable UI system for fast product page building
- 🌍 **i18n multilingual support**: Built-in structure for localized content and routes
- 🌙 **Dark mode + responsive design**: Consistent UX across desktop and mobile
- 🔐 **Login page + frontend auth examples**: Practical auth flow reference for rapid integration
- 🖼️ **Iconify icon support**: Unified icon strategy with low integration cost
- 🛠️ **ESLint v9**: Consistent code quality and team-friendly standards
- 🚀 **Deployment-ready**: Works smoothly with Vercel / Netlify

## 🎯 Use Cases

- Personal blog (Blog Starter Template)
- Developer docs and product documentation sites
- AI product websites and conversion-focused SaaS landing pages
- Personal projects and small team product showcases

## Prerequisites

- React 19.x
- Node >= 20.x
- Pnpm 9.x
- **VS Code plugin `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**

## Preview

![image](https://github.com/user-attachments/assets/f732afa6-5fce-4e4d-af1c-acadd1bf50e7)

![image](https://github.com/user-attachments/assets/5cac69dc-601a-41db-a3aa-d75bad6fc4be)

![image](https://github.com/user-attachments/assets/b655981c-7658-4bf4-a118-82cf96cb1d7a)

![image](https://github.com/user-attachments/assets/b69a5f77-2a76-45b3-8468-11bf8fb1de89)

![image](https://github.com/user-attachments/assets/a0a07f3f-a457-4521-a45f-4c0f970044f6)

## Installation and Running

- Install dependencies

```bash
pnpm i
```

- Local development

```bash
pnpm dev
```

Then open http://localhost:8000 in your browser to access the service

🎉 **Successfully running?** If you like the clean setup of this template, don’t forget to show some support!

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=flat&logo=github)](https://github.com/pdsuwwz/nextjs-nextra-starter)

## Using Shadcn UI Components

This project has integrated [Shadcn UI](https://ui.shadcn.com). Follow these steps to install/edit components and use them:

### Shadcn Structure Initialization

Execute `pnpm dlx shadcn@latest init` command to initialize the basic project structure for `Shadcn UI` (if not already initialized)

💡 Note

> This initialization command is used to create the basic project structure for `Shadcn UI`
>
> **This project has already been initialized, so there's no need to run this command again**

### Component Installation

1. Use `Shadcn CLI` to add components:

   ```bash
   pnpm dlx shadcn@latest add <component-name>
   ```

   For example, to add the `<Alert />` component, execute the following command, [see documentation](https://ui.shadcn.com/docs/components/alert#installation)

   ```bash
   pnpm dlx shadcn@latest add alert
   ```

2. Using components

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

3. Customizing component styles (optional)

`Shadcn UI` components typically provide popular default styles and functionality that meet most needs. If you truly need to customize, you can edit the respective component files, such as:

Open [`src/components/ui/alert.tsx`](src/components/ui/alert.tsx) to modify the styles of the `Alert` component

> Tips: In most cases, the default styles provided by `Shadcn UI` are sufficient to meet requirements without additional modifications

## 🐱 A Word from the Heart

<div align="center">

If you've made it this far and still haven't starred the repo, then all I can say is...

<img src="https://media.giphy.com/media/l0HlKrB02QY0f1mbm/giphy.gif" width="500"/>

**Pretty please, drop a ⭐ Star!** 🥺👉👈

Right now, my bug count is still higher than my star count 😭

<a href="https://github.com/pdsuwwz/nextjs-nextra-starter">
<img src="https://img.shields.io/badge/Discovered%20with%20care-Drop%20a%20Star%20%E2%AD%90-orange?style=for-the-badge&logo=github&logoColor=white" alt="Give a Star"/>
</a>

</div>

## 🌟 Related Projects

Here are some projects that developers and teams are using, referencing, or inspired by this project:

| Project Name                                                           | Description                                                                                                                       |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [ClaudeCode101](https://www.claudecode101.com)                         | A Chinese tutorial site for Claude Code, featuring best practices and hands-on guides.                                            |
| [EdgeOne Saas Starter](https://github.com/TencentEdgeOne/saas-starter) | [The fastest way to create and deploy your SaaS product with EdgeOne and Tencent Cloud](https://saas-starter-docs.edgeone.app/en) |
| [Talking Web3](https://talkingweb3.io/en)                              | A Web3 project accelerator dedicated to creating outstanding Web3 projects.                                                       |
| [CodeCrack](https://www.codecrack.cn/en)                               | A free and in-depth interview preparation website helping developers improve their technical skills and prepare for interviews.   |

### 📢 Community Contributions

💡 If your project is also using or referencing this project, we sincerely welcome you to:

- Share your project link by submitting an [Issue](https://github.com/pdsuwwz/nextjs-nextra-starter/issues)
- Submit a Pull Request (PR) to add your project to the list

## 🚨 Disclaimer

This template is provided as a technical reference solution. Users must acknowledge the following risks and obligations:

- **Technical Risks**:
  Dependent frameworks (Next.js/Nextra/Tailwind CSS) carry version iteration risks. Third-party components (e.g. Shadcn UI) follow their original repositories' specifications. Environment configuration changes may cause unforeseen build exceptions

- **Usage Restrictions**:
  Prohibited for use in scenarios violating open-source licenses or applicable laws/regulations. Users must conduct independent code security audits and production environment validation

- **Liability Exclusion**:
  No guarantees are provided regarding:

1. Business applicability of technical solutions
2. Security assurance of dependencies
3. Official customization support

Users assume full responsibility for any direct/indirect consequences arising from usage or modifications. Continued use constitutes acceptance of these terms

## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)
