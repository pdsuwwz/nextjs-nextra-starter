'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import AuthButton from '@/widgets/auth-button'

const CONTAINER_ATTR = 'data-mobile-auth'

export default function MobileMenuAuth() {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const ensureContainer = () => {
      const mobileNav = document.querySelector('.nextra-mobile-nav')
      if (!mobileNav) {
        return
      }

      const footer = mobileNav.querySelector('.nextra-sidebar-footer')
      if (!footer || !(footer instanceof HTMLElement)) {
        return
      }

      let target = mobileNav.querySelector<HTMLElement>(`[${CONTAINER_ATTR}]`)
      if (!target) {
        target = document.createElement('div')
        target.setAttribute(CONTAINER_ATTR, 'true')
        target.className = 'px-4 pt-4 pb-2'
        footer.parentElement?.insertBefore(target, footer)
      }

      if (target !== container) {
        setContainer(target)
      }
    }

    ensureContainer()
    const observer = new MutationObserver(ensureContainer)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [container])

  if (!container) {
    return null
  }

  return createPortal(
    <AuthButton showOnMobile className="w-full" />,
    container
  )
}
