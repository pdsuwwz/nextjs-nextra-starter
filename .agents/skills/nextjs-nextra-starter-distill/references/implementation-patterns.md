# Implementation Patterns

Use this file when reusing or modifying the starter's implementation patterns. Inspect the cited source files before editing.

## Localized Route and Content Mirror

- `next.config.ts` declares `locales: ['zh', 'en']` and `defaultLocale: 'zh'`.
- The App Router segment `src/app/[lang]` makes language explicit in routes.
- MDX content is mirrored under `src/content/zh` and `src/content/en`.
- Nextra is configured with `unstable_shouldAddLocaleToLinks: true` so generated links keep locale context.
- When adding pages, create equivalent MDX and `_meta.tsx` entries for every supported language unless the page is intentionally language-specific.

## Typed Dictionary Access

- `src/i18n/index.ts` combines `zh` and `en` dictionaries into `i18nConfig`.
- `NestedKeyOf`, `PathValue`, and related types produce typed dotted keys.
- `getNestedValue` resolves nested paths at runtime.
- `interpolateString` replaces `{{path}}` placeholders from a context object.
- `useServerLocale(lang)` returns `{ currentLocale, t }` for server components.
- `useLocale()` reads `params.lang` client-side and returns a memoized `t`.

Pattern rule: put UI copy shared by React components in dictionaries, not MDX files. Put long-form page content in `src/content/{lang}`.

## Nextra Shell Composition

- `src/app/[lang]/layout.tsx` composes the Nextra docs shell instead of using only defaults.
- `CustomBanner`, `CustomNavbar`, and `CustomFooter` localize shell copy.
- `Search` receives localized placeholder, empty, error, and loading text.
- `Layout` receives `pageMap`, `i18n`, `toc`, `lastUpdated`, `footer`, `navbar`, and `nextThemes`.
- `NavbarExtras` is injected into `Navbar` to add product-specific controls.

Pattern rule: extend the shell through Nextra component props first. Use DOM selectors only when Nextra does not expose the needed insertion point.

## MDX Import and Rendering

- `src/app/[lang]/[[...mdxPath]]/page.tsx` uses `generateStaticParamsFor('mdxPath')`.
- `importPage(params.mdxPath, params.lang)` loads the localized page module.
- `generateMetadata` returns metadata from the imported MDX page.
- `useMDXComponents().wrapper` provides the Nextra wrapper.
- `src/mdx-components.ts` is the central point for MDX component overrides.

Pattern rule: keep route logic thin. Put custom page experiences in React components and call them from MDX entries.

## Page-Level Nextra Metadata

- `_meta.tsx` files use `MetaRecord` from `nextra`.
- Hidden pages use `display: 'hidden'`.
- Landing/login pages use `theme.layout: 'full'`.
- Page-level controls include `copyPage`, `timestamp`, `toc`, `navbar`, and `footer`.
- Titles can be React nodes, as shown by the upgrade page using `TitleBadge`.

Pattern rule: use `_meta.tsx` for navigation and page chrome decisions; avoid duplicating shell conditionals in components.

## Navbar Extension Widgets

- `src/widgets/navbar-extras.tsx` composes locale, theme, auth, and mobile auth widgets.
- `LocaleToggle` rewrites the localized path and preserves scroll position.
- `ThemeToggle` uses `useTheme` from `nextra-theme-docs`.
- `AuthButton` displays login/logout state based on browser storage.
- `MobileMenuAuth` uses a portal into Nextra mobile nav because the Nextra mobile menu does not expose a direct component slot.

Pattern rule: keep each widget small and client-only when it depends on browser APIs.

## Auth Demo State

- `src/components/auth/login-form.tsx` writes `auth:userEmail` to `localStorage`.
- `src/widgets/auth-button.tsx` reads the same key and listens for `storage` plus `auth:changed`.
- Components delay user-specific display until mounted to avoid hydration mismatch.
- Fake Google login is simulated with a timeout and hard-coded email.

Pattern rule: treat this as a UI flow demo. Replace with real session storage, server actions, cookies, OAuth, or auth provider SDKs before production.

## Styling and UI Primitives

- `src/app/[lang]/styles/index.css` imports Tailwind CSS 4 and Nextra styles.
- Tailwind plugins are declared with `@plugin`, including Iconify and typography.
- `@theme` and CSS variables provide Shadcn-compatible tokens.
- `@custom-variant dark` makes dark mode follow the `.dark` class.
- Nextra overrides are kept near global style setup.
- `components.json` defines Shadcn aliases and the Aceternity registry.

Pattern rule: preserve token names used by Shadcn primitives unless you update all consuming components.
