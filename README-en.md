# Nextjs Nextra Starter

English | [中文](README.md)

[![Deploy](https://img.shields.io/badge/passing-black?style=flat&logo=Netlify&label=Netlify&color=3bb92c&labelColor=black)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments)
[![GitHub Workflow Status (branch)](https://img.shields.io/badge/passing-black?style=flat&label=build&color=3bb92c)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments/Production)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/nextjs-nextra-starter?color=466fe8)](https://github.com/pdsuwwz/nextjs-nextra-starter/blob/main/LICENSE)

⚡️ Fast Template Starter - React v19 + Next.js + Nextra (v4) + TypeScript + TailwindCSS (v4) + Shadcn UI

- [🚀 Live Demo](https://nextjs-nextra.netlify.app/en)
- [✨ Alternative address](https://nextjs-nextra-starter-green.vercel.app/en)

## 🚀 What's New

- **Tailwind CSS v4 Upgrade**: Fully upgraded to Tailwind CSS v4, optimizing performance and introducing new features.
- **Nextra v4 Refactoring**: Upgraded to Nextra v4, enhancing document generation efficiency and development experience.

👉 [Click to view detailed upgrade notes](https://nextjs-nextra.netlify.app/en/upgrade)

## 🎉 Features

- ⚡️ **Next.js + TypeScript**: Efficient React framework with type safety support
- 🎨 **Tailwind CSS (v4)**: Atomic CSS for quickly building custom, responsive UI interfaces
- 🧩 **Shadcn UI**: Highly customizable UI component collection with no additional dependencies
- 📚 **Nextra v4**: Next.js-based static site generator optimized for documentation
- 🛠️ **ESLint**: Unified coding style and best practices
- ⛅ **Lightweight Design**: Streamlined project setup focused on content creation

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

## 🌹 Support

If you like this project or find it useful, you can click the [`Star`](https://github.com/pdsuwwz/nextjs-nextra-starter) button in the top right to show your support. Your support is our motivation for continuous improvement, thank you! ^\_^

## 🌟 Related Projects

Here are some projects that developers and teams are using, referencing, or inspired by this project:

| Project Name                             | Description                                                                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [CodeCrack](https://www.codecrack.cn/en) | A free and in-depth interview preparation website helping developers improve their technical skills and prepare for interviews. |

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
