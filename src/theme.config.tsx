import { CustomFooter } from '@/components/CustomFooter'
import { useLocale } from '@/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import LocaleToggle from './widgets/locale-toggle'
import ThemeToggle from './widgets/theme-toggle'

const repo = 'https://github.com/pdsuwwz/nextjs-nextra-starter'

const docsThemeConfig = {
  docsRepositoryBase: `${repo}/tree/main/docs`,
  head: () => {
    const title = 'My Nextra Starter'
    const description = 'A Starter template with Next.js, Nextra'
    const { asPath } = useRouter()
    const { title: pageTitle } = useConfig()
    return (
      <>
        <title>{asPath !== '/' ? `${pageTitle} - ${title}` : title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={repo} />
        <link
          rel="icon"
          sizes="20"
          href="/vercel-triangle.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
      </>
    )
  },
  footer: {
    component: () => (
      <CustomFooter />
    ),
  },
  feedback: {
    content: () => <></>,
  },
  editLink: {
    content: () => <></>,
  },
  logoLink: false,
  logo: () => {
    const { t, currentLocale } = useLocale()
    return (
      <>
        <Link href={`/${currentLocale}`}>
          {t('systemTitle') }
        </Link>
      </>
    )
  },
  project: {
    link: repo,
  },
  themeSwitch: {
    component: () => <></>,
  },
  i18n: [],
  navbar: {
    extraContent: () => {
      return (
        <>
          <LocaleToggle className="max-md:hidden" />
          <ThemeToggle className="max-md:hidden" />
        </>
      )
    },
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  nextThemes: {
    defaultTheme: 'system',
  },
  toc: {
    backToTop: true,
  },
  banner: {
    content: () => {
      const { t } = useLocale()

      return (
        <div>
          { t('banner.title') }
          {' '}
          <a
            className="max-sm:hidden text-warning hover:underline"
            target="_blank"
            href={repo}
          >
            { t('banner.more') }
          </a>
        </div>
      )
    },
  },
} satisfies DocsThemeConfig

export default docsThemeConfig
