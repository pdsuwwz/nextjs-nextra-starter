import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
})


export default withNextra({
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    '@nextui-org/react',
    '@nextui-org/theme',
  ],
})
