# Architecture

This repository is a Next.js 16 + Nextra 4 starter for multilingual documentation, product landing pages, and lightweight auth examples. It is organized around localized App Router routes and mirrored MDX content trees.

## Runtime and Tooling

- `package.json` declares Next.js 16, React 19, Nextra 4, Tailwind CSS 4, TypeScript, Shadcn UI/Radix primitives, Iconify, motion libraries, `next-sitemap`, and `pagefind`.
- `pnpm dev` runs `next dev --turbopack -p 8000`.
- `pnpm build` runs `next build`.
- `postbuild` runs `next-sitemap` and `pagefind --site .next/server/app --output-path public/_pagefind`.
- Node 20+ and pnpm 9+ are expected.

## Next and Nextra Configuration

- `next.config.ts` wraps the Next config with `createWithNextra`.
- Nextra options include `defaultShowCopyCode: true` and `unstable_shouldAddLocaleToLinks: true`.
- Next `i18n` declares `zh` and `en`, with `zh` as default.
- `images.unoptimized: true` keeps deployment simple for static hosts.
- `sassOptions.silenceDeprecations` suppresses legacy Sass API deprecation noise.

## App Router Shell

- `src/app/[lang]/layout.tsx` is the main localized Nextra shell.
- It reads `params.lang`, loads dictionaries with `getDictionary(lang)`, and loads Nextra page maps with `getPageMap(lang)`.
- It composes `nextra-theme-docs` `Layout`, `Navbar`, `Banner`, `Search`, `Footer`, and `LastUpdated`.
- It configures `i18n`, `toc`, `feedback`, `docsRepositoryBase`, `nextThemes`, and custom navbar/footer/banner content.
- `ThirdPartyScripts` and the global `Toaster` are mounted in the body.

## MDX Routing

- `src/app/[lang]/[[...mdxPath]]/page.tsx` is the catch-all Nextra MDX page route.
- `generateStaticParamsFor('mdxPath')` supplies static params.
- `importPage(params.mdxPath, params.lang)` loads localized MDX content, table of contents, metadata, and source code.
- `useMDXComponents().wrapper` wraps MDX pages with Nextra theme behavior.
- `generateMetadata` delegates to MDX page metadata.

## Content and Navigation

- `src/content/zh` and `src/content/en` mirror localized MDX content.
- `_meta.tsx` files define Nextra navigation records and page-level theme behavior.
- Top-level pages include hidden full-layout pages such as home, `ai-demo`, and `login`, plus visible docs and upgrade pages.
- `src/mdx-components.ts` extends Nextra MDX components and customizes code blocks with `Pre` and `withIcons`.

## i18n System

- `src/i18n/index.ts` exports `i18nConfig`, language key types, nested key typing, path lookup, and interpolation.
- `src/i18n/zh.ts` and `src/i18n/en.ts` hold UI copy.
- `src/i18n/ai-demo.ts` shapes and retrieves AI landing page copy from the same dictionaries.
- `src/hooks/useServerLocale.ts` provides server-side typed translation access.
- `src/hooks/useLocale.ts` provides client-side typed translation access using `useParams`.
- `src/app/_dictionaries/get-dictionary.ts` dynamically imports dictionaries and returns text direction.

## UI and Product Surfaces

- `src/components/HomepageHero` implements the homepage experience.
- `src/components/AIDemoLanding` implements the AI SaaS landing page and its interactive islands.
- `src/components/auth` implements the login demo.
- `src/widgets` extends Nextra navigation with locale, theme, auth, and mobile auth controls.
- `src/components/ui` contains Shadcn/Radix-style primitives.
- `src/components/CustomFooter`, `TitleBadge`, `ScrollProgressBar`, `PanelParticles`, and `MotionWrapper` provide reusable presentation pieces.

## Styling

- `src/app/[lang]/styles/index.css` imports Tailwind CSS 4, Nextra docs styles, Tailwind plugins, Iconify, and typography.
- The file defines design tokens, dark mode variant behavior, Shadcn-compatible CSS variables, Nextra override classes, and base styles.
- `src/app/[lang]/styles/overrides.css` contains focused global overrides.
- `components.json` points Shadcn to `src/app/[lang]/styles/index.css`, aliases UI paths, and registers the Aceternity registry.

## External Integration Points

- `next-sitemap.config.mjs` generates sitemap and robots output, using `SITE_URL` or `https://example.com`.
- `src/app/[lang]/_components/ThirdPartyScripts.tsx` injects Google Analytics and Baidu analytics client-side.
- These integrations should be reviewed before production deployment.
