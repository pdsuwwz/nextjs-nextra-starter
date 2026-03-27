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
    title: 'This is Introduction',
    theme: {
      copyPage: false,
      navbar: true,
      toc: false,
    },
  },
  login: {
    type: 'page',
    title: 'Login',
    display: 'hidden',
    theme: {
      navbar: false,
      footer: false,
      toc: false,
      layout: 'full',
      timestamp: false,
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
