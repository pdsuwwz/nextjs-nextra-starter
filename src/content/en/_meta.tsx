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
    title: 'This is Introduction',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  docs: {
    title: '📦 Some Examples',
    type: 'page',
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        What's New
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord
