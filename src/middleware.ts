export { middleware } from 'nextra/locales'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - img (image files)
     * - *.xml (XML files like sitemap.xml, RSS feeds, etc.)
     * - robots.txt (robots file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|img|_pagefind|.*\\.xml|robots.txt).*)',
  ],
}
