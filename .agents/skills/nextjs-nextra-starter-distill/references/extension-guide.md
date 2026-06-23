# Extension Guide

Use this file for second-stage development in this repository. Always inspect current source before editing.

## Add a Docs Page

Files to inspect/edit:

- `src/content/zh/docs`
- `src/content/en/docs`
- nearest `_meta.tsx`

Order:

1. Add the `.mdx` page under every supported language.
2. Add or update the relevant `_meta.tsx` entry.
3. Use shared React components only when the page needs interactive or repeated UI.
4. Run `pnpm lint`; run `pnpm build` if routing or metadata changed.

Common mistakes:

- Adding only one locale.
- Forgetting `_meta.tsx`, so the page exists but is not navigable.
- Putting reusable UI copy in MDX instead of `src/i18n`.

## Add a Top-Level Page

Files to inspect/edit:

- `src/content/zh`
- `src/content/en`
- `src/content/{lang}/_meta.tsx`
- optional component under `src/components`

Order:

1. Create localized MDX entries.
2. Add `_meta.tsx` records for visibility and layout.
3. For full-screen product pages, set `theme.layout: 'full'` and decide `toc`, `navbar`, `footer`, and `timestamp`.
4. Build page UI in `src/components/<FeatureName>` and render it from MDX.

Verify with `pnpm build` when static params or metadata are involved.

## Add or Rename a Language

Files to inspect/edit:

- `next.config.ts`
- `src/i18n/index.ts`
- `src/i18n/<lang>.ts`
- `src/app/_dictionaries/get-dictionary.ts`
- `src/app/[lang]/layout.tsx`
- `src/widgets/locale-toggle.tsx`
- `src/content/<lang>`

Order:

1. Add the locale to Next config.
2. Add a dictionary file and export it from `i18nConfig`.
3. Add dynamic import support in `get-dictionary.ts`.
4. Mirror MDX content and `_meta.tsx`.
5. Update Nextra `Layout` `i18n` options.
6. Replace the two-language toggle with a menu if there are more than two locales.

Common mistakes:

- Leaving `LocaleToggle` hard-coded to only `/zh` and `/en`.
- Missing dictionary keys required by typed `t()` calls.

## Add a Landing Page Section

Files to inspect/edit:

- `src/components/HomepageHero/index.tsx` or `src/components/AIDemoLanding/index.tsx`
- `src/i18n/zh.ts`
- `src/i18n/en.ts`
- `src/i18n/ai-demo.ts` if changing AI demo copy shape

Order:

1. Add copy fields to both dictionaries.
2. Update TypeScript copy shapes when needed.
3. Add a small section component near the existing page components.
4. Keep layout responsive and preserve dark mode classes.
5. Verify with `pnpm lint`.

Common mistakes:

- Updating only one locale.
- Hard-coding product copy inside the component.
- Adding visual patterns that conflict with the current token system.

## Replace Demo Auth

Files to inspect/edit:

- `src/components/auth/login-form.tsx`
- `src/components/auth/login-form.client.tsx`
- `src/widgets/auth-button.tsx`
- `src/widgets/mobile-menu-auth.tsx`
- `src/content/{zh,en}/login.mdx`
- `src/i18n/{zh,en}.ts`

Order:

1. Choose the real auth provider/session model.
2. Replace `localStorage` writes with real login/logout calls.
3. Replace `auth:changed` event syncing with provider state, cookies, or server revalidation.
4. Rework loading/error states around real network behavior.
5. Protect routes on the server if needed.

Verification should include lint, build, and manual login/logout checks.

## Customize Brand, Theme, Navigation, Footer, and Metadata

Files to inspect/edit:

- `src/app/[lang]/layout.tsx`
- `src/components/CustomFooter/index.tsx`
- `src/app/[lang]/styles/index.css`
- `src/i18n/{zh,en}.ts`
- `public/img/favicon.svg`
- `next-sitemap.config.mjs`

Order:

1. Update metadata base, title, description, favicon, and canonical behavior.
2. Update shell copy through dictionaries.
3. Adjust CSS variables and token values.
4. Update footer links and repository references.
5. Set `SITE_URL` for sitemap generation.

Common mistakes:

- Leaving demo URLs or analytics IDs.
- Changing token names used by Shadcn components.

## Add Shadcn, Radix, or Aceternity Components

Files to inspect/edit:

- `components.json`
- `src/components/ui`
- `src/lib/utils.ts`
- target feature component

Order:

1. Use the existing aliases from `components.json`.
2. Add primitives under `src/components/ui`.
3. Keep component styling aligned with existing tokens.
4. Prefer lucide icons when a matching icon exists; use Iconify classes for brand/stack icons already following the project pattern.
5. Run `pnpm lint`.

## Update Search, Sitemap, or Deployment Settings

Files to inspect/edit:

- `package.json`
- `next-sitemap.config.mjs`
- `src/app/[lang]/layout.tsx`
- deployment provider configuration

Order:

1. Confirm whether `pagefind` output belongs in the deployment artifact.
2. Set the production `SITE_URL`.
3. Review localized route output.
4. Run `pnpm build` to exercise `postbuild` when deployment output changed.
