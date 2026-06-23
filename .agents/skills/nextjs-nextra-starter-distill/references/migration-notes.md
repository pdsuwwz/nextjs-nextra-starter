# Migration Notes

Use this file when borrowing this starter's patterns for another project.

## Good Candidates to Reuse

- Nextra App Router wiring from `next.config.ts`, `src/app/[lang]/layout.tsx`, and `src/app/[lang]/[[...mdxPath]]/page.tsx`.
- Mirrored localized MDX content under `src/content/{lang}`.
- Typed dictionary access from `src/i18n/index.ts`, `useServerLocale`, and `useLocale`.
- Nextra shell customization through `Layout`, `Navbar`, `Banner`, `Search`, `Footer`, `pageMap`, and `_meta.tsx`.
- Tailwind CSS 4 token setup and Shadcn-compatible CSS variables.
- Shadcn aliases and UI primitive organization from `components.json` and `src/components/ui`.

## Adapt Carefully

- `src/widgets/locale-toggle.tsx` is hard-coded for two locales and imports `next/dist/client/add-base-path`, which is an internal Next path.
- `src/widgets/mobile-menu-auth.tsx` uses DOM selectors against Nextra mobile nav markup.
- Landing page sections use project-specific visual choices and product copy.
- Nextra override classes in `src/app/[lang]/styles/index.css` may break when Nextra markup changes.
- Iconify class names require the Tailwind Iconify plugin and installed icon sets.
- Analytics IDs in `ThirdPartyScripts` are project-specific.

## Replace Before Production

- `localStorage` auth state and the `auth:userEmail` key.
- The `auth:changed` custom event as an auth synchronization mechanism.
- Fake Google login and hard-coded demo email.
- Static metadata, canonical URL, repo links, footer links, and demo product copy.
- `SITE_URL` fallback in `next-sitemap.config.mjs`.
- Google Analytics and Baidu analytics IDs unless they belong to the new project.

## Version Constraints

- Next.js 16.
- React 19.
- Nextra 4 and `nextra-theme-docs` 4.
- Tailwind CSS 4 with CSS-based configuration.
- Node 20+.
- pnpm 9+.

Check upstream migration guides before applying these patterns to older or newer major versions.

## Cross-Project Migration Checklist

1. Decide whether the target app needs docs, landing pages, or both.
2. Port the Nextra config and MDX route first.
3. Add the localized App Router segment and content mirror only if multilingual routing is required.
4. Port dictionary helpers after deciding where UI copy should live.
5. Port global styles and Shadcn tokens, then verify dark mode.
6. Port shell customization one piece at a time: navbar, banner, search, footer, then widgets.
7. Rebuild auth using the target project's real auth system.
8. Replace metadata, analytics, sitemap URL, and product copy.
9. Run lint/build and manually check localized navigation, theme switching, search, and MDX rendering.
