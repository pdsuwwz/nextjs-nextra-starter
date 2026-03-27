'use client'

import AuthButton from '@/widgets/auth-button'
import LocaleToggle from '@/widgets/locale-toggle'
import MobileMenuAuth from '@/widgets/mobile-menu-auth'
import ThemeToggle from '@/widgets/theme-toggle'

export default function NavbarExtras() {
  return (
    <>
      <LocaleToggle className="max-md:hidden" />
      <ThemeToggle className="max-md:hidden" />
      <AuthButton />
      <MobileMenuAuth />
    </>
  )
}
