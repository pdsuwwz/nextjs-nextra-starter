import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { CustomFooter } from './components/CustomFooter'

const title = 'My Nextra Starter'
const description = 'A Starter template with Next.js, Nextra'
const repo = 'https://github.com/pdsuwwz/nextjs-nextra-starter'
const url = 'https://github.com/pdsuwwz/nextjs-nextra-starter'

const docsThemeConfig: DocsThemeConfig = {
  docsRepositoryBase: `${repo}/tree/main/docs`,
  head: () => <></>,
  footer: {
    text: () => (
      <CustomFooter />
    ),
  },
  logo: () => (
    <>
      <span>🚀 My Nextra Starter</span>
    </>
  ),
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
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    const { title: pageTitle } = useConfig()
    return {
      additionalLinkTags: [
        {
          rel: 'icon',
          sizes: '20',
          href: '/vercel-triangle.svg',
          type: 'image/svg+xml',
        },
      ],
      additionalMetaTags: [],
      canonical: url,
      description,
      openGraph: {
        title,
        description,
        url,
      },
      themeColor: 'hsl(141.89999999999998, 69.2%, 58%)',
      title: asPath !== '/' ? `${pageTitle} - ${title}` : title,
    }
  },
}

export default docsThemeConfig
