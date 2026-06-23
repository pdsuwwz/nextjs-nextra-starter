---
name: nextjs-nextra-starter-distill
description: Distill and apply this repository's Next.js Nextra starter architecture, implemented features, extension points, and migration patterns. Use when Codex needs to understand this project, continue second-stage development, add or change docs/landing/i18n/theme/auth/UI behavior, or reuse these Next.js 16 + Nextra 4 + Tailwind CSS 4 patterns in another project.
---

# Next.js Nextra Starter Distill

Use this project-local Skill to understand, extend, or selectively migrate the `nextjs-nextra-starter` implementation. Treat the reference files as distilled guidance, then inspect the current source before editing because the repository may have changed.

## Reference Router

- Architecture or ownership questions: read `references/architecture.md`.
- Feature inventory or product capability questions: read `references/feature-map.md`.
- Implementation pattern reuse questions: read `references/implementation-patterns.md`.
- Second-stage development tasks in this repo: read `references/extension-guide.md`.
- Borrowing these patterns in another repo: read `references/migration-notes.md`.

Read only the references needed for the user request. Load multiple files when a task crosses boundaries, such as adding a localized landing page section.

## Workflow

1. Classify the request as understanding, extension, migration, or review.
2. Read the relevant reference file(s).
3. Inspect live source paths cited by the references before making claims or edits.
4. Preserve the Nextra, locale, theme, and MDX integration points unless the user asks to replace them.
5. Treat the current auth flow as a front-end demo unless real backend/session code has been added.
6. For runtime changes, verify with the narrowest useful command, usually `pnpm lint` or `pnpm build`.

## Operating Notes

- This starter combines docs, product landing pages, i18n, theme controls, and UI primitives. Avoid treating it as a generic Next.js app.
- The `src/content/zh` and `src/content/en` trees are content sources, while `src/i18n` stores reusable UI copy.
- `_meta.tsx` files control Nextra navigation and page-level layout behavior.
- Client widgets often adapt Nextra-rendered DOM. Recheck selectors when upgrading Nextra.
- Do not copy demo auth, placeholder analytics, static metadata, or product copy into production without replacing them.
