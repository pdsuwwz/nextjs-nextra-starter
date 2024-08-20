import { type DocsThemeConfig, LocaleSwitch, ThemeSwitch, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLocale } from '@/hooks'
import { CustomFooter } from '@/components/CustomFooter'

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
    content: () => (
      <CustomFooter />
    ),
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
    useOptions: {
      light: '浅色',
      dark: '暗黑',
      system: '跟随系统',
    },
  },
  i18n: [
    { locale: 'zh', name: '简体中文' },
    { locale: 'en', name: 'English' },
  ],
  navbar: {
    extraContent: () => {
      return (
        <>
          {ThemeSwitch({ lite: true, className: 'button-switch' })}
          {LocaleSwitch({ lite: true, className: 'button-switch' })}
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
          { t('bannerTitle') }
          {' '}
          <a
            className="max-sm:hidden text-warning hover:underline"
            target="_blank"
            href={repo}
          >
            { t('bannerMore') }
          </a>
        </div>
      )
    },
  },
} satisfies DocsThemeConfig

export default docsThemeConfig
