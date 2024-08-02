import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
})


export default withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
})
