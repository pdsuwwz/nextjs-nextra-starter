import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  defaultShowCopyCode: true,
})


/**
 * @type {import("next").NextConfig}
 */
export default withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  distDir: './.next',
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  redirects: () => [
    {
      source: '/',
      destination: '/zh',
      permanent: true,
    },
  ],
})
