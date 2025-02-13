import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

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
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        更新亮点
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord
