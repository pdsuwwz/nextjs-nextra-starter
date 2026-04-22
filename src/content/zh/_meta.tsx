import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      copyPage: false,
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    theme: {
      copyPage: false,
      navbar: true,
      toc: false,
    },
  },
  docs: {
    title: '📦 示例代码',
    type: 'page',
  },
  'ai-demo': {
    type: 'page',
    display: 'hidden',
    theme: {
      copyPage: false,
      toc: false,
      timestamp: false,
      layout: 'full',
    },
  },
  login: {
    type: 'page',
    title: '登录',
    display: 'hidden',
    theme: {
      navbar: false,
      footer: false,
      toc: false,
      layout: 'full',
      timestamp: false,
    },
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        新变化
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord
