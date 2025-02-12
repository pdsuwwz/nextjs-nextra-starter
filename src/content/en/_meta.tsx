import type { MetaRecord } from 'nextra'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    title: 'This is Introduction',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  examples: {
    title: 'Examples',
    type: 'page',
  },
} satisfies MetaRecord
