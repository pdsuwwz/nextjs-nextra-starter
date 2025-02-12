'use client'

import { useMediaQuery } from 'react-responsive'

export const useBreakpoint = () => {
  // sm 640px @media (max-width: 639px) { ... }
  const isSm = useMediaQuery({ query: '(max-width: 639px)' })

  // md 768px @media (max-width: 767px) { ... }
  const isMd = useMediaQuery({ query: '(max-width: 767px)' })

  // lg 1024px @media (max-width: 1023px) { ... }
  const isLg = useMediaQuery({ query: '(max-width: 1023px)' })

  // xl 1280px @media (max-width: 1279px) { ... }
  const isXl = useMediaQuery({ query: '(max-width: 1279px)' })

  // 2xl 1536px @media (max-width: 1535px) { ... }
  const is2Xl = useMediaQuery({ query: '(max-width: 1535px)' })

  return { isSm, isMd, isLg, isXl, is2Xl }
}
