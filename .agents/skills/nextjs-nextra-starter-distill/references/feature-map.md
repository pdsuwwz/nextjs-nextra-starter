# Feature Map

Use this file to identify what the starter already implements and where each capability lives.

## Documentation Site

Status: production-oriented starter pattern.

- Core shell: `src/app/[lang]/layout.tsx`.
- MDX route: `src/app/[lang]/[[...mdxPath]]/page.tsx`.
- Content: `src/content/zh`, `src/content/en`.
- Navigation metadata: `src/content/**/_meta.tsx`.
- MDX overrides: `src/mdx-components.ts`.
- Features: localized docs, Nextra search UI, TOC labels, last-updated label, GitHub project link, hidden/full-layout page support, copy-code defaults.

## Homepage

Status: reusable marketing/product homepage pattern.

- Entry: `src/content/{zh,en}/index.mdx`.
- Main component: `src/components/HomepageHero/index.tsx`.
- Supporting files: `src/components/HomepageHero/Setup.tsx`, `Section.tsx`, `SetupHero.module.css`.
- Extra components: `PanelParticles`, `ScrollProgressBar`, `EntryCard`, `HoverEffect`, `Accordion`, `Marquee`.
- Copy source: `src/i18n/zh.ts` and `src/i18n/en.ts`.
- Features: hero, tech stack marquee, feature cards, stats, use cases, flow, FAQ, and CTAs.

## AI Demo Landing Page

Status: reusable landing page pattern with demo-specific copy.

- Entry: `src/content/{zh,en}/ai-demo.mdx`.
- Main component: `src/components/AIDemoLanding/index.tsx`.
- Interactive islands: `src/components/AIDemoLanding/interactions.tsx`.
- Entry card: `src/components/AIDemoLanding/EntryCard.tsx`.
- Copy typing and lookup: `src/i18n/ai-demo.ts`.
- Features: sticky top nav, hero, social proof, features, how-it-works, use cases, demo preview, testimonials, pricing, FAQ, final CTA, footer.

## Login and Auth Demo

Status: demo-only. Replace before production.

- Login route content: `src/content/{zh,en}/login.mdx`.
- Page-level Nextra settings: `src/content/{zh,en}/_meta.tsx` hides nav/footer and uses full layout.
- Client wrapper: `src/components/auth/login-form.client.tsx`.
- Form: `src/components/auth/login-form.tsx`.
- Navbar state: `src/widgets/auth-button.tsx`.
- Mobile menu injection: `src/widgets/mobile-menu-auth.tsx`.
- State model: `localStorage` key `auth:userEmail` plus the custom `auth:changed` browser event.
- Demo behavior: email/password validation, fake Google login, toast success, redirect to localized home.

## Locale Switching

Status: starter pattern, but recheck on Nextra/Next upgrades.

- Config: `next.config.ts`.
- Dictionaries: `src/i18n`.
- Server helper: `src/hooks/useServerLocale.ts`.
- Client helper: `src/hooks/useLocale.ts`.
- Switch widget: `src/widgets/locale-toggle.tsx`.
- Content mirror: `src/content/zh` and `src/content/en`.
- Behavior: swaps `/zh` and `/en` path prefixes, preserves approximate scroll position, and adjusts a Nextra banner visibility edge case.

## Theme Switching

Status: reusable starter pattern.

- Nextra theme config: `src/app/[lang]/layout.tsx` via `nextThemes`.
- Widget: `src/widgets/theme-toggle.tsx`.
- Styling: `src/app/[lang]/styles/index.css` with `@custom-variant dark`.
- Behavior: toggles `light` and `dark` using Nextra theme context.

## UI Component System

Status: reusable starter pattern.

- Shadcn config: `components.json`.
- UI primitives: `src/components/ui`.
- Radix examples: accordion, hover card, separator, toggle.
- Icons: `lucide-react` and Iconify Tailwind classes.
- Styling tokens: `src/app/[lang]/styles/index.css`.
- Utility merge: `src/lib/utils.ts`.

## Search, Sitemap, and Deployment

Status: starter pattern with production configuration required.

- Search UI: Nextra `Search` in `src/app/[lang]/layout.tsx`.
- Static search index: `pagefind` in `package.json` `postbuild`.
- Sitemap/robots: `next-sitemap.config.mjs`.
- Deployment posture: README describes Vercel and Netlify suitability.
- Production note: set `SITE_URL`, check analytics IDs, and ensure generated `public/_pagefind` is expected by the deployment target.
