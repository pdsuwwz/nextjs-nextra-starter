import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import '@/styles/index.scss'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Component
      {...pageProps}
    />
  )
}
