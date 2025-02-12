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
    title: '这是介绍',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  examples: {
    title: '示例',
    type: 'page',
  },
} satisfies MetaRecord
